import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & share <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI powered prompts</span>
      </h1>
      <p className="desc text-center">
        Prompt master is a platform for writers to discover and share AI powered
        prompts.
      </p>
      {/* Feed */}

      <Feed />
    </section>
  );
};

export default Home;
