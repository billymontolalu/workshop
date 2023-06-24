import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import DeleteButton from "./deletebutton";
import UpdateButton from "./updatebutton";

export default async function Page() {
  const prisma = new PrismaClient();
  const data = await prisma.post.findMany({});
  const btnDelete = () => {
    console.log("berhasil didelete");
  };
  return (
    <div className="m-4">
      <h1>Halaman Post</h1>
      <Link href="/post/create">Add New Post</Link>
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
          <th className="py-2">ID</th>
            <th className="py-2">Title</th>
            <th className="py-2">Content</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((post) => (
            <tr className="border" key={post.id}>
              <td className="py-2">{post.id}</td>
              <td className="py-2">{post.title}</td>
              <td className="py-2">{post.content}</td>
              <td className="py-2">
                <DeleteButton {...post}/>
                <UpdateButton {...post}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
