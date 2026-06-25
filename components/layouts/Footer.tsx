"use client";
import { motion } from 'framer-motion';
import React from 'react';
import { Linkedin, Facebook, Youtube } from 'lucide-react';
import { SupportLinks } from '@/config/footer';
import FooterLogo from "@/assets/images/footer-logo.webp"
import FooterMini from "@/assets/images/footer.webp"
import linkedin from "@/assets/images/socialLinks/linkedin.webp"
import facebook from "@/assets/images/socialLinks/facebook.webp"
import twitter from "@/assets/images/socialLinks/twitter.webp"
import youtube from "@/assets/images/socialLinks/youtube.webp"

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16">
      {/* Top Section: Links Grid */}
      <div className="mx-auto max-w-7xl px-6 pb-16 md:px-12">
        {/* Logo Brand Mock */}
        <div className="text-2xl font-bold tracking-tight text-[#0066cc] md:w-[35%] w-[80%]">
          <a href=""><img src={FooterMini.src} alt="site logo" width="100%" height="100%" /></a>
        </div>
        
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-20 mt-10">
          {/* Column 1: Logo & Contact Details */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-[30px] font-semibold text-[#55DD06]">
                Contact Us
              </h3>
              <p className="text-[22px] font-regular leading-[150%] text-white pb-0 mb-0">
                250 Bobwhite Ct. Suite 300<br />
                Boise, Idaho 83706.
              </p>
              <p className="text-[22px] font-regular leading-[150%] text-white">
                <span className="block">Email: <a href="mailto:info@bmobileroute.com" className="hover:underline text-gray-300 hover:text-[#55DD06]">info@bmobileroute.com</a></span>
                <span className="block mt-1">Phone: <a href="tel:1+(888) 900-5667" className="hover:text-[#55DD06]">1+(888) 900-5667</a></span>
                <span className="block">Office: <a href="tel:(208) 331-5667" className="hover:text-[#55DD06]">(208) 331-5667</a></span>
              </p>
            </div>
          </div>

          {/* Column 2: Support Links Loop */}
          <div className="space-y-4 md:pl-24">
            <h3 className="text-[30px] font-semibold text-[#55DD06]">
              Support
            </h3>
            <ul className="space-y-2">
              {SupportLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.link} 
                    className="text-[22px] font-regular leading-[150%] text-white hover:text-[#55DD06] transition-colors duration-150"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div className="space-y-4 md:pl-24">
              <h3 className="text-[30px] font-semibold text-[#55DD06]">
                  Social Media
              </h3>
              <div className="flex items-center space-x-6 text-gray-400">
                  {/* LinkedIn SVG */}
                  <motion.a whileHover={{
                    scale:1.2
                  }} href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                    <img src={linkedin.src} width="37px" height="37px" alt="linkedin" />
                  </motion.a>

                  {/* Facebook SVG */}
                  <motion.a whileHover={{
                    scale:1.2
                  }} href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                    <img src={facebook.src} width="37px" height="37px" alt="facebook" />
                  </motion.a>

                  {/* Custom X Icon Mock */}
                  <motion.a whileHover={{
                    scale:1.2
                  }} href="#" className="hover:text-white transition-colors font-bold text-sm tracking-tighter px-0.5" aria-label="X (formerly Twitter)">
                    <img src={twitter.src} width="37px" height="37px" alt="twitter" />
                  </motion.a>

                  {/* YouTube SVG */}
                  <motion.a whileHover={{
                    scale:1.2
                  }} href="#" className="hover:text-white transition-colors" aria-label="YouTube">
                    <img src={youtube.src} width="37px" height="37px" alt="youtube" />
                  </motion.a>
              </div>
          </div>
        </div>

      </div>

      {/* Bottom Section: Watermark & Copyright */}
      <div className="bg-[#0b0b0b] py-12 text-center border-t border-gray-900/40">
        <div className="mx-auto max-w-5xl px-6 flex flex-col items-center">
          
          {/* Giant Dark Decorative Watermark Logo */}
          <div className="text-4xl font-extrabold tracking-tight select-none md:text-5xl">
            <img src={FooterLogo.src} alt="" widht="" height="" />
          </div>

          {/* Legal Copyright Disclaimer */}
          <p className="mt-8 text-[24px] tracking-wide text-[#FFFFFF]">
            Copyright © bmobileroute 2026. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}