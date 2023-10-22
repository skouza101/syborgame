import CardStrem from "./CardStrem";

const TopStream = () => {
  return (
    <>
      <section className="bg-zinc-900 w-full py-10 flex flex-col gap-10 lg:px-10 px-4 rounded-2xl">
        <h1 className="text-4xl font-extrabold text-pink-500">
          <span className="text-zinc-300 underline">Top</span> Streamers
        </h1>
        <div className="flex flex-col">
          <CardStrem name="LahutaM" />
          <div className="border-zinc-100 border my-4" />
          <CardStrem name="Kengan" />
          <div className="border-zinc-100 border my-4" />
          <CardStrem name="Arluwa" />
          <div className="border-zinc-100 border my-4" />
          <CardStrem name="Omeg" />
          <div className="border-zinc-100 border my-4" />
          <CardStrem name="GangTeam" />
        </div>
      </section>
    </>
  );
}

export default TopStream
// Areluwa
