import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ChevronDown, Search, ShoppingCart } from "lucide-react";
export const mediaIcons = [
  { icon: <FaInstagram />, link: "https://www.instagram.com/" },
  { icon: <FaYoutube />, link: "https://www.youtube.com/" },
  { icon: <FaFacebookF />, link: "https://www.facebook.com/" },
  { icon: <FaTwitter />, link: "https://x.com/" },
];

export const navIcons = [
  { icon: <Search />, link: "/shop#search" },
  { icon: <ShoppingCart />, link: "/cart" },
  // TODO: Restore when favorites are supported by the backend.
  // { icon: <Heart />, link: "/favorites" },
];

export const navLink = [
  { text: "Home", link: "/" },
  { text: "Shop", icon: <ChevronDown /> },
  { text: "Team", link: "/team" },
  { text: "About", link: "/about" },
  { text: "Contact", link: "/contact" },
];
