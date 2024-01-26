import { graphql } from "@octokit/graphql";
import { LoaderFunction } from "@remix-run/cloudflare";
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";

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

export const loader: LoaderFunction = async ({ context }): Promise<Array<GitRepoInfo>> => {
  const token = context.env.GITHUB_PAT;
  const graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: `token ${token}`,
    },
  });

  const query = `
      {
        user(login: "s2progger") {
          pinnedItems(first: 6, types: [REPOSITORY]) {
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

  const data = await graphqlWithAuth<GraphQLResponse>(query);
  const repos: Array<GitRepoInfo> = data.user.pinnedItems.nodes;

  return repos;
};

export default function Index() {
  const data = useLoaderData<GitRepoInfo[]>();
  return (
    <>
      <section className="pt-15 flex flex-wrap items-center px-5 md:pt-28 lg:px-20">
        <div className="pb-10 md:basis-2/3">
          <h1 className="mb-4 text-2xl md:text-3xl">Hi there! 👋</h1>
          <h2 className="text-3xl font-bold md:text-5xl">
            My name is{" "}
            <span className="whitespace-nowrap bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Simon
            </span>{" "}
            and I&rsquo;m an engineering manager and full stack developer with a passion for building great products.
          </h2>
        </div>
        <div className="md:basis-1/3">
          <img
            src="https://avatars.githubusercontent.com/u/496706"
            alt="ST"
            className="ml-auto h-48 w-48 rounded-full"
          />
        </div>
      </section>
      <section className="pt-5 lg:px-32 lg:pt-10">
        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
            <CardDescription>Open Source Projects from GitHub</CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              {data.map((repo) => (
                <li key={repo.name} className="mb-5">
                  <h2 className="font-bold">
                    <a href={repo.url} className="hover:text-blue-600">
                      {repo.name}
                    </a>
                  </h2>
                  <p className="text-sm text-muted-foreground">{repo.description}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
