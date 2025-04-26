const About = () => {
  return (
    <section id="about" className="py-10 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <span className="rounded-md border border-primary px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            About
          </span>
          <h2 className="mt-4 text-4xl/tight font-medium text-default-950">
            We Make Space for Your Moments
          </h2>
          <p className="mt-5 text-base">
            私たちは、非効率性を減らし、生活をより楽しくするための一人ひとりに最適化したサービスを提供することを目指しています。
            <br />
            <br />
            Space
            AIはユーザーファーストをモットーに、最先端のAI技術を駆使したサービス・ソリューションを提供します。
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          {/* <Link
            href=""
            className="inline-flex items-center justify-center gap-2 rounded-md border border-default-200 px-8 py-2 text-default-950 backdrop-blur-3xl transition-all hover:border-primary hover:bg-primary hover:text-white"
          >
            Read More
            <LuArrowRight className="h-6 w-6" />
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default About;
