import { BlogType, ServiceType, StepType, TestimonialSlideType } from "./type";
import {
  LuClipboardSignature,
  LuContact2,
  LuFolderKanban,
  LuImage,
  LuMapPin,
  LuNetwork,
  LuNewspaper,
  LuSend,
  LuStore,
} from "react-icons/lu";
const investmentSteps: StepType[] = [
  {
    title: "Crafting Your Path Forward",
    description:
      "Businesses purchase products in substantial quantities for distribution to consumers.",
    icon: LuMapPin,
  },
  {
    title: "Executing Your Strategy",
    description:
      "Consumers acquire products in smaller volumes suited for personal use.",
    icon: LuSend,
  },
  {
    title: "Enhancing Through Empowerment",
    description:
      "The market for businesses to target is relatively smaller compared to direct consumers.",
    icon: LuNetwork,
  },
];

const services: ServiceType[] = [
  {
    title: "Search Engine Optimization",
    icon: LuNewspaper,
  },
  {
    title: "Social Media Marketing",
    icon: LuFolderKanban,
  },
  {
    title: "E-commerce Solutions",
    icon: LuClipboardSignature,
  },
  {
    title: "Pay-Per-Click Advertising",
    icon: LuStore,
  },
  {
    title: " Branding  Strategy",
    icon: LuContact2,
  },
  {
    title: "Marketing Copywriting",
    icon: LuImage,
  },
];
export { investmentSteps, services };
