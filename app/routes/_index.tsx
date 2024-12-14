import { graphql } from "@octokit/graphql";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Await, useLoaderData, useRouteError } from "@remix-run/react";
import { defer } from "@remix-run/cloudflare";
import { Suspense } from "react";
import LandingHero from "~/components/LandingHero";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

const PROJECTS_TO_SHOW = 6;

export const meta: MetaFunction = () => {
  return [{ title: "Simon Twogood" }, { name: "description", content: "Let's build things." }];
};

type GraphQLResponse = {
  user: User;
};

type User = {
  pinnedItems: {
    nodes: Repository[];
  };
};

type Repository = {
  name: string;
  description: string;
  url: string;
  primaryLanguage: {
    color: string;
    name: string;
  };
};

export async function loader({ context }: LoaderFunctionArgs) {
  const { GITHUB_PAT } = context.cloudflare.env;
  const graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: `token ${GITHUB_PAT}`,
    },
  });

  const query = `
      {
        user(login: "s2progger") {
          pinnedItems(first: ${PROJECTS_TO_SHOW}, types: [REPOSITORY]) {
            nodes {
              ... on Repository {
                name
                description
                url
                primaryLanguage {
                  color
                  name
                }
              }
            }
          }
        }
      }
    `;

  return { result: graphqlWithAuth<GraphQLResponse>(query) };
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      <LandingHero />
      <section className="pt-5 lg:px-32 lg:pt-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Project Highlights</CardTitle>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<Loading />}>
              <Await resolve={data.result}>
                {(data) => (
                  <ul>
                    {data.user.pinnedItems.nodes.map((repo: Repository) => (
                      <li
                        key={repo.name}
                        className="last: last:border-non mb-4 border-b pb-4 last:mb-0 last:border-none last:pb-0"
                      >
                        <div className="flex items-baseline justify-between space-x-2">
                          <h2 className="font-bold">
                            <a href={repo.url} target="_blank" rel="noopener noreferrer">
                              {repo.name}
                            </a>
                          </h2>
                          <div>
                            <span
                              className="mr-1 inline-block h-3 w-3 rounded-full"
                              style={{ backgroundColor: repo.primaryLanguage["color"] }}
                            ></span>
                            <span className="text-sm">{repo.primaryLanguage["name"]}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{repo.description}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </Await>
            </Suspense>
          </CardContent>
        </Card>
      </section>
    </>
  );
}

function Loading() {
  return (
    <ul>
      {Array.from({ length: PROJECTS_TO_SHOW }).map((_, i) => (
        <li key={i} className="mb-5 last:mb-0">
          <h2 className="font-bold">
            <RandomLengthDots />
          </h2>
          <p className="text-sm text-muted-foreground">
            <RandomLengthDots />
          </p>
        </li>
      ))}
    </ul>
  );
}

function RandomLengthDots() {
  return <span>{".".repeat(3 + Math.floor(Math.random() * 20))}</span>;
}

export function ErrorBoundary() {
  const error = useRouteError() as Error;
  return (
    <>
      <LandingHero />
      <span className="hidden">{`Unable to load projects: ${error.message}`}</span>
    </>
  );
}
