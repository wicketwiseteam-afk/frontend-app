import { ChevronDown, Search, Filter } from "lucide-react";
import { useState } from "react";
import logo from "../assets/image.png";
import FilterPanel from "./Filterpanel";

const UserNavbar = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-black via-black to-[#1a0f00] text-white py-4 shadow-md">
        <div className="w-full px-4 sm:px-6 md:px-8 flex items-center justify-between gap-8">
          <div className="flex items-center gap-10">
            <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
            <ul className="hidden md:flex items-center gap-10 text-2xl font-medium">
              {["Home", "Trending", "Playlist", "Account"].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer group relative flex items-center gap-1"
                >
                  <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 transition duration-300">
                    {item}
                  </span>
                  {item === "Account" && <ChevronDown size={18} />}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-grow max-w-[600px] relative flex items-center gap-3">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-5 pr-12 py-2 rounded-md bg-white/10 text-white text-lg placeholder-gray-400 focus:outline-none"
              />
              <Search
                size={20}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>

            <button
              className="p-2 bg-white/10 rounded-md hover:bg-white/20 transition"
              onClick={() => setFilterOpen(true)}
            >
              <Filter size={20} className="text-white" />
            </button>
          </div>
        </div>
      </nav>

      <FilterPanel show={filterOpen} onClose={() => setFilterOpen(false)} />
    </>
  );
};

export default UserNavbar;
