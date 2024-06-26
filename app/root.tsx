// noinspection HtmlRequiredTitleElement

import { LinksFunction } from "@remix-run/cloudflare";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import tailwind from "~/styles/tailwind.css?url";
import fonts from "~/styles/fonts.css?url";
import TopNav from "~/components/TopNav";
import React from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
  { rel: "stylesheet", href: fonts },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
  { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
  { rel: "manifest", href: "/site.webmanifest" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <meta name="theme-color" content="#030822	" />
      </head>
      <body className="dark mx-auto max-w-screen-xl p-4">
        <TopNav />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
