import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import PlayerControls from "./components/PlayerControls";
import Home from "./pages/Home";
import Album from "./pages/Album";
import Artist from "./pages/Artist";

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-900 text-white">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/album/:id" element={<Album />} />
              <Route path="/artist/:id" element={<Artist />} />
            </Routes>
          </div>
          <PlayerControls />
        </div>
      </div>
    </Router>
  );
}

export default App;
