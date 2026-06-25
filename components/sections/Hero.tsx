
"use client";
import React from 'react';
import Banner from '@/assets/images/banner.webp'
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section style={{
    backgroundImage: `url(${Banner.src})`,
    backgroundSize: "cover",
  }} className="relative flex flex-col items-center justify-center px-6 py-20 text-center text-white overflow-hidden">
      {/* Subtle Grid Background Overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Main Heading */}
        <motion.h1 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8 }} className="text-4xl font-semibold leading-[120%] tracking-tight sm:text-5xl md:text-7xl pt-2">
          <span className="text-[#86efac]text-4xl font-bold bg-gradient-to-r from-[#71BF44] from-35% via-[#6FC1FF] via-45%% to-[#71BF44] bg-clip-text text-transparent inline-block">Inventory that speaks</span> your
          <span className="mt-2 lg:block inline">units at every stage</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: .3,
            duration: .8
          }}
          className="mx-auto mt-8 max-w-2xl text-base text-[#FFFFFF] md:text-2xl">
            When units are clear, mistakes drop, cycle counts shrink, <br className="hidden sm:inline" />
          and profit improves.
        </motion.p>

        {/* Feature Pill Box */}
        <div className="mt-10 max-w-[90%] mx-auto rounded-xl border border-[#1ECF6A] px-5 py-4 text-lg text-white shadow-inner">
          Buy in one unit, stock in another, sell in a third. We convert it for you so counts stay right and orders move fast.
        </div>

        {/* CTA Button */}
        <div className="mt-10 mb-6">
          <motion.button
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: .95
            }}
            className="cursor-pointer border rounded-[5px] bg-[#007B37] hover:bg-green-900 px-8 py-3 text-[15px] font-bold text-white transition-colors duration-200 hover:bg-[#007a40] focus:outline-none focus:ring-2 focus:ring-[#86efac] focus:ring-offset-2 focus:ring-offset-[#113826]">
            Request a Demo
          </motion.button>
        </div>
      </div>
    </section>
  );
}
