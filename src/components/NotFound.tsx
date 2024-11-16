import Image from "next/image";

import backgroundImg from "@/assets/images/bg.png";
import backgroundDarkImg from "@/assets/images/bg-dark.jpg";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden h-screen">
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
          <div className="grid items-center gap-6 ">
            <div className="mx-auto max-w-md">
              <h2 className="my-5 text-4xl font-medium text-default-950 md:text-5xl/tight">
                Not Found 404
              </h2>
              <Link
                href="/"
                className=" flex items-center justify-center rounded-md bg-transparent border border-primary px-6 py-3 transition-all duration-300 hover:bg-primary-700 hover:text-white"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
