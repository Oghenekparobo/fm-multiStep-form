import arcadeIcon from "../images/icon-arcade.svg";
import advancedIcon from "../images/icon-advanced.svg";
import proIcon from "../images/icon-pro.svg";

export const billings = [
  {
    type: "arcade",
    icon: arcadeIcon,
    price: 9,
  },
  {
    type: "advanced",
    icon: advancedIcon,
    price: 12,
  },
  {
    type: "pro",
    icon: proIcon,
    price: 15,
  },
];

export const addOns = [
  {
    id: "online",
    name: "Online service",
    desc: "Access to multiplayer games",
    price: 10,
  },
  {
    id: "large",
    name: " Larger storage",
    desc: "Extra 1TB of cloud save",
    price: 2,
  },
  {
    id: "custom",
    name: "Customizeable profile",
    desc: "Custom view on your profile",
    price: 2,
  },
];
