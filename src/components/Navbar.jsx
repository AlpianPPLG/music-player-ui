import { FaSearch, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto px-4 py-6 flex items-center justify-between">
        <div className="text-2xl font-bold text-white">Music Player</div>
        <div className="hidden md:flex items-center space-x-4">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-white focus:outline-none"
          />
        </div>
        <div className="flex items-center space-x-4 text-white">
          <div className="cursor-pointer hover:text-gray-400 transition">
            Upgrade
          </div>
          <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-400 transition">
            <FaUser />
            <span>Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
