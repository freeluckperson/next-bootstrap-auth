import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/libs/mongoDb";

export async function POST(request: Request) {
  try {
    connectDB();
    const { fullName, email, password } = await request.json();

    if (
      [fullName, email, password].some((field) => typeof field !== "string") ||
      [fullName, email, password].some((field) => field.trim() === "")
    )
      return NextResponse.json(
        { message: "Enter a string and Fill out all fields" },
        { status: 400 }
      );

    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ fullName, email, password: hashedPassword });
    const savedUser = await user.save();

    return NextResponse.json(savedUser);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
