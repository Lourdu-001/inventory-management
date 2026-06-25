import { StaticImageData } from "next/image";
import Setup1 from "@/assets/images/setup1.webp"
import Setup2 from "@/assets/images/setup2.webp"
import Setup3 from "@/assets/images/setup3.webp"

export interface UOMCard {
  title: string;
  subtitle: string;
  bgColor: string;
  textColor: string;
  subtextColor: string;
  shadowColor: string;
  src: StaticImageData;
  type: "truck" | "normal" | "advance";
}

export const UOMData: UOMCard[] = [
  {
    title: 'Purchase UOM',
    subtitle: 'How your vendor ships it',
    bgColor: 'bg-[#93cffd]', // Soft sky blue
    textColor: '#000000',
    subtextColor: 'text-gray-700',
    shadowColor: 'shadow-[0_20px_40px_-15px_rgba(147,207,253,0.5)]',
    src: Setup1,
    type: "truck"
  },
  {
    title: 'Stock UOM',
    subtitle: 'How you count it on the shelf',
    bgColor: 'bg-[#e2e0f8]', // Soft lavender
    textColor: '#000000',
    subtextColor: 'text-gray-700',
    shadowColor: 'shadow-[0_20px_40px_-15px_rgba(226,224,248,0.5)]',
    src: Setup2,
    type: "normal"
  },
  {
    title: 'Sell UOM',
    subtitle: 'How customers order it',
    bgColor: 'bg-[#0081e4]', // Bright vibrant blue
    textColor: 'text-white',
    subtextColor: 'text-blue-100',
    shadowColor: 'shadow-[0_20px_40px_-15px_rgba(0,129,228,0.4)]',
    src: Setup3,
    type: "advance"
  },
];