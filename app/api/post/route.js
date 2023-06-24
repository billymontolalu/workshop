import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  const prisma = new PrismaClient();
  const body = await req.json();
  await prisma.post.create({ data: body });
  return NextResponse.json({});
}

export async function DELETE(req, res) {
  const prisma = new PrismaClient();
  const body = await req.json();
  console.log(body);
  //await prisma.post.delete({ where: { id: body.id } });
  return NextResponse.json({});
}

export async function GET(req, res) {
  const query = req.query;
  //const { id } = query;
  console.log(req.url);
  return NextResponse.json({});
}
