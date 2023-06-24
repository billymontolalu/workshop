import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  const prisma = new PrismaClient();
  const body = await req.json();
  await prisma.post.delete({ where: { id: body.id } });
  return NextResponse.json({});
}
