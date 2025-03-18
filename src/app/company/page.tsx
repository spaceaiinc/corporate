import { Footer, TopNavBar } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Information",
  description: "Company Information",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const Company = () => {
  return (
    <>
      <TopNavBar />
      <div className="container mx-auto p-6 mt-20">
        <h1 className="text-3xl font-bold mb-4">運営情報</h1>
        <p className="mb-4"></p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <tbody>
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
            </tbody>
          </table>
        </div>
        <p className="mt-4">Established on Mar 18, 2025</p>
      </div>
      <Footer />
    </>
  );
};

export default Company;
