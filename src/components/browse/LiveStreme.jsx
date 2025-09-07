import { BiSolidBadgeCheck } from "react-icons/bi";
import { FaEye, FaPlay } from "react-icons/fa";
import { streams } from "../../public/Data";

const LiveStreme = () => {
  return (
    <section className="card-base">
      <div className="flex items-center gap-3 justify-center sm:justify-start mb-8">
        <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full"></div>
        <h1 className="text-heading-2">
          <span className="text-zinc-300">Most Popular</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 ml-2">
            Live Streams
          </span>
        </h1>
      </div>
      
      <div className="grid-responsive mb-8">
        {streams.map((item, index) => (
          <div key={index} className="group flex flex-col gap-4 cursor-pointer transition-all duration-300 hover:transform hover:scale-[1.02]">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-600 bg-zinc-800">
              <img 
                src={item.url} 
                className="w-full h-40 sm:h-44 object-cover transition-transform duration-500 group-hover:scale-110" 
                alt={item.title}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <div className="flex items-center gap-1 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  LIVE
                </div>
                <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                  <FaEye className="w-3 h-3" />
                  {Math.floor(Math.random() * 50 + 10)}K
                </div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-pink-500/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <FaPlay className="text-white text-xl ml-1" />
                </div>
              </div>
            </div>
            
            <div className="flex gap-3 items-start">
              <div className="relative flex-shrink-0">
                <img
                  src={item.logo}
                  className="w-12 h-12 rounded-full border-2 border-zinc-600 group-hover:border-pink-500 transition-colors duration-300"
                  alt={item.name}
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-zinc-800 rounded-full"></div>
              </div>
              
              <div className="flex flex-col grow min-w-0">
                <h2 className="text-white text-body-medium font-semibold flex gap-2 items-center group-hover:text-pink-500 transition-colors duration-300 mb-1">
                  {item.name}
                  <BiSolidBadgeCheck className="text-pink-500 flex-shrink-0" />
                </h2>
                <p className="text-zinc-400 text-body-small truncate mb-2 group-hover:text-zinc-300 transition-colors duration-300">
                  {item.title}
                </p>
                <div className="flex items-center gap-3 text-xs text-zinc-500">
                  <span className="bg-zinc-700 px-2 py-1 rounded-full">Gaming</span>
                  <span>Started 2h ago</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center">
        <button className="btn-primary group relative overflow-hidden">
          <span className="relative z-10 flex items-center gap-2">
            View All Streams
            <FaPlay className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </section>
  );
};

export default LiveStreme;
