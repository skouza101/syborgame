import Layout from "../components/Container";
import FortniteDetails from "../components/details/FortniteDetails";
import FortniteScreenShot from "../components/details/FortniteScreenShot";
import Head from "../components/details/Head";
import OtherGames from "../components/details/OtherGames";

const Details = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Head />
        
        <div className="text-center lg:text-left">
          <div className="flex items-center gap-3 justify-center lg:justify-start mb-4">
            <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full"></div>
            <h1 className="text-heading-1 lg:text-5xl">
              <span className="text-zinc-300">Fortnite</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 ml-2">
                Details
              </span>
            </h1>
          </div>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto lg:mx-0">
            Dive into the ultimate battle royale experience with stunning graphics and endless possibilities
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2 space-y-8">
            <FortniteDetails />
            
            <div className="card-base">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full"></div>
                <h2 className="text-heading-3 text-white">Game Screenshots</h2>
              </div>
              <FortniteScreenShot />
            </div>

            <div className="card-base">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full"></div>
                <h2 className="text-heading-3 text-white">About This Game</h2>
              </div>
              <div className="prose prose-zinc prose-invert max-w-none">
                <p className="text-body-large text-zinc-300 leading-relaxed mb-4">
                  Fortnite is the completely free multiplayer game where you and your friends can jump into Battle Royale or Fortnite Creative. Download now and jump into the action.
                </p>
                <p className="text-body-medium text-zinc-400 leading-relaxed mb-4">
                  In Battle Royale, you&apos;ll compete against up to 100 other players to see who can survive the longest in an ever-shrinking play area. Build structures, find weapons, and outlast your opponents to claim Victory Royale.
                </p>
                <p className="text-body-medium text-zinc-400 leading-relaxed">
                  With regular updates, new seasons, and fresh content, there&apos;s always something new to discover in Fortnite. Join millions of players worldwide in this epic gaming experience.
                </p>
              </div>
            </div>
          </div>

          <div className="xl:col-span-1 space-y-6">
            <div className="card-base sticky top-8">
              <div className="text-center space-y-6">
                <div className="space-y-2">
                  <h3 className="text-heading-3 text-white">Ready to Play?</h3>
                  <p className="text-zinc-400">Join millions of players worldwide</p>
                </div>
                
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25">
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Download Fortnite Now
                    </span>
                  </button>
                  
                  <button className="w-full border-2 border-zinc-600 hover:border-pink-500 text-zinc-300 hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
                    Watch Trailer
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-700">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">Free</div>
                    <div className="text-sm text-zinc-400">To Play</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">4.5★</div>
                    <div className="text-sm text-zinc-400">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <OtherGames />
      </div>
    </Layout>
  );
};

export default Details;
