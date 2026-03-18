export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-slate-900 border-b border-slate-700">
      <h1 className="text-xl font-bold">OnChat</h1>
      <button className="bg-blue-600 px-4 py-2 rounded-lg">
        Connect
      </button>
    </div>
  );
}
