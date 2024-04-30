import SocialIcons from "./SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      <div className="mx-auto py-8">
        <div className="md:flex md:items-center md:justify-between">
          <SocialIcons />
          <p className="mt-4 text-xs leading-5 text-gray-100 md:order-1 md:mt-0">
            &copy; {currentYear} Beau Findlay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
