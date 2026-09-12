import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Heart, Search, ShoppingCart } from "lucide-react";
export const mediaIcons = [
  { icon: <FaInstagram />, link: "/" },
  { icon: <FaYoutube />, link: "/" },
  { icon: <FaFacebookF />, link: "/" },
  { icon: <FaTwitter />, link: "/" },
];

export const navIcons = [
  { icon: <Search />, link: "/", badge: null },
  { icon: <ShoppingCart />, link: "/", badge: 1 },
  { icon: <Heart />, link: "/", badge: 1 },
];

export const navLink = [
  { text: "Home", link: "/" },
  { text: "Shop", link: "/", dropdown: true },
  { text: "About", link: "/" },
  { text: "Blog", link: "/" },
  { text: "Contact", link: "/" },
  { text: "Pages", link: "/" },
];
