import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { supabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const signature = req.headers.get('x-retell-signature');
    const webhookSecret = process.env.RETELL_WEBHOOK_SECRET;

    // 1. Verify Signature
    if (!webhookSecret) {
      console.error('RETELL_WEBHOOK_SECRET is not set');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    if (!signature) {
      return NextResponse.json({ error: 'Missing signature' }, { status: 401 });
    }

    const expectedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(body)
      .digest('hex');

    if (signature !== expectedSignature) {
      console.error('Invalid signature');
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
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
