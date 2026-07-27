import { NextResponse } from 'next/server';
import { mockRetellCalls } from '../sync/route';

/**
 * GET /api/retell/auto-sync
 * 
 * Vercel Cron mock handler (zero external database dependencies).
 * Simulates a cron job syncing new calls.
 */
export async function GET() {
  try {
    // Add a randomized mock call on auto-sync if we don't have too many, to show a live dashboard
    if (mockRetellCalls.length < 5) {
      const randomNames = ['Arjun Nair', 'Siddharth Sen', 'Kavitha Reddy', 'Aditi Rao'];
      const randomProcedures = ['Chemical Peel', 'Acne Scar Laser', 'Hair Regrowth Therapy'];
      const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
      const randomProc = randomProcedures[Math.floor(Math.random() * randomProcedures.length)];
      
      const newMockId = `call-auto-${Math.random().toString(36).substr(2, 5)}`;
      mockRetellCalls.push({
        call_id: newMockId,
        user_name: randomName,
        phone_number: '+91 96000 11223',
        call_received_at: new Date().toISOString(),
        preferred_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
        preferred_time: '12:00 PM',
        preferred_procedure: randomProc,
        duration_ms: 78000,
        status: 'completed',
        transcript: `Patient requested appointment for ${randomProc}. Details scheduled successfully.`,
        start_time: new Date().toISOString(),
        action_status: 'Needs Action',
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Auto-sync cron simulated successfully (In-Memory).',
      syncedAt: new Date().toISOString(),
      stats: { added: 1, updated: 0, errors: 0 }
    });
  } catch (error: any) {
    console.error('Auto-sync cron simulation error:', error);
    return NextResponse.json({ error: 'Internal server error during auto-sync' }, { status: 500 });
  }
}
