"use client";
import React from 'react';
import Problem1 from "@/assets/images/problem/problem1.webp"
import Problem2 from "@/assets/images/problem/problem2.webp"
import Problem3 from "@/assets/images/problem/problem3.webp"
import Problem4 from "@/assets/images/problem/problem4.webp"
import Connection from "@/assets/images/connections.webp"
import { motion } from 'framer-motion';

// Define data structure for the problem cards
const problems = [
  {
    title: `"Case vs. each" mismatches:`,
    description: "wrong picks, short trucks, odd credits.",
    pic: Problem1,
    illustration: (
      <div className="flex h-16 w-20 items-center justify-center rounded-lg bg-[#d1fae5]">
        {/* Placeholder for illustration in image_07521e.png / user upload */}
        <span className="text-xs font-bold text-[#113826]">📦 vs 📄</span>
      </div>
    ),
  },
  {
    title: "Book vs. shelf gaps:",
    description: "cycle counts balloon and month-end turns manual.",
    pic: Problem2,
    illustration: (
      <div className="flex h-16 w-20 items-center justify-center rounded-lg bg-[#d1fae5]">
        <span className="text-xs font-bold text-[#113826]">📚 🔍</span>
      </div>
    ),
  },
  {
    title: "Duplicate SKUs for the same item",
    description: "in different packs: confusion and double counting.",
    pic: Problem3,
    illustration: (
      <div className="flex h-16 w-20 items-center justify-center rounded-lg bg-[#d1fae5]">
        <span className="text-xs font-bold text-[#113826]">🆔 ❌</span>
      </div>
    ),
  },
  {
    title: "Slower ops:",
    description: "people doing math at the dock, on the picker screen, and on the route sheet.",
    pic: Problem4,
    illustration: (
      <div className="flex h-16 w-20 items-center justify-center rounded-lg bg-[#d1fae5]">
        <span className="text-xs font-bold text-[#113826]">⏱️ 📋</span>
      </div>
    ),
  },
];

export default function ProblemFix() {
  return (
    <section className="bg-gradient-to-b from-[#B7E4C7] to-white px-6 pt-20 pb-28 md:px-12">
      <div className="mx-auto max-w-[1100px]">
        
        {/* Section Heading */}
        <h2 className="text-center font-sans text-3xl font-bold tracking-tight text-[#000000] md:text-[50px]">
          The problem we fix
        </h2>

        {/* 2x2 Problems Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {problems.map((prob, idx) => (
              <motion.div 
                          whileHover={{
                y: -8,
              }}
              transition={{
                duration: .2
              }}
              key={idx} 
              className="flex items-center space-x-6 rounded-xl border-[2px] border-[#23AE31] px-6 py-9 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <img src={ prob.pic.src} width="100%" height="100%" alt={prob.title} className="flex-none w-[40%]" />
              <div className="text-[18px] text-[#000000] leading-relaxed pt-1">
                {prob.title} {prob.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Middle Solution Text */}
        <div className="mx-auto mt-24 w-[90%] text-center">
          <p className="md:text-[28px] text-[20px] font-regular text-black md:text-[28px] leading-relaxed">
            Multi-UOM tracking is the proven fix. It sets a base unit, links related units 
            with conversions, and lets you choose the default unit for buying, 
            stocking, picking, and selling.
          </p>
        </div>

        {/* Dynamic Diagram Section */}
        <div className="mt-16 flex flex-col items-center justify-center py-10">
          {/* Main Network Visual Wrapper */}
          <div className="relative flex w-full flex-col items-center justify-between sm:flex-row gap-8 sm:gap-0">
             <img src={Connection.src} alt="Multi UOM Tracking" width="" height="" />
          </div>
        </div>
      </div>
    </section>
  );
}
