import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { patient_name, phone_number, preferred_date, preferred_time, preferred_procedure, request_type } = body;

    if (!patient_name || !phone_number || !request_type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('website_bookings')
      .insert([
        {
          patient_name,
          phone_number,
          preferred_date: preferred_date || '',
          preferred_time: preferred_time || '',
          preferred_procedure: preferred_procedure === null ? null : (preferred_procedure || ''),
          request_type,
          status: 'Pending',
        }
      ])
      .select()
      .single();

    if (error) {
      console.error('Error saving website booking to Supabase:', error);
      return NextResponse.json({ error: 'Failed to save booking' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Website booking POST error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, status, cancellation_reason } = body;

    if (!id || !status) {
      return NextResponse.json({ error: 'Missing id or status' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('website_bookings')
      .update({ status, cancellation_reason: status === 'Cancelled' ? (cancellation_reason || null) : null })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating website booking status:', error);
      return NextResponse.json({ error: 'Failed to update booking status' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Website booking PATCH error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
