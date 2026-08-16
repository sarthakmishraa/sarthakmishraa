import { HeroContent } from "../components/homePage/HeroContent";
import { TechStacks } from "../components/homePage/TechStacks";

export const Home = () => {
  return (
    <div className="animate-blur-in space-y-8">
      <HeroContent />
      <TechStacks />
    </div>
  );
};
