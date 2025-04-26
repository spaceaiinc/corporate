import { Footer, TopNavBar } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transactions Act",
  description: "Transactions Act for Space AI",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const TransactionsAct = () => {
  return (
    <>
      <TopNavBar />
      <div className="container mx-auto p-6 mt-20">
        <h1 className="text-3xl font-bold mb-4">特定商取引法に基づく表示</h1>
        <p className="mb-4">
          「特定商取引に関する法律」第11条（通信販売についての広告）に基づきこちらに明示いたします。
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <tbody>
              <tr className="border-b flex flex-col sm:table-row">
                <th className="px-4 py-2 font-semibold text-left sm:text-center">
                  販売業者
                </th>
                <td className="px-4 py-2">湯田英也</td>
              </tr>
              <tr className="border-b flex flex-col sm:table-row">
                <th className="px-4 py-2 font-semibold text-left sm:text-center">
                  運営責任者
                </th>
                <td className="px-4 py-2">湯田英也</td>
              </tr>
              <tr className="border-b flex flex-col sm:table-row">
                <th className="px-4 py-2 font-semibold text-left sm:text-center">
                  所在地
                </th>
                <td className="px-4 py-2">※請求の際に遅滞なく開示します。</td>
              </tr>
              <tr className="border-b flex flex-col sm:table-row">
                <th className="px-4 py-2 font-semibold text-left sm:text-center">
                  電話番号
                </th>
                <td className="px-4 py-2">080-6144-4748</td>
              </tr>
              <tr className="border-b flex flex-col sm:table-row">
                <th className="px-4 py-2 font-semibold text-left sm:text-center">
                  お問い合わせ
                </th>
                <td className="px-4 py-2">
                  <a
                    href="https://spaceai.jp/contact"
                    className="text-blue-500 hover:underline"
                  >
                    https://spaceai.jp/contact
                  </a>
                </td>
              </tr>
              <tr className="border-b flex flex-col sm:table-row">
                <th className="px-4 py-2 font-semibold text-left sm:text-center">
                  メールアドレス
                </th>
                <td className="px-4 py-2">
                  <a
                    href="mailto:info@spaceai.jp"
                    className="text-blue-500 hover:underline"
                  >
                    info@spaceai.jp
                  </a>
                </td>
              </tr>
              <tr className="border-b flex flex-col sm:table-row">
                <th className="px-4 py-2 font-semibold text-left sm:text-center">
                  URL
                </th>
                <td className="px-4 py-2">
                  <a
                    href="https://spaceai.jp"
                    className="text-blue-500 hover:underline"
                  >
                    https://spaceai.jp
                  </a>
                </td>
              </tr>
              <tr className="border-b flex flex-col sm:table-row">
                <th className="px-4 py-2 font-semibold text-left sm:text-center">
                  受け付け可能な決済手段
                </th>
                <td className="px-4 py-2">
                  - クレジットカード決済
                  <br />
                  Stripe Incの決済代行システム
                  （https://stripe.com/）を利用しております。お申し込み後、決済画面へ移動いたしますので決済を完了させてください。なお、支払日はカード会社、その他金融機関が指定する引き落とし日になります。
                </td>
              </tr>
              <tr className="border-b flex flex-col sm:table-row">
                <th className="px-4 py-2 font-semibold text-left sm:text-center">
                  利用料金のお支払い時期
                </th>
                <td className="px-4 py-2">
                  クレジットカード会社が定める支払期日となります。
                </td>
              </tr>
              <tr className="border-b flex flex-col sm:table-row">
                <th className="px-4 py-2 font-semibold text-left sm:text-center">
                  引渡時期
                </th>
                <td className="px-4 py-2">
                  商品の購入確定後、直ちに利用可能となります。
                </td>
              </tr>
              <tr className="border-b flex flex-col sm:table-row">
                <th className="px-4 py-2 font-semibold text-left sm:text-center">
                  交換および返品（返金ポリシー）
                </th>
                <td className="px-4 py-2">
                  商品の特性上、返品が不可能であるため、購入確定後のキャンセル・返金についてはお受けできません。
                </td>
              </tr>
              <tr className="border-b flex flex-col sm:table-row">
                <th className="px-4 py-2 font-semibold text-left sm:text-center">
                  追加手数料等の追加料金
                </th>
                <td className="px-4 py-2">- 消費税</td>
              </tr>
              <tr className="border-b flex flex-col sm:table-row">
                <th className="px-4 py-2 font-semibold text-left sm:text-center">
                  利用料金
                </th>
                <td className="px-4 py-2">商品紹介ページをご参照ください。</td>
              </tr>
              <tr className="border-b flex flex-col sm:table-row">
                <th className="px-4 py-2 font-semibold text-left sm:text-center">
                  自動更新の停止の方法
                </th>
                <td className="px-4 py-2">
                  お問い合わせフォーム又は、info@spaceai.jp宛に「自動更新の停止希望」と明記の上、お申し込みください。
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">最終更新日 2025年1月18日</p>
      </div>
      <Footer />
    </>
  );
};

export default TransactionsAct;
