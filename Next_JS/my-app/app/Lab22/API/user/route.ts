import { NextResponse } from "next/server";
import { students } from "../data";

export function GET(request) {
  return NextResponse.json(students);
}

export async function POST(request) {
  const data = await request.json();
  const newStudent = {
    id: students.length + 1,
    name: data.name,
  };
  students.push(newStudent);
  return NextResponse.json(newStudent, { status: 201 });
}