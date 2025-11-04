// app/api/users/route.ts
import { NextResponse } from "next/server";
import { userModel } from "../../models/usermodel";

export async function GET() {
  try {
    const users = await userModel.getAll();
    return NextResponse.json(users);
  } catch (err) {
    console.error("GET /api/users error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email } = body;
    if (!name || !email) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    const newUser = await userModel.create({ name, email });
    return NextResponse.json(newUser);
  } catch (err) {
    console.error("POST /api/users error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
