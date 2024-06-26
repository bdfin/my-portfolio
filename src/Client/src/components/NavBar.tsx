import { Dialog, Popover } from "@headlessui/react";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import SocialIcons from "./SocialIcons";
import NavLink from "./NavLink";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="pt-6">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Beau Findlay</span>
            <img className="h-16 w-auto" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/about">This App</NavLink>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 bg-black w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 text-white sm:border-l-2">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="-m-1.5 p-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Beau Findlay</span>
              <img className="h-16 w-auto" src={logo} alt="Logo" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <FaXmark className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-200/10">
              <div className="space-y-2 py-6">
                <NavLink
                  to="/work"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Work
                </NavLink>
                <NavLink
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  This App
                </NavLink>
              </div>
              <div className="flex justify-center items-center py-8">
                <SocialIcons size={24} />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
