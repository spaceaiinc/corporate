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
            <a href="https://linked.spaceai.jp/auth" target="_blank">
              https://linked.spaceai.jp/auth
            </a>
            <br />
            <br />
            {/* <strong>実装機能:</strong>
            <ul className="mt-4 text-center">
              <li>- 営業部門の幹部と協力し、必要な機能と画面を定義。</li> <br />
              <li>
                - 求人と応募者データの作成、更新、管理のためのページを開発。
              </li>{" "}
              <br />
              <li>
                -
                入力された応募者情報から履歴書および職務経歴書を生成する機能を実装。
              </li>{" "}
              <br />
              <li>
                -
                応募者とのコミュニケーションのためのLINEログインおよびメッセージングAPIの機能を構築。
              </li>{" "}
              <br />
              <li>
                -
                クリーンアーキテクチャとドメイン駆動設計を用いて、GoとDockerでREST
                APIを開発。
              </li>{" "}
              <br />
              <li>
                -
                スカウティングプラットフォームからのエントリーメールをトリガーとして、Gmail
                APIを統合し応募者データをインポート。
              </li>{" "}
              <br />
              <li>
                -
                スカウティングプラットフォーム経由で定期的なスカウトメール送信のためのRPAを構築。
              </li>{" "}
              <br />
              <li>- 必要に応じて、データベースに新しいテーブルと列を追加。</li>
              <li>
                - メールおよびGoogleによる認証のためのFirebase Authを統合。
              </li>{" "}
              <br />
            </ul> */}
            <br />
            <strong>Frontend</strong>
            <ul className="mt-4 text-center">
              <li>TypeScript, React, Next.js, Page Router, Recoil</li>
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
