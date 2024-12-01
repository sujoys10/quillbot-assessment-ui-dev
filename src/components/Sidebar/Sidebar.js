import React from "react";
import "./Sidebar.css";

export function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div>
        <button className="hamburger" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="profile">
          <img
            src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/d0688a1d44131c7239999cad2ceeec122383367b38450c4f0d005127442d7d94._RI_V_TTW_.jpg"
            alt="Profile"
            className="profile-pic"
          />
          <h2>Eric Hoffman</h2>
        </div>
        <div className="separator" />
        <ul className="menu">
          <li>
            <span className="icon">🔍</span> Discover
          </li>
          <li>
            <span className="icon">📋</span> Playlist
          </li>
          <li>
            <span className="icon">🎥</span> Movie
          </li>
          <li>
            <span className="icon">📺</span> TV Shows
          </li>
          <li>
            <span className="icon">📃</span> My List
          </li>
          <li>
            <span className="icon">⌛</span> Watch Later
          </li>
          <li>
            <span className="icon">❤️</span> Recommended
          </li>
          <li>
            <span className="icon">⚙️</span> Settings
          </li>
          <li>
            <span className="icon">🚪</span> Logout
          </li>
        </ul>
      </div>
    </div>
  );
}

