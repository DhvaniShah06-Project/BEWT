import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request,{ params }: { params: { id: string } }) {
    const { id } = params;
    
    const task = await prisma.task.findUnique({
        where: { id },
    });

    return NextResponse.json(task);
}