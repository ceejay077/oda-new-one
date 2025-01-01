"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const ResponsiveHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "#", label: "About Us" },
    { href: "#", label: "Services" },
    { href: "#", label: "Our Works" },
    { href: "#", label: "Certificates" },
    { href: "#", label: "News" },
    { href: "#", label: "Careers" },
  ];

  return (
    <div className="relative">
      <div className="bg-white backdrop-blur-sm bg-opacity-5 px-4 md:px-6 flex flex-wrap items-center justify-between w-full">
        {/* Logo Section */}
        <div className="flex items-center py-4">
          <img
            src="/images/oda_logo.png"
            alt="Description"
            className="h-16 md:h-20 w-auto"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex flex-row list-none gap-4 lg:gap-8 xl:gap-12">
            {navigationLinks.map((link) => (
              <li key={link.label} className="mx-2">
                <a
                  href={link.href}
                  className="text-black hover:text-blue-500 text-sm lg:text-base"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Us Button */}
        <div className="hidden md:flex items-center">
          <a
            className="px-6 lg:px-12 py-2 text-sm lg:text-base min-w-[120px] text-center text-blue border border-blue rounded hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring"
            href="/download"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } absolute top-full left-0 right-0 md:hidden flex-col w-full bg-white shadow-lg z-50`}
        >
          <nav className="px-4 py-2">
            <ul className="flex flex-col space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block py-2 text-black hover:text-blue-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="px-4 py-4 border-t">
            <a
              className="block w-full py-2 text-center text-blue border border-blue rounded hover:bg-gray-100"
              href="/download"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveHeader;
