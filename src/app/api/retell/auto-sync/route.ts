import { NextResponse } from 'next/server';
import Retell from 'retell-sdk';
import { supabase } from '@/lib/supabase';

const retell = new Retell({
  apiKey: process.env.RETELL_API_KEY || '',
});

/**
 * GET /api/retell/auto-sync
 *
 * Intended to be called by Vercel Cron every 2 hours.
 * Vercel Cron config is in vercel.json.
 *
 * It syncs all recent Retell AI calls into the Supabase `retell_ai_calls` table,
 * populating: call_received_at, preferred_date, preferred_time.
 */
export async function GET() {
  try {
    const calls = await retell.call.list({ limit: 50 });

    if (!calls || !Array.isArray(calls)) {
      return NextResponse.json({ error: 'Failed to fetch calls from Retell' }, { status: 500 });
    }

    const results = { added: 0, updated: 0, errors: 0 };

    for (const call of calls) {
      try {
        const callAnalysis = (call as any).call_analysis;
        const customVars = (callAnalysis as any)?.custom_analysis_data || {};

        const userName = (customVars as any)?.user_name || 'Unknown';
        const phoneNumber = (call as any).from_number || (call as any).to_number || 'Web Call';
        const preferredProcedure = (customVars as any)?.preferred_procedure || 'N/A';

        const startTimeStr = call.start_timestamp
          ? new Date(call.start_timestamp).toISOString()
          : new Date().toISOString();

        // call_received_at = the actual timestamp the call came in
        const callReceivedAt = startTimeStr;

        // Split preferred_date and preferred_time from custom vars
        const rawPreferredDate = (customVars as any)?.preferred_date || '';
        const rawPreferredTime = (customVars as any)?.preferred_time || '';

        // Fallback: if the old combined field was used, try to split it
        const rawCombined = (customVars as any)?.preferred_date_time || '';
        const preferredDate = rawPreferredDate || (rawCombined ? rawCombined.split('T')[0] : '');
        const preferredTime = rawPreferredTime || (rawCombined ? rawCombined.split('T')[1]?.split('.')[0] || '' : '');

        const durationMs = call.duration_ms || 0;
        const status = call.call_status || 'unknown';
        const transcript = call.transcript || '';

        const { error } = await supabase
          .from('retell_ai_calls')
          .upsert(
            {
              call_id: call.call_id,
              user_name: userName,
              phone_number: phoneNumber,
              call_received_at: callReceivedAt,
              preferred_date: preferredDate,
              preferred_time: preferredTime,
              preferred_procedure: preferredProcedure,
              duration_ms: durationMs,
              status: status,
              transcript: transcript,
              start_time: startTimeStr,
            },
            { onConflict: 'call_id' }
          );

        if (error) {
          console.error(`[auto-sync] Error upserting call ${call.call_id}:`, error);
          results.errors++;
        } else {
          results.added++;
        }
      } catch (err) {
        console.error(`[auto-sync] Processing error for call ${call.call_id}:`, err);
        results.errors++;
      }
    }

    console.log(`[auto-sync] Completed at ${new Date().toISOString()}:`, results);

    return NextResponse.json({
      success: true,
      message: `Auto-sync complete. Processed ${calls.length} calls.`,
      stats: results,
      syncedAt: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('[auto-sync] Error:', error);
    return NextResponse.json(
      { error: 'Internal server error during auto-sync', details: error.message },
      { status: 500 }
    );
  }
}
