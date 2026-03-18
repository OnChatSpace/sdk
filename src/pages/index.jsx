import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to OnChat
        </h1>
        <p className="text-gray-400 mb-6">
          Chat with true privacy & freedom
        </p>
        <Link href="/chat">
          <button className="bg-blue-600 px-6 py-3 rounded-lg">
            Start Chat
          </button>
        </Link>
      </div>
    </div>
  );
}
