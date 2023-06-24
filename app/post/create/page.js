"use client";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Page() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const save = async (e) => {
    e.preventDefault();
    await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    });

    //useRouter().push("/post")
  };

  return (
    <div className="m-4">
      <h1>Add New Post</h1>
      <form onSubmit={save}>
        <label className="block">Title</label>
        <input
          className="border p-2 rounded-md"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="block">Content</label>
        <input
          className="border p-2 rounded-md block"
          type="text"
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="bg-sky-500 px-5 py-1 text-white">Save</button>
      </form>
    </div>
  );
}
