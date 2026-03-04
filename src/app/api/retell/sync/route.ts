import { NextRequest, NextResponse } from 'next/server';
import Retell from 'retell-sdk';
import { supabase } from '@/lib/supabase';

const retell = new Retell({
  apiKey: process.env.RETELL_API_KEY || '',
});

export async function POST(req: NextRequest) {
  try {
    // 1. Fetch recent calls from Retell
    const calls = await retell.call.list({ limit: 50 });

    if (!calls || !Array.isArray(calls)) {
      return NextResponse.json({ error: 'Failed to fetch calls from Retell' }, { status: 500 });
    }

    const results = {
      added: 0,
      updated: 0,
      errors: 0,
    };

    // 2. Process each call and upsert to Supabase
    for (const call of calls) {
      try {
        // Correcting field names according to Retell SDK types
        // call_analysis instead of post_call_analysis
        const callAnalysis = (call as any).call_analysis;
        
        // Handle custom variables safely
        const customVars = (callAnalysis as any)?.custom_analysis_data || {};
        
        const userName = (customVars as any)?.user_name || 'Unknown';
        
        // from_number and to_number are only on PhoneCallResponse
        const phoneNumber = (call as any).from_number || (call as any).to_number || 'Web Call';
        
        const preferredProcedure = (customVars as any)?.preferred_procedure || 'N/A';
        
        // Use call.start_timestamp (number)
        const startTimeStr = call.start_timestamp ? new Date(call.start_timestamp).toISOString() : new Date().toISOString();
        const preferredDateTime = (customVars as any)?.preferred_date_time || startTimeStr;
        
        const durationMs = call.duration_ms || 0;
        const status = call.call_status || 'unknown';
        const transcript = call.transcript || '';

        // Upsert based on call_id
        const { error } = await supabase
          .from('retell_ai_calls')
          .upsert(
            {
              call_id: call.call_id,
              user_name: userName,
              phone_number: phoneNumber,
              preferred_date_time: preferredDateTime,
              preferred_procedure: preferredProcedure,
              duration_ms: durationMs,
              status: status,
              transcript: transcript,
              start_time: startTimeStr,
            },
            { onConflict: 'call_id' }
          );

        if (error) {
          console.error(`Error upserting call ${call.call_id}:`, error);
          results.errors++;
        } else {
          results.added++;
        }
      } catch (err) {
        console.error(`Processing error for call ${call.call_id}:`, err);
        results.errors++;
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: `Sync complete. Processed ${calls.length} calls.`,
      stats: results 
    });

  } catch (error: any) {
    console.error('Retell Sync Error:', error);
    return NextResponse.json({ 
      error: 'Internal server error during sync', 
      details: error.message 
    }, { status: 500 });
  }
}
