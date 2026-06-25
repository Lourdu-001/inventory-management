import { Target, Gauge, ShoppingCart, RefreshCw } from 'lucide-react';
import Benefit1 from "../assets/images/Icons/benefits1.webp"
import Benefit2 from "../assets/images/Icons/benefits2.webp"
import Benefit3 from "../assets/images/Icons/benefits3.webp"
import Benefit4 from "../assets/images/Icons/benefits4.webp"

export interface BenefitCard {
  title: string;
  description: string;
  icon: string;
}

export const BenefitsData: BenefitCard[] = [
  {
    title: 'Accuracy',
    description: 'The right unit appears on the right screen. Errors drop.',
    icon: Benefit1,
  },
  {
    title: 'Speed',
    description: 'Receiving, picking and packing move faster with automatic conversion.',
    icon: Benefit2,
  },
  {
    title: 'Clean purchasing',
    description: 'POs match vendor packs. No odd leftovers.',
    icon: Benefit3,
  },
  {
    title: 'Shorter cycle counts',
    description: 'Accounting stock stays close to physical stock.',
    icon: Benefit4,
  },
];