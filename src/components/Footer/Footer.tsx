import Link from "next/link";
import React from "react";
import Logo from "../logo";

export const Footer: React.FC = (): React.ReactElement => {
  return (
    <footer className="divide-gray-800 divide-y-1">
      <div className="py-8">
        <div className="mx-auto container flex flex-col md:flex-row gap-4">
          <div className="p-4 rounded-lg md:max-w-1/3 shrink-0">
            <Link href="#">
              <span className="sr-only">FableReads</span>
              <Logo />
            </Link>
            <p className="text-sm mt-4 text-left">
              Our mission is to make all fables of the world accessible for all
              the world&apos;s children for free and without advertising. We
              offer a platform where parents, educators and children enjoy
              timeless stories from around the world, that foster imagination
              and critical thinking, and that encourage reflections and
              meaningful conversations about values and morals.
            </p>
          </div>

          <div className="p-4 rounded-lg grow space-y-6">
            <h3 className="font-bold text-sm">Quick Links</h3>
            <div className="grid grid-cols-1 sm:grid-rows-5 sm:grid-flow-col sm:gap-3">
              <Link href="/">Home</Link>
              <Link href="/">About FableReads</Link>
              <Link href="/">Support Our Mission</Link>
              <Link href="/">Fables from Around the World</Link>
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Modal Lessons and Themes</Link>
              <Link href="/">Newsletter and Social Media</Link>
              <Link href="/">Fable Quotes</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Contact</Link>
            </div>
          </div>

          <div className=" p-4 rounded-lg md:w-1/6 shrink-0">
            <h3 className="font-bold text-sm">Follow Us</h3>
            <div></div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-4">
        <span>Copyright© 2025 FableReads, All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
