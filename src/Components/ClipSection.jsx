import ClipCard from "./ClipCard";
import sampleVid from "../assets/sampleVid.mp4"

const ClipSection = ({ title }) => {
  const clips = Array(6).fill({
    title: "Shubman Gill Six Against Chris Woakes",
    tag: "ATT - 2025",
    videoSrc: sampleVid, // Example video path
  });

  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      <div className="flex gap-6 overflow-x-auto no-scrollbar">
        {clips.map((clip, i) => (
          <ClipCard key={i} {...clip} />
        ))}
      </div>
    </section>
  );
};

export default ClipSection;
