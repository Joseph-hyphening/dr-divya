import { NextRequest, NextResponse } from 'next/server';
import Retell from 'retell-sdk';

// Persistent in-memory global storage for Next.js hot-reloads
const globalRef = globalThis as unknown as {
  mockRetellCalls?: any[];
};

if (!globalRef.mockRetellCalls) {
  globalRef.mockRetellCalls = [
    {
      call_id: 'call-101',
      user_name: 'Anita Desai',
      phone_number: '+91 98450 12345',
      call_received_at: new Date(Date.now() - 3600000 * 3).toISOString(),
      preferred_date: '2026-05-28',
      preferred_time: '10:00 AM',
      preferred_procedure: 'Anti-Aging HydraFacial',
      duration_ms: 112000,
      status: 'completed',
      transcript: 'Patient called to book an anti-aging consultation. She has fine lines and wants a natural lifting HydraFacial. Scheduled for May 28th at 10 AM.',
      start_time: new Date(Date.now() - 3600000 * 3).toISOString(),
      action_status: 'Scheduled',
    },
    {
      call_id: 'call-102',
      user_name: 'Karan Malhotra',
      phone_number: '+91 99000 98765',
      call_received_at: new Date(Date.now() - 3600000 * 6).toISOString(),
      preferred_date: '2026-05-29',
      preferred_time: '04:00 PM',
      preferred_procedure: 'Hair PRP Therapy',
      duration_ms: 85000,
      status: 'completed',
      transcript: 'Patient inquired about male pattern hair loss. Discussed PRP sessions. He booked a slot for May 29th at 4:00 PM.',
      start_time: new Date(Date.now() - 3600000 * 6).toISOString(),
      action_status: 'Needs Action',
    }
  ];
}

export const mockRetellCalls = globalRef.mockRetellCalls;

export async function GET() {
  try {
    const data = [...mockRetellCalls].sort(
      (a, b) => new Date(b.call_received_at).getTime() - new Date(a.call_received_at).getTime()
    );
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Retell GET error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { call_id, action_status } = body;

    if (!call_id || !action_status) {
      return NextResponse.json({ error: 'Missing call_id or action_status' }, { status: 400 });
    }

    const callIndex = mockRetellCalls.findIndex((c) => c.call_id === call_id);
    if (callIndex === -1) {
      return NextResponse.json({ error: 'Call not found' }, { status: 404 });
    }

    mockRetellCalls[callIndex] = {
      ...mockRetellCalls[callIndex],
      action_status,
    };

    return NextResponse.json({ success: true, data: mockRetellCalls[callIndex] });
  } catch (error: any) {
    console.error('Retell PATCH error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RETELL_API_KEY;
    const results = { added: 0, updated: 0, errors: 0 };

    if (!apiKey) {
      // If no API key, simulate a successful sync of an extra mock call to demonstrate functionality
      const newMockCallId = `call-sync-${Math.random().toString(36).substr(2, 5)}`;
      const hasCall = mockRetellCalls.some(c => c.call_id === 'call-103');
      
      if (!hasCall) {
        mockRetellCalls.push({
          call_id: 'call-103',
          user_name: 'Priya Sen',
          phone_number: '+91 88776 65544',
          call_received_at: new Date().toISOString(),
          preferred_date: '2026-06-01',
          preferred_time: '11:30 AM',
          preferred_procedure: 'Pigmentation Consultation',
          duration_ms: 98000,
          status: 'completed',
          transcript: 'Patient has dark spots and pigmentation post-pregnancy. Booked appointment for June 1st at 11:30 AM.',
          start_time: new Date().toISOString(),
          action_status: 'Needs Action',
        });
        results.added++;
      }
      
      return NextResponse.json({
        success: true,
        message: 'Sync simulated successfully (No Retell API Key supplied).',
        stats: results,
      });
    }

    const retell = new Retell({ apiKey });
    const calls = await retell.call.list({ limit: 50 });

    if (!calls || !Array.isArray(calls)) {
      return NextResponse.json({ error: 'Failed to fetch calls from Retell' }, { status: 500 });
    }

    for (const call of calls) {
      try {
        const exists = mockRetellCalls.some((c) => c.call_id === call.call_id);
        const callAnalysis = (call as any).call_analysis;
        const customVars = (callAnalysis as any)?.custom_analysis_data || {};
        
        const userName = (customVars as any)?.user_name || 'Unknown';
        const phoneNumber = (call as any).from_number || (call as any).to_number || 'Web Call';
        const preferredProcedure = (customVars as any)?.preferred_procedure || 'N/A';
        const startTimeStr = call.start_timestamp ? new Date(call.start_timestamp).toISOString() : new Date().toISOString();
        
        const rawPreferredDate = (customVars as any)?.preferred_date || '';
        const rawPreferredTime = (customVars as any)?.preferred_time || '';
        const rawCombined = (customVars as any)?.preferred_date_time || '';
        const preferredDate = rawPreferredDate || (rawCombined ? rawCombined.split('T')[0] : '');
        const preferredTime = rawPreferredTime || (rawCombined ? rawCombined.split('T')[1]?.split('.')[0] || '' : '');
        
        const syncedCall = {
          call_id: call.call_id,
          user_name: userName,
          phone_number: phoneNumber,
          call_received_at: startTimeStr,
          preferred_date: preferredDate,
          preferred_time: preferredTime,
          preferred_procedure: preferredProcedure,
          duration_ms: call.duration_ms || 0,
          status: call.call_status || 'unknown',
          transcript: call.transcript || '',
          start_time: startTimeStr,
          action_status: exists 
            ? mockRetellCalls.find(c => c.call_id === call.call_id).action_status 
            : 'Needs Action'
        };

        if (exists) {
          const idx = mockRetellCalls.findIndex(c => c.call_id === call.call_id);
          mockRetellCalls[idx] = syncedCall;
          results.updated++;
        } else {
          mockRetellCalls.push(syncedCall);
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
      stats: results,
    });
  } catch (error: any) {
    console.error('Retell Sync Error:', error);
    return NextResponse.json({ error: 'Sync failed', details: error.message }, { status: 500 });
  }
}
