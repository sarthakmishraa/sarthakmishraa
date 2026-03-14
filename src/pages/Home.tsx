import { HeroContent } from "../components/homePage/HeroContent";
import { TechStacks } from "../components/homePage/TechStacks";

export const Home = () => {
  return (
    <div className="space-y-8">
      <HeroContent />
      <TechStacks />
    </div>
  );
};
