const ExperienceReach = () => {
  return (
    <section id="experience" className="py-10 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <span className="rounded-md border border-primary px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            Experience | Reach
          </span>
          <h2 className="mt-4 text-4xl/tight font-medium text-default-950">
            CRMシステム「Reach」の開発
          </h2>
          <p className="mt-5 text-base">
            2022年2月 - 2024年9月:
            採用エージェント向けCRMシステム「Reach」のリリース、メンテナンス、運用に従事。要件定義から実装まで、Backend、Frontend、Infrastracture全般を担当。
            <br />
            <br />
            <strong>主な業務:</strong>
            <ul className="mt-4 text-center">
              <li>- 営業部門と協力し、必要な機能と画面を定義。</li> <br />
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
                APIを統合し応募者データをインポートの自動化。
              </li>{" "}
              <br />
              <li>
                -
                スカウティングプラットフォーム経由で定期的なスカウトメール送信のためのRPAを構築。
              </li>{" "}
              <br />
              <li>
                - 必要に応じて、データベースに新しいテーブルと列を追加、修正。
              </li>
              <li>- メールおよびGoogle認証によるFirebase Authを実装。</li>{" "}
              <br />
            </ul>
            <br />
            <strong>Backend</strong>
            <ul className="mt-4 text-center">
              <li> Go, Echo, sqlx</li>
            </ul>{" "}
            <br />
            <strong>Frontend</strong>
            <ul className="mt-4 text-center">
              <li>React, Next.js, TypeScript, Recoil, MUI</li>
            </ul>{" "}
            <br />
            <strong>Infrastracture</strong>
            <ul className="mt-4 text-center">
              <li>
                MySQL, Docker, Google Cloud (Firebase App Hosting, Cloud Run,
                Artifact Repository, Cloud Load Balancer, Cloud SQL, Cloud
                Pub/Sub, Gmail API)
              </li>
            </ul>
            <br />
            <strong>Others</strong>
            <ul className="mt-4 text-center">
              <li>LINE Login, Messaging API, SendGrid</li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceReach;
