// app/api/auth/signup/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "app/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("SIGNUP payload:", body);

    const { name, email, password } = body;
    if (!name || !email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) return NextResponse.json({ error: "Email exists" }, { status: 409 });

    const hashed = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, password: hashed },
      select: { id: true, name: true, email: true, createdAt: true },
    });

    console.log("Created user:", user);
    return NextResponse.json({ user });
  } catch (err) {
    console.error("SIGNUP ERROR:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
