import { connectDB } from "@/libs/mongoDb";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    connectDB();
    const task = await Task.find();
    return !task || !task.length
      ? NextResponse.json({ message: "task not found" }, { status: 400 })
      : NextResponse.json(task, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}

export async function POST(request: Request) {
  try {
    connectDB();
    const { title, description, user } = await request.json();

    if (
      [title, description, user].some((field) => typeof field !== "string") ||
      [title, description, user].some((field) => field.trim() === "")
    )
      return NextResponse.json(
        { message: "Each field is required (must be a string)" },
        { status: 400 }
      );
    const task = new Task({ title, description, user });
    task.save();
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
