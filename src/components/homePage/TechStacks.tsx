import { techStacks } from "../../utils/helper";
import { Button } from "../Button";

export const TechStacks = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
      {techStacks?.map((techStack) => (
        <Button
          key={techStack?.id}
          buttonLabel={techStack?.label}
          icon={techStack?.icon}
          buttonClassNames="!w-34 justify-center"
        />
      ))}
    </div>
  );
};
