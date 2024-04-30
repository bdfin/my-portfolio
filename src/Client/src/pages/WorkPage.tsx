import ContactMe from "../components/ContactMe";
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
      <ContactMe />
    </>
  );
}
