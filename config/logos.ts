
import { StaticImageData } from "next/image";
import Logo1 from "../assets/images/logos/logo1.jpg"
import Logo2 from "../assets/images/logos/logo2.jpg"
import Logo3 from "../assets/images/logos/logo3.jpg"
import Logo4 from "../assets/images/logos/logo4.jpg"
import Logo5 from "../assets/images/logos/logo5.jpg"
import Logo6 from "../assets/images/logos/logo6.jpg"
import Logo7 from "../assets/images/logos/logo7.jpg"
import Logo8 from "../assets/images/logos/logo8.jpg"
import Logo9 from "../assets/images/logos/logo9.jpg"
import Logo10 from "../assets/images/logos/logo10.jpg"

// pic/config/menu.ts
export interface Logos {
  name: string;
  pic: StaticImageData;
}

export const ClientLogos: Logos[] = [
  { name: 'Mill Creek Coffee Company', pic: Logo1 },
  { name: 'Old Vienna', pic: Logo2 },
  { name: 'Rodriguez Bakery', pic: Logo3 },
  { name: "Gabriel's Bakery", pic: Logo4 },
  { name: 'Glacier', pic: Logo5 },
  { name: 'Lemate', pic: Logo6 },
  { name: 'Yolo Ice & Creamery', pic: Logo7 },
  { name: 'Sinaloa', pic: Logo8 },
  { name: 'Taco Works', pic: Logo9 },
  { name: 'Kurz', pic: Logo10 },
];