import Link from "next/link";
import PocketBase from "pocketbase";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

const pb = new PocketBase("http://127.0.0.1:8090");

async function getNote(noteId: string) {
  const res = await pb.collection("notes").getOne(noteId, {requestKey: null});
  return res as any;
}

async function NoteDetails({ params }: any) {
  console.log("hello");
  console.log(params);
  let note = await getNote(params.id); 
  return (
    <div>
      <div>
        <Link href="/notes">
          <button className="p-2 bg-blue-500 hover:bg-blue-700 text-white">
            Back to Notes
          </button>
        </Link>
      </div>
      <p>{note.title}</p>
      <p>{note.content}</p>
      
    </div>
  );
}

export default NoteDetails;
