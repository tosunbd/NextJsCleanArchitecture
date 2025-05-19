// src/app/api/auth/login/route.ts
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const response = await fetch("https://localhost:5001/api/Auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    if (!response.ok) {
      return NextResponse.json({ message: result.message || "Login failed" }, { status: response.status });
    }

    return NextResponse.json({ token: result.token }, { status: 200 });
  } catch (error) {
    console.error("API Proxy Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
