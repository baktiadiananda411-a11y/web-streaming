export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-red-600">NandaFlix</h1>
        
        {/* Kontainer Video Player */}
        <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl mb-8">
          <video 
            controls 
            className="w-full h-full"
            poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
          >
            {/* Ini adalah link video MP4 dummy open-source (Big Buck Bunny) */}
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            Browser kamu tidak mendukung tag video.
          </video>
        </div>

        <h2 className="text-xl font-semibold mb-2">Big Buck Bunny (Dummy)</h2>
        <p className="text-gray-400">
          Ini adalah tahap pertama pembuatan web streaming. Video ini di-load langsung dari URL eksternal untuk mengetes UI player.
        </p>
      </div>
    </main>
  );
}
