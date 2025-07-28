import { useEffect, useRef, useState } from "react";

const images = [
  "https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2024/12/Rohit-Sharma-Virat-Kohli.webp",
  "https://i.cdn.newsbytesapp.com/images/l81420230925190013.jpeg",
  "https://im.indiatimes.in/content/2023/Oct/Indian-Cricket-History_6530fb1aa44f0.jpg?w=1200&h=900&cc=1&webp=1&q=75",
];

const FeatureCard2 = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrent((prev) => prev + 1);
      setIsTransitioning(true);
    }, 4000);

    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    if (current === images.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(0);
      }, 1000); // Matches transition duration
      return () => clearTimeout(timeout);
    }
  }, [current]);

  return (
    <div className="overflow-hidden relative w-full h-[500px] rounded-xl shadow-lg">
      <div
        ref={sliderRef}
        className={`flex ${isTransitioning ? "transition-transform duration-1000 ease-in-out" : ""}`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {[...images, images[0]].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Slide ${idx + 1}`}
            className="w-full flex-shrink-0 h-[500px] object-cover"
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
      <div className="absolute bottom-6 left-6 z-20 text-white text-2xl font-semibold">
        Slide {current === images.length ? 1 : current + 1}
      </div>
    </div>
  );
};

export default FeatureCard2;
