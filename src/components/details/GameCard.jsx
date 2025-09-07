import PropTypes from 'prop-types';
import { FaStar, FaDownload } from "react-icons/fa6";

const GameCard = ({ url, name, desc, rating = 4.8, downloads = "2.3M" }) => {
  return (
    <div className="group flex flex-col bg-zinc-800/50 rounded-2xl overflow-hidden border border-zinc-700 hover:border-pink-500/50 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="relative overflow-hidden">
        <img 
          src={url} 
          alt={name}
          className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="flex flex-col p-4 space-y-3">
        <div className="flex flex-col space-y-1">
          <h3 className="text-white font-semibold text-lg group-hover:text-pink-400 transition-colors duration-300 truncate">
            {name}
          </h3>
          <p className="text-zinc-400 text-sm truncate">{desc}</p>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-zinc-700">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-500 text-sm"/>
              <span className="text-white text-sm font-medium">{rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaDownload className="text-pink-500 text-sm"/>
              <span className="text-white text-sm font-medium">{downloads}</span>
            </div>
          </div>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-300 transform hover:scale-105">
            Play
          </button>
        </div>
      </div>
    </div>
  );
};

GameCard.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  rating: PropTypes.number,
  downloads: PropTypes.string,
};

export default GameCard;
