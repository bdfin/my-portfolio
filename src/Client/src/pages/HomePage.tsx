import AnchorLink from "../components/AnchorLink";
import Subtitle from "../components/Subtitle";
import Text from "../components/Text";
import Title from "../components/Title";

export default function HomePage() {
  return (
    <>
      <Title>Hi, I'm Beau.</Title>
      <Text>
        I'm a UK-based software engineer and I love building cool stuff.
      </Text>

      <Subtitle className="mt-12">A bit about me</Subtitle>
      <Text>
        I mostly specialise in back-end C#/.NET development and I've built
        systems that scale for hundreds-of-thousands of global users.
      </Text>
      <Text>
        I've worked with businesses at all sizes and stages and I'm currently
        heading up the tech as CTO at a cool startup called{" "}
        <AnchorLink href="https://unhurdmusic.com">un:hurd music</AnchorLink>.
      </Text>
    </>
  );
}
