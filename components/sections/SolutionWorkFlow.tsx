import React from 'react';
import Image from 'next/image';
import Transport from "@/assets/images/Transport.webp"
import Shapes from "@/assets/images/shapes.webp"

export default function SolutionWorkflow() {
  return (
    <section className="bg-white px-6 py-20 md:px-12 lg:py-24">
      <div className="mx-auto max-w-[1358px]">
        
        {/* Top Accent Line and Heading */}
        <div className="mb-12">
          <div className="h-1 w-[15%] bg-[#1ECF6A] mb-4" />
          <h2 className="md:text-[50px] text-3xl font-medium tracking-tight text-gray-900 md:max-w-[50%] leading-tight">
            The same situation made right with bMobile
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          
          {/* Left Column Stack (Image + Setup + Demand) */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* 1. Main Brand/Driver Image Card */}
            <div className="relative h-[353px] bg-gray-100 overflow-hidden sm:col-span-2">
              {/* Replace with an actual background image asset when available */}
              <div className="absolute inset-0 z-10 bg-cover" style={{ backgroundImage : `url(${Transport.src })`}} />
              <div className="absolute inset-0 flex flex-col justify-end p-14 z-20">
                <span className="text-[46px] font-medium text-white tracking-wide">bMobile</span>
              </div>
            </div>

            {/* 2. Setup For Item Card */}
            <div className="bg-[#0F5045] text-white px-10 py-12 flex flex-col justify-between min-h-[220px]">
              <div>
                <h3 className="text-[#1ECF6A] font-medium text-[30px] mb-4">Setup for the item:</h3>
                <ul className="space-y-4 text-[19px] font-medium text-[#FFFFFF]">
                  <li><span className="">Purchase UOM:</span> Case 24</li>
                  <li><span className="">Stock UOM:</span> Case</li>
                  <li><span className="">Sell UOM:</span> Each and Pack 6</li>
                  <li><span className="">Conversions:</span> 1 Case = 24 Each. 1 Pack = 6 Each</li>
                </ul>
              </div>
            </div>

            {/* 3. Same Demand Card */}
            <div className="bg-[#F5D5B5] text-gray-900 px-10 py-6 flex flex-col justify-between md:min-h-[220px] min-h-[360px] relative overflow-hidden relative">
              <div className="z-10">
                <h3 className="font-medium text-[30px] text-[#000000]">Same Demand</h3>
                <p className="mt-2 text-[19px] font-medium text-[#000000] inline-block pt-2 rounded">
                  Presale: 3 Packs and 10 Each
                </p>
                <img className="absolute bottom-0 left-0" src={Shapes.src} width="100%" height="100%" alt="shapes" />
              </div>
            </div>

          </div>

          {/* Right Column Stack (What bMobile does + Result) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            
            {/* 4. What bMobile Does Card */}
            <div className="bg-[#0F5045] text-white p-6 flex-1">
              <h3 className="text-[#4ade80] font-medium text-[30px] mb-6">What bMobile does</h3>
              
              <div className="space-y-5 ">
                <div>
                  <div className="flex items-center space-x-4 text-[19px] font-regular text-white">
                    <span className="h-2 w-2 rounded-full bg-[#1ECF6A]" />
                    <span>Presale totals are converted to Each for math.</span>
                  </div>
                  <p className="mt-3 pl-5 text-[19px] font-regular">3 Packs = 18 Each. Plus 10 Each = 28 Each</p>
                </div>

                <div>
                  <div className="flex items-center space-x-4 text-[19px] font-regular text-white">
                    <span className="h-2 w-2 rounded-full bg-[#1ECF6A]" />
                    <span>Pick Planner groups lines.</span>
                  </div>
                  <p className="mt-3 pl-5 text-[19px] font-regular">Shows 1 Case (24) plus 4 loose for a single clean pull</p>
                </div>

                <div>
                  <div className="flex items-center space-x-4 text-[19px] font-regular text-white">
                    <span className="h-2 w-2 rounded-full bg-[#1ECF6A]" />
                    <span>Package Planner builds one carton and one small box</span>
                  </div>
                  <p className="mt-3 pl-5 text-[19px] font-regular">Drivers see the same units on the same units on the route sheet. </p>
                </div>

                <div>
                  <div className="flex items-center space-x-4 text-[19px] font-regular text-white">
                    <span className="h-2 w-2 rounded-full bg-[#1ECF6A]" />
                    <span>Purchase plan looks at reorder points in cases</span>
                  </div>
                  <p className="mt-3 pl-5 text-[19px] font-regular">If the shelf will drop below threshold after these picks, it recommends 1 Case on the PO</p>
                </div>
              </div>
            </div>

            {/* 5. Result Callout Card */}
            <div className="bg-[#1FBB62] text-white p-5">
              <h4 className="text-[30px] font-medium text-white">Result:</h4>
              <p className="mt-1 text-[19px] font-regular leading-relaxed text-[#FFFFFF]">
                the right product leaves the dock, the shelf count matches the book count, and there is no credit call later.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}