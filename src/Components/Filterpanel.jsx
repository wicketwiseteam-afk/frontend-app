import { useEffect } from "react";
import DropdownButton from "./DropdownButton";

const FilterPanel = ({ show, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  const dummyOptions = ["Int'l", "Domestic", "IPL"];

  return (
    <>
      {/* Glow Behind Panel */}
      {show && (
        <div className="fixed top-0 right-[420px] h-full w-[5px] bg-gradient-to-b from-yellow-400 via-orange-500 to-yellow-400 blur-[5px] opacity-30 z-[90] pointer-events-none" />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[420px] max-w-full bg-gradient-to-b from-black via-[#120a00] to-black text-white p-6 shadow-lg z-[100] transition-transform duration-300 ${
          show ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ maxHeight: "100vh", overflowY: "auto" }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Pro Filters</h2>
          <button
            onClick={onClose}
            className="p-2 bg-white/10 rounded-md hover:bg-white/20"
          >
            ✕
          </button>
        </div>

        {/* Filters Content */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <DropdownButton label="Level" options={dummyOptions} />
          <DropdownButton label="Match Stage" options={dummyOptions} />
          <DropdownButton label="Match Type" options={dummyOptions} />
          <DropdownButton label="Year" options={dummyOptions} />
          <DropdownButton label="Tournament" options={dummyOptions} />
          <DropdownButton label="Venue" options={dummyOptions} />
        </div>

        <div className="flex gap-6">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">My Team</h3>
            <div className="grid grid-cols-1 gap-3">
              {Array(8)
                .fill()
                .map((_, i) => (
                  <DropdownButton key={i} label="Option" options={dummyOptions} />
                ))}
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Opponent Team</h3>
            <div className="grid grid-cols-1 gap-3">
              {Array(8)
                .fill()
                .map((_, i) => (
                  <DropdownButton key={i} label="Option" options={dummyOptions} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterPanel;
