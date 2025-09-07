import { useState } from "react";
import CardStrem from "./CardStrem";
import { streams } from "../../public/Data";

const TopStream = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedStreams = showAll ? streams : streams.slice(0, 5);


  return (
    <section className="card-base space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full"></div>
            <h2 className="text-heading-3">
              <span className="text-zinc-300">Top</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 ml-2">
                Streamers
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-body-small text-zinc-400">Live</span>
          </div>
        </div>


      </div>

      <div className="space-y-3">


        <div className="space-y-3">
          {displayedStreams.map((stream, index) => (
            <div key={stream.name} className="group">
              <CardStrem 
                name={stream.name}
                logo={stream.logo}
                title={stream.title}
                rank={String(index + 1).padStart(2, '0')}
                url={stream.url}
                viewers={Math.floor(Math.random() * 50000) + 1000}
                isLive={true}
              />
              {index < displayedStreams.length - 1 && (
                <div className="h-px bg-gradient-to-r from-transparent via-zinc-700/30 to-transparent mt-3" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center pt-2 border-t border-zinc-700/50">
        <button 
          onClick={() => setShowAll(!showAll)}
          className="btn-secondary text-sm mt-4"
        >
          {showAll ? "Show Less" : "View All Streamers"}
        </button>
      </div>
    </section>
  );
};

export default TopStream;
