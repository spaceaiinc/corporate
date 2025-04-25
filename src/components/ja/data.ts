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
    title: "運営情報",
    items: [
      {
        name: "概要",
        link: "/ja/#about",
      },
      {
        name: "サービス",
        link: "/ja/#services",
      },
      {
        name: "メディア",
        link: "/ja/#media",
      },
      {
        name: "お問い合わせ",
        link: "/ja/contact",
      },
      {
        name: "プライバシーポリシー",
        link: "/ja/privacy-policy",
      },
      {
        name: "セキュリティについて",
        link: "/ja/security",
      },
      {
        name: "特定商取引法に基づく表示",
        link: "/ja/transactions-act",
      },
    ],
  },
  {
    title: "サービス",
    items: [
      {
        name: "Linked",
        link: "https://linked.spaceai.jp",
        isExternal: true,
      },
      {
        name: "V Teacher",
        link: "https://vteacher.spaceai.jp",
        isExternal: true,
      },
    ],
  },
  {
    title: "SNS",
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
    ],
  },
];
