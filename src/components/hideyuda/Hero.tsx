"use client";
import Image from "next/image";
import Link from "next/link";

import backgroundImg from "@/assets/images/bg.png";
import backgroundDarkImg from "@/assets/images/bg-dark.jpg";

import hideyudaImg from "@/assets/images/members/hideyuda.jpg";
import typeScriptLogo from "@/assets/images/brand/TypeScript.svg";
import reactLogo from "@/assets/images/brand/React-Light.svg";
import nextJsLogo from "@/assets/images/brand/NextJS-Light.svg";
import firebaseLogo from "@/assets/images/brand/Firebase-Light.svg";
import golangLogo from "@/assets/images/brand/GoLang.svg";
import pythonLogo from "@/assets/images/brand/Python-Light.svg";
import gcpLogo from "@/assets/images/brand/GCP-Light.svg";
import awsLogo from "@/assets/images/brand/AWS-Light.svg";
import dockerLogo from "@/assets/images/brand/Docker.svg";
import mySQLLogo from "@/assets/images/brand/MySQL-Light.svg";
import postgreSQLLogo from "@/assets/images/brand/PostgreSQL-Light.svg";
import githubLogo from "@/assets/images/brand/Github-Light.svg";
import linkedInLogo from "@/assets/images/brand/LinkedIn.svg";
import linkedImg from "@/assets/images/demo/lead-report.png";
import vteacherImg from "@/assets/images/vteacher/bg-c.png";
import ServicesSwiper from "../ServcicesSwiper";
import devImg from "@/assets/images/dev/logo.png";

const services = [
  {
    id: 1,
    href: "https://linked.spaceai.jp",
    target: "_blank",
    rel: "noopener noreferrer",
    image: linkedImg,
    title: "Linked",
    description:
      "From list extraction to connection application and report analysis, you can streamline your sales, recruiting, and marketing on LinkedIn.",
  },
  {
    id: 2,
    href: "https://vteacher.spaceai.jp",
    target: "_blank",
    rel: "noopener noreferrer",
    image: vteacherImg,
    title: "V Teacher",
    description:
      "You can Learn Japanese language and culture with our virtual teacher anytime! Goodbye boring methods.",
  },
  {
    id: 3,
    href: "#services-dev",
    target: "_blank",
    rel: "noopener noreferrer",
    image: devImg,
    title: "Software Development",
    description:
      "We provide development support for web apps, native apps, etc. We provide speedy development with a small team from prototype to actual finished product.",
  },
];

const Hero = () => {
  const memberData = [
    {
      id: "hideyuda",
      name: "Hidenari Yuda",
      role: "Developer",
      description: ``,
      image: hideyudaImg,
      links: [
        {
          name: "GitHub",
          img: githubLogo,
          link: "https://github.com/hideyuda",
          isExternal: true,
        },
        {
          name: "Linkedin",
          img: linkedInLogo,
          link: "https://www.linkedin.com/in/hidenari-yuda/",
          isExternal: true,
        },
      ],
      stacks: [
        { img: golangLogo },
        { img: pythonLogo },
        { img: typeScriptLogo },
        { img: reactLogo },
        { img: nextJsLogo },
        { img: firebaseLogo },
        { img: gcpLogo },
        { img: awsLogo },
        { img: postgreSQLLogo },
        { img: mySQLLogo },
        { img: dockerLogo },
      ],
    },
  ];
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden py-16 md:py-24"
    >
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          alt="background-image"
          src={backgroundImg}
          fill
          style={{ objectFit: "cover" }}
          className="dark:hidden"
          priority
        />
        <Image
          alt="background-imageDark"
          src={backgroundDarkImg}
          fill
          style={{ objectFit: "cover" }}
          className="hidden dark:block"
          priority
        />
        {/* <div id="canvas_container"></div> */}
      </div>

      <div className="container px-4 mx-auto">
        <div className="relative">
          <div className="grid items-center gap-4 lg:grid-cols-2">
            {/* Left column - Member information */}
            {/* ↓↓↓ lg:ps-16 を追加 ↓↓↓ */}
            <div className="mx-auto max-w-full w-full lg:ms-0 lg:text-base overflow-y-auto overflow-x-hidden pr-2 lg:ps-16">
              {memberData.map((member, idx) => (
                <div className="pb-4 sm:pb-6 w-full" key={`member-${idx}`}>
                  {/* ... member content ... */}
                  <div className="mt-3 flex items-center gap-3">
                    <div>
                      <Image
                        alt="member-image"
                        height={48}
                        width={48}
                        src={member.image}
                        className="h-12 w-12 rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium text-default-950">
                        {member.name}
                      </h3>
                      <p className="text-xs sm:text-sm">{member.role}</p>
                    </div>
                  </div>
                  <div className="mt-3 mb-4 text-sm sm:text-base"></div>
                  <p className="text-sm sm:text-base mb-1">Stacks</p>
                  <div className="flex flex-wrap items-center gap-2">
                    {member.stacks.map((link, idx) => (
                      <div
                        key={`link-${idx}`}
                        className="flex items-center gap-1 text-default-950 hover:text-primary"
                      >
                        <Image
                          alt="stack"
                          src={link.img}
                          className="h-5 w-5 sm:h-6 sm:w-6"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm sm:text-base mt-4 mb-1">SNS</p>
                  <div className="flex items-center gap-2">
                    {member.links.map((link) => (
                      <Link
                        key={`link-${link.name}`}
                        href={link.link}
                        target={link.isExternal ? "_blank" : "_self"}
                        passHref={link.isExternal}
                        className="flex items-center gap-1 text-default-950 hover:text-primary"
                      >
                        <Image
                          alt="link"
                          src={link.img}
                          className="h-5 w-5 sm:h-6 sm:w-6"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right column - Services Swiper */}
            <div className="w-full overflow-hidden">
              <ServicesSwiper services={services} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
