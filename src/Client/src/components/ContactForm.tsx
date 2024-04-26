import { FaRegPaperPlane } from "react-icons/fa6";
import AnchorLink from "./AnchorLink";
import TextInput from "./TextInput";
import TextAreaInput from "./TextAreaInput";
import Button from "./Button";
import Label from "./Label";

export default function ContactForm() {
  return (
    <div className="mx-auto max-w-xl py-4">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("Submitted");
        }}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Label htmlFor="name">Name</Label>
            <div className="mt-2.5">
              <TextInput id="name" type="text" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="email">Email</Label>
            <div className="mt-2.5">
              <TextInput id="email" type="email" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="message">Message</Label>
            <div className="mt-2.5">
              <TextAreaInput id="message" />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <small>
            This site is protected by reCAPTCHA and the Google{" "}
            <AnchorLink
              href="https://policies.google.com/privacy"
              target="_blank"
            >
              Privacy Policy
            </AnchorLink>{" "}
            and{" "}
            <AnchorLink
              href="https://policies.google.com/terms"
              target="_blank"
            >
              Terms of Service
            </AnchorLink>{" "}
            apply.
          </small>
        </div>
        <div className="mt-4 flex items-center justify-center">
          <Button type="submit">
            <FaRegPaperPlane className="mr-2" /> Send
          </Button>
        </div>
      </form>
    </div>
  );
}
