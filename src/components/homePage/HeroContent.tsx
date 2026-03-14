import { FaGoogleDrive } from "react-icons/fa";
import { Button } from "../Button";
import {
  VIT_URL,
  UB_URL,
  LINKEDIN_URL,
  GITHUB_URL,
  TWITTER_URL,
  RESUME_URL,
  COMMOTION_URL,
} from "../../utils/urls";
import { redirectToURL } from "../../utils/helper";
import { Label } from "../Label";

export const HeroContent = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="text-2xl font-medium">
          Hi, I am Sarthak Mishra
        </div>
        <Button
          buttonLabel="View Resume"
          onClick={() => {
            redirectToURL(RESUME_URL);
          }}
          icon={<FaGoogleDrive size={20} />}
        />
      </div>
      {/* <div className="flex flex-col space-y-6 text-gray-400">
        <div>
          I'm a developer based in India. My interests lies
          around web development, mobile app development and
          solving actual problems using code.
        </div>
        <div>
          I wrote my first line of code in 2018. I've spent
          my college doing internships, projects, and
          attending/organizing developer events. I completed
          my BTech in Computer Science from
          <Label
            label="VIT University"
            keepInline
            link={VIT_URL}
          />
          in 2022 & Masters in Computer Science from
          <Label
            label="State University of New York at Buffalo"
            keepInline
            link={UB_URL}
          />
          in 2024.
        </div>
        <div>
          You can find me on
          <Label
            label="LinkedIn"
            keepInline
            link={LINKEDIN_URL}
          />
          ,
          <Label
            label="GitHub"
            keepInline
            link={GITHUB_URL}
          />
          or
          <Label
            label="Twitter"
            keepInline
            link={TWITTER_URL}
          />
        </div>
      </div> */}
      <div className="flex flex-col space-y-6 text-gray-400">
        <div>
          I'm a Software Engineer based in India, focused on
          building performant and scalable web applications
          using React, TypeScript and modern frontend
          architecture. I enjoy solving real-world problems
          through intuitive user experiences and well
          engineered systems.
        </div>

        <div>
          Currently, I build AI-powered products at
          <Label
            label="Commotion"
            keepInline
            link={COMMOTION_URL}
          />
          , where I developed a reusable AI Copilot platform
          enabling real-time text and voice interactions,
          agent-based workflows, and tool-driven automation.
        </div>

        <div>
          I completed my B.Tech in Computer Science from
          <Label
            label="VIT University"
            keepInline
            link={VIT_URL}
          />{" "}
          in 2022 and my Masters in Computer Science from
          <Label
            label="University at Buffalo"
            keepInline
            link={UB_URL}
          />{" "}
          in 2024.
        </div>

        <div>
          You can find me on
          <Label
            label="LinkedIn"
            keepInline
            link={LINKEDIN_URL}
          />
          ,
          <Label
            label="GitHub"
            keepInline
            link={GITHUB_URL}
          />{" "}
          or
          <Label
            label="Twitter"
            keepInline
            link={TWITTER_URL}
          />
          .
        </div>
      </div>
    </>
  );
};
