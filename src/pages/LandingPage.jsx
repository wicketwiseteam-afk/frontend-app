import Navbar from "../Components/Navbar";
import Herosection from "../Components/HeroSection";
import FeatureGrid from "../Components/FeatureGrid";
import SubHero from "../Components/SubHero";
import Footer from "../Components/Footer";
import GradientBlobs from "../Components/GradientBlobs";
function LandingPage(){
  return(
    <div className="relative bg-black text-white font-sans ">
      {/* Gradient Layer */}
     
      <div className="fixed inset-0 z-0 pointer-events-none">
        <GradientBlobs
          position="top-right"
          colors="bg-gradient-to-br from-yellow-400 via-orange-500 to-yellow-500"
          opacity="opacity-15"
          size="750px"
        />
      </div>
       <Navbar />
      <Herosection />
      <FeatureGrid />
      <SubHero />
      <Footer />
    </div>
  );
}

export default LandingPage;