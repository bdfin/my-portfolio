import AboutTabs from "../components/AboutTabs";
import AnchorLink from "../components/AnchorLink";
import Text from "../components/Text";
import Title from "../components/Title";

export default function AboutPage() {
  return (
    <>
      <Title className="text-center pb-4">This App</Title>
      <Text>
        Below is an overview of how this simple app is made and what
        technologies are used. If you'd like to dive straight in, the full
        project is available on my{" "}
        <AnchorLink href="https://github.com/bdfin/my-portfolio">
          GitHub
        </AnchorLink>
        .
      </Text>
      <Text>
        I'm planning to integrate a simple blog as part of this app that will
        dive into more specific implementation details so check back soon for
        more!
      </Text>
      <AboutTabs />
    </>
  );
}
