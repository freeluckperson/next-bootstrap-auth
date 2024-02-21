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
    const getById = await Task.findById(id);
    if (!getById)
      return NextResponse.json({ message: "task not found" }, { status: 400 });
    return NextResponse.json(getById, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
