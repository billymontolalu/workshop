"use client";
import { useRouter } from "next/router";
export default function DeleteButton(post) {
  async function deleteButton() {
    await fetch("/api/postdelete", {
      method: "POST",
      body: JSON.stringify({
        id: post.id,
      }),
    });
    // const route = useRouter();
    // route.push("/");
  }

  return (
    <button onClick={deleteButton} className="border p-2">
      Delete
    </button>
  );
}
