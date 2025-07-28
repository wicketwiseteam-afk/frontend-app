import { useEffect, useState } from "react";

// Dummy image URLs – replace these with your actual images
const slides = [
  "https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2024/12/Rohit-Sharma-Virat-Kohli.webp",
  "https://i.cdn.newsbytesapp.com/images/l81420230925190013.jpeg",
  "https://im.indiatimes.in/content/2023/Oct/Indian-Cricket-History_6530fb1aa44f0.jpg?w=1200&h=900&cc=1&webp=1&q=75",
];

const FeatureClip = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-xl shadow-lg">
      {slides.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Optional: Gradient overlay or text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />
      <div className="absolute bottom-6 left-6 z-20 text-white text-2xl font-semibold">
        {/* Optional text for current slide */}
        Feature Clip {currentSlide + 1}
      </div>
    </div>
  );
};

export default FeatureClip;
