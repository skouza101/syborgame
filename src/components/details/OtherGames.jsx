import GameCard from "./GameCard";
import Popular from "../../public/Data";

const OtherGames = () => {
  // Get a subset of popular games for related games section
  const relatedGames = Popular.slice(0, 6);
  
  // Generate random ratings and downloads for variety
  const generateGameData = (game, index) => {
    const ratings = [4.5, 4.6, 4.7, 4.8, 4.9];
    const downloadCounts = ["1.2M", "2.3M", "3.1M", "1.8M", "2.7M", "4.2M"];
    
    return {
      ...game,
      rating: ratings[index % ratings.length],
      downloads: downloadCounts[index % downloadCounts.length]
    };
  };

  return (
    <section className="card-base space-y-8">
      <div className="text-center lg:text-left">
        <div className="flex items-center gap-3 justify-center lg:justify-start mb-4">
          <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full"></div>
          <h1 className="text-heading-2">
            <span className="text-zinc-300">Other Related</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 ml-2">
              Games
            </span>
          </h1>
        </div>
        <p className="text-body-medium text-zinc-400 max-w-2xl mx-auto lg:mx-0">
          Discover more amazing games you might enjoy based on your interests
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedGames.map((game, index) => {
          const gameData = generateGameData(game, index);
          return (
            <GameCard
              key={game.name}
              name={gameData.name}
              desc={gameData.desc}
              url={gameData.img}
              rating={gameData.rating}
              downloads={gameData.downloads}
            />
          );
        })}
      </div>
    </section>
  );
}

export default OtherGames
