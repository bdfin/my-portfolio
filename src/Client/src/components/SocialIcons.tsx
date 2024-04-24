import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

interface Props {
  size?: number;
}

export default function SocialIcons({ size = 20 }: Props) {
  const socialIcons = [
    {
      name: "GitHub",
      href: "https://github.com/bdfin",
      icon: <FaGithub size={size} />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/beau-findlay/",
      icon: <FaLinkedin size={size} />,
    },
    {
      name: "Email",
      href: "mailto:me@beaufindlay.com",
      icon: <FaEnvelope size={size} />,
    },
  ];

  return (
    <div className="flex space-x-6 md:order-2">
      {socialIcons.map((socialIcon) => (
        <a
          key={socialIcon.name}
          href={socialIcon.href}
          className="text-gray-100 hover:text-gray-300"
        >
          <span className="sr-only">{socialIcon.name}</span>
          {socialIcon.icon}
        </a>
      ))}
    </div>
  );
}
