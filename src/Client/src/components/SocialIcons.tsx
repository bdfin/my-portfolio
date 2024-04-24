import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

interface Props {
  size?: number;
}

export default function SocialIcons({ size = 20 }: Props) {
  return (
    <div className="flex space-x-6 md:order-2">
      <a
        href="https://github.com/bdfin"
        className="text-slate-200 hover:text-slate-500"
      >
        <span className="sr-only">GitHub</span>
        <FaGithub size={size} />
      </a>
      <a
        href="https://www.linkedin.com/in/beau-findlay/"
        className="text-slate-200 hover:text-slate-500"
      >
        <span className="sr-only">LinkedIn</span>
        <FaLinkedin size={size} />
      </a>
      <a
        href="mailto:me@beaufindlay.com"
        className="text-slate-200 hover:text-slate-500"
      >
        <span className="sr-only">Email</span>
        <FaEnvelope size={size} />
      </a>
    </div>
  );
}
