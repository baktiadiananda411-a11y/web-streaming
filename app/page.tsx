import Link from "next/link";
import { movies } from "./data/movies"; // Mengambil data dari file bersama

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-red-600 tracking-wider">
          NANDAFLIX
        </h1>
        <h2 className="text-2xl font-semibold mb-4 border-l-4 border-red-600 pl-3">
          Sedang Tren
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <Link href={`/movie/${movie.id}`} key={movie.id}>
              <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer h-full">
                <img 
                  src={movie.poster} 
                  alt={movie.title} 
                  className="w-full h-64 object-cover opacity-80 hover:opacity-100"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg truncate">{movie.title}</h3>
                  <p className="text-sm text-gray-400">{movie.genre}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}