import resumeStyles from "~/styles/resume.css";
import type { LinksFunction } from "@remix-run/node";
import type {MetaFunction} from "@remix-run/node";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: resumeStyles },
];


export const meta: MetaFunction = () => {
  return [
    { title: "Simon Twogood - Resume" },
    { name: "description", content: "" },
  ];
};

export default function Resume () {
  return (
    <main className="print:bg-paper font-resume text-space-cadet rounded-lg hyphens-manual bg-white m-5 print:m-0 print:py-5">
      {/* Page */}
      <div className="mx-auto page max-w-2xl print:max-w-letter md:max-w-letter md:h-letter p-10 lg:p-16 print:p-5">
        <header className="flex align-middle items-center mb-8 md:mb-11">
          <div className="print:hidden initials-container leading-none bg-space-cadet-250 text-primary font-bold mr-3" >
            <div className="initial text-center">S</div>
            <div className="text-center initial">2</div>
          </div>
          <svg width="1em" height="1em" viewBox="0 0 256 256" className="hidden print:block mr-2 size-8" data-icon="ph:wave-triangle-duotone">
            <symbol id="ai:ph:wave-triangle-duotone">
              <g fill="currentColor">
                <path d="m76 56l52 72H24Zm156 72H128l52 72Z" opacity=".2"/>
                <path
                  d="m238.48 132.68l-52 72a8 8 0 0 1-13 0L76 69.66l-45.51 63a8 8 0 1 1-13-9.36l52-72a8 8 0 0 1 13 0l97.51 135l45.51-63a8 8 0 1 1 13 9.36Z"/>
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

              <h2 className="font-bold mb-4 tracking-widest text-space-cadet-250 print:font-normal uppercase">
                Summary
              </h2>

              <section className="mb-4.5 break-inside-avoid">
                <p>
                  An accomplished hands-on technical leader and full stack developer with a proven track record of
                  architecting high-impact solutions to meet complex business problems.
                </p>
              </section>

              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-base font-semibold text-space-cadet-600 leading-snug">
                    Full Stack Software Developer
                  </h3>
                  <p className="leading-normal text-sm text-space-cadet-250 ">
                    Since 2004
                  </p>
                </header>
              </section>

            </div>

            <section className="mb-4.5 break-inside-avoid">
              <header>
                <h3 className="text-base font-semibold text-space-cadet-600 leading-snug">
                  Hands-on Technical Leader
                </h3>
                <p className="leading-normal text-sm text-space-cadet-250">
                  Since 2018
                </p>
              </header>
            </section>

          </section>

          <section className="mt-8 first:mt-0">

            <section className="mb-4.5 break-inside-avoid">
              <header>
                <h3 className="font-bold tracking-widest text-space-cadet-250 print:font-normal uppercase">
                  Skills
                </h3>
              </header>
              <div className="my-3.2 last:pb-1.5">
                <ul className="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">Node
                    JS
                  </li>
                  <li
                    className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">TypeScript
                  </li>
                  <li
                    className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">JavaScript
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">Java
                  </li>
                  <li
                    className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">Kotlin
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">C#</li>
                  <li
                    className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">Python
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">PHP
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">Ruby
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">Rails
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">SQL
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">NoSQL
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">React
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">Vue
                  </li>
                  <li
                    className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">Angular
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">AWS
                    Lambda
                  </li>
                  <li
                    className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">Serverless
                  </li>
                  <li
                    className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">PostgreSQL
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">MySQL
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">Azure
                    SQL
                  </li>
                  <li
                    className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">GraphQL
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">AWS
                  </li>
                  <li
                    className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">Docker
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">CI/CD
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">Azure
                  </li>
                  <li
                    className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">Databricks
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">Event
                    Driven Architecture
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">Scrum
                  </li>
                  <li
                    className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">Kanban
                  </li>
                  <li className="px-2.5 mr-1.6 mb-1.6 text-base text-secondary bg-primary print:print-box">Product
                    Management
                  </li>

                </ul>
              </div>
            </section>

          </section>

          <section className="mt-8 first:mt-0">

            {/* To keep in the same column */}
            <div className="break-inside-avoid">

              <h2 className="mb-4 font-bold tracking-widest text-space-cadet-250 print:font-normal uppercase">
                Projects
              </h2>

              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="font-semibold text-space-cadet-700 leading-snug">
                    <a href="https://github.com/s2progger/kt-data-flow" className="group">
                      Kt Data Flow
                      <span
                        className="inline-block text-space-cadet-550 print:text-black font-normal group-hover:text-space-cadet-700 transition duration-100 ease-in">↗</span>
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
                <h3 className="font-semibold text-space-cadet-700 leading-snug">
                  <a href="https://github.com/antrica-labs/og-liability-tracker" className="group">
                    O&G Liability Tracker
                    <span
                      className="inline-block text-space-cadet-550 print:text-black font-normal group-hover:text-space-cadet-700 transition duration-100 ease-in">↗</span>
                  </a>
                </h3>
              </header>
              <p className="mt-2.1 text-sm leading-normal">
                A React.js and JVM based liability management tool to help Canadian oil and gas companies track their
                LMR ratings and forecast future ratios.
              </p>
            </section>

          </section>

          <section className="mt-8 first:mt-0">

            {/* To keep in the same column */}
            <div className="break-inside-avoid">

              <h2 className="mb-4 font-bold tracking-widest text-space-cadet-250 print:font-normal uppercase">
                Education
              </h2>

              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="font-semibold text-space-cadet-700 leading-snug">
                    University of Calgary
                  </h3>
                  <p className="leading-normal text-sm text-space-cadet-650">
                    Bachelor of Science, Computer Science
                  </p>
                </header>
              </section>

            </div>

            <section className="mb-4.5 break-inside-avoid">
              <header>
                <p className="leading-normal text-sm text-space-cadet-650">
                  Microsoft Certified Azure Data Engineer Associate
                </p>
                <p className="leading-normal text-sm  text-space-cadet-650">
                  FrontLine Leadership 2.0 (neuroSHIFT)
                </p>
              </header>
            </section>
          </section>

          <section className="mt-8 first:mt-0">

            {/* To keep in the same column */}
            <div className="break-inside-avoid">

              <h2 className="mb-4 font-bold tracking-widest text-space-cadet-250 print:font-normal uppercase">
                Contact
              </h2>

              <section className="mb-4 break-inside-avoid">
                <ul className="list-inside">
                  <li className="leading-normal text-space-cadet-700 flex space-x-1">
                    <span>Calgary, Alberta</span>
                  </li>
                  <li
                    className="flex items-center mt-4 leading-normal text-space-cadet-700 text-sm md:text-base space-x-2 align-baseline">
                    <LinkedInLogoIcon />
                    <a href="https://linkedin.com/in/simon-twogood/" className="group">
                      https://linkedin.com/in/simon-twogood/
                      <span
                        className="inline-block text-space-cadet-550 print:text-black font-normal group-hover:text-space-cadet-700 transition duration-100 ease-in">↗</span>
                    </a>
                  </li>
                  <li className="flex items-center mt-2 leading-normal text-space-cadet-700 text-sm md:text-base space-x-2">
                    <GitHubLogoIcon />
                    <a href="https://github.com/s2progger" className="group">
                      https://github.com/s2progger
                      <span className="inline-block text-space-cadet-550 print:text-black font-normal group-hover:text-space-cadet-700 transition duration-100 ease-in">↗</span>
                    </a>
                  </li>
                </ul>
              </section>
            </div>

          </section>

          <section className="mt-8 first:mt-0">

            {/* To keep in the same column */}
            <div className="break-inside-avoid">

              <h2 className="mb-4 font-bold tracking-widest text-space-cadet-250 print:font-normal uppercase">
                Job History
              </h2>

              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <div className="flex justify-between align-baseline">
                    <h3 className="font-semibold text-space-cadet-700 leading-snug">
                      Cymax Technology Group
                    </h3>
                    <span className="text-space-cadet-200 text-sm">June 2023 - Present</span>
                  </div>
                </header>
                <div>
                  <ul className="flex flex-wrap text-sm leading-relaxed -ml-0.5">
                    <li className="m-0.5 px-2 bg-primary text-secondary print:print-box">C#</li>
                    <li className="m-0.5 px-2 bg-primary text-secondary print:print-box">TypeScript</li>
                    <li className="m-0.5 px-2 bg-primary text-secondary print:print-box">React</li>
                    <li className="m-0.5 px-2 bg-primary text-secondary print:print-box">Azure</li>
                    <li className="m-0.5 px-2 bg-primary text-secondary print:print-box">Functions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="leading-normal font-semibold text-sm2 text-space-cadet-650 mb-2 mt-3">
                    Engineering Manager
                  </h4>
                  <ul className="text-sm">
                    <li>
                      Enhanced product deployment reliability through the implementation of automated CI/CD pipelines in
                      Microsoft Azure, and transitioned the team to Trunk Based Development, increasing deployment
                      frequency from monthly to daily.
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <div className="flex justify-between align-baseline">
                    <h3 className="font-semibold text-space-cadet-700 leading-snug">
                      CostCertified (YCombinator S21)
                    </h3>
                    <span className="text-space-cadet-200 text-sm">Oct 2021 – June 2023</span>
                  </div>
                </header>
                <div>
                  <ul className="flex flex-wrap text-sm leading-relaxed -ml-0.5">
                    <li className="m-0.5 px-2 bg-primary text-secondary print:print-box">SaaS</li>
                    <li className="m-0.5 px-2 bg-primary text-secondary print:print-box">JavaScript</li>
                    <li className="m-0.5 px-2 bg-primary text-secondary print:print-box">Node</li>
                    <li className="m-0.5 px-2 bg-primary text-secondary print:print-box">Vue</li>
                    <li className="m-0.5 px-2 bg-primary text-secondary print:print-box">PHP</li>
                    <li className="m-0.5 px-2 bg-primary text-secondary print:print-box">Docker</li>
                    <li className="m-0.5 px-2 bg-primary text-secondary print:print-box">GraphQL</li>
                    <li className="m-0.5 px-2 bg-primary text-secondary print:print-box">AWS</li>
                    <li className="m-0.5 px-2 bg-primary text-secondary print:print-box">OpenSearch</li>
                    <li className="m-0.5 px-2 bg-primary text-secondary print:print-box">RDS</li>
                    <li className="m-0.5 px-2 bg-primary text-secondary print:print-box">SQS</li>
                    <li className="m-0.5 px-2 bg-primary text-secondary print:print-box">Lambda</li>
                    <li className="m-0.5 px-2 bg-primary text-secondary print:print-box">AppSync</li>
                  </ul>
                </div>
                <div>
                  <h4 className="leading-normal font-semibold text-sm2 text-space-cadet-650 mb-2 mt-3">
                    Director, Product Development
                  </h4>

                  <ul className="text-sm">
                    <li className="mt-2.1 leading-normal">
                      Successfully led a cross-functional engineering department to adopt product lead development
                      methodologies, achieving a 600% growth in subscription revenue and a 50% reduction in processing
                      fees through strategic partnership and infrastructure enhancements.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="leading-normal font-semibold text-sm2 text-space-cadet-650 mb-2 mt-3">
                    Senior Lead Full Stack Developer
                  </h4>

                  <ul className="text-sm">
                    <li className="mt-2.1 leading-normal">
                      Transformed construction project estimation as a Full Stack Developer by creating an interactive,
                      shoppable platform, leading the full software development lifecycle, and architecting a
                      multi-merchant payment platform that achieved $5 million in annual payments in its first year.
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <div className="flex justify-between align-baseline">
                    <h3 className="font-semibold text-space-cadet-700 leading-snug">
                      ENMAX Corporation
                    </h3>
                    <span className="text-space-cadet-200 text-sm">2018 – Oct 2021</span>
                  </div>
                </header>
                <div>
                  <ul className="flex flex-wrap text-sm leading-relaxed -ml-0.5">
                    <li className="m-0.5 px-2 bg-primary text-secondary print:print-box">Azure</li>
                    <li className="m-0.5 px-2 bg-primary text-secondary print:print-box">Data Factory</li>
                    <li className="m-0.5 px-2 bg-primary text-secondary print:print-box">Data Lake</li>
                    <li className="m-0.5 px-2 bg-primary text-secondary print:print-box">Streaming</li>
                    <li className="m-0.5 px-2 bg-primary text-secondary print:print-box">Databricks</li>
                    <li className="m-0.5 px-2 bg-primary text-secondary print:print-box">Serverless</li>
                    <li className="m-0.5 px-2 bg-primary text-secondary print:print-box">Azure SQL</li>
                    <li className="m-0.5 px-2 bg-primary text-secondary print:print-box">React</li>
                    <li className="m-0.5 px-2 bg-primary text-secondary print:print-box">JavaScript</li>
                    <li className="m-0.5 px-2 bg-primary text-secondary print:print-box">Python</li>
                    <li className="m-0.5 px-2 bg-primary text-secondary print:print-box">C#</li>
                  </ul>
                </div>
                <div>
                  <h4 className="leading-normal font-semibold text-sm2 text-space-cadet-650 mb-2 mt-3">
                    Manager, Digital Innovations
                  </h4>

                  <ul className="text-sm">
                    <li className="mt-2.1 leading-normal">
                      As a manager of a .NET and Azure development team, I successfully led digital transformation
                      initiatives, including the development and maintenance of a key revenue-generating website and the
                      architectural design of Calgary's Advanced Metering Infrastructure, while also establishing a
                      Center of Excellence for Robotic Process Automation.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="leading-normal font-semibold text-sm2 text-space-cadet-650 mb-2 mt-3">
                    Enterprise Data Management and Integrations Lead
                  </h4>

                  <ul className="text-sm">
                    <li className="mt-2.1 leading-normal">
                      Championed the development of cloud software solutions, including an enterprise-wide data
                      warehousing strategy, migrating 50TB of data to Microsoft Azure, and designing a corporate
                      financial forecasting model, significantly enhancing reliability, cost-efficiency, and
                      decision-making capabilities.
                    </li>
                  </ul>
                </div>
              </section>

              <section className="break-inside-avoid">
                <div className="grid grid-cols-3 items-end gap-x-2">
                  <div className="font-semibold text-space-cadet-700 leading-snug text-left">Spyglass</div>
                  <div className="text-sm text-left">Senior BI Lead</div>
                  <div className="text-space-cadet-200 text-sm text-right">2013 – 2018</div>

                  <div className="font-semibold text-space-cadet-700 text-left">Penn West</div>
                  <div className="text-sm text-left">Business Intelligence</div>
                  <div className="text-space-cadet-200 text-sm text-right">2011 – 2013</div>

                  <div className="font-semibold text-space-cadet-700 text-left">Siconix Inc.</div>
                  <div className="text-sm text-left">Embedded Developer</div>
                  <div className="text-space-cadet-200 text-sm text-right">2007 – 2011</div>

                  <div className="font-semibold text-space-cadet-700 text-left">Warp Internet Labs</div>
                  <div className="text-sm text-left">Web Developer</div>
                  <div className="text-space-cadet-200 text-sm text-right">2004 – 2017</div>
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