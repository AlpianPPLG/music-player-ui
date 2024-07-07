import { useParams } from "react-router-dom";
import SongCard from "../components/SongCard";

function Album() {
  const { id } = useParams();
  const album = {
    id,
    title: `Album ${id}`,
    songs: [
      { id: 1, title: "Song 1", artist: "Artist 1" },
      { id: 2, title: "Song 2", artist: "Artist 2" },
    ],
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{album.title}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {album.songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
}

export default Album;
