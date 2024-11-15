const About = () => {
  return (
    <section id="about" className="py-10 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <span className="rounded-md border border-primary px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            About
          </span>
          <h2 className="mt-4 text-4xl/tight font-medium text-default-950">
            We Make Space to Enjoy Your Moments
          </h2>
          <p className="mt-5 text-base">
            We aim to provide the best service to reduce inefficiencies and make
            your life more enjoynable.
            <br />
            <br /> Our team is dedicated to delivering the best results to
            customers.
          </p>
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

export default About;
