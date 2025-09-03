"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Dialog, DialogPanel } from "@headlessui/react";
import Logo from "../logo";
import Button from "../ui/button";
import SearchIcon from "../ui/icons/SearchIcon";
import LetterIcon from "../ui/icons/LetterIcon";
import GlobeIcon from "../ui/icons/GlobeIcon";
import BurgerIcon from "../ui/icons/BurgerIcon";
import CogsIcon from "../ui/icons/CogsIcon";
import XIcon from "../ui/icons/XIcon";

export type HeaderProps = {
  name?: boolean;
};

export const Header: React.FC<HeaderProps> = (): React.ReactElement => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenuOpen = () => setIsMobileMenuOpen((prev) => !prev);
  return (
    <header className="bg-gradient-to-b from-black to-transparent fixed w-full z-50 backdrop-blur-md shadow-xs">
      <nav
        aria-label="Global"
        className="mx-auto flex container items-center justify-between p-4 lg:px-8"
      >
        <Link href="#">
          <span className="sr-only">FableReads</span>
          <Logo />
        </Link>
        <div className="flex lg:hidden">
          <Button
            type="button"
            onClick={toggleMobileMenuOpen}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <BurgerIcon />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-4">
          <Button>
            <SearchIcon />
          </Button>
          <Button>
            <CogsIcon />
          </Button>
          <Button variant="secondary" className="px-6">
            Our Books
          </Button>
          <Button onClick={toggleMobileMenuOpen}>
            <BurgerIcon />
          </Button>
        </div>
      </nav>
      <Dialog open={isMobileMenuOpen} onClose={toggleMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-screen h-screen overflow-y-auto bg-[#16181f] p-6">
          <div className="flex items-center justify-between">
            <Link href="#">
              <span className="sr-only">FableReads</span>
              <Logo />
            </Link>
            <button
              type="button"
              onClick={toggleMobileMenuOpen}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <Button
                variant="outlined"
                className="rounded-full w-full h-[32px]"
              >
                <XIcon />
              </Button>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">
              {/* <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  Test
                </Link>
              </div> */}
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
