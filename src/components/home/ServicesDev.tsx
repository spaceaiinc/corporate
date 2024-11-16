import {
  LuBoxes,
  LuDot,
  LuMoveRight,
  LuRocket,
  LuWebhook,
} from "react-icons/lu";
import Link from "next/link";

const ServicesDev = () => {
  return (
    <section id="services" className="py-10 lg:py-20">
      <div className="container">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <span className="rounded-md border border-primary px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            Services | Dev
          </span>
          <h2 className="mt-4 text-4xl/tight font-medium text-default-950">
            Developement Service
          </h2>
          <p className="mt-5 text-base">
            We select tech stacks and services that are most suitable to create
            the system or application that you need.
          </p>
        </div>
        <div className="border border-default-200">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <div className="border-b border-default-200 p-6 md:border-e xl:border-0">
              <div className="mx-auto">
                <LuWebhook className="inline-block h-12 w-12 text-default-950" />
              </div>
              <h2 className="mt-5 text-2xl font-medium text-default-950">
                Web / App
              </h2>
              {/* <p className="mt-5 text-base">
                We respond to the followingrequests and concerns
              </p> */}
              <ul
                role="list"
                className="text-default-white -ms-3 mb-3 mt-4 text-sm"
              >
                <li className="flex items-center gap-2 py-1">
                  <LuDot className="inline-block h-8 w-8 stroke-primary" />
                  <span className="text-base text-default-950">
                    We are small team of developers that can bring your ideas to
                    life in a short period of time.
                  </span>
                </li>
                <li className="flex items-center gap-2 py-1">
                  <LuDot className="inline-block h-8 w-8 stroke-primary" />
                  <span className="text-base text-default-950">
                    We develop with modern stacks like Typescript, React,
                    Next.js, Golang and Python. This brings you to reducing the
                    time to maintenance.
                  </span>
                </li>
              </ul>
              {/* <Link
                href=""
                className="group text-lg font-medium text-default-950"
              >
                Read More
                <LuMoveRight className="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
              </Link> */}
            </div>
            <div className="border-b border-default-200 p-6 xl:border-x xl:border-b-0">
              <div className="mx-auto">
                <LuBoxes className="inline-block h-12 w-12 text-default-950" />
              </div>
              <h2 className="mt-5 text-2xl font-medium text-default-950">
                RPA
              </h2>
              <ul
                role="list"
                className="text-default-white -ms-3 mb-3 mt-4 text-sm"
              >
                <li className="flex items-center gap-2 py-1">
                  <LuDot className="inline-block h-8 w-8 stroke-primary" />
                  <span className="text-base text-default-950">
                    We customize the service to fit your business needs. We can
                    build from scratch or integrate with your existing system.
                  </span>
                </li>
                <li className="flex items-center gap-2 py-1">
                  <LuDot className="inline-block h-8 w-8 stroke-primary" />
                  <span className="text-base text-default-950">
                    We develep on Cloud, so you do not need to have a PC and fix
                    yourself to run the service.
                  </span>
                </li>
              </ul>
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://autoscout.spaceai.jp"
                passHref
                className="group text-lg font-medium text-default-950"
              >
                View HR RPA Service
                <LuMoveRight className="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
              </Link>
            </div>
            <div className="p-6">
              <div className="mx-auto">
                <LuRocket className="inline-block h-12 w-12 text-default-950" />
              </div>
              <h2 className="mt-5 text-2xl font-medium text-default-950">
                AI / GenAI
              </h2>
              <ul
                role="list"
                className="text-default-white -ms-3 mb-3 mt-4 text-sm"
              >
                <li className="flex items-center gap-2 py-1">
                  <LuDot className="inline-block h-8 w-8 stroke-primary" />
                  <span className="text-base text-default-950">
                    We develop AI solutions to improve your business and
                    customer experience.
                  </span>
                </li>
                <li className="flex items-center gap-2 py-1">
                  <LuDot className="inline-block h-8 w-8 stroke-primary" />
                  <span className="text-base text-default-950">
                    We aim to develop Chatbot and Voicebot Services based on
                    Stacks like Local LLM, AudioSynthe and RAG.
                  </span>
                </li>
              </ul>
              {/* <Link
                href=""
                className="group text-lg font-medium text-default-950"
              >
                Read More
                <LuMoveRight className="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDev;
