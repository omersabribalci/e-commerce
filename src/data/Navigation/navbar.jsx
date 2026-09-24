import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ChevronDown, Heart, Search, ShoppingCart } from "lucide-react";
export const mediaIcons = [
  { icon: <FaInstagram />, link: "https://www.instagram.com/" },
  { icon: <FaYoutube />, link: "https://www.youtube.com/" },
  { icon: <FaFacebookF />, link: "https://www.facebook.com/" },
  { icon: <FaTwitter />, link: "https://x.com/" },
];

export const navIcons = [
  { icon: <Search />, link: "/search" },
  { icon: <ShoppingCart />, link: "/cart" },
  { icon: <Heart />, link: "/favorites" },
];

export const navLink = [
  { text: "Home", link: "/" },
  { text: "Shop", icon: <ChevronDown /> },
  { text: "About", link: "/about" },
  { text: "Blog", link: "/blog" },
  { text: "Contact", link: "/contact" },
];
