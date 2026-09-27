import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // ১. ভ্যালিডেশন
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'সবগুলো ঘর পূরণ করা আবশ্যক।' },
        { status: 400 }
      );
    }

    // ২. এখানে ইমেইল পাঠানো বা ডাটাবেজে সেভ করার কোড লিখবেন
    // উদাহরণস্বরূপ: console.log(body);

    return NextResponse.json(
      { success: true, message: 'বার্তা সফলভাবে পাঠানো হয়েছে!' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'সার্ভারে সমস্যা দেখা দিয়েছে।' },
      { status: 500 }
    );
  }
}