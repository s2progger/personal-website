import { graphql } from "@octokit/graphql";
import type { MetaFunction } from "@remix-run/node";
import { Await, useLoaderData, useRouteError } from "@remix-run/react";
import { defer } from "@remix-run/cloudflare";
import { Suspense } from "react";
import LandingHero from "~/components/LandingHero";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

const PROJECTS_TO_SHOW = 5;

export const meta: MetaFunction = () => {
  return [{ title: "Simon Twogood" }, { name: "description", content: "Let's build things." }];
};

interface Repository {
  name: string;
  description: string;
  url: string;
}

interface User {
  pinnedItems: {
    nodes: Repository[];
  };
}

interface GraphQLResponse {
  user: User;
}
interface GitRepoInfo {
  name: string;
  description: string;
  url: string;
}

export async function loader({ context }) {
  const token = context.env.GITHUB_PAT;
  const graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: `token ${token}`,
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
              }
            }
          }
        }
      }
    `;

  return defer({ data: graphqlWithAuth<GraphQLResponse>(query) });
}

export default function Index() {
  const data = useLoaderData<GitRepoInfo[]>().data;
  return (
    <>
      <LandingHero />
      <section className="pt-5 lg:px-32 lg:pt-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<Loading />}>
              <Await resolve={data}>
                {(data) => (
                  <ul>
                    {data.user.pinnedItems.nodes.map((repo) => (
                      <li key={repo.name} className="mb-5 last:mb-0">
                        <h2 className="font-bold">
                          <a href={repo.url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                          </a>
                        </h2>
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
  const error = useRouteError();
  return (
    <>
      <LandingHero />
      <span className="hidden">{`Unable to load projects: ${error.message}`}</span>
    </>
  );
}
