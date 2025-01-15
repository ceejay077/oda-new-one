"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const ResponsiveWhiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services-category", label: "Services" },
    { href: "#", label: "Our Works" },
    { href: "/certificates", label: "Certificates" },
    { href: "#", label: "News" },
    { href: "#", label: "Careers" },
  ];

  return (
    <div className="w-full relative">
      <div className="bg-white backdrop-blur-sm bg-opacity-5 px-4 md:px-6 flex flex-wrap items-center justify-between w-full">
        {/* Logo Section */}
        <div className="flex items-center py-4">
          <div className="pl-0 md:pl-6">
            <img
              src="/images/oda_logo.png"
              alt="Description"
              className="h-16 md:h-20 w-auto"
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white hover:text-blue-500"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center h-32">
          <ul className="flex flex-row list-none gap-4 lg:gap-6 xl:gap-9">
            {navigationLinks.map((link) => (
              <li key={link.label} className="mx-2">
                <a
                  href={link.href}
                  className="text-white hover:text-blue-500 text-sm lg:text-base transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Us Button */}
        <div className="hidden md:flex items-center h-32 px-4 md:px-9">
          <a
            className="px-6 lg:px-12 py-2 min-w-[120px] text-center text-white border border-white rounded hover:bg-gray-600 transition-colors active:bg-gray-700 focus:outline-none focus:ring focus:ring-white/50"
            href="/download"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } absolute top-full left-0 right-0 md:hidden flex-col w-full bg-black bg-opacity-90 shadow-lg z-50`}
        >
          <nav className="px-4 py-2">
            <ul className="flex flex-col space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block py-2 text-white hover:text-blue-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="px-4 py-4 border-t border-white/10">
            <a
              className="block w-full py-2 text-center text-white border border-white rounded hover:bg-gray-600 transition-colors"
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

export default ResponsiveWhiteHeader;
