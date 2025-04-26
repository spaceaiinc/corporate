const Strengths = () => {
  return (
    <section id="strengths" className="py-10 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <span className="rounded-md border border-primary px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            OUR STRENGTHS
          </span>
          <p className="uppercase tracking-wider text-sm mb-16"></p>
          <div className="mb-16">
            <h2 className="text-xl font-medium mb-4 border-b border-gray-200 pb-2 inline-block">
              We provide generative AI development tailored to your business
              challenges, leveraging cutting-edge AI technology.
            </h2>

            <p className="text-base mt-8 mb-16">
              We propose products in the most user-friendly format, customized
              to your work content and environment.
            </p>
          </div>
          <div className="mb-16">
            <h2 className="text-xl font-medium mb-4 border-b border-gray-200 pb-2 inline-block">
              User-centric development with a focus on usability
            </h2>

            <p className="text-base mt-8 mb-16">
              We create intuitive designs that even beginners can use, with
              development thoroughly grounded in the user&apos;s perspective.
              Through detailed communication and testing, we deliver services
              with exceptional usability.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-medium mb-4 border-b border-gray-200 pb-2 inline-block">
              Rapid prototype development
            </h2>

            <p className="text-base mt-8 mb-8">
              We quickly deliver proof-of-concept (PoC) and prototype
              development, allowing you to visualize the finished product
              promptly. We continuously incorporate your feedback throughout the
              development process.
            </p>
          </div>
        </div>
        {/* <div className="mt-10 flex justify-center">
          <Link
            href=""
            className="inline-flex items-center justify-center gap-2 rounded-md border border-default-200 px-8 py-2 text-default-950 backdrop-blur-3xl transition-all hover:border-primary hover:bg-primary hover:text-white"
          >
            Read More
            <LuArrowRight className="h-6 w-6" />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Strengths;
