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
      className="relative flex items-center justify-center overflow-hidden h-screen"
    >
      <div className="absolute inset-0">
        <Image
          alt="background-image"
          src={backgroundImg}
          className="h-full w-full object-cover dark:hidden"
        />
        <Image
          alt="background-imageDark"
          src={backgroundDarkImg}
          className="hidden h-full w-full object-cover dark:block"
        />
        <div id="canvas_container"></div>
      </div>
      <div className="container px-4 mx-auto mt-20 lg:mt-0">
        <div className="relative">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <div className="mx-auto max-w-full w-full lg:ms-0 lg:text-base">
              {memberData.map((member, idx) => (
                <div className="pb-6 sm:pb-10 w-full" key={`member-${idx}`}>
                  <div className="mt-5 flex items-center gap-4">
                    <div>
                      <Image
                        alt="slide-image"
                        height={56}
                        width={56}
                        src={member.image}
                        className="h-14 w-14 rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-medium text-default-950">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-sm sm:text-base">{member.role}</p>
                    </div>
                  </div>
                  <div className="mt-4 mb-6 text-base sm:text-lg">
                    <br />
                    <br />
                  </div>
                  <p className="text-base sm:text-lg mb-2">Stacks</p>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    {member.stacks.map((link, idx) => (
                      <div
                        key={`link-${idx}`}
                        className="flex items-center gap-1 text-default-950 hover:text-primary"
                      >
                        <Image
                          alt="stack"
                          src={link.img}
                          className="h-6 w-6 sm:h-7 sm:w-7"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-base sm:text-lg mt-6 mb-2">SNS</p>
                  <div className="mt-2 flex items-center gap-2">
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
                          className="h-6 w-6 sm:h-7 sm:w-7"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
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
