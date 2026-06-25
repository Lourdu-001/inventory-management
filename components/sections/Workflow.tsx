"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Workflow from "../../assets/images/workflow.webp"
import workflowIcon1 from "@/assets/images/workflow/workflowIcon1.webp"
import workflowIcon2 from "@/assets/images/workflow/workflowIcon2.webp"
import workflowIcon3 from "@/assets/images/workflow/workflowIcon3.webp"
import workflowIcon4 from "@/assets/images/workflow/workflowIcon4.webp"
import workflowIcon5 from "@/assets/images/workflow/workflowIcon5.webp"
import workflowIcon6 from "@/assets/images/workflow/workflowIcon6.webp"

// Data mapping for the 6-card feature grid
const workflowSteps = [
  {
    icon: workflowIcon1,
    title: 'Presale',
    description: 'A rep enters Case 24 for soda. If another rep adds 10 each, we keep both lines correct.',
  },
  {
    icon: workflowIcon2,
    title: 'Purchase planning',
    description: 'Presale becomes a forecasted purchase. We switch to the vendor unit so the PO reads in the pack they accept, for example 1 case or 24 each.',
  },
  {
    icon: workflowIcon3,
    title: 'Receiving',
    description: 'When goods arrive, quantities land in the stock UOM you chose. If you stock by pack 6, we put it on the shelf as packs.',
  },
  {
    icon: workflowIcon4,
    title: 'Pick Planner',
    description: 'All demand is converted into the pick unit and totaled in that unit. The picker sees full cases plus any loose pieces, for example 3 cases and 4 loose, as one clear pick.',
  },
  {
    icon: workflowIcon5,
    title: 'Pack Planner',
    description: 'We switch again into the pack UOM that matches cartons or route totes, so packing is clean.',
  },
  {
    icon: workflowIcon6,
    title: 'Delivery',
    description: 'Drivers see the right unit on the manifest. No last-minute math.',
  },
];

export default function UomWorkflow() {
  return (
    <section className="bg-[#0F5045] px-6 py-20 text-white md:px-12 lg:py-22">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Strings */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#07F170] sm:text-4xl md:text-[50px] leading-[130%]">
            The bMobile way: UOM that runs <br className="hidden sm:inline" /> through the whole flow
          </h2>
          <p className="mt-8 text-base text-gray-300 md:text-[26.3px]">
            Plain promise: bMobile converts Units of Measure automatically at every step
          </p>
        </div>

        {/* 1. Workflow Visual Graphic Area */}
        <div className="mt-22 mb-34 flex justify-center">
          {/* 
            Export the diagram from image_07521e.png as an asset.
            This gives you seamless, responsive rendering without broken CSS lines.
          */}
          <Image 
            src={Workflow} 
            alt="UOM Process Flow Chart" 
            width={1256}
            height={100}
            className="w-full object-contain"
          />
        </div>

        {/* 2. Features Grid Layout (Matching the bordered grid card style) */}
        <div className="overflow-hidden rounded-2xl border border-[#0F5045] bg-[#e6f4ed] text-gray-900 shadow-xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#c3e3d2]">
          
          {/* Top Row / First 3 elements wrapper for responsive boundary row-splits */}
          {workflowSteps.map((step, idx) => {
            // Logic to handle internal horizontal border rows inside the CSS grid framework safely
            const isBottomRow = idx >= 3;
            const isLastColumn = (idx + 1) % 3 === 0;
            
            return (
              <motion.div 
                whileHover={{
                scale: 1.02
                }}
                key={idx} 
                className={`
                  px-12 py-7
                  flex flex-col justify-start space-y-4
                  ${!isLastColumn ? "md:border-r-4 border-[#0F5045]" : ""}
                  ${isBottomRow ? "md:border-t-[3.5px] border-[#0F5045]" : ""}
                `}
              >
                {/* Micro-Icon Wrapper Box */}
                <div className="rounded-lg p-3 shadow-lg w-[54px]">
                  <img src={step.icon.src} alt={step.title} width="100%" height="100%" className="w-[100%]" />
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-[26px] font-medium tracking-tight text-[#000000]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[15px] font-regular leading-relaxed text-[#000000]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}