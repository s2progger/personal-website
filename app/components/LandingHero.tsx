export default function LandingHero() {
  return (
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
      <div className="w-full md:basis-1/3">
        <img
          src="https://avatars.githubusercontent.com/u/496706"
          alt="ST"
          className="mx-auto h-48 w-48 rounded-full md:mx-0 md:ml-auto"
        />
      </div>
    </section>
  );
}
