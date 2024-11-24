import Image from "next/image";

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

import Link from "next/link";
const Hero = () => {
  const memberData = [
    {
      id: "hideyuda",
      name: "Hidenari Yuda",
      role: "Developer",
      description: `I was working and brandeloed SaaS including CRM and RPA services at HR Tech Startups over 3 years.`,
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
        // {
        //   name: "Facebook",
        //   link: "http://facebook.com/hideyuda",
        //   icon: LuFacebook,
        //   isExternal: true,
        // },
      ],
      stacks: [
        {
          img: golangLogo,
        },
        {
          img: pythonLogo,
        },
        {
          img: typeScriptLogo,
        },
        {
          img: reactLogo,
        },
        {
          img: nextJsLogo,
        },
        {
          img: firebaseLogo,
        },
        {
          img: gcpLogo,
        },
        {
          img: awsLogo,
        },
        {
          img: postgreSQLLogo,
        },
        {
          img: mySQLLogo,
        },
        {
          img: dockerLogo,
        },
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
          className="h-full w-full dark:hidden"
        />
        <Image
          alt="background-imageDark"
          src={backgroundDarkImg}
          className="hidden h-full w-full dark:block"
        />
        <div id="canvas_container"></div>
      </div>
      <div className="container">
        <div className="relative">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <div className="mx-auto max-w-md lg:ms-0 lg:text-base">
              {memberData.map((member, idx) => (
                <div className="pb-10 sm:p-10 h-70" key={`member-${idx}`}>
                  <div className="mt-5 flex items-center gap-6">
                    <div>
                      <Image
                        alt="slide-image"
                        height={56}
                        width={56}
                        src={member.image}
                        className="h-14 rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium text-default-950">
                        {member.name}
                      </h3>
                      <p className="mt-2 text-base">{member.role}</p>
                    </div>
                  </div>
                  <p className="mt-5 mb-15 text-lg h-30">
                    {member.description} <br />
                    <br />
                    Favorite: Programming, Football, Music, Three Kingdoms
                    <br />
                    <br />
                  </p>
                  <p className="text-lg h-30">Stacks</p>
                  <div className="mt-5 flex items-center gap-2">
                    {member.stacks.map((link, idx) => (
                      <div
                        key={`link-${idx}`}
                        className="flex items-center gap-1 text-default-950 hover:text-primary"
                      >
                        <Image alt="stack" src={link.img} className="h-7 w-7" />
                      </div>
                    ))}
                  </div>
                  <p className="text-lg h-30">
                    {" "}
                    <br />
                    SNS
                  </p>
                  <div className="mt-5 flex items-center gap-2">
                    {member.links.map((link) => (
                      <Link
                        key={`link-${link.name}`}
                        href={link.link}
                        target={link.isExternal ? "_blank" : "_self"}
                        passHref={link.isExternal}
                        className="flex items-center gap-1 text-default-950 hover:text-primary"
                      >
                        <Image alt="link" src={link.img} className="h-7 w-7" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="relative">
                <div className="hidden xl:block">
                  <div className="absolute -end-40 bottom-20 top-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
