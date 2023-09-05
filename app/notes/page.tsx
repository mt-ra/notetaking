import Link from "next/link";
import PocketBase from "pocketbase";
import CreateNote from "./createNote";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

const pb = new PocketBase("http://127.0.0.1:8090");

async function getNotes() {
  const res = await pb.collection("notes").getFullList({requestKey: null});
  return res as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div>
      <div className="flex flex-row bg-slate-500">
        <Link href="/">
          <button className="p-2 bg-blue-500 hover:bg-blue-700 text-white">
            Home
          </button>
        </Link>
      </div>
      <div>
        <h1 className="text-3xl">Notes</h1>
      </div>
      <div>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
      <div>
        <CreateNote />
      </div>
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, content, created } = note || {};
  return (
    <Link href={`/notes/${id}`}>
      <div className="bg-yellow-300 hover:bg-yellow-400 p-3 m-1">
        <div>
          <h2>{title}</h2>
          <h5>{content}</h5>
          <p>{created}</p>
        </div>
      </div>
    </Link>
  );
}
