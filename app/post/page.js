import { PrismaClient } from "@prisma/client";
import Link from "next/link";

export default async function Page() {
  const prisma = new PrismaClient();
  const data = await prisma.post.findMany({});
  return (
    <div className="m-4">
      <h1>Halaman Post</h1>
      <Link href="/post/create">Add New Post</Link>
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2">Title</th>
            <th className="py-2">Content</th>
          </tr>
        </thead>
        <tbody>
          {data.map((post) => (
            <tr className="border">
              <td className="py-2">{post.title}</td>
              <td className="py-2">{post.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
