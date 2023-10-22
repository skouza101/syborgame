const Welcome = () => {
  return (
    <section className="w-full h-96 bg-zinc-900 flex flex-col px-16 justify-center gap-6 rounded-2xl">
      <h2 className="text-zinc-300 text-lg">Welcome To Cyborg</h2>
      <div className="text-5xl font-extrabold text-zinc-300">
        <span className="text-pink-500">Browse</span> Our <h1>Popular Games Here</h1>
      </div>
      <button className="bg-pink-500 text-zinc-300 hover:bg-zinc-300 hover:text-pink-500 w-36 py-2 rounded-3xl duration-300 ease-out">Browse Now</button>
    </section>
  );
};

export default Welcome;
