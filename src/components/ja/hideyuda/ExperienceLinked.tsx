const ExperienceLinked = () => {
  return (
    <section id="experience" className="py-10 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <span className="rounded-md border border-primary px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            Experience | LinkedIn Marketing Service
          </span>
          <h2 className="mt-4 text-4xl/tight font-medium text-default-950">
            LinkedInマーケティングサービスの開発
          </h2>
          <p className="mt-5 text-base">
            2025年2月 - 現在
            LinkedInマーケティングサービスの開発(PhantomBusterのようなサービス)の開発。
            <br />
            <br />
            要件定義から実装まで、Backend、Frontend、Infrastracture全般を担当。
            <br />
            サービスの詳細は以下のリンクからご覧いただけます。
            <br />
            <br />
            <a href="https://linked.spaceai.jp/" target="_blank">
              https://linked.spaceai.jp/
            </a>
            <br />
            <br />
            <br />
            <strong>Frontend</strong>
            <ul className="mt-4 text-center">
              <li>TypeScript, React, Next.js, Page Router, jotai</li>
            </ul>{" "}
            <br />
            <strong>Backend</strong>
            <ul className="mt-4 text-center">
              <li>TypeScript, Nextjs API Routes</li>
            </ul>{" "}
            <br />
            <strong>Infrastracture</strong>
            <ul className="mt-4 text-center">
              <li>
                Supabase, PostgreSQL, Google Cloud (Firebase App Hosting, Cloud
                Run, Artifact Repository, Cloud Load Balancer)
              </li>
            </ul>
            <br />
            <strong>Others</strong>
            <ul className="mt-4 text-center">
              <li>Stripe, Posthog</li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceLinked;
