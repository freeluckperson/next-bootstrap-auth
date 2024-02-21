import { connectDB } from "@/libs/mongoDb";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    connectDB();
    const id = params.id;
    const getById = await Task.find({ user: id });
    if (!getById)
      return NextResponse.json({ message: "task not found" }, { status: 400 });
    return NextResponse.json(getById, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}

export async function PUT(request: Request, { params }: { params: string }) {
  try {
    await connectDB();
    const id = params.id;
    const { title, description } = await request.json();
    if (
      [title, description].some((field) => typeof field !== "string") ||
      [title, description].some((field) => field.trim() === "")
    )
      return NextResponse.json(
        { message: "Each field is required and must be a string" },
        { status: 400 }
      );
    await Task.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: "Task update " }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(request: Request, { params }: { params: string }) {
  try {
    connectDB();
    const id = params.id;
    const erase = await Task.findByIdAndDelete(id);
    if (!erase)
      return NextResponse.json({ message: "task not found" }, { status: 400 });
    return NextResponse.json(erase, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
