"use client";

import Link from "next/link";
import { useEffect, useState, use } from "react";
import { supabase } from "../../utils/supabase";
import dynamic from "next/dynamic";

// Memuat ReactPlayer hanya di sisi client agar tidak error SSR
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function MovieDetail({ params }: { params: Promise<{ id: string }> }) {
  // Menggunakan 'use' untuk menangani Promise dari params di Next.js 15+
  const resolvedParams = use(params);
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      const { data, error } = await supabase
        .from("movies")
        .select("*")
        .eq("id", resolvedParams.id)
        .single();

      if (data) setMovie(data);
      setLoading(false);
    }
    fetchMovie();
  }, [resolvedParams.id]);

  if (loading) return <div className="p-8 text-white min-h-screen bg-neutral-900">Memuat film...</div>;
  if (!movie) return <div className="p-8 text-white min-h-screen bg-neutral-900">Film tidak ditemukan!</div>;

  return (
    <main className="min-h-screen bg-neutral-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-red-500 hover:text-red-400 mb-6 inline-block font-semibold">
          &larr; Kembali ke Beranda
        </Link>
        
        <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl mb-6">
          <ReactPlayer 
            url={movie.videoUrl}
            width="100%" 
            height="100%" 
            controls
            playing
            light={movie.poster}
          />
        </div>

        <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
        <p className="text-red-500 font-medium mb-4">{movie.genre}</p>
        <p className="text-gray-300 leading-relaxed max-w-2xl">{movie.description}</p>
      </div>
    </main>
  );
}