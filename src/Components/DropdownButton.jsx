import { ChevronDown } from "lucide-react";
import { useState } from "react";

const DropdownButton = ({ label, options }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(label);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-[#1a1a1a] py-3 px-4 rounded-lg flex justify-between items-center text-lg"
      >
        {selected}
        <ChevronDown size={18} />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 bg-black border border-white/20 rounded-lg w-full z-50">
          {options.map((option) => (
            <div
              key={option}
              className={`px-4 py-2 hover:bg-white/10 cursor-pointer ${
                selected === option ? "bg-white/10 text-green-400" : ""
              }`}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
