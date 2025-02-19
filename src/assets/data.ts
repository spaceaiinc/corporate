import { IconType } from "react-icons";
import {
  LuFacebook,
  LuGithub,
  LuLinkedin,
  LuSignalMedium,
} from "react-icons/lu";

export type FooterLink = {
  title: string;
  items: {
    name: string;
    link: string;
    icon?: IconType;
    isExternal?: boolean;
  }[];
};

export const footerLinks: FooterLink[] = [
  {
    title: "Organization",
    items: [
      {
        name: "About",
        link: "/#about",
      },
      {
        name: "Services",
        link: "/#services",
      },
      {
        name: "Media",
        link: "/#media",
      },
      {
        name: "Contact",
        link: "/contact",
      },
      {
        name: "Privacy Policy",
        link: "/privacy-policy",
      },
      {
        name: "Security",
        link: "/security",
      },
      {
        name: "Transactions Act",
        link: "/transactions-act",
      },
    ],
  },
  {
    title: "Services",
    items: [
      {
        name: "Linked",
        link: "https://linked.spaceai.jp",
        isExternal: true,
      },
      {
        name: "Lab",
        link: "https://lab.spaceai.jp",
        isExternal: true,
      },
      // {
      //   name: "Auto Scout",
      //   link: "https://autoscout.spaceai.jp",
      //   isExternal: true,
      // },
      {
        name: "V Teacher",
        link: "https://vteacher.spaceai.jp",
        isExternal: true,
      },
    ],
  },
  {
    title: "Social Media",
    items: [
      {
        name: "GitHub",
        icon: LuGithub,
        link: "https://github.com/spaceaiinc",
        isExternal: true,
      },
      {
        name: "Linkedin",
        icon: LuLinkedin,
        link: "https://www.linkedin.com/in/hidenari-yuda",
        isExternal: true,
      },
      {
        name: "Facebook",
        link: "http://facebook.com/hideyuda",
        icon: LuFacebook,
        isExternal: true,
      },
      {
        name: "Medium",
        icon: LuSignalMedium,
        link: "https://medium.com/@hideyuda",
        isExternal: true,
      },
      // {
      //   name: 'Instagram',
      //   icon: LuInstagram,
      //   link: ''
      // },
      // {
      //   name: 'X(Twitter)',
      //   icon: LuTwitter,
      //   link: ''
      // },
    ],
  },
];

// export const landingPages: LandingPage[] = [
//   {
//     name: "Agency",
//     link: "/landing/agency",
//   },
//   {
//     name: "Agency Two",
//     link: "/landing/agency-2",
//   },
//   {
//     name: "Charity",
//     link: "/landing/charity",
//   },
//   {
//     name: "Company",
//     link: "/landing/company",
//   },
//   {
//     name: "Creative",
//     link: "/landing/creative",
//   },
//   {
//     name: "Ebook",
//     link: "/landing/ebook",
//   },
//   {
//     name: "Finance",
//     link: "/landing/finance",
//   },
//   {
//     name: "Hosting",
//     link: "/landing/hosting",
//   },
//   {
//     name: "Marketing",
//     link: "/landing/marketing",
//   },
//   {
//     name: "Marketing 2",
//     link: "/landing/marketing-2",
//   },
//   {
//     name: "Marketing 3",
//     link: "/landing/marketing-3",
//   },
//   {
//     name: "Photography",
//     link: "/landing/photography",
//   },
//   {
//     name: "Portfolio",
//     link: "/landing/portfolio",
//   },
//   {
//     name: "Portfolio 2",
//     link: "/landing/portfolio-2",
//   },
//   {
//     name: "Startup",
//     link: "/landing/startup",
//   },
//   {
//     name: "Web Designer",
//     link: "/landing/web-designer",
//   },
// ];
