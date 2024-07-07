import SongCard from "../components/SongCard";

function Home() {
  const songs = [
    {
      id: 1,
      title: "Song 1",
      artist: "Artist 1",
      albumCover: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Song 2",
      artist: "Artist 2",
      albumCover: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
}

export default Home;
