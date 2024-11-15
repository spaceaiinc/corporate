"use client";
import Image from "next/image";

import hideyudaImg from "@/assets/images/hideyuda.jpg";
import placeholderImg from "@/assets/images/placeholder.jpg";

import "swiper/css";
import {
  LuGithub,
  LuLinkedin,
  LuFacebook,
  LuSignalMedium,
} from "react-icons/lu";
import Link from "next/link";

const memberData = [
  {
    id: "hideyuda",
    name: "Hide Yuda",
    role: "Founder & Developer",
    description: `
    I was working and develoed SaaS including CRM and RPA services at HR Tech Startups over 3 years.
    I hope to help your business with my experience.`,
    image: hideyudaImg,
    links: [
      {
        name: "Medium",
        icon: LuSignalMedium,
        link: "https://medium.com/@hideyuda",
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
        name: "GitHub",
        icon: LuGithub,
        link: "https://github.com/hideyuda",
        isExternal: true,
      },
    ],
  },
  {
    id: "you",
    name: "You?",
    role: "Future Co-Founder",
    description: ``,
    image: placeholderImg,
    links: [],
  },
  // Add more team members here
];

const Team = () => {
  return (
    <section id="team" className="py-10 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-primary px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Team
            </span>
            {/* <h2 className="my-4 text-3xl font-medium capitalize text-default-950">
              Team
            </h2> */}
          </div>
        </div>
        <div className="grid grid-cols-1 items-center lg:grid-cols-2">
          {memberData.map((member) => (
            <div className="pb-10 sm:p-10 h-56" key={`member-${member.id}`}>
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
              <p className="mt-5 text-lg h-20">{member.description}</p>
              <div className="mt-5 flex items-center gap-2">
                {member.links.map((link) => (
                  <Link
                    key={`link-${link.name}`}
                    href={link.link}
                    target={link.isExternal ? "_blank" : "_self"}
                    passHref={link.isExternal}
                    className="flex items-center gap-1 text-default-950 hover:text-primary"
                  >
                    <link.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
