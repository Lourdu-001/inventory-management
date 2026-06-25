// src/config/menu.ts
export interface MenuItem {
  name: string;
  link: string;
}

export const MenuItems: MenuItem[] = [
  { name: "Products", link: "#" },
  { name: "Industry", link: "#" },
  { name: "Resources", link: "#" },
  { name: "Contact Us", link: "#" },
];