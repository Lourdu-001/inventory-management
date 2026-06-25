"use client";
import { motion } from 'framer-motion';
import React from 'react';
import { BenefitsData } from '@/config/benefits';
import Image from 'next/image';

export default function BenefitsGrid() {
  return (
    <section className="bg-gradient-to-b from-[#dbeafe] to-white px-6 py-20 text-center md:px-12 md:pt-20 md:pb-42">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Heading */}
        <h2 className="md:text-[49px] text-3xl font-semibold tracking-tight text-gray-900">
          What you get on day one
        </h2>

        {/* 4-Column Grid */}
        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {
            BenefitsData.map((benefit, index) => (
              <motion.div
                whileHover={{
                  y: -6
                }}
                key={index}
                className="flex flex-col items-center justify-start rounded-2xl border-[2px] border-[#09B054] bg-white px-5 py-14 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                {/* Rounded Icon Container */}
                <div className="flex h-14 w-78 items-center justify-center rounded-full text-[#16a34a]">
                  <Image src={benefit.icon} alt={ benefit.title } width={78} height={150} />
                </div>

                {/* Card Content */}
                <h3 className="mt-6 text-[28px] font-semibold text-gray-950">
                  {benefit.title}
                </h3>
                
                <p className="mt-3 text-[20px] font-regular leading-relaxed text-[#000000]">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}