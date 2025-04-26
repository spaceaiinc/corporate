import { Footer, TopNavBar } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "セキュリティについて",
  description: "セキュリティについて",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const Security = () => {
  return (
    <>
      <TopNavBar />
      <div className="container mx-auto p-6 mt-20">
        <h1 className="text-3xl font-bold mb-4">セキュリティ</h1>
        <p className="mb-4">
          セキュリティは私たちの最優先事項の一つです。すべての従業員がお客様のデータの機密性、完全性、可用性を確保するために協力しています。
        </p>

        <h2 className="text-2xl font-semibold mb-2">
          お客様のデータを保護するための取り組み
        </h2>
        <p className="mb-4">
          ユーザーのみがデータにアクセスできます。当社のサービスに保存されるすべてのユーザーデータは、インフラストラクチャレベルでユーザーのみがデータを閲覧できるように設定されています。
        </p>
        <h2 className="text-2xl font-semibold mb-2">暗号化された通信</h2>
        <p className="mb-4">
          当社サービスのAPIと管理画面とのすべての通信はTLSを使用して暗号化されています。この通信中の暗号化により、攻撃者が情報を読み取ったり改ざんしたりすることが不可能になります。
        </p>

        <h2 className="text-2xl font-semibold mb-2">バックアップ</h2>
        <p className="mb-4">
          すべてのデータは毎日バックアップされています。バックアップデータは、他のすべてのデータと同様に、ユーザー自身以外は閲覧できない形式で管理されています。
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Google Cloud Platformのセキュリティ
        </h2>
        <p className="mb-4">
          ユーザーデータはGoogle Cloud
          Platform上で管理され、業界最高レベルのセキュリティを提供するサービスを利用しています。これは独立した第三者機関による監査を受け、ISO/IEC
          27001、ISO/IEC 27017、ISO/IEC 27018、ISO/IEC
          27701などの認証を取得しています。
        </p>
        <p className="mb-4">
          Google Cloudサービスのセキュリティに関する詳細については、{" "}
          <a
            href="https://cloud.google.com/security"
            className="text-blue-500 underline"
            target="_blank"
          >
            Googleのドキュメント
          </a>
          をご参照ください。
        </p>

        <h2 className="text-2xl font-semibold mb-2">Stripeのセキュリティ</h2>
        <p className="mb-4">
          当社は安全な決済処理のためにStripeを使用しています。PCI Level
          1認証を取得しているStripeは、決済業界で最高水準の基準を満たしています。ユーザーデータは暗号化され、システムは定期的に監査されてコンプライアンスとセキュリティを確保しており、当社のサービスを安心してご利用いただけます。
        </p>
        <p className="mb-4">
          詳細については、{" "}
          <a
            href="https://stripe.com/docs/security"
            className="text-blue-500 underline"
            target="_blank"
          >
            Stripeのセキュリティドキュメント
          </a>
          をご覧ください。
        </p>

        <h2 className="text-2xl font-semibold mb-2">Supabaseのセキュリティ</h2>
        <p className="mb-4">
          当社はユーザーデータを安全に保存するためにSupabaseを使用しています。高度な暗号化、多要素認証、SOC
          2やHIPAAなどの厳格な基準への準拠により、お客様の情報は常に保護されています。
        </p>
        <p className="mb-4">
          詳細については、{" "}
          <a
            href="https://supabase.com/security"
            className="text-blue-500 underline"
            target="_blank"
          >
            Supabaseのセキュリティドキュメント
          </a>
          をご覧ください。
        </p>

        {/* <h2 className="text-2xl font-semibold mb-2">Vercelのセキュリティ</h2>
        <p className="mb-4">
          当社はサービスのホスティングにVercelを使用しています。Vercelは、お客様のデータを保護し業界標準に準拠するために高度なセキュリティ対策を採用しています：
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            SOC 2 Type 2準拠：VercelはSOC 2フレームワークに基づくセキュリティ、機密性、可用性の認証を取得しています。
          </li>
          <li>
            ISO 27001:2013：Vercelは情報セキュリティ管理の国際的に認められた基準の認証を取得しています。
          </li>
          <li>
            GDPR準拠：VercelはEUおよび英国のユーザーの個人データ保護を確保するためのGDPR要件に準拠しています。
          </li>
          <li>
            HIPAA準拠：Vercelは保護対象保健情報（PHI）を保護することによりHIPAA準拠をサポートしています。
          </li>
        </ul>
        <p className="mb-4">
          詳細については、{" "}
          <a
            href="https://vercel.com/security"
            className="text-blue-500 underline"
            target="_blank"
          >
            Vercelのセキュリティドキュメント
          </a>
          をご覧ください。
        </p>
        <h2 className="text-2xl font-semibold mb-2">Post Hogのセキュリティ</h2>
        <p className="mb-4">
          当社はユーザー行動の分析とサービス改善のためにPost Hogを使用しています。Post Hogはお客様のデータを保護するために最高水準のセキュリティとコンプライアンスを維持することを約束しています。主なセキュリティ機能には以下が含まれます：
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            SOC 2 Type II準拠：Post Hogは外部監査を経てSOC 2 Type II準拠の認証を取得しています。
          </li>
          <li>
            GDPR準拠：Post HogはGDPRに準拠しており、Post Hog Cloudを使用する顧客のデータ処理者として機能します。
          </li>
          <li>
            CCPA準拠：Post HogはPost Hog Cloudの顧客に対するサービスプロバイダーであり、プライバシーポリシーにCCPA付録を含んでいます。
          </li>
        </ul>
        <p className="mb-4">
          詳細については、{" "}
          <a
            href="https://posthog.com/handbook/company/security"
            className="text-blue-500 underline"
            target="_blank"
          >
            Post Hogのセキュリティ概要
          </a>
          をご覧ください。
        </p>
        <h2 className="text-2xl font-semibold mb-2">Loopのセキュリティ</h2>
        <p className="mb-4">
          当社はメールコミュニケーションの強化とサービス改善のためにLoopsを使用しています。Loopsは安全なデータ処理と暗号化によりお客様の情報を安全に保ちます。主なセキュリティ機能には以下が含まれます：
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            データ暗号化：LoopsとのすべてのコミュニケーションはTLSを使用して暗号化され、当社のサービスとLoops間で送信されるデータが安全に保たれます。
          </li>
          <li>
            データ処理：Loopsはプライバシーポリシーに従って個人データを収集・処理し、ユーザー情報の取り扱い方法を明示しています。
          </li>
          <li>
            ユーザーコントロール：ユーザーはいつでもコミュニケーション設定を管理し、マーケティングコミュニケーションをオプトアウトする能力を持っています。
          </li>
        </ul>
        <p className="mb-4">
          詳細については、{" "}
          <a
            href="https://www.loops.io/privacy"
            className="text-blue-500 underline"
            target="_blank"
          >
            Loopsのプライバシーポリシー
          </a>
          をご参照ください。
        </p> */}
        <h2 className="text-2xl font-semibold mb-2">
          組織および個人の従業員による取り組み
        </h2>
        <p className="mb-4">
          技術的な取り組みに加えて、組織と個々の従業員のデータに対するコミットメントもセキュリティを強化する上で重要です。
        </p>
        <p className="mb-4">
          当社はすべての従業員/請負業者に機密保持契約への署名を義務付け、各自の役割に必要なリソースへのアクセスのみを許可しています。さらに、すべての従業員は当社が使用しているサービスに強力なパスワードと二要素認証を設定することが義務付けられています。
        </p>
        <p className="mb-4">
          これらの取り組みは定期的に見直され、お客様のデータが常に慎重に保護されるよう努めています。
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Security;
