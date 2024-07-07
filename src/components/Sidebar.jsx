import {
  FaHome,
  FaSearch,
  FaBook,
  FaPlusSquare,
  FaHeart,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-16 md:w-40 bg-gray-900 p-4 space-y-4">
      <NavLink
        to="/"
        className="flex items-center space-x-2 hover:text-gray-400 transition"
      >
        <FaHome />
        <span className="hidden md:inline">Home</span>
      </NavLink>
      <NavLink
        to="/search"
        className="flex items-center space-x-2 hover:text-gray-400 transition"
      >
        <FaSearch />
        <span className="hidden md:inline">Search</span>
      </NavLink>
      <NavLink
        to="/library"
        className="flex items-center space-x-2 hover:text-gray-400 transition"
      >
        <FaBook />
        <span className="hidden md:inline">Your Library</span>
      </NavLink>
      <NavLink
        to="/create-playlist"
        className="flex items-center space-x-2 hover:text-gray-400 transition"
      >
        <FaPlusSquare />
        <span className="hidden md:inline">Create Playlist</span>
      </NavLink>
      <NavLink
        to="/liked-songs"
        className="flex items-center space-x-2 hover:text-gray-400 transition"
      >
        <FaHeart />
        <span className="hidden md:inline">Liked Songs</span>
      </NavLink>
    </div>
  );
}

export default Sidebar;
