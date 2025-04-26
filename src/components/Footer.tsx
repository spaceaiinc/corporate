"use client";
import { Fragment } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import logoDark from "@/assets/images/logo-dark.svg";
import logoLight from "@/assets/images/logo-light.svg";
import Link from "next/link";
import Image from "next/image";
import { LuMail } from "react-icons/lu";

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

export const enFooterLinks: FooterLink[] = [
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
    ],
  },
];

export const jaFooterLinks: FooterLink[] = [
  {
    title: "運営情報",
    items: [
      {
        name: "私たちについて",
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

const Footer = () => {
  const pathname = usePathname();
  const isJapanese = pathname.startsWith("/ja");

  const footerLinks = isJapanese ? jaFooterLinks : enFooterLinks;

  // const subscribeFormSchema = yup.object({
  //   email: yup
  //     .string()
  //     .email("Please enter a valid email")
  //     .required("Please enter your email"),
  // });

  // const { control, handleSubmit } = useForm({
  //   resolver: yupResolver(subscribeFormSchema),
  // });

  return (
    <footer>
      <div className="border-t border-default-200">
        <div className="container py-20">
          <div className="grid gap-10 md:grid-cols-3 lg:gap-16 xl:grid-cols-5">
            <div className="md:col-span-3 xl:col-span-2">
              <div>
                <Link href="">
                  <Image
                    src={logoDark}
                    height={40}
                    width={147}
                    alt="logo"
                    className="flex h-10 dark:hidden"
                  />
                  <Image
                    src={logoLight}
                    height={40}
                    width={147}
                    alt="logo"
                    className="hidden h-10 dark:flex"
                  />
                </Link>
                <ul className="flex flex-col gap-3 mt-6">
                  <li>
                    <div className="group flex items-center gap-5">
                      <Link
                        href="mailto:info@spaceai.jp"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-default-300 text-default-800 transition-all duration-700 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                          <LuMail className="h-5 w-5" />
                        </div>
                      </Link>
                      <h5 className="text-base font-medium text-default-800">
                        info@spaceai.jp
                      </h5>
                    </div>
                  </li>
                </ul>
                {/* <p className="mt-6  text-base">
                  Integer auctor aliquet martor, sed lorem malesuada eros
                  blandit eget. Proin lacinia mortoc id odio vestibulum.
                </p>
                <form
                  onSubmit={handleSubmit(() => {})}
                  className="mt-6 space-y-2"
                >
                  <TextFormInput
                    name="email"
                    type="email"
                    fullWidth
                    className="h-12 w-full rounded-lg bg-default-100 py-4 pe-16 ps-4 text-default-950 placeholder:text-default-600"
                    placeholder="Enter Your Email"
                    endButton={
                      <button
                        type="submit"
                        className="absolute end-[6px] top-[6px] inline-flex h-9 items-center justify-center gap-2 rounded-md px-6 text-primary transition-all duration-500 hover:bg-primary hover:text-white"
                      >
                        <LuMoveRight className="h-6 w-6" />
                      </button>
                    }
                    control={control}
                  />
                </form> */}
              </div>
            </div>
            {footerLinks.map((item, idx) => {
              return (
                <div key={idx}>
                  <ul className="flex flex-col gap-3">
                    <h5 className="mb-2 font-medium text-default-800 lg:text-lg xl:text-xl">
                      {item.title}
                    </h5>
                    {item.items.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <Fragment key={idx}>
                          {Icon ? (
                            <li>
                              <div className="group flex items-center gap-5">
                                <Link
                                  target={item.isExternal ? "_blank" : ""}
                                  rel={
                                    item.isExternal ? "noopener noreferrer" : ""
                                  }
                                  passHref={item.isExternal}
                                  href={`${item.link ? item.link : ""}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-default-300 text-default-800 transition-all duration-700 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                                    <Icon className="h-5 w-5" />
                                  </div>
                                </Link>
                                <h5 className="text-base font-medium text-default-800">
                                  {item.name}
                                </h5>
                              </div>
                            </li>
                          ) : (
                            <li>
                              <Link
                                target={item.isExternal ? "_blank" : ""}
                                rel={
                                  item.isExternal ? "noopener noreferrer" : ""
                                }
                                passHref={item.isExternal}
                                href={`${item.link ? item.link : ""}`}
                                className="text-base text-default-700 transition-all hover:text-default-950"
                              >
                                {item.name}
                              </Link>
                            </li>
                          )}
                        </Fragment>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="py-4">
          <div className="container flex h-full flex-wrap items-center justify-center text-center md:justify-between md:text-start">
            <p className="text-base text-default-900">
              © {new Date().getFullYear()} Space AI{isJapanese ? " Inc." : ""}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
