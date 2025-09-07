import PropTypes from 'prop-types';
import { BiSolidBadgeCheck } from "react-icons/bi";
import { HiEye } from "react-icons/hi2";

const CardStrem = ({ name, logo, title, rank, viewers, isLive }) => {
  const formatViewers = (count) => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toString();
  };

  return (
    <div className="flex items-center gap-3 p-4 bg-zinc-800/50 hover:bg-zinc-800 rounded-xl transition-colors duration-200 border border-zinc-700 hover:border-pink-500/30">
      <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-zinc-300 bg-zinc-700 rounded-lg">
        {rank}
      </div>
      
      <div className="relative flex-shrink-0">
        <img
          src={logo}
          alt={`${name} avatar`}
          className="w-12 h-12 rounded-xl border border-zinc-600 object-cover"
        />
        {isLive && (
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-zinc-800"></div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <BiSolidBadgeCheck className="text-pink-500 text-sm flex-shrink-0" />
          <h3 className="text-white text-sm font-semibold truncate">
            {name}
          </h3>
        </div>
        
        <p className="text-xs text-zinc-400 truncate mb-2">
          {title}
        </p>
        
        <div className="flex items-center gap-1 text-xs text-zinc-500">
          <HiEye className="w-3 h-3" />
          <span>{formatViewers(viewers)}</span>
          {isLive && (
            <>
              <span className="mx-1">•</span>
              <span className="text-red-400">LIVE</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

CardStrem.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  url: PropTypes.string,
  viewers: PropTypes.number,
  isLive: PropTypes.bool,
};

export default CardStrem;
