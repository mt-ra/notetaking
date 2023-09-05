"use client";
import PocketBase from "pocketbase";
import { useRouter } from "next/navigation";

const pb = new PocketBase("http://127.0.0.1:8090");
import { useState } from "react";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const create = async() => {
    let data = {
      title: title,
      content: content,
    }
    await pb.collection("notes").create(data, {requestKey: null});
    setContent('');
    setTitle('');

    router.refresh();
  }

  return (
    <form onSubmit={create}>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" className="p-2 bg-blue-500 hover:bg-blue-800">Create Note</button>
    </form>
  );
}
