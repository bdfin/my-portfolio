import { FaRegPaperPlane } from "react-icons/fa6";
import AnchorLink from "../components/AnchorLink";
import Subtitle from "../components/Subtitle";
import TechIcons from "../components/TechIcons";
import Text from "../components/Text";
import Title from "../components/Title";

export default function HomePage() {
  return (
    <>
      <Title>Hi, I'm Beau.</Title>
      <Text>
        I'm a UK-based software engineer and I love building cool stuff.
      </Text>
      <Text>
        I mostly specialise in back-end C#/.NET development and I've built
        systems that scale for hundreds-of-thousands of global users.
      </Text>
      <Text>
        I've worked with businesses at all sizes and stages and I'm currently
        heading up the tech as CTO at a cool startup called{" "}
        <AnchorLink href="https://unhurdmusic.com">un:hurd music</AnchorLink>.
      </Text>

      <TechIcons className="mt-20" />

      <div className="mt-24 mb-10 text-center">
        <Text>If you think I can help with your project...</Text>
        <a
          href="mailto:me@beaufindlay.com"
          className="inline-flex items-center border-0 ring-1 ring-inset ring-gray-300 bg-black px-3.5 py-2.5 mt-2 text-sm font-semibold text-white shadow hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
        >
          Get in touch <FaRegPaperPlane className="ml-2" />
        </a>
      </div>
    </>
  );
}
