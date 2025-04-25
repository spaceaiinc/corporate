const About = () => {
  return (
    <section id="about" className="py-10 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <span className="rounded-md border border-primary px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            私たちの強み
          </span>
          <p className="uppercase tracking-wider text-sm mb-16"></p>
          <div className="mb-16">
            <h2 className="text-xl font-medium mb-4 border-b border-gray-200 pb-2 inline-block">
              最先端のAI技術を活かし、企業の課題に合わせた生成AI開発を提供いたします。
            </h2>

            <p className="text-base mt-8 mb-16">
              お客様の仕事内容・環境に合わせて一番使いやすい形でプロダクトをご提案します。
            </p>
          </div>
          <div className="mb-16">
            <h2 className="text-xl font-medium mb-4 border-b border-gray-200 pb-2 inline-block">
              使用する側にたった目線で使いやすさにこだわった開発
            </h2>

            <p className="text-base mt-8 mb-16">
              初心者でも直感的に使える設計で、ユーザー目線に立った開発を徹底。綿密なコミュニケーションとテストを行い、使いやすさにこだわったサービスを提供します。
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-medium mb-4 border-b border-gray-200 pb-2 inline-block">
              迅速なプロトタイプ開発
            </h2>

            <p className="text-base mt-8 mb-8">
              概念実証(PoC)や試作品の開発を短期間で実現し、完成品を素早くイメージできます。お客様からのご要望を随時反映しながら開発を進めてまいります。
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

export default About;
