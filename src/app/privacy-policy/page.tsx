import { Footer, TopNavBar } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Space AI Privacy Policy",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const PrivacyPolicy = () => {
  return (
    <>
      <TopNavBar />
      <div className="container mx-auto p-6 mt-20">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          Thank you very much for using the services provided by Space AI
          (hereinafter, “we/our/us”).
          <br />
          The Privacy Policy (hereinafter, “the Policy”) sets forth our privacy
          information handling principles. You or users are deemed to have
          agreed with the Policy if you use our services.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          What is privacy information?
        </h2>
        <p className="mb-4">
          Privacy information includes both personal information; and history
          information and characteristic information. Personal information
          refers to the personal information prescribed in the Act on the
          Protection of Personal Information or information relating to a living
          individual, specifically the name, date of birth, address, telephone
          number and other contact information, and any other described
          information that can identify individuals. Information other than
          personal information corresponds to history and characteristic
          information, such as services used, products purchased, history of
          pages/ads viewed, search keywords used by users, time and date of use,
          methods of using, using environment, postal code, gender, occupation,
          age, user’s IP address, cookie information, location information, and
          terminal identification information.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          How do you collect privacy information?
        </h2>
        <p className="mb-4">
          We may collect personal information when a user makes a user
          registration or use any of our services and/or history and
          characteristic information of a user when a user uses any of our
          services or views any of the pages of our website. If a user performs
          settings in such a way that the use of the services is linked with any
          external service, we will collect the ID to be used by the user in the
          external service and/or the information that the user agrees to
          disclose to the linked service under the external service’s privacy
          settings.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          For what purpose do you use privacy information?
        </h2>
        <p className="mb-4">
          The following gives purposes of our collection and use of privacy
          information.
          <br />
          <br />
          A) To present registered information including the user’s name,
          address, contact, and payment methods, used services, purchased
          products, and charges for such services/products so that users can
          view and/or correct their registered information and/or view the
          status of use
          <br /> B) To use an e-mail address to notify or contact users, to use
          contact information such as name and address in order to send products
          to users, contact users as necessary <br />
          C) To use such information such as name, date of birth, address,
          telephone number, bank account number, credit card number, driving
          license number, and arrival of mails with delivery certificate for
          user identity verification <br /> D) To use payment-related
          information such as names/quantities of products purchased,
          types/periods of services used, number of times of using services,
          amount billed, name, address, bank account number, and credit card
          number, in order to charge users <br /> E) To display information
          registered to us on an input screen so that users can enter data
          easily or forward such information to external services under
          instructions of users <br /> F) To use information for identify
          individuals, such as state of using, name and address, to refuse the
          use of the Service by those users who violate the Terms of Service of
          the Service, for example, failing to pay charge and causing damage to
          a third party or by those users who try to use the Service for
          unjust/unlawful purposes <br /> G) To use information necessary for
          our provision of services for users, such as information about details
          of inquiries and billing, status of use of services by users, and
          contact information of users so as to answer inquires by users <br />{" "}
          H) To prepare statistical data that is processed in the form that does
          not permit personal identification in connection with our services{" "}
          <br /> I) To distribute or display advertisements of us or a third
          party <br /> J) To use privacy information for marketing <br />
          K) Purposes incidental to the purposes of using above
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Do you provide privacy information for a third party?
        </h2>
        <p className="mb-4">
          We will not provide privacy information for a third party without the
          prior approval of users except for the following. However, this
          excludes cases in which the provision is permitted under the Act on
          the Protection of Personal Information or any other laws and
          regulations.
          <br />
          <br />
          A) Where requested under laws and regulations
          <br /> B) Where the provision is required for protecting human life,
          body or property and it is difficult to obtain an approval of the user
          him/herself
          <br /> C) Where it is especially necessary to improve public health or
          promote the sound growth of children and it is difficult to obtain the
          approval of the user him/herself
          <br /> D) Where it is necessary to help any national organization, a
          local public organization, or a contractor perform the clerical work
          prescribed in laws and regulations and the approval of the user
          him/herself could disturb the performance of the clerical work
          <br />
          <br />
          If we outsource all or part of privacy information handling to the
          extent necessary to achieve the purpose of the use or privacy
          information is provided along with succession of business due to
          merger or for any other reasons, it will not correspond to the
          provision of privacy information to a third party.
          <br />
          <br /> We may share or disclose privacy information upon user’s
          request if a user links any our services with any external services
          when using our services.
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
          Can I check my privacy information or request you to correct it?
        </h2>
        <p className="mb-4">
          If a user himself/herself requests the disclosure of the privacy
          information (excluding history or characteristic information) to the
          user himself/herself, we will disclose it without delay. However, if
          disclosure could harm the life, body, property, or other interests of
          the user or a third party, could cause significant hindrance to the
          proper performance of our business, or violates laws and regulations,
          we will refrain from disclosing all or part of the information. If we
          decide not to disclose the information, we will inform you without
          delay. We will charge you $10 for each instance of disclosure of
          personal information.
          <br />
          <br />
          If any user’s personal information we own is incorrect, the user can
          request us to correct or delete the personal information by the
          procedure stipulated by us. If a user makes such a request and we
          judge it is necessary to meet the request, we will correct or delete
          the personal information and inform the user without delay.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Can I request you to discontinue the use of my privacy information?
        </h2>
        <p className="mb-4">
          When the user requests discontinuation of the use of his/her privacy
          information (hereinafter, “Discontinuation of the Use”) claiming the
          privacy information is handled beyond the scope of the purposes of use
          or the privacy information is obtained by unjust means, we will
          conduct a necessary investigation, and based on the outcome of the
          investigation make take measures such as Discontinuation of the Use,
          and inform the user without delay.
          <br />
          However, we will take alternative measures if Discontinuation of the
          Use of privacy information involves an inordinate expense or if it is
          difficult and alternative measures are possible so as to protect
          rights and benefits of the users
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Change of Privacy Policy
        </h2>
        <p className="mb-4">
          This Privacy Policy is subject to changes without notice to users. The
          changed Privacy Policy will take effect when it is placed on this
          website unless otherwise specified by us.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Inquiry contact</h2>
        <p className="mb-4">
          If you have any question about the policy, please contact us at the
          following contact e-mail address:
          <br />
          <br />
          E-mail address: info@spaceai.jp
        </p>
        <p className="mt-8">Established on November 10, 2024</p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
