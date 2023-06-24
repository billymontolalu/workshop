"use client";
import Link from "next/link";
import { useRouter } from "next/router";
export default function UpdateButton(post) {
  const url = `/post/${post.id}`;
  return (
    <Link href={url} className="border p-2">
      Update
    </Link>
  );
}
