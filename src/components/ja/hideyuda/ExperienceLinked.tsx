import Image from "next/image";
import linkedImg from "@/assets/images/demo/lead-report.png";
import linkedLeadTable from "@/assets/images/demo/lead-table.png";
import linkedModalA from "@/assets/images/demo/modal-a.png";
import linkedModalB from "@/assets/images/demo/modal-b.png";
import linkedCreateWorkflow from "@/assets/images/demo/create-workflow.png";

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

          {/* メインビジュアル - ヒーローイメージ */}
          <div className="mt-6 overflow-hidden rounded-xl shadow-lg">
            <Image
              src={linkedImg}
              alt="LinkedInマーケティングサービスのダッシュボード"
              className="w-full object-cover"
            />
          </div>

          <div className="mt-8 text-base">
            2025年2月 - 現在
            LinkedInマーケティングサービスの開発(PhantomBusterのようなサービス)の開発。
            <br />
            <br />
            要件定義から実装まで、Backend、Frontend、Infrastracture全般を担当。
            個人開発として、要件定義からリリースまで1ヶ月ほどで開発いたしました。現在も機能開発・営業など日々運用しております。
            <br />
            <br />
            <strong>制作背景</strong>
            <p className="mt-2 text-base">
              開発背景として、LinkedIn運用をしている知人から既存の運用サービスに以下のようなデメリットがあると聞き、
              今後のLinkedInの日本市場での成長も加味してニーズがあると感じて開発をスタートしました。
            </p>
            <ul className="mt-4 text-center">
              <li>海外サービスが大半で料金が高い。1社で2万/月など</li>
              <li>
                海外だと履歴書文化ではないため、職歴、学歴、個人情報を抽出できない
              </li>
              <li>
                ナーチャリング業務を自動化できない(投稿へのいいねやコメントなど)
              </li>
              <li>
                一斉送信が主なため、メッセージ送信のパーソナライズができない
              </li>
            </ul>
            <br />
            <strong>開発ポイント</strong>
            <div className="mt-6 space-y-6 text-left">
              <div className="rounded-lg bg-gray-50 p-4 shadow-sm">
                <h4 className="mb-2 font-semibold">
                  ドメイン知識のキャッチアップ
                </h4>
                <p>
                  ベンチマークにしたサービス(phantombuster、elay)のUI/UX、DB設計を徹底的に真似することを意識。LinkedIn運用にどのような機能が必要であるかが不透明であったため、運用をしている方からヒアリングすることや、実際に自ら手を動かしてキャッチアップ。
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4 shadow-sm">
                <h4 className="mb-2 font-semibold">拡張性のあるコーディング</h4>
                <p>
                  サービスの要件定義を予め決めていたわけではなかったため、ベンチマークのサービスやヒアリングの意見から推測して今後必要そうな機能(複数LinkedInアカウントの連携、自動投稿下書き作成、定期実行でのいいねなど)に合わせたテーブル構成や、UI/UXを意識。
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4 shadow-sm">
                <h4 className="mb-2 font-semibold">スピード性</h4>
                <p>
                  サービスの成長において、ミニマムでコア機能のみを開発してユーザーに使っていただいてフィードバックからPDCAを回すことが特に重要であると感じたため、ログイン、LinkedInのユーザーリスト抽出、つながり申請機能のみをとにかくシンプルな構成で開発してリリース。
                </p>
              </div>
            </div>
            {/* UI画像ギャラリー */}
            <div className="mt-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={linkedLeadTable}
                    alt="ユーザーリスト抽出機能"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={linkedModalA}
                    alt="つながり申請機能"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={linkedModalB}
                    alt="自動メッセージ送信"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={linkedCreateWorkflow}
                    alt="分析ダッシュボード"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
            <br />
            <strong>Links</strong>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="https://linked.spaceai.jp/"
                target="_blank"
                className="flex items-center px-4 py-2 bg-transparent text-black border border-black rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                サービス
              </a>
              <a
                href="https://github.com/spaceaiinc/linked"
                target="_blank"
                className="flex items-center px-4 py-2 bg-transparent text-black border border-black rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                ソースコード
              </a>
              <a
                href="https://note.com/hideyuda/n/n3cbd468c4829"
                target="_blank"
                className="flex items-center px-4 py-2 bg-transparent text-black border border-black rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                技術詳細
              </a>
            </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceLinked;
