import Image from "next/image";

import backgroundImg from "@/assets/images/bg.png";
import backgroundDarkImg from "@/assets/images/bg-dark.jpg";

const Hero = () => {
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
              {/* <span className="rounded-md border border-primary px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                startups Marketing
              </span> */}
              <h2 className="my-5 text-4xl font-medium text-default-950 md:text-5xl/tight">
                We Make Space
                <br />
                for Your Moments
              </h2>
              <p className="mb-10 text-base">Space AI</p>
              {/* <Link
                href=""
                className="rounded-md bg-primary px-6 py-3 text-white transition-all duration-300 hover:bg-primary-700"
              >
                Reach Out to Us
              </Link> */}
            </div>
            <div>
              <div className="relative">
                {/* <Image
                  alt="marketing1"
                  src={marketing1}
                  className="mx-auto rounded-3xl"
                /> */}
                <div className="hidden xl:block">
                  {/* <div className="absolute -start-52 top-10">
                    <div className="inline-block">
                      <div className="rounded-full border border-default-200 bg-white/80 shadow backdrop-blur-lg dark:bg-black/80">
                        <div className="max-w-sm px-4 py-4 text-center">
                          <p className="text-base text-default-950">
                            Donec pede justo, fringilla vel, aliquet nec,
                            vulputate eget, arcu.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="absolute -end-40 bottom-20 top-auto">
                    {/* <div>
                      <div className="inline-block rounded-full border border-default-200 bg-white/80 shadow backdrop-blur-lg dark:bg-black/80">
                        <div className="px-5 py-3">
                          <h5 className="text-base font-medium">
                            Web Development
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="my-2">
                      <div className="inline-block rounded-full border border-default-200 bg-white/80 shadow backdrop-blur-lg dark:bg-black/80">
                        <div className="px-5 py-3">
                          <h5 className="text-base font-medium">
                            AI / RPA
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="inline-block rounded-full border border-default-200 bg-white/80 shadow backdrop-blur-lg dark:bg-black/80">
                        <div className="px-5 py-3">
                          <h5 className="text-base font-medium">
                            Search Engine Optimization
                          </h5>
                        </div>
                      </div>
                    </div> */}
                  </div>
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
