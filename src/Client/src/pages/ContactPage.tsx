import ContactForm from "../components/ContactForm";
import Text from "../components/Text";
import Title from "../components/Title";

export default function ContactPage() {
  return (
    <>
      <Title className="text-center">Contact</Title>
      <Text className="text-center pb-8">
        If you think I can help with your project or you'd just like to talk
        tech, send me a message!
      </Text>
      <ContactForm />
    </>
  );
}
