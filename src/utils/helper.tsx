import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  RiTailwindCssFill,
  RiNextjsFill,
} from "react-icons/ri";
import {
  SiTypescript,
  SiApollographql,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";

interface techStacksProp {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export const techStacks: techStacksProp[] = [
  {
    id: "1",
    label: "React JS",
    icon: <FaReact />,
  },
  {
    id: "2",
    label: "JavaScript",
    icon: <IoLogoJavascript />,
  },
  {
    id: "3",
    label: "TailwindCSS",
    icon: <RiTailwindCssFill />,
  },
  {
    id: "4",
    label: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    id: "5",
    label: "Next JS",
    icon: <RiNextjsFill />,
  },
  {
    id: "6",
    label: "React Native",
    icon: <TbBrandReactNative />,
  },
  {
    id: "7",
    label: "GraphQL",
    icon: <GrGraphQl />,
  },
  {
    id: "8",
    label: "Apollo",
    icon: <SiApollographql />,
  },
];

export const redirectToURL = (url: string) => {
  if (!url) return;

  window.open(url, "_blank", "noopener,noreferrer");
};
