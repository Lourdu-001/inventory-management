import React from 'react';
import Image from 'next/image';
import { ClientLogos } from '../../config/logos'

export default function Logos() {
  return (
    <section className="bg-white px-6 py-20 text-center md:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        
        {/* Headings with an elegant Serif styling to match the screenshot */}
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          The Operators who live on the route choose bmobile
        </h2>
        <p className="mt-4 font-serif text-lg text-gray-600 md:text-[29px] leading-[43px]">
          Real distribution. Real miles. Real results.
        </p>

        {/* Logos Grid */}
        <div className="mt-16 grid grid-cols-2 items-center justify-items-center gap-x-5 md:gap-y-16 gap-y-10 sm:grid-cols-3 md:gap-x-12 lg:grid-cols-5">
          {ClientLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex h-32 w-full md:max-w-[300px] items-center justify-center transition-opacity duration-200 hover:opacity-100"
            > 
              <img src={logo.pic.src} width="100%" height="100%" alt={`${logo.name} logo`} className="max-h-full max-w-full object-contain filter md:grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
