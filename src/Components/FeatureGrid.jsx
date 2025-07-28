import LockIcon from "../assets/Icons/Lock.svg"
import VideoIcon from "../assets/Icons/Video.svg"
import ClipoIcon from "../assets/Icons/Clip.svg"
import FilterIcon from "../assets/Icons/Filter.svg"
import DocIcon from "../assets/Icons/Doc.svg"
import BallIcon from "../assets/Icons/Ball.svg"
import PlayersIcon from "../assets/Icons/Players.svg"
import TrophyIcon from "../assets/Icons/Trophy.svg"
import GraphIcon from "../assets/Icons/Graph.svg"

const features = [
  {
    title: "Seamless Access for All",
    description: "Easily onboard and explore everything without restrictions.",
    icon: <img src={LockIcon} alt="Lock Icon" className="w-24 h-24" />,
    width: "w-full md:w-1/3",
  },
  {
    title: "Smart Match Management",
    description: "Manage matches with a streamlined interface.",
    icon: <img src={VideoIcon} alt="Video Icon" className="w-28 h-28" />,
    width: "w-full md:w-2/3",
  },
  {
    title: "Clip Library",
    description: "Browse saved clips with ease and precision.",
    icon: <img src={ClipoIcon} alt="Clip Icon" className="w-24 h-24" />,
    width: "w-full md:w-1/3",
  },
  {
    title: "Powerful Filters",
    description: "Find key moments using smart filters.",
    icon: <img src={FilterIcon} alt="filter Icon" className="w-24 h-24" />,
    width: "w-full md:w-1/3",
  },
  {
    title: "Player Profiles",
    description: "Detailed stats and data on every player.",
    icon: <img src={PlayersIcon} alt="players Icon" className="w-24 h-24" />,
    width: "w-full md:w-1/3",
  },
  {
    title: "Automatic Ball-by-Ball Tagging",
    description: "AI-powered delivery-wise auto-tagging.",
    icon: <img src={BallIcon} alt="ball Icon" className="w-24 h-24" />,
    width: "w-full md:w-1/3",
  },
  {
    title: "Coach-Centric Match Control",
    description: "Tools tailored for coaching control.",
    icon: <img src={DocIcon} alt="doc Icon" className="w-28 h-28" />,
    width: "w-full md:w-2/3",
  },
  {
    title: "League & Tournament",
    description: "Organize leagues and fixtures easily.",
    icon: <img src={TrophyIcon} alt="trophy Icon" className="w-36 h-28" />,
    width: "w-full md:w-2/3",
  },
  {
    title: "Advanced Analytics",
    description: "Get deep visual insights on performance.",
    icon: <img src={GraphIcon} alt="graph Icon" className="w-24 h-24" />,
    width: "w-full md:w-1/3",
  },
];

const FeatureCard = ({ title, icon, width, description }) => (
  <div
    data-aos="fade-up"
    data-aos-duration="800"
    className={`relative ${width} group p-[2px] rounded-xl 
  bg-gradient-to-br from-white via-gray-400 to-gray-700 
  transition-all duration-300 hover:shadow-[0_0_15px_#ff4da64D,0_0_15px_#ffa5004D]`}
  >
    <div className="relative w-full h-full md:min-h-[260px] px-8 py-8 rounded-[10px] bg-black text-white overflow-hidden">

      {/* Title */}
      <h3 className="text-4xl font-semibold  mb-7 bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text">
        {title}
      </h3>

      {/* Description - appears below title on hover */}
      <p className="text-lg text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-4 px-2">
        {description}
      </p>

      {/* Icon - below title initially, moves to bottom-right on hover */}
      <div
  className="absolute top-[calc(50%+5px)] left-1/2 transform -translate-x-1/2
    transition-all duration-500 ease-in-out
    group-hover:top-auto group-hover:left-auto 
    group-hover:right-2 group-hover:bottom-2
    group-hover:translate-x-0 group-hover:translate-y-0
    group-hover:scale-75"
>
  {icon}
</div>
    </div>
  </div>
);

const FeatureGrid = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-6">
          <FeatureCard {...features[0]} />
          <FeatureCard {...features[1]} />
        </div>
        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-6">
          <FeatureCard {...features[2]} />
          <FeatureCard {...features[3]} />
          <FeatureCard {...features[4]} />
        </div>
        {/* Row 3 */}
        <div className="flex flex-col md:flex-row gap-6">
          <FeatureCard {...features[5]} />
          <FeatureCard {...features[6]} />
        </div>
        {/* Row 4 */}
        <div className="flex flex-col md:flex-row gap-6">
          <FeatureCard {...features[7]} />
          <FeatureCard {...features[8]} />
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
