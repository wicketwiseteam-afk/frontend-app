const SubHero = () => {
  return (
    <section className="bg-black text-white text-center py-20 px-6">
      <h2 className="md:text-3xl font-semibold">
        <span className="text-5xl text-gray-400">Iconic cricket </span>
        <span className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
          moments
        </span>
        ,{" "}
        <span className="text-5xl font-bold">
          broken down to every ball
        </span>
      </h2>

      <p className="mt-10 text-xl md:text-lg text-gray-300 max-w-3xl mx-auto">
        Explore ball-by-ball insights and player-specific highlights in one powerful platform with smart auto-tagging and coach-ready analytics.
      </p>

      {/* Buttons */}
      <div className="mt-14 flex justify-center gap-6 flex-wrap">
        {/* Highlights Button */}
        <button
          className="relative inline-block px-6 py-2 text-lg font-semibold rounded-xl 
          bg-black text-white z-10 overflow-hidden
          border border-gray-400 transition-all duration-300
          hover:bg-gradient-to-r hover:from-orange-400 hover:to-yellow-300 group"
        >
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-400 to-white opacity-20 group-hover:from-orange-400 group-hover:to-yellow-300 transition-all duration-300" />
          <span className="relative z-10">Highlights</span>
        </button>

        {/* Coach's Corner Button */}
        <button
          className="relative inline-block px-6 py-2 text-lg font-semibold rounded-xl 
          bg-black text-white z-10 overflow-hidden
          border border-gray-400 transition-all duration-300
          hover:bg-gradient-to-r hover:from-orange-400 hover:to-yellow-300 group"
        >
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-400 to-white opacity-20 group-hover:from-orange-400 group-hover:to-yellow-300 transition-all duration-300" />
          <span className="relative z-10">Coach's Corner</span>
        </button>
      </div>
    </section>
  );
};

export default SubHero;
