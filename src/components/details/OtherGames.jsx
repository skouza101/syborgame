import GameCard from "./GameCard";

const OtherGames = () => {
  return (
    <section className="flex flex-col bg-zinc-900 w-full py-10 px-6 rounded-2xl gap-y-10">
      <h1 className="md:text-4xl text-3xl grow font-extrabold text-pink-500 flex-wrap  lg:justify-start justify-center flex gap-2">
        <span className="text-zinc-300 underline ">Other Related</span>
        Games
      </h1>
      <div className="grid md:grid-cols-2 gap-x-4 gap-y-8">
        <GameCard
          name="Data-2"
          desc="Sandbox"
          url="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/game-01.jpg"
        />
        <GameCard
          name="PubG"
          desc="Battle S"
          url="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/game-02.jpg"
        />
        <GameCard
          name="Mini Craft"
          desc="Legendary"
          url="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/game-03.jpg"
        />
        <GameCard
          name="Eagles Fly"
          desc="Matrix Games"
          url="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-07.jpg"
        />
        <GameCard
          name="Warcraft"
          desc="Legend"
          url="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-08.jpg"
        />
        <GameCard
          name="Fortnite"
          desc="Sandbox"
          url="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-06.jpg"
        />
      </div>
    </section>
  );
}

export default OtherGames