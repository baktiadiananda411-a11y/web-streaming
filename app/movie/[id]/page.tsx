import Link from "next/link";
import { movies } from "../../data/movies"; // Pastikan path import ini tidak error merah ya

// 1. Tambahkan kata 'async' dan ubah tipe params menjadi Promise
export default async function MovieDetail({ params }: { params: Promise<{ id: string }> }) {
  
  // 2. Kita 'tunggu' (await) sampai parameter ID-nya siap dibaca dari URL
  const { id } = await params;

  // 3. Cari film, pastikan keduanya diubah jadi string agar pencariannya akurat
  const movie = movies.find((m) => String(m.id) === String(id));

  // Jika film tidak ditemukan
  if (!movie) {
    return (
      <main className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Film Tidak Ditemukan</h1>
        <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
          &larr; Kembali ke Beranda
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-red-500 hover:text-red-400 mb-6 inline-block font-semibold">
          &larr; Kembali ke Beranda
        </Link>
        
        {/* Video Player */}
        <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl mb-6">
          <video 
            controls 
            className="w-full h-full"
            autoPlay
            key={movie.id}
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