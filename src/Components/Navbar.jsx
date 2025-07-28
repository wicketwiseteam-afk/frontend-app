import { useState } from "react";
import { Menu, X } from "lucide-react";
import image from "../assets/image.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Features", "About", "Login"];

  return (
    <nav className="w-full bg-black/10 backdrop-blur-md text-white sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 md:px-10 py-5 flex justify-between items-center">
        
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <img src={image} alt="WicketWise Logo" className="w-10 h-10 object-contain" />
          <span className="text-2xl font-bold tracking-wide">WicketWise</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-base font-normal tracking-wide">
  {navItems.map((item) => (
    <a
      key={item}
      href="#"
      className="group relative transition duration-300 px-3 py-1 rounded-xl hover:bg-[#5C4033]/50"
    >
      <span className="text-white text-xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-yellow-500">
        {item}
      </span>
    </a>
  ))}
</div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-base font-normal tracking-wide bg-black border-t border-white border-dashed">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="block text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-400 hover:to-yellow-500 transition"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;