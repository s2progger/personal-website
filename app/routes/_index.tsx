import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Simon Twogood" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <section className="flex flex-wrap justify-evenly justify-items-stretch content-center items-center pt-20 md:pt-36 px-5 lg:px-20">
      <div className="md:basis-2/3 pb-10">
        <h1 className="text-2xl md:text-3xl mb-4">
          Hi there! 👋
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold">
          My name is <span className="whitespace-nowrap bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Simon</span> and I&rsquo;m an engineering manager and full stack developer with a passion for building great products.
        </h2>
      </div>
      <div className="md:basis-1/3">
        <img src="https://avatars.githubusercontent.com/u/496706" alt="ST" className="rounded-full h-48 w-48 mx-auto"/>
      </div>
    </section>
  );
}
