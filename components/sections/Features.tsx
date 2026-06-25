"use client";
import React from 'react';
import { UOMData } from '@/config/features';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SetupFeatures() {
  return (
    <section className="bg-white px-6 py-20 md:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <h2 className="text-center md:text-[50px] text-3xl font-semibold tracking-tight text-[#000000]">
          How you set it up once per item
        </h2>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {UOMData.map((card, index) => (
            <motion.div
              whileHover={{
                y: -5
              }}
              key={index}
              className={`relative flex flex-col justify-between rounded-2xl h-[340px] overflow-hidden ${card.bgColor} ${card.shadowColor}`}
            >
              {/* Text Group */}
              <div className="p-8">
                <h3 className={`md:text-[29px] text-[24px] font-medium ${card.textColor}`}>
                  {card.title}
                </h3>
                <p className={`mt-2 md:text-[26px] text-[20px] font-regular ${card.subtextColor}`}>
                  {card.subtitle}
                </p>
              </div>

              {/* Graphic/Illustration Area at the bottom of each card */}
              <div className="relative mt-auto h-36 w-full flex items-end justify-center">
                <div className="w-full flex flex-col justify-end">
                  {
                    card.type === "truck" && (
                      <img src={card.src.src} alt={card.title} width="100%" height="100%" className="pb-9" />
                    )
                  }
                  {
                    card.type === "normal" && (
                      <img src={card.src.src} alt={card.title} width="100%" height="100%" />
                    )
                  }
                  {
                    card.type === "advance" && (
                      <img src={card.src.src} alt={card.title} width="100%" height="100%" className="pb-14 px-9" />
                    )
                  }
                  
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}