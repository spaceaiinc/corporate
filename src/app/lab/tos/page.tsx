import { Footer, TopNavBar } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Space AI Lab",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const Terms = () => {
  return (
    <>
      <TopNavBar />
      <div className="container mx-auto p-6 mt-20">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <p className="mb-4">
          Thank you very much for using Space AI Lab (hereinafter, “the
          Service”) provided by Space AI (hereinafter, “we/our/us”).
          <br />
          Users are kindly requested to follow the Terms when using the Service.
        </p>
        <h2 className="text-2xl font-semibold mb-2">User registration</h2>
        <p className="mb-4">
          User registration User registration will be completed when we approve
          an application for registration by an applicant. We may not approve an
          application for registration if we judge it inappropriate; for
          example, the applicant violated the Terms of Service in the past. We
          will not disclose reasons for rejection.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Management of user name</h2>
        <p className="mb-4">
          Users should manage their user names and passwords for the Service
          under their responsibility. Do not let others know your password to
          protect your user name. Users must not assign or lend their user names
          or passwords to a third party. If a combination of a user name with a
          password corresponds to the registered data in logging in, we will
          regard it as being used by the user who registered the user name. If
          you find unauthorized use of your user name, promptly report to us.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Use of the service</h2>
        <p className="mb-4">
          Users must not commit wrongdoing in use of the Service, for example,
          destroying or disturbing functions of our servers/networks. If we
          judge any act of a user a wrongdoing, we may restrict the user’s use
          of the Service or terminate the user’s registration without prior
          notice. In this case, we shall bear no liability for any damages the
          user incurs arising from the restricted use and the like.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Charge and payment</h2>
        <p className="mb-4">
          Users shall pay to us the charge that we define and display on the
          website in exchange for the use of the Service, by the methods
          specified by us. We will not refund the usage charge for any reason
          once we receive it.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Protection of personal information
        </h2>
        <p className="mb-4">
          Our privacy policy describes how we handle users’ personal
          information. Prior to use of the Service, you must agree that we use
          users’ personal information in accordance with the privacy policy.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Discontinuation of the Service
        </h2>
        <p className="mb-4">
          We may discontinue or halt the provision of the Service without prior
          notice to users if we judge it is difficult to provide the Service,
          for example, when carrying out maintenance and inspection or updating
          the computer system relating to the Service. We accept no liability
          for disadvantage or damage a user or a third party incurs arising the
          discontinued or halted provision of the Service irrespective of the
          reason.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Disclaimer of Warranties and Limitation of Liability
        </h2>
        <p className="mb-4">
          We pay reasonable attention when providing the Service. However, we do
          not guarantee that there are no factual or legal defects in the
          Service (including deficiencies relating to safety, reliability,
          accuracy, integrity, efficacy, compatibility with specific purposes,
          security; errors; bugs; infringement of rights). We bear no liability
          for any damages users incur through the Service except in cases of
          intentional or gross negligence. Even if we are legally liable, we
          bear no liability for damages arising from special circumstances.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Changes in details of the Service and/or Terms of Service
        </h2>
        <p className="mb-4">
          Due to continuous changes and improvements of the Service, we may
          delete posted data, change details or conditions of use of the
          Service, or discontinue the provision of the Service without notice to
          users. We shall bear no liability for damage the user incurs arising
          from any of the cases above. We reserve the right to modify the Terms
          of Use without requiring individual user consent in the following
          cases (1) If the modification of the Terms of Service conforms to the
          general interest of the users. (2) If the modification of the Terms of
          Use is not contrary to the purpose of this agreement , and it is
          reasonable in light of the necessity of the modification,
          reasonableness of the modified content, and other circumstances
          pertaining to the modification. When modifying the Terms of Service,
          we will notify users in advance of the modification, the contents of
          the modified Terms of Service, and the effective date of the
          modification.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Notice or contact</h2>
        <p className="mb-4">
          We give notice to and make contact with users by methods specified by
          us.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Governing law and jurisdiction
        </h2>
        <p className="mb-4">
          The interpretation of the terms is governed by laws of Japan. In the
          event of any disputes arising from the Service, Tokyo District Court
          or Tokyo Summary Court shall have an agreed exclusive jurisdiction.
        </p>
        <p className="mt-8">Established on November 10, 2024</p>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
