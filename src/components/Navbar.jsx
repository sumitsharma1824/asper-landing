import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav">
      <div>
        <img src="/logo.png" alt="logo" />
      </div>

      {/* Desktop Menu */}
      <div className="compbtn">
        <div className="btn"><button>HOME</button></div>
        <div className="btn"><button>EVENTS</button></div>
        <div className="btn"><button>MEMBERS</button></div>
        <ThemeToggle />
      </div>

      <div className="joinBtn">
        <button className="join">JOIN US</button>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <button>HOME</button>
        <button>EVENTS</button>
        <button>MEMBERS</button>
        <button>JOIN US</button>
      </div>
    </div>
  );
}

export default Navbar;
