import Data from "../public/Data";
import { FaStar, FaDownload } from "react-icons/fa";

const MostPopular = () => {
  const generateRandomRating = () => (Math.random() * 2 + 3).toFixed(1);
  const generateRandomDownloads = () => {
    const num = Math.random() * 8 + 1;
    return num >= 1 ? `${num.toFixed(1)}M` : `${(num * 1000).toFixed(0)}K`;
  };

  return (
    <section className="card-base">
      <div className="flex items-center gap-3 justify-center sm:justify-start mb-8">
        <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full"></div>
        <h1 className="text-heading-2">
          <span className="text-zinc-300">Most Popular</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 ml-2">
            Right Now
          </span>
        </h1>
      </div>
      
      <div className="grid-responsive mb-8">
        {Data.map((game, index) => (
          <div 
            key={index}
            className="flex flex-col gap-4 p-4 bg-zinc-700 rounded-2xl hover:bg-zinc-600 transition-all duration-300 transform hover:scale-105 cursor-pointer group border border-zinc-600"
          >
            <div className="relative overflow-hidden rounded-xl">
              <img 
                src={game.img} 
                alt={game.name}
                className="w-full h-32 sm:h-36 md:h-40 object-cover rounded-xl group-hover:scale-110 transition-transform duration-300" 
              />
              <div className="absolute inset-0 gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="flex justify-between items-start gap-2">
              <div className="flex flex-col flex-1 min-w-0">
                <h1 className="text-white font-semibold text-body-medium group-hover:text-pink-500 transition-colors duration-300 truncate">
                  {game.name}
                </h1>
                <h3 className="text-body-small text-zinc-400 truncate mt-1">
                  {game.desc}
                </h3>
              </div>
              
              <div className="flex flex-col text-right flex-shrink-0 gap-1">
                <span className="flex items-center gap-1 text-white font-medium text-body-small">
                  <FaStar className="text-yellow-500" />
                  {generateRandomRating()}
                </span>
                <span className="flex items-center gap-1 text-white font-medium text-body-small">
                  <FaDownload className="text-pink-500" />
                  {generateRandomDownloads()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center">
        <button className="btn-primary">
          Discover Popular
        </button>
      </div>
    </section>
  );
};

export default MostPopular;
