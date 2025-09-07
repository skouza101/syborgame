import PropTypes from 'prop-types';
import { Featured } from "../../public/Data";
import "react-slideshow-image/dist/styles.css";
import { FaStar, FaDownload } from "react-icons/fa6";

const FeaturedGame = ({ title_w, title_p }) => {
  return (
    <section className="card-base space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full"></div>
        <h1 className="text-heading-2">
          <span className="text-zinc-300">{title_w}</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 ml-2">
            {title_p}
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 sm:gap-5 lg:gap-6 ">
        {Featured.map((item, index) => (
          <div key={index} className="group flex flex-col w-full bg-zinc-800/50 rounded-2xl overflow-hidden border border-zinc-700 hover:border-pink-500/50 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="relative overflow-hidden">
              <img 
                src={item.img} 
                alt={item.name}
                className="w-full h-40 xs:h-44 sm:h-48 md:h-52 lg:h-56 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between p-3 sm:p-4 gap-2 sm:gap-3">
              <div className="flex flex-col flex-1 min-w-0">
                <h1 className="text-white font-semibold text-sm sm:text-base md:text-lg truncate group-hover:text-pink-400 transition-colors">
                  {item.name}
                </h1>
                <h3 className="text-xs sm:text-sm text-zinc-400 truncate mt-1">{item.desc}</h3>
              </div>
              <div className="flex flex-row sm:flex-col justify-between sm:justify-start sm:text-right flex-shrink-0 gap-2 sm:gap-1 sm:ml-2">
                <span className="flex items-center gap-1 text-white font-medium text-xs sm:text-sm">
                  <FaStar className="text-yellow-500 text-xs sm:text-sm" />
                  4.8
                </span>
                <span className="flex items-center gap-1 text-white font-medium text-xs sm:text-sm">
                  <FaDownload className="text-pink-500 text-xs sm:text-sm" />
                  2.3M
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

FeaturedGame.propTypes = {
  title_w: PropTypes.string.isRequired,
  title_p: PropTypes.string.isRequired,
};

export default FeaturedGame;
