import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Button variant="outline">Simon Twogood</Button>
    </div>
  );
}
