import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "";

    const tasks = await prisma.task.findMany({
        where: {
            title: {
                contains: title,
            },
        },
    });

    return NextResponse.json(tasks);
}