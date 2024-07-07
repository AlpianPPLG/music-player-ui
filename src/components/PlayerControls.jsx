import { useState } from "react";
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaVolumeUp,
} from "react-icons/fa";

function PlayerControls() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="sm:h-20 lg:h-24 bg-gray-900 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <FaStepBackward className="text-white cursor-pointer hover:text-gray-400 transition" />
        <button onClick={handlePlayPause} className="focus:outline-none">
          {isPlaying ? (
            <FaPause className="text-white cursor-pointer hover:text-gray-400 transition" />
          ) : (
            <FaPlay className="text-white cursor-pointer hover:text-gray-400 transition" />
          )}
        </button>
        <FaStepForward className="text-white cursor-pointer hover:text-gray-400 transition" />
      </div>
      <div className="hidden sm:flex sm:flex-col sm:items-center sm:text-white">
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40"
            alt="Album cover"
            className="w-10 h-10 rounded"
          />
          <div>
            <div className="font-bold">Song Title</div>
            <div className="text-sm text-gray-400">Artist Name</div>
          </div>
        </div>
        <div className="flex items-center space-x-2 w-full mt-2">
          <span className="text-sm">0:00</span>
          <div className="w-full h-1 bg-gray-700 rounded">
            <div
              className="h-full bg-green-500 rounded"
              style={{ width: "50%" }}
            ></div>
          </div>
          <span className="text-sm">3:45</span>
        </div>
      </div>
      <div className="flex items-center space-x-4 text-white">
        <FaVolumeUp className="cursor-pointer hover:text-gray-400 transition" />
        <input type="range" min="0" max="100" className="w-24" />
      </div>
    </div>
  );
}

export default PlayerControls;
