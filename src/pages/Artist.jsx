import { useParams } from "react-router-dom";
import SongCard from "../components/SongCard";

function Artist() {
  const { id } = useParams();
  const artist = {
    id,
    name: `Artist ${id}`,
    songs: [
      { id: 1, title: "Song 1", artist: `Artist ${id}` },
      { id: 2, title: "Song 2", artist: `Artist ${id}` },
    ],
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{artist.name}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {artist.songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
}

export default Artist;
