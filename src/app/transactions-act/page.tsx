import { Footer, TopNavBar } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transactions Act",
};

const TransactionsAct = () => {
  return (
    <>
      <TopNavBar />
      <div className="container mx-auto p-6 mt-20">
        <h1 className="text-3xl font-bold mb-4">English following Japanese</h1>
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
        <p className="mt-4">最終更新日 2024年11月10日</p>
      </div>
      <div className="container mx-auto p-6 mt-20">
        <h1 className="text-3xl font-bold mb-4">
          {" "}
          Specified Commercial Transactions Act
        </h1>
        <p className="mb-4">
          In accordance with Article 11 (Advertisement for Mail Order) of the
          Act on Specified Commercial Transactions, we hereby disclose the
          following.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <tbody>
              <tr className="border-b flex flex-col sm:table-row">
                <th className="px-4 py-2 font-semibold text-left sm:text-center">
                  Seller
                </th>
                <td className="px-4 py-2">Hidenari Yuda</td>
              </tr>
              <tr className="border-b flex flex-col sm:table-row">
                <th className="px-4 py-2 font-semibold text-left sm:text-center">
                  Responsible Person
                </th>
                <td className="px-4 py-2">Hidenari Yuda</td>
              </tr>
              <tr className="border-b flex flex-col sm:table-row">
                <th className="px-4 py-2 font-semibold text-left sm:text-center">
                  Location
                </th>
                <td className="px-4 py-2">
                  We will be disclosed promptly upon request.
                </td>
              </tr>
              <tr className="border-b flex flex-col sm:table-row">
                <th className="px-4 py-2 font-semibold text-left sm:text-center">
                  Phone Number
                </th>
                <td className="px-4 py-2">080-6144-4748</td>
              </tr>
              <tr className="border-b flex flex-col sm:table-row">
                <th className="px-4 py-2 font-semibold text-left sm:text-center">
                  Contact
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
                  Email Address
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
                  Accepted Payment Methods
                </th>
                <td className="px-4 py-2">
                  - Credit Card Payment
                  <br />
                  We use the payment processing system of Stripe Inc.
                  (https://stripe.com/). After applying, please proceed to the
                  payment screen to complete the payment. The payment date will
                  be the withdrawal date specified by the card company or other
                  financial institution.
                </td>
              </tr>
              <tr className="border-b flex flex-col sm:table-row">
                <th className="px-4 py-2 font-semibold text-left sm:text-center">
                  Payment Timing
                </th>
                <td className="px-4 py-2">
                  The payment date will be as specified by the credit card
                  company.
                </td>
              </tr>
              <tr className="border-b flex flex-col sm:table-row">
                <th className="px-4 py-2 font-semibold text-left sm:text-center">
                  Delivery Timing
                </th>
                <td className="px-4 py-2">
                  Immediately available after purchase confirmation.
                </td>
              </tr>
              <tr className="border-b flex flex-col sm:table-row">
                <th className="px-4 py-2 font-semibold text-left sm:text-center">
                  Exchange and Return (Refund Policy)
                </th>
                <td className="px-4 py-2">
                  Due to the nature of the product, returns are not possible.
                  Therefore, cancellations and refunds after purchase
                  confirmation are not accepted.
                </td>
              </tr>
              <tr className="border-b flex flex-col sm:table-row">
                <th className="px-4 py-2 font-semibold text-left sm:text-center">
                  Additional Fees
                </th>
                <td className="px-4 py-2">- Consumption Tax</td>
              </tr>
              <tr className="border-b flex flex-col sm:table-row">
                <th className="px-4 py-2 font-semibold text-left sm:text-center">
                  Usage Fees
                </th>
                <td className="px-4 py-2">
                  Please refer to the product introduction page.
                </td>
              </tr>
              <tr className="border-b flex flex-col sm:table-row">
                <th className="px-4 py-2 font-semibold text-left sm:text-center">
                  How to Stop Automatic Renewal
                </th>
                <td className="px-4 py-2">
                  Please apply by specifying &quot;Wish to stop automatic
                  renewal&quot; in the contact form or by emailing
                  info@spaceai.jp.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">Established on November 100, 2024</p>
      </div>
      <Footer />
    </>
  );
};

export default TransactionsAct;
