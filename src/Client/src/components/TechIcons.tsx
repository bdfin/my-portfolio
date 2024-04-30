import { FaDatabase, FaDocker, FaReact } from "react-icons/fa6";
import { SiBlazor, SiCsharp, SiMicrosoftazure } from "react-icons/si";
import buildClassNames from "../helpers/cssClassFormatter";

const iconSize = 34;
const iconCss = "mx-auto";

const techIcons = [
  {
    name: "C#/.NET",
    icon: <SiCsharp size={iconSize} className={iconCss} />,
  },
  {
    name: "Microsoft Azure",
    icon: <SiMicrosoftazure size={iconSize} className={iconCss} />,
  },
  {
    name: "Blazor",
    icon: <SiBlazor size={iconSize} className={iconCss} />,
  },
  {
    name: "React",
    icon: <FaReact size={iconSize} className={iconCss} />,
  },
  {
    name: "Databases",
    icon: <FaDatabase size={iconSize} className={iconCss} />,
  },
  {
    name: "Docker",
    icon: <FaDocker size={iconSize} className={iconCss} />,
  },
];

interface Props {
  className?: string | null;
}

export default function TechIcons({ className }: Props) {
  const defaultStyles = "mx-auto max-w-4xl";
  const styles = buildClassNames(className ? className : "", defaultStyles);

  return (
    <div className={styles}>
      <p className="text-xl text-center mb-10 font-semibold">
        Tech i'm working with at the moment:
      </p>
      <div className="flex flex-col md:flex-row md:justify-evenly space-y-10 md:space-y-0 text-center mx-auto mt-4">
        {techIcons.map((techIcon, index) => (
          <div key={index}>
            {techIcon.icon}
            <p className="mt-2 text-sm">{techIcon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
