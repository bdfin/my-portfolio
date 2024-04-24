import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      <div className="mx-auto py-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a
              href="https://github.com/bdfin"
              className="text-slate-200 hover:text-slate-500"
            >
              <span className="sr-only">GitHub</span>
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/beau-findlay/"
              className="text-slate-200 hover:text-slate-500"
            >
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:me@beaufindlay.com"
              className="text-slate-200 hover:text-slate-500"
            >
              <span className="sr-only">Email</span>
              <FaEnvelope size={20} />
            </a>
          </div>
          <p className="mt-8 text-xs leading-5 text-slate-100 md:order-1 md:mt-0">
            &copy; {currentYear} Beau Findlay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
