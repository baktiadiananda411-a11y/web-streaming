export default function Home() {
  // Ini adalah Dummy Data. Nanti data ini akan kita ambil dari Database.
  const movies = [
    {
      id: 1,
      title: "Puri Jagatsukma",
      genre: "Horror / Supranatural",
      poster: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=500&q=80",
    },
    {
      id: 2,
      title: "Santet Rogo Mayit",
      genre: "Horror / Folkor",
      poster: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=500&q=80",
    },
    {
      id: 3,
      title: "Jurang Penari",
      genre: "Mystery / Thriller",
      poster: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=500&q=80",
    },
    {
      id: 4,
      title: "Big Buck Bunny",
      genre: "Animation / Comedy",
      poster: "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-red-600 tracking-wider">
          NANDAFLIX
        </h1>

        <h2 className="text-2xl font-semibold mb-4 border-l-4 border-red-600 pl-3">
          Sedang Tren
        </h2>

        {/* Grid Katalog Film */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div 
              key={movie.id} 
              className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
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
          ))}
        </div>

      </div>
    </main>
  );
}