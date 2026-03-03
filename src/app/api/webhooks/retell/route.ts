import { NextRequest, NextResponse } from 'next/server';
import Retell from 'retell-sdk';
import { supabase } from '@/lib/supabase';

const retell = new Retell({
  apiKey: process.env.RETELL_API_KEY || '',
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const signature = req.headers.get('x-retell-signature');
    const webhookSecret = process.env.RETELL_WEBHOOK_SECRET;

    // 1. Verify Signature using official SDK
    if (!webhookSecret) {
      console.error('CRITICAL: RETELL_WEBHOOK_SECRET is not set in environment variables');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    if (!signature) {
      console.error('Webhook Error: Missing x-retell-signature header');
      return NextResponse.json({ error: 'Missing signature' }, { status: 401 });
    }

    try {
      // Use the SDK's built-in verification method
      const isValid = await Retell.verify(body, webhookSecret, signature);
      if (!isValid) {
        throw new Error('Invalid signature');
      }
    } catch (err) {
      console.error('--- WEBHOOK SIGNATURE MISMATCH (SDK) ---');
      console.error('Received Signature:', signature);
      console.error('Error:', err);
      console.error('----------------------------------------');
      
      return NextResponse.json({ 
        error: 'Invalid signature',
        message: 'Signature verification failed. Check your RETELL_WEBHOOK_SECRET and ensure it matches the one in Retell Dashboard.'
      }, { status: 401 });
    }

    // 2. Parse Payload
    const payload = JSON.parse(body);
    const { call, post_call_analysis } = payload;

    if (!call) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    // 3. Extract Data
    // Note: Adjust extraction logic based on Retell's specific JSON structure 
    // and your Agent's custom variables/analysis.
    const userName = post_call_analysis?.custom_variables?.user_name || 'Unknown';
    const phoneNumber = call.from_number || call.to_number || 'Unknown';
    const preferredProcedure = post_call_analysis?.custom_variables?.preferred_procedure || 'N/A';
    const preferredDateTime = post_call_analysis?.custom_variables?.preferred_date_time || new Date().toISOString();
    
    // Additional helpful data
    const durationMs = call.duration_ms || 0;
    const status = call.call_status || 'unknown';
    const transcript = call.transcript || '';

    // 4. Save to Supabase
    const { error } = await supabase
      .from('retell_ai_calls')
      .insert([
        {
          user_name: userName,
          phone_number: phoneNumber,
          preferred_date_time: preferredDateTime,
          preferred_procedure: preferredProcedure,
          duration_ms: durationMs,
          status: status,
          transcript: transcript,
        },
      ]);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to save to database' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Webhook processing error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
