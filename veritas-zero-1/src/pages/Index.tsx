import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AgentsSection from "@/components/AgentsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProofGenerator from "@/components/ProofGenerator";
import LeaderboardSection from "@/components/LeaderboardSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AgentsSection />
      <FeaturesSection />
      <ProofGenerator />
      <LeaderboardSection />
      <FooterSection />
    </div>
  );
};

export default Index;
