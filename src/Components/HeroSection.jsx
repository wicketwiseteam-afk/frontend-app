const Herosection = () => {
  return (
    <section className="w-full bg-black text-white px-6 min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center text-center h-full pt-24 pb-16 gap-y-24">
        
        {/* Title */}
        <h1 className="text-[100px] lg:text-[120px] font-medium leading-tight tracking-wide">
          Relive The{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
            Game
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-2xl md:text-4xl text-white/80 font-extralight max-w-4xl">
          All your favorite highlights, milestones, and memories organized in one powerful library.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-10 flex-wrap mt-10">
          {/* Highlights Button */}
          <button className="relative inline-flex items-center justify-center px-10 py-4 font-bold text-black rounded-full 
            bg-gradient-to-r from-yellow-300 to-orange-400 shadow-[0_0_5px_#ffb347] 
            before:absolute before:inset-0 before:rounded-full before:blur-lg before:bg-gradient-to-r before:from-orange-400 before:to-yellow-300 
            before:opacity-70 before:transition-opacity hover:before:opacity-100">
            <span className="relative z-10">Highlights</span>
          </button>

          {/* Coach’s Corner Button */}
          <button className="relative inline-flex items-center justify-center px-10 py-4 font-bold text-black rounded-full 
            bg-gradient-to-r from-yellow-300 to-orange-400 shadow-[0_0_5px_#fff8dc]
            before:absolute before:inset-0 before:rounded-full before:blur-lg before:bg-gradient-to-r before:from-orange-400 before:to-yellow-300 
            before:opacity-70 before:transition-opacity hover:before:opacity-100">
            <span className="relative z-10">Coach's Corner</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
