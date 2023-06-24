import { PrismaClient } from "@prisma/client";

export default async function Page({ params }) {
  const prisma = new PrismaClient();
  const data = await prisma.post.findUnique({ where: { id: parseInt(params.slug) } });
  return <div>Title: {data.title} content : {data.content}</div>;
}
