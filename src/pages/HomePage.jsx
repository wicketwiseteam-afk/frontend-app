import ClipSection from "../Components/ClipSection";
import FeatureCard2 from "../Components/FeatureCard2";
import UserNavbar from "../Components/UserNavbar";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Sticky Navbar */}
      <UserNavbar />

      {/* Main Content */}
      <main className="px-6 py-6 max-w-7xl mx-auto space-y-10">
        <FeatureCard2 />
        <ClipSection title="Recently Watched" />
        <ClipSection title="Anderson-Tendulkar Trophy 2025" />
        <ClipSection title="Champions Trophy 2025" />
        <ClipSection title="T20 World Cup 2024" />
      </main>
    </div>
  );
};

export default Home;
