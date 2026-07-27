import { NextRequest, NextResponse } from 'next/server';

// Persistent in-memory global storage for Next.js hot-reloads
const globalRef = globalThis as unknown as {
  mockBookings?: any[];
};

if (!globalRef.mockBookings) {
  globalRef.mockBookings = [
    {
      id: 'mock-1',
      patient_name: 'Rahul Sharma',
      phone_number: '9876543210',
      preferred_date: '2026-05-28',
      preferred_time: '11:00 AM',
      preferred_procedure: 'Acne Laser Treatment',
      request_type: 'consultation',
      status: 'Pending',
      created_at: new Date(Date.now() - 3600000 * 2).toISOString(),
    },
    {
      id: 'mock-2',
      patient_name: 'Priyanka Patel',
      phone_number: '9123456789',
      preferred_date: '2026-05-29',
      preferred_time: '03:30 PM',
      preferred_procedure: 'Hair Density Therapy',
      request_type: 'callback',
      status: 'Pending',
      created_at: new Date(Date.now() - 3600000 * 5).toISOString(),
    },
    {
      id: 'mock-3',
      patient_name: 'Amit Verma',
      phone_number: '9988776655',
      preferred_date: '2026-05-27',
      preferred_time: '02:00 PM',
      preferred_procedure: 'Eczema Consultation',
      request_type: 'consultation',
      status: 'Confirmed',
      created_at: new Date(Date.now() - 3600000 * 24).toISOString(),
    }
  ];
}

const mockBookings = globalRef.mockBookings;

export async function GET() {
  try {
    // Return all bookings sorted by created_at descending
    const data = [...mockBookings].sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Website booking GET error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { patient_name, phone_number, preferred_date, preferred_time, preferred_procedure, request_type } = body;

    if (!patient_name || !phone_number || !request_type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newBooking = {
      id: `booking-${Math.random().toString(36).substr(2, 9)}`,
      patient_name,
      phone_number,
      preferred_date: preferred_date || '',
      preferred_time: preferred_time || '',
      preferred_procedure: preferred_procedure === null ? null : (preferred_procedure || ''),
      request_type,
      status: 'Pending',
      created_at: new Date().toISOString(),
    };

    mockBookings.push(newBooking);

    // Notify any local clients via simple logs or trigger context
    return NextResponse.json({ success: true, data: newBooking });
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

    const bookingIndex = mockBookings.findIndex((b) => b.id === id);

    if (bookingIndex === -1) {
      return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
    }

    mockBookings[bookingIndex] = {
      ...mockBookings[bookingIndex],
      status,
      cancellation_reason: status === 'Cancelled' ? (cancellation_reason || null) : null,
    };

    return NextResponse.json({ success: true, data: mockBookings[bookingIndex] });
  } catch (error: any) {
    console.error('Website booking PATCH error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
