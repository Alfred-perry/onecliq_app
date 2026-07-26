import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="flex flex-col items-center justify-center p-32 px-6 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">Welcome to OneCliq

        </h1>
        <p className="mt-4 text-gray-600 font-medium">Building Something great.</p>
      </main>
    </div>

  );
}