import { FaRegPaperPlane } from "react-icons/fa6";
import Text from "../components/Text";
import Title from "../components/Title";
import WorkTimeline from "../components/WorkTimeline";

export default function WorkPage() {
  return (
    <>
      <Title className="text-center mb-4">Work</Title>
      <p className="text-center text-2xl font-semibold mb-10">
        Freelance Software Engineer since 2018
      </p>
      <WorkTimeline />
      <div className="mb-10 mt-12 text-center">
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
