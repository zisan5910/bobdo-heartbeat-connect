import HeroSection from "@/components/home/HeroSection";
import SocialLinks from "@/components/home/SocialLinks";
import MenuGrid from "@/components/home/MenuGrid";

const Index = () => {
  return (
    <div className="animate-fade-in">
      <HeroSection />
      
      <div className="space-y-6 py-6">
        <SocialLinks />
        <MenuGrid />
      </div>
    </div>
  );
};

export default Index;
