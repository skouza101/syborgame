import { Library } from "../public/Data";

const GameLibrary = () => {
  return (
    <section className="card-base">
      <div className="flex items-center gap-3 justify-center sm:justify-start mb-8">
        <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full"></div>
        <h1 className="text-heading-2">
          <span className="text-zinc-300">Your Gaming</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 ml-2">
            Library
          </span>
        </h1>
      </div>

      <div className="flex flex-col gap-4 mb-8">
        {Library.map((item, index) => (
          <div
            className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-6 border border-zinc-600 hover:bg-zinc-700 rounded-lg transition-colors duration-300"
            key={index}
          >
            <div className="flex items-center gap-4 flex-shrink-0">
              <img
                src={item.img}
                alt={item.name}
                className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl object-cover border border-zinc-600"
              />
              <div className="flex flex-col gap-2">
                <h2 className="text-heading-4 text-white">
                  {item.name}
                </h2>
                <h2 className="text-body-medium text-zinc-400">{item.desc}</h2>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-8 w-full lg:w-auto">
              <div className="flex justify-between sm:flex-col sm:gap-2">
                <h2 className="text-body-medium text-white font-medium">
                  Date Added
                </h2>
                <h2 className="text-body-small text-zinc-400">{item.dateAdd}</h2>
              </div>
              
              <div className="flex justify-between sm:flex-col sm:gap-2">
                <h2 className="text-body-medium text-white font-medium">
                  Hours Played
                </h2>
                <h2 className="text-body-small text-zinc-400">{item.hoursPlayed}</h2>
              </div>
              
              <div className="flex justify-between sm:flex-col sm:gap-2">
                <h2 className="text-body-medium text-white font-medium">
                  Status
                </h2>
                <h2 className="text-body-small text-zinc-400">Downloaded</h2>
              </div>
            </div>
            
            <button className="btn-outline self-start sm:self-center lg:self-center">
              Download
            </button>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center">
        <button className="btn-primary">
          View All Games
        </button>
      </div>
    </section>
  );
};

export default GameLibrary;
