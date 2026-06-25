"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ProblemSteps } from '@/config/problemSteps';
import Bottle from "@/assets/images/bottle.webp"
import Image from 'next/image';
import mobilephone from "@/assets/images/holdingmobilephone.webp"

export default function RealLifeProblem() {
  return (
    <section className="bg-[#D3F8E0] px-6 py-20 md:px-2 lg:py-24">
      <div className="mx-auto md:ms-[6rem]">
        
        {/* Section Title */}
        <div className="text-center">
          <h2 className="md:text-[50px] text-3xl font-semibold tracking-tight text-[#000000]">
            Where it goes wrong in real life
          </h2>
          <p className="mt-3 md:text-[29px] text-[24px] font-regular text-[#000000]">
            Item: Sparkling Tea 500 ml
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="md:mt-26 mt-20 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
          
          {/* Left Column: Timeline Steps */}
          <div className="lg:col-span-7">
            <h3 className="md:mb-10 mb-5 md:text-[29px] text-[25px] font-medium text-[#000000] pl-8">
              Reality in the field:
            </h3>

            {/* Custom Vertical Dashed Timeline */}
            <div className="relative pl-7">
              {/* Vertical Dashed Border Line */}
              <div className="absolute bottom-2 left-[7px] top-2 w-[2px] border-l-4 border-dashed border-[#10b981]" />

              <div className="space-y-6">
                {ProblemSteps.map((step, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Glowing Timeline Node Indicator */}
                    <div className="absolute left-[-30px] mt-2.5 h-5 w-5 rounded-full bg-[#10b981] ring-4 ring-offset-4 ring-offset-slate-50 shadow-lg ring-[#e2f6e9]" />
                    <p className="md:text-[29px] text-[24px] font-regular text-[#000000] pl-2">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Floating Overlap Graphical Montage */}
          <div className="relative flex justify-center lg:col-span-5 lg:justify-end lg:mt-0 mt-20">
            <div className="relative h-[100%] w-full max-w-[100%] rounded-t-3xl rounded-br-3xl bg-[#62b98a] overflow-visible">
              
              {/* Main Operator Image / Placeholder */}
              <div className="lg:absolute inset-0 flex items-end justify-center overflow-hidden rounded-t-3xl rounded-br-3xl">
                {/* When available, swap this with an optimized <Image /> component or asset path */}
                <div className="text-center text-xs font-semibold text-[#113826]">
                  <img src={mobilephone.src} alt="A guy holiding a mobile phone" width="100%" height="100%" />
                </div>
              </div>

              {/* Floating Top Left Product Card */}
              <div className="absolute lg:-left-22 -left-2 -top-14 flex md:h-60 md:w-66 w-26 h-26 md:px-0 px-4 items-center justify-center rounded-2xl bg-white shadow-xl">
                {/* <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#c2ebd4]">
                  <div className="absolute inset-1 rounded-full border-2 border-[#a4dec0]" />

                  <div className="z-10 h-8 w-3 rounded-sm bg-amber-600 border border-amber-800" />
                </div> */}
                <Image src={Bottle} alt="" width={190} height={100} />
              </div>

              {/* Floating Bottom Input UI Mock */}
              <div className="absolute -bottom-10 left-20 flex w-[42%] items-center space-x-3 rounded-lg bg-white px-8 py-6 shadow-lg">
                <div className="h-9 w-9 rounded-full border-2 ring-5 ring-[#B6E0C5] border-[#B6E0C5]" />
                <div className="flex-1 space-y-1.5">
                  <div className="h-2.5 w-full rounded bg-[#a4dec0]" />
                  <div className="h-2.5 w-[85%] rounded bg-[#c2ebd4]" />
                  <div className="h-2.5 w-[50%] rounded bg-[#c2ebd4]" />
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Error Section Summary */}
        <div className="mt-16 pt-10">
          <motion.button  whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: .95
            }} className="inline-flex items-center rounded-full bg-[#DB3636] px-6 py-3 md:text-[25px] text-[20px] font-medium text-white">
            What failed
          </motion.button>
          <p className="mt-6 md:text-[30px] text-[25px] leading-relaxed text-gray-900 font-regular">
            The system did not convert order quantity into right Units of Measure, so &ldquo;Pack&rdquo; and &ldquo;Each&rdquo; were treated like different items. The pick list was not unit-aware, so the team picked the wrong amount.
          </p>
        </div>

      </div>
    </section>
  );
}