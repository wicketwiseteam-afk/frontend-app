const ClipCard = ({ title, tag, videoSrc }) => (
  <div className="w-64 sm:w-72 bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition duration-300">
    <div className="aspect-video bg-zinc-800">
      <video
        src={videoSrc}
        className="w-full h-full object-cover"
        muted
        autoPlay
        loop
        playsInline
      />
    </div>
    <div className="px-4 py-3">
      <p className="text-sm text-gray-400">{tag}</p>
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
    </div>
  </div>
);

export default ClipCard;
