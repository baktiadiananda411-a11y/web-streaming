import Link from "next/link";

export default function MovieDetail({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-neutral-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Tombol Kembali */}
        <Link href="/" className="text-red-500 hover:text-red-400 mb-6 inline-block font-semibold">
          &larr; Kembali ke Beranda
        </Link>
        
        {/* Menampilkan ID film yang ditangkap dari URL */}
        <h1 className="text-2xl font-bold mb-4">
          Kamu sedang memutar film dengan ID: <span className="text-red-600">{params.id}</span>
        </h1>
        
        {/* Video Player dari tahap 1 */}
        <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
          <video 
            controls 
            className="w-full h-full"
            autoPlay
          >
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            Browser kamu tidak mendukung tag video.
          </video>
        </div>
      </div>
    </main>
  );
}