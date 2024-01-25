import resumeStyles from "~/styles/resume.css";
import type { LinksFunction } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/node";
import { GitHubLogoIcon, LinkedInLogoIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: resumeStyles },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Simon Twogood - Resume" },
    { name: "description", content: "" },
  ];
};

export default function Resume() {
  return (
    <main className="print:bg-paper text-space-cadet m-5 hyphens-manual print:m-0 print:py-5">
      {/* Page */}
      <div className="page bg-primary print:bg-white print:max-w-letter md:max-w-letter md:h-letter mx-auto max-w-2xl rounded-lg p-10 lg:p-16 print:p-5">
        <header className="mb-8 flex items-center align-middle md:mb-11">
          <div className="initials-container bg-space-cadet-250 text-primary mr-3 font-bold leading-none print:hidden">
            <div className="initial text-center">S</div>
            <div className="initial text-center">2</div>
          </div>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 256 256"
            className="mr-2 hidden size-8 print:block"
            data-icon="ph:wave-triangle-duotone"
          >
            <symbol id="ai:ph:wave-triangle-duotone">
              <g fill="currentColor">
                <path d="m76 56l52 72H24Zm156 72H128l52 72Z" opacity=".2" />
                <path d="m238.48 132.68l-52 72a8 8 0 0 1-13 0L76 69.66l-45.51 63a8 8 0 1 1-13-9.36l52-72a8 8 0 0 1 13 0l97.51 135l45.51-63a8 8 0 1 1 13 9.36Z" />
              </g>
            </symbol>
            <use xlinkHref="#ai:ph:wave-triangle-duotone"></use>
          </svg>
          <h1 className="text-3xl font-semibold">Simon Twogood</h1>
        </header>
        {/* end Name */}

        {/* Column */}
        <div className="md:col-count-2 print:col-count-2 col-gap-md md:h-letter-col print:h-letter-col col-fill-auto">
          <section className="mt-8 first:mt-0">
            {/* To keep in the same column */}
            <div className="break-inside-avoid">
              <h2 className="text-space-cadet-250 mb-4 font-bold uppercase tracking-widest print:font-normal">
                Summary
              </h2>

              <section className="mb-4.5 break-inside-avoid">
                <p>
                  An accomplished hands-on technical leader and full stack
                  developer with a proven track record of architecting
                  high-impact solutions to meet complex business problems.
                </p>
              </section>

              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-space-cadet-600 text-base font-semibold leading-snug">
                    Full Stack Software Developer
                  </h3>
                  <p className="text-space-cadet-250 text-sm leading-normal ">
                    Since 2004
                  </p>
                </header>
              </section>
            </div>

            <section className="mb-4.5 break-inside-avoid">
              <header>
                <h3 className="text-space-cadet-600 text-base font-semibold leading-snug">
                  Hands-on Technical Leader
                </h3>
                <p className="text-space-cadet-250 text-sm leading-normal">
                  Since 2018
                </p>
              </header>
            </section>
          </section>

          <section className="mt-8 first:mt-0">
            <section className="mb-4.5 break-inside-avoid">
              <header>
                <h3 className="text-space-cadet-250 font-bold uppercase tracking-widest print:font-normal">
                  Skills
                </h3>
              </header>
              <div className="my-3.2 last:pb-1.5">
                <ul className="text-md -mr-1.6 -mb-1.6 flex flex-wrap leading-relaxed">
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    Node JS
                  </li>
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    TypeScript
                  </li>
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    JavaScript
                  </li>
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    Java
                  </li>
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    Kotlin
                  </li>
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    C#
                  </li>
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    Python
                  </li>
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    PHP
                  </li>
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    Ruby
                  </li>
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    Rails
                  </li>
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    SQL
                  </li>
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    NoSQL
                  </li>
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    React
                  </li>
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    Vue
                  </li>
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    Angular
                  </li>
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    AWS Lambda
                  </li>
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    Serverless
                  </li>
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    PostgreSQL
                  </li>
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    MySQL
                  </li>
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    Azure SQL
                  </li>
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    GraphQL
                  </li>
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    AWS
                  </li>
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    Docker
                  </li>
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    CI/CD
                  </li>
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    Azure
                  </li>
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    Databricks
                  </li>
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    Event Driven Architecture
                  </li>
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    Scrum
                  </li>
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    Kanban
                  </li>
                  <li className="mr-1.6 mb-1.6 text-secondary bg-skill hover:bg-indigo-100 print:prnt-box px-2.5 text-base">
                    Product Management
                  </li>
                </ul>
              </div>
            </section>
          </section>

          <section className="mt-8 first:mt-0">
            {/* To keep in the same column */}
            <div className="break-inside-avoid">
              <h2 className="text-space-cadet-250 mb-4 font-bold uppercase tracking-widest print:font-normal">
                Projects
              </h2>

              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-space-cadet-700 font-semibold leading-snug">
                    <a
                      href="https://github.com/s2progger/kt-data-flow"
                      className="flex items-center group hover:text-fuchsia-900 hover:underline"
                    >
                      <span>Kt Data Flow</span>
                      <ArrowTopRightIcon />
                    </a>

                  </h3>
                </header>
                <p className="mt-2.1 text-sm leading-normal">
                  Database Copying Utility written in Kotlin
                </p>
              </section>
            </div>

            <section className="mb-4.5 break-inside-avoid">
              <header>
                <h3 className="text-space-cadet-700 font-semibold leading-snug">
                  <a
                    href="https://github.com/antrica-labs/og-liability-tracker"
                    className="flex items-center group hover:text-fuchsia-900 hover:underline"
                  >
                    <span>O&G Liability Tracker</span>
                    <ArrowTopRightIcon />
                  </a>
                </h3>
              </header>
              <p className="mt-2.1 text-sm leading-normal">
                A React.js and JVM based liability management tool to help
                Canadian oil and gas companies track their LMR ratings and
                forecast future ratios.
              </p>
            </section>
          </section>

          <section className="mt-8 first:mt-0">
            {/* To keep in the same column */}
            <div className="break-inside-avoid">
              <h2 className="text-space-cadet-250 mb-4 font-bold uppercase tracking-widest print:font-normal">
                Education
              </h2>

              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-space-cadet-700 font-semibold leading-snug">
                    University of Calgary
                  </h3>
                  <p className="text-space-cadet-650 text-sm leading-normal">
                    Bachelor of Science, Computer Science
                  </p>
                </header>
              </section>
            </div>

            <section className="mb-4.5 break-inside-avoid">
              <header>
                <p className="text-space-cadet-650 text-sm leading-normal">
                  Microsoft Certified Azure Data Engineer Associate
                </p>
                <p className="text-space-cadet-650 text-sm  leading-normal">
                  FrontLine Leadership 2.0 (neuroSHIFT)
                </p>
              </header>
            </section>
          </section>

          <section className="mt-8 first:mt-0">
            {/* To keep in the same column */}
            <div className="break-inside-avoid">
              <h2 className="text-space-cadet-250 mb-4 font-bold uppercase tracking-widest print:font-normal">
                Contact
              </h2>

              <section className="mb-4 break-inside-avoid">
                <ul className="list-inside">
                  <li className="text-space-cadet-700 flex space-x-1 leading-normal">
                    <span>Calgary, Alberta</span>
                  </li>
                  <li className="text-space-cadet-700 mt-4 flex items-center align-baseline text-sm leading-normal md:text-base">
                    <LinkedInLogoIcon className="mr-2"/>
                    <a
                      href="https://linkedin.com/in/simon-twogood"
                      className="group hover:text-fuchsia-900 hover:underline"
                    >
                      https://linkedin.com/in/simon-twogood
                    </a>
                    <ArrowTopRightIcon />
                  </li>
                  <li className="text-space-cadet-700 mt-2 flex items-center text-sm leading-normal md:text-base">
                    <GitHubLogoIcon className="mr-2"/>
                    <a href="https://github.com/s2progger" className="group hover:text-fuchsia-900 hover:underline">
                      https://github.com/s2progger
                    </a>
                    <ArrowTopRightIcon />
                  </li>
                </ul>
              </section>
            </div>
          </section>

          <section className="mt-8 first:mt-0">
            {/* To keep in the same column */}
            <div className="break-inside-avoid">
              <h2 className="text-space-cadet-250 mb-4 font-bold uppercase tracking-widest print:font-normal">
                Job History
              </h2>

              <section className="break-inside-avoid">
                <header>
                  <div className="flex justify-between align-baseline">
                    <h3 className="text-space-cadet-650 font-semibold leading-snug">
                      Cymax Technology Group
                    </h3>
                    <span className="text-space-cadet-200 text-sm">
                      June 2023 - Present
                    </span>
                  </div>
                </header>
                <div>
                  <ul className="-ml-0.5 flex flex-wrap text-sm leading-relaxed">
                    <li className="bg-skill text-secondary hover:bg-indigo-100 print:prnt-box m-0.5 px-2">
                      C#
                    </li>
                    <li className="bg-skill text-secondary hover:bg-indigo-100 print:prnt-box m-0.5 px-2">
                      TypeScript
                    </li>
                    <li className="bg-skill text-secondary hover:bg-indigo-100 print:prnt-box m-0.5 px-2">
                      React
                    </li>
                    <li className="bg-skill text-secondary hover:bg-indigo-100 print:prnt-box m-0.5 px-2">
                      Azure
                    </li>
                    <li className="bg-skill text-secondary hover:bg-indigo-100 print:prnt-box m-0.5 px-2">
                      Functions
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm2 text-space-cadet-650 mb-2 mt-3 font-semibold leading-normal">
                    Engineering Manager
                  </h4>
                  <ul className="text-sm">
                    <li>
                      Enhanced product deployment reliability through the
                      implementation of automated CI/CD pipelines in Microsoft
                      Azure, and transitioned the team to Trunk Based
                      Development, increasing deployment frequency from monthly
                      to daily.
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mt-8 break-inside-avoid">
                <header>
                  <div className="flex justify-between align-baseline">
                    <h3 className="text-space-cadet-700 font-semibold leading-snug">
                      CostCertified (YCombinator S21)
                    </h3>
                    <span className="text-space-cadet-200 text-sm">
                      Oct 2021 – June 2023
                    </span>
                  </div>
                </header>
                <div>
                  <ul className="-ml-0.5 flex flex-wrap text-sm leading-relaxed">
                    <li className="bg-skill text-secondary hover:bg-indigo-100 print:prnt-box m-0.5 px-2">
                      SaaS
                    </li>
                    <li className="bg-skill text-secondary hover:bg-indigo-100 print:prnt-box m-0.5 px-2">
                      JavaScript
                    </li>
                    <li className="bg-skill text-secondary hover:bg-indigo-100 print:prnt-box m-0.5 px-2">
                      Node
                    </li>
                    <li className="bg-skill text-secondary hover:bg-indigo-100 print:prnt-box m-0.5 px-2">
                      Vue
                    </li>
                    <li className="bg-skill text-secondary hover:bg-indigo-100 print:prnt-box m-0.5 px-2">
                      PHP
                    </li>
                    <li className="bg-skill text-secondary hover:bg-indigo-100 print:prnt-box m-0.5 px-2">
                      Docker
                    </li>
                    <li className="bg-skill text-secondary hover:bg-indigo-100 print:prnt-box m-0.5 px-2">
                      GraphQL
                    </li>
                    <li className="bg-skill text-secondary hover:bg-indigo-100 print:prnt-box m-0.5 px-2">
                      AWS
                    </li>
                    <li className="bg-skill text-secondary hover:bg-indigo-100 print:prnt-box m-0.5 px-2">
                      OpenSearch
                    </li>
                    <li className="bg-skill text-secondary hover:bg-indigo-100 print:prnt-box m-0.5 px-2">
                      RDS
                    </li>
                    <li className="bg-skill text-secondary hover:bg-indigo-100 print:prnt-box m-0.5 px-2">
                      SQS
                    </li>
                    <li className="bg-skill text-secondary hover:bg-indigo-100 print:prnt-box m-0.5 px-2">
                      Lambda
                    </li>
                    <li className="bg-skill text-secondary hover:bg-indigo-100 print:prnt-box m-0.5 px-2">
                      AppSync
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm2 text-space-cadet-650 mb-2 mt-3 font-semibold leading-normal">
                    Director, Product Development
                  </h4>

                  <ul className="text-sm">
                    <li className="mt-2.1 leading-normal">
                      Successfully led a cross-functional engineering department
                      to adopt product lead development methodologies, achieving
                      a 600% growth in subscription revenue and a 50% reduction
                      in processing fees through strategic partnership and
                      infrastructure enhancements.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm2 text-space-cadet-650 mb-2 mt-3 font-semibold leading-normal">
                    Senior Lead Full Stack Developer
                  </h4>

                  <ul className="text-sm">
                    <li className="mt-2.1 leading-normal">
                      Transformed construction project estimation as a Full
                      Stack Developer by creating an interactive, shoppable
                      platform, leading the full software development lifecycle,
                      and architecting a multi-merchant payment platform that
                      achieved $5 million in annual payments in its first year.
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mt-8 break-inside-avoid">
                <header>
                  <div className="flex justify-between align-baseline">
                    <h3 className="text-space-cadet-700 font-semibold leading-snug">
                      ENMAX Corporation
                    </h3>
                    <span className="text-space-cadet-200 text-sm">
                      2018 – Oct 2021
                    </span>
                  </div>
                </header>
                <div>
                  <ul className="-ml-0.5 flex flex-wrap text-sm leading-relaxed">
                    <li className="bg-skill text-secondary hover:bg-indigo-100 print:prnt-box m-0.5 px-2">
                      Azure
                    </li>
                    <li className="bg-skill text-secondary hover:bg-indigo-100 print:prnt-box m-0.5 px-2">
                      Data Factory
                    </li>
                    <li className="bg-skill text-secondary hover:bg-indigo-100 print:prnt-box m-0.5 px-2">
                      Data Lake
                    </li>
                    <li className="bg-skill text-secondary hover:bg-indigo-100 print:prnt-box m-0.5 px-2">
                      Streaming
                    </li>
                    <li className="bg-skill text-secondary hover:bg-indigo-100 print:prnt-box m-0.5 px-2">
                      Databricks
                    </li>
                    <li className="bg-skill text-secondary hover:bg-indigo-100 print:prnt-box m-0.5 px-2">
                      Serverless
                    </li>
                    <li className="bg-skill text-secondary hover:bg-indigo-100 print:prnt-box m-0.5 px-2">
                      Azure SQL
                    </li>
                    <li className="bg-skill text-secondary hover:bg-indigo-100 print:prnt-box m-0.5 px-2">
                      React
                    </li>
                    <li className="bg-skill text-secondary hover:bg-indigo-100 print:prnt-box m-0.5 px-2">
                      JavaScript
                    </li>
                    <li className="bg-skill text-secondary hover:bg-indigo-100 print:prnt-box m-0.5 px-2">
                      Python
                    </li>
                    <li className="bg-skill text-secondary hover:bg-indigo-100 print:prnt-box m-0.5 px-2">
                      C#
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm2 text-space-cadet-650 mb-2 mt-3 font-semibold leading-normal">
                    Manager, Digital Innovations
                  </h4>

                  <ul className="text-sm">
                    <li className="mt-2.1 leading-normal">
                      As a manager of a .NET and Azure development team, I
                      successfully led digital transformation initiatives,
                      including the development and maintenance of a key
                      revenue-generating website and the architectural design of
                      Calgary's Advanced Metering Infrastructure, while also
                      establishing a Center of Excellence for Robotic Process
                      Automation.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm2 text-space-cadet-650 mb-2 mt-3 font-semibold leading-normal">
                    Enterprise Data Management and Integrations Lead
                  </h4>

                  <ul className="text-sm">
                    <li className="mt-2.1 leading-normal">
                      Championed the development of cloud software solutions,
                      including an enterprise-wide data warehousing strategy,
                      migrating 50TB of data to Microsoft Azure, and designing a
                      corporate financial forecasting model, significantly
                      enhancing reliability, cost-efficiency, and
                      decision-making capabilities.
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mt-8 break-inside-avoid">
                <div className="grid grid-cols-3 items-end gap-x-2">
                  <div className="text-space-cadet-700 text-left font-semibold leading-snug">
                    Spyglass
                  </div>
                  <div className="text-left text-sm">Senior BI Lead</div>
                  <div className="text-space-cadet-200 text-right text-sm">
                    2013 – 2018
                  </div>

                  <div className="text-space-cadet-700 text-left font-semibold">
                    Penn West
                  </div>
                  <div className="text-left text-sm">Business Intelligence</div>
                  <div className="text-space-cadet-200 text-right text-sm">
                    2011 – 2013
                  </div>

                  <div className="text-space-cadet-700 text-left font-semibold">
                    Siconix Inc.
                  </div>
                  <div className="text-left text-sm">Embedded Developer</div>
                  <div className="text-space-cadet-200 text-right text-sm">
                    2007 – 2011
                  </div>

                  <div className="text-space-cadet-700 text-left font-semibold">
                    Warp Internet Labs
                  </div>
                  <div className="text-left text-sm">Web Developer</div>
                  <div className="text-space-cadet-200 text-right text-sm">
                    2004 – 2017
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
        {/* end Column */}
      </div>
      {/* end Page */}
    </main>
  );
}
