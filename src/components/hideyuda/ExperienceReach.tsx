const ExperienceReach = () => {
  return (
    <section id="experience" className="py-10 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <span className="rounded-md border border-primary px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            Experience | Reach
          </span>
          <h2 className="mt-4 text-4xl/tight font-medium text-default-950">
            CRM System &quot;Reach&quot; Development and Maintenance
          </h2>
          <p className="mt-5 text-base">
            February 2022 - September 2024: Worked on the release, maintenance,
            and operation of the CRM system &quot;Reach&quot; for recruitment
            agencies. Responsibilities spanned backend, frontend, and
            infrastructure, from requirements definition to implementation.
            <br />
            <br />
            <strong>Key Contributions:</strong>
            <ul className="mt-4 text-left">
              <li>
                - Collaborated with sales-side directors to define necessary
                features and screens.
              </li>{" "}
              <br />
              <li>
                - Developed pages for creating, updating, and managing job and
                applicant data.
              </li>{" "}
              <br />
              <li>
                - Implemented functionality to generate resumes and CVs from
                entered applicant information.
              </li>{" "}
              <br />
              <li>
                - Built LINE login and Messaging API features for communication
                with applicants.
              </li>{" "}
              <br />
              <li>
                - Developed REST APIs using Go, Docker with clean architecture
                and domain-driven design.
              </li>{" "}
              <br />
              <li>
                - Created Gmail API integration to import applicant data
                triggered by entry emails from scouting platforms.
              </li>{" "}
              <br />
              <li>
                - Built RPA for scheduled scouting email sending via scouting
                platforms.
              </li>{" "}
              <br />
              <li>- Added new tables and columns to the database as needed.</li>
              <li>
                - Integrated Firebase Auth for user login via email and Google
                authentication.
              </li>{" "}
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
            <strong>Infrastructure</strong>
            <ul className="mt-4 text-center">
              <li>
                MySQL, Docker, Google Cloud (Firebase App Hosting, Cloud Run,
                Artifact Repository, Cloud Load Balancer, Cloud SQL)
              </li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceReach;
