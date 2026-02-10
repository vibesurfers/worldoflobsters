import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const SIGNUPS_FILE = path.join(process.cwd(), "signups.json");

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Read existing signups
    let signups: string[] = [];
    try {
      const data = await fs.readFile(SIGNUPS_FILE, "utf-8");
      signups = JSON.parse(data);
    } catch {
      // File doesn't exist yet, start fresh
    }

    // Check for duplicate
    if (signups.includes(email)) {
      return NextResponse.json(
        { message: "Already registered" },
        { status: 200 }
      );
    }

    // Add new signup
    signups.push(email);
    await fs.writeFile(SIGNUPS_FILE, JSON.stringify(signups, null, 2));

    return NextResponse.json(
      { message: "Successfully registered" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const data = await fs.readFile(SIGNUPS_FILE, "utf-8");
    const signups = JSON.parse(data);
    return NextResponse.json({ count: signups.length });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}
