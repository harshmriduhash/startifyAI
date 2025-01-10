import Navbar from "../app/components/Navbar";
import HeroSection from "../app/components/HeroSection";
import MissionSection from "../app/components/MissionSection";
import FeaturesSection from "../app/components/FeaturesSection";
import SearchSection from "../app/components/SearchSection";
import FeaturesTilesSection from "../app/components/FeaturesTilesSection";
import FinalCTASection from "../app/components/FinalCTASection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <MissionSection />
      <FeaturesSection />
      <SearchSection />
      <FeaturesTilesSection />
      <FinalCTASection />
    </main>
  );
}