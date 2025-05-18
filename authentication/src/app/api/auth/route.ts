// app/api/auth/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Dummy validation - replace with real DB logic or external API
  const validUser = email === "test@example.com" && password === "123456";

  if (validUser) {
    // You can issue a token/cookie here
    return NextResponse.json({ message: "Login successful!" }, { status: 200 });
  } else {
    return NextResponse.json({ message: "Invalid credentials." }, { status: 401 });
  }
}
