// Import fonts for Material UI
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Component Imports
import Link from "next/link";

// My Component Imports

export default function Home() {
  return (
    <main className="bg-slate-300">
      <div>
        <h1 className="text-2xl">HOME PAGE!</h1>
        <p> Click on the button to go to your notes </p>
        <Link href="/notes">
          <button className="p-3 bg-blue-500 hover:bg-blue-700 text-white">
            Notes
          </button>
        </Link>
      </div>
    </main>
  );
}
