import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  // Yahan aap email bhej sakte hain ya database me save kar sakte hain
  console.log('Received contact:', { name, email, message });
  return NextResponse.json({ success: true });
} 