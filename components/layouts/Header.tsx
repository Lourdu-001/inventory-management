"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

import { MenuItems } from "@/config/menu";
import SiteLogo from "../../assets/images/site-logo.webp";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="lg:h-[70px] h-[30px] bg-[#BCE6CB]"></div>

      <div className="px-6 py-4 lg:px-12 mx-auto flex max-w-[1419px] items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-[187px]">
            <a href="#">
              <img
                src={SiteLogo.src}
                width="100%"
                height="100%"
                alt="Site Logo"
              />
            </a>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-14">
          {MenuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-[22px] font-medium text-black hover:text-[#5F9D6D] transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Spacer */}
        <div className="hidden lg:block w-20"></div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-gray-200 bg-white"
          >
            <div className="flex flex-col px-6 py-2">
              {MenuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="py-4 text-lg font-medium border-b border-gray-100 hover:text-[#5F9D6D] transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}