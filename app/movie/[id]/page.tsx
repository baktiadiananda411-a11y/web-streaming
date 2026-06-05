import Link from "next/link";
import { movies } from "../../data/movies";

export default function MovieDetail({ params }: { params: { id: string } }) {
  // Mencari film yang ID-nya pas dengan ID di URL
  const movie = movies.find((m) => m.id === params.id);

  // Jika film tidak ditemukan
  if (!movie) {
    return (
      <main className="min-h-screen bg-neutral-900 text-white p-8 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Film Tidak Ditemukan</h1>
        <Link href="/" className="text-blue-400 hover:underline">Kembali ke Beranda</Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-red-500 hover:text-red-400 mb-6 inline-block font-semibold">
          &larr; Kembali ke Beranda
        </Link>
        
        {/* Video Player yang memutar video spesifik milik film tersebut */}
        <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl mb-6">
          <video 
            controls 
            className="w-full h-full"
            autoPlay
            key={movie.id} // Memaksa player reload saat ganti film
          >
            <source src={movie.videoUrl} type="video/mp4" />
            Browser kamu tidak mendukung tag video.
          </video>
        </div>

        {/* Informasi Detail Film */}
        <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
        <p className="text-red-500 font-medium mb-4">{movie.genre}</p>
        <p className="text-gray-300 leading-relaxed max-w-2xl">{movie.description}</p>
      </div>
    </main>
  );
}