import { useState } from "react";
import { FaSistrix, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log("Searching for:", searchTerm);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="container-responsive flex items-center justify-between py-4 sm:py-6 relative">
      <a href="/" className="flex-shrink-0">
        <img
          src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/logo.png"
          alt="Cyborg Gaming Logo"
          className="h-8 sm:h-10 lg:h-12 cursor-pointer hover:scale-105 transition-all duration-300"
        />
      </a>

      <form onSubmit={handleSearch} className="hidden md:flex relative text-zinc-600">
        <input
          type="search"
          placeholder="Search games, streams..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-zinc-800 w-48 lg:w-72 h-10 rounded-3xl pl-10 pr-4 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-200 border border-zinc-700"
        />
        <button 
          type="submit"
          className="absolute top-3 left-3 text-xl hover:text-pink-500 transition-colors duration-200"
        >
          <FaSistrix />
        </button>
      </form>

      <button
        onClick={toggleMenu}
        className="md:hidden text-zinc-300 hover:text-pink-500 transition-colors duration-200 z-50"
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <nav className="hidden md:flex items-center gap-2 lg:gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `nav-link ${isActive ? "nav-link-active" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/browse"
          className={({ isActive }) =>
            `nav-link ${isActive ? "nav-link-active" : ""}`
          }
        >
          Browse
        </NavLink>
        <NavLink
          to="/details"
          className={({ isActive }) =>
            `nav-link ${isActive ? "nav-link-active" : ""}`
          }
        >
          Details
        </NavLink>
        <NavLink
          to="/streams"
          className={({ isActive }) =>
            `nav-link ${isActive ? "nav-link-active" : ""}`
          }
        >
          Streams
        </NavLink>
        <NavLink
          to="/profile"
          className="hover:bg-pink-500 flex gap-2 lg:gap-4 bg-zinc-800 items-center py-2 px-2 lg:px-3 text-sm lg:text-lg rounded-3xl duration-300 ease-out hover:text-zinc-300 transform hover:scale-105 border border-zinc-700"
        >
          <span className="hidden lg:block">Profile</span>
          <img
            className="rounded-full w-6 h-6 lg:w-8 lg:h-8"
            src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/profile-header.jpg"
            alt="User Profile"
          />
        </NavLink>
      </nav>

      <div className={`md:hidden fixed inset-0 glass-effect z-40 transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className={`fixed right-0 top-0 h-full w-64 bg-zinc-800 border-l border-zinc-700 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col p-6 pt-20 gap-6">
            <form onSubmit={handleSearch} className="relative text-zinc-600 mb-4">
              <input
                type="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-zinc-900 w-full h-10 rounded-3xl pl-10 pr-4 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-pink-500 border border-zinc-700"
              />
              <button 
                type="submit"
                className="absolute top-3 left-3 text-lg hover:text-pink-500 transition-colors duration-200"
              >
                <FaSistrix />
              </button>
            </form>

            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-zinc-300 hover:text-pink-500 duration-300 ease-in cursor-pointer py-3 px-4 rounded-lg hover:bg-zinc-700 ${
                  isActive ? "text-pink-500 bg-zinc-700" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/browse"
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-zinc-300 hover:text-pink-500 duration-300 ease-in cursor-pointer py-3 px-4 rounded-lg hover:bg-zinc-700 ${
                  isActive ? "text-pink-500 bg-zinc-700" : ""
                }`
              }
            >
              Browse
            </NavLink>
            <NavLink
              to="/details"
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-zinc-300 hover:text-pink-500 duration-300 ease-in cursor-pointer py-3 px-4 rounded-lg hover:bg-zinc-700 ${
                  isActive ? "text-pink-500 bg-zinc-700" : ""
                }`
              }
            >
              Details
            </NavLink>
            <NavLink
              to="/streams"
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-zinc-300 hover:text-pink-500 duration-300 ease-in cursor-pointer py-3 px-4 rounded-lg hover:bg-zinc-700 ${
                  isActive ? "text-pink-500 bg-zinc-700" : ""
                }`
              }
            >
              Streams
            </NavLink>
            
            <NavLink
              to="/profile"
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center gap-3 py-3 px-4 rounded-lg mt-4 transition-colors ${
                  isActive ? "text-pink-500 bg-zinc-700" : "text-zinc-300 hover:text-pink-500 hover:bg-zinc-700"
                }`
              }
            >
              <img
                className="rounded-full w-10 h-10"
                src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/profile-header.jpg"
                alt="User Profile"
              />
              <span>Profile</span>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
