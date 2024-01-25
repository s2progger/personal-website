import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css";
import TopNav from "~/components/TopNav";
import firaSansRegular from "~/fonts/FiraSans-Regular.woff2";
import firaSansBold from "~/fonts/FiraSans-Bold.woff2";
import firaSansSemiBold from "~/fonts/FiraSans-SemiBold.woff2";
import firaMonoRegular from "~/fonts/FiraMono-Regular.woff2";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

const fontsCss = `
  @font-face {
    font-family: "Fira Sans";
    src: url("${firaSansRegular}") format("woff2");
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "Fira Sans";
    src: url("${firaSansSemiBold}") format("woff2");
    font-weight: 600;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "Fira Sans";
    src: url("${firaSansBold}") format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "Fira Mono";
    src: url("${firaMonoRegular}") format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
  }
`;

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "woff2", href: firaSansRegular },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <style dangerouslySetInnerHTML={{ __html: fontsCss }} />
      </head>
      <body className="dark mx-auto max-w-screen-xl p-4">
        <TopNav />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
