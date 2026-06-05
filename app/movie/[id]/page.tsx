"use client";

import Link from "next/link";
import { useEffect, useState, use } from "react";
import { supabase } from "../../utils/supabase"; 
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function MovieDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      // PERBAIKAN 1: Hapus .single() agar tidak crash jika ID tidak ketemu
      const { data, error } = await supabase
        .from("movies")
        .select("*")
        .eq("id", id); 

      // Ambil data pertama jika ada
      if (data && data.length > 0) {
        setMovie(data[0]);
      } else {
        console.log("Error atau Data kosong:", error);
      }
      setLoading(false);
    }
    fetchMovie();
  }, [id]);

  if (loading) return <div className="p-8 text-white min-h-screen bg-neutral-900">Memuat...</div>;
  if (!movie) return <div className="p-8 text-white min-h-screen bg-neutral-900">Film tidak ditemukan!</div>;

  return (
    <main className="min-h-screen bg-neutral-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-red-500 hover:text-red-400 mb-6 inline-block font-semibold">
          &larr; Kembali ke Beranda
        </Link>
        
        {/* PERBAIKAN 2: Kembali menggunakan ReactPlayer yang jauh lebih stabil */}
        <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl mb-6">
          <ReactPlayer
            {...({
              url: movie.videourl, // Menggunakan kolom 'videourl' yang sudah benar
              width: "100%",
              height: "100%",
              controls: true,
              playing: true,
              muted: true,
            } as any)}
          />
        </div>

        <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
        <p className="text-red-500 font-medium mb-4">{movie.genre}</p>
        <p className="text-gray-300 leading-relaxed max-w-2xl">{movie.description}</p>
      </div>
    </main>
  );
}