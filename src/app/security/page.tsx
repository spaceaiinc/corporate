import { Footer, TopNavBar } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Security",
  description: "About Security",
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
        <h1 className="text-3xl font-bold mb-4">About Security</h1>
        <p className="mb-4">
          Security is one of our highest priorities because our services handle
          information that is sensitive to your privacy. All of our employees
          work together to ensure the confidentiality, integrity, and
          availability of your data.
        </p>

        <h2 className="text-2xl font-semibold mb-2">
          Our Efforts to Protect Your Data
        </h2>
        <p className="mb-4">
          Only the user himself/herself has access to the data. All user data
          stored in “Amazing Resume” is set at the infrastructure level so that
          only the user himself/herself can view the data.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Encrypted Communication</h2>
        <p className="mb-4">
          All communications with the our services API and management screen are
          encrypted using TLS. This encryption during communication makes it
          impossible for an attacker to read or manipulate information.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Backups</h2>
        <p className="mb-4">
          All data is backed up on a daily basis. Backup data, like all other
          data, is managed in a format that cannot be viewed by anyone other
          than the users themselves.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Google Cloud Platform Security
        </h2>
        <p className="mb-4">
          User data is managed on the Google Cloud Platform, which provides
          services with the highest level of security in the industry, and has
          been audited by an independent third-party organization and has
          received ISO/IEC 27001, ISO/IEC 27017, ISO/IEC 27018, ISO /IEC 27701
          and other certifications.
        </p>
        <p className="mb-4">
          For more information on the security of Google Cloud services, please
          refer to{" "}
          <a
            href="https://cloud.google.com/security"
            className="text-blue-500 underline"
            target="_blank"
          >
            Google&apos;s documentation
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mb-2">Stripe Security</h2>
        <p className="mb-4">
          We use Stripe to process payments securely. Stripe is a PCI-certified
          Service Provider at Level 1, the most stringent certification level in
          the payments industry. Stripe’s security posture evolves continually
          to meet global financial industry standards. Features include:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            PCI Compliance: Stripe is audited annually for PCI Service Provider
            Level 1 certification, covering Card Data Vault (CDV) and secure
            software development.
          </li>
          <li>
            SOC Reports: Stripe’s systems and processes comply with SOC 1 and
            SOC 2 standards, with annual SOC 3 reports available.
          </li>
          <li>
            Encryption: All communications are encrypted using TLS, with AES-256
            encryption at rest for sensitive data.
          </li>
          <li>
            Access Control: The Stripe Dashboard supports MFA, SAML 2.0 single
            sign-on, and detailed role-based access to ensure least privilege.
          </li>
          <li>
            Infrastructure Security: Stripe infrastructure undergoes frequent
            penetration testing, red team exercises, and vulnerability scans to
            maintain resilience.
          </li>
        </ul>
        <p className="mb-4">
          For more details, visit{" "}
          <a
            href="https://stripe.com/docs/security"
            className="text-blue-500 underline"
            target="_blank"
          >
            Stripe&apos;s Security Documentation
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mb-2">Supabase Security</h2>
        <p className="mb-4">
          We use Supabase to store user data securely. Supabase is trusted by
          thousands of developers for building and deploying secure
          applications. Key security features include:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Multi-factor Authentication (MFA): Adds an extra layer of security
            by requiring a second factor to verify user identity.
          </li>
          <li>
            SOC 2 Type 2 Compliance: Ensures secure handling of sensitive
            customer data.
          </li>
          <li>
            HIPAA Compliance: Allows storing Protected Health Information (PHI)
            with a signed Business Associate Agreement (BAA).
          </li>
          <li>
            Data Encryption: AES-256 encryption for data at rest and TLS for
            data in transit. Sensitive information like tokens is encrypted at
            the application level.
          </li>
          <li>
            Role-based Access Control (RBAC): Fine-grained permissions for
            organizational resources.
          </li>
          <li>
            Backups and Recovery: Daily backups with Point in Time Recovery for
            Pro Plan users.
          </li>
          <li>
            Vulnerability Management: Regular penetration testing and
            vulnerability scanning with tools like GitHub, Vanta, and Snyk.
          </li>
          <li>
            DDoS Protection: Mitigates Distributed Denial of Service attacks
            with Cloudflare, fail2ban, and rate limits for critical APIs.
          </li>
        </ul>
        <p className="mb-4">
          For more details, visit{" "}
          <a
            href="https://supabase.com/security"
            className="text-blue-500 underline"
            target="_blank"
          >
            Supabase&apos;s Security Documentation
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mb-2">Vercel Security</h2>
        <p className="mb-4">
          We use Vercel to host our services. Vercel employs advanced security
          measures to ensure the protection of your data and compliance with
          industry standards:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            SOC 2 Type 2 Compliance: Vercel is certified for Security,
            Confidentiality, and Availability under the SOC 2 framework.
          </li>
          <li>
            ISO 27001:2013: Vercel is certified for the internationally
            recognized standard for managing information security.
          </li>
          <li>
            GDPR Compliance: Vercel adheres to GDPR requirements to ensure the
            protection of personal data for EU and UK users.
          </li>
          <li>
            HIPAA Compliance: Vercel supports HIPAA compliance by safeguarding
            Protected Health Information (PHI).
          </li>
        </ul>
        <p className="mb-4">
          For more details, visit{" "}
          <a
            href="https://vercel.com/security"
            className="text-blue-500 underline"
            target="_blank"
          >
            Vercel&apos;s Security Documentation
          </a>
          .
        </p>
        <h2 className="text-2xl font-semibold mb-2">Post Hog Security</h2>
        <p className="mb-4">
          We use Post Hog to analyze user behavior and improve our services.
          Post Hog is committed to maintaining the highest standards of security
          and compliance to protect your data. Key security features include:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            SOC 2 Type II Compliance: Post Hog is certified as SOC 2 Type II
            compliant, following an external audit.
          </li>
          <li>
            GDPR Compliance: Post Hog is GDPR compliant and acts as a Data
            Processor for customers using Post Hog Cloud.
          </li>
          <li>
            CCPA Compliance: Post Hog is a Service Provider to Post Hog Cloud
            customers and includes a CCPA Addendum in its Privacy Policy.
          </li>
        </ul>
        <p className="mb-4">
          For more details, visit{" "}
          <a
            href="https://posthog.com/handbook/company/security"
            className="text-blue-500 underline"
            target="_blank"
          >
            Post Hog&apos;s Security Overview
          </a>
          .
        </p>
        <h2 className="text-2xl font-semibold mb-2">Loop Security</h2>
        <p className="mb-4">
          We use Loops to enhance our email communications and improve our
          services. Loops provides secure data processing and encryption to keep
          your information safe. Key security features include:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Data Encryption: All communications with Loops are encrypted using
            TLS, ensuring that data transmitted between our services and Loops
            remains secure.
          </li>
          <li>
            Data Processing: Loops collects and processes personal data in
            accordance with their Privacy Policy, which outlines how they handle
            user information.
          </li>
          <li>
            User Control: Users have the ability to manage their communication
            preferences and opt out of marketing communications at any time.
          </li>
        </ul>
        <p className="mb-4">
          For more details, please refer to{" "}
          <a
            href="https://www.loops.io/privacy"
            className="text-blue-500 underline"
            target="_blank"
          >
            Loops&apos; Privacy Policy
          </a>
          .
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Organizational and Individual Employee Initiatives
        </h2>
        <p className="mb-4">
          In addition to technical efforts, organizational and individual
          employee commitment to data is also important to enhance security.
        </p>
        <p className="mb-4">
          We require all employees/contractors to sign a confidentiality
          agreement and only have access to the resources necessary for their
          role. In addition, all employees are required to set strong passwords
          for all major services on which their awesome resumes depend, and
          two-factor authentication is mandatory.
        </p>
        <p className="mb-4">
          These efforts are reviewed on a regular basis to ensure that your data
          is always carefully protected.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Security;
