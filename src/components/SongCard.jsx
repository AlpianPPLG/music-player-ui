import PropTypes from "prop-types";
import { FaHeart, FaEllipsisH } from "react-icons/fa";

function SongCard({ song }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition transform hover:scale-105 flex flex-col items-center text-center">
      <div className="relative w-full">
        <img
          src={song.albumCover}
          alt={`${song.title} cover`}
          className="w-full h-40 rounded-lg object-cover"
        />
        <div className="absolute top-2 right-2 text-white">
          <FaHeart className="text-lg cursor-pointer hover:text-red-500 transition" />
        </div>
      </div>
      <div className="mt-4">
        <div className="text-lg font-bold text-white">{song.title}</div>
        <div className="text-sm text-gray-400">{song.artist}</div>
      </div>
      <div className="mt-4 flex items-center justify-between w-full text-white">
        <button className="bg-green-500 py-1 px-4 rounded-full hover:bg-green-600 transition">
          Play
        </button>
        <FaEllipsisH className="text-lg cursor-pointer hover:text-gray-400 transition" />
      </div>
    </div>
  );
}

SongCard.propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    albumCover: PropTypes.string.isRequired,
  }).isRequired,
};

export default SongCard;
