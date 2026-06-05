"use client";

import Link from "next/link";
import { useEffect, useState, use } from "react";
import { supabase } from "../../utils/supabase"; 

export default function MovieDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      const { data, error } = await supabase
        .from("movies")
        .select("*")
        .eq("id", id)
        .single();

      if (data) {
        setMovie(data);
      } else {
        console.log("Error:", error);
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
        
        {/* Logika Video */}
        <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl mb-6">
          {!movie.videourl ? (
             <div className="w-full h-full flex items-center justify-center text-gray-400">
               URL Video tidak valid/kosong
             </div>
          ) : (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${
                movie.videourl.includes('v=') 
                  ? movie.videourl.split('v=')[1].split('&')[0] 
                  : movie.videourl.split('/').pop()
              }`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>

        <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
        <p className="text-red-500 font-medium mb-4">{movie.genre}</p>
        <p className="text-gray-300 leading-relaxed max-w-2xl">{movie.description}</p>
      </div>
    </main>
  );
}