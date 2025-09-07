import Layout from "../components/Container";
import FeaturedGame from "../components/browse/FeaturedGame";
import TopStream from "../components/stream/TopStream";
import { HiEye, HiUsers, HiPlay } from "react-icons/hi2";
import { BiSolidBadgeCheck } from "react-icons/bi";

const Stream = () => {
  const streamStats = [
    { icon: HiEye, label: "Live Viewers", value: "2.4M", color: "text-pink-500" },
    { icon: HiUsers, label: "Active Streamers", value: "15.2K", color: "text-purple-500" },
    { icon: HiPlay, label: "Live Streams", value: "8.7K", color: "text-blue-500" },
  ];


  return (
    <Layout>
      <div className="space-y-8">
        <section className="card-base">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full"></div>
            <h1 className="text-heading-2">
              <span className="text-zinc-300">Live</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 ml-2">
                Gaming Hub
              </span>
            </h1>
            <div className="flex items-center gap-2 ml-auto">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-body-small text-zinc-400">Live Now</span>
            </div>
          </div>
          
          <p className="text-body-medium text-zinc-400 mb-8 max-w-3xl leading-relaxed">
            Join millions of viewers watching the best gaming content live. Discover new streamers, 
            follow your favorites, and be part of the gaming community.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {streamStats.map((stat, index) => (
              <div key={index} className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700 hover:border-zinc-600 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-zinc-700/50 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-heading-3 font-bold">{stat.value}</p>
                    <p className="text-body-small text-zinc-400">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>



        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2">
            <FeaturedGame title_w={"Featured"} title_p={"Live Streams"} />
          </div>
          <div className="xl:col-span-1">
            <TopStream />
          </div>
        </div>

        <section className="card-base">
          <div className="flex items-center gap-3 mb-6">
            <BiSolidBadgeCheck className="text-pink-500 text-2xl" />
            <h2 className="text-heading-3">
              <span className="text-zinc-300">Verified</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 ml-2">
                Streamers
              </span>
            </h2>
          </div>
          
          <p className="text-body-medium text-zinc-400 mb-6">
            Follow official streamers and content creators with verified badges
          </p>
          
          <div className="flex justify-center">
            <button className="btn-primary">
              Explore Verified Streamers
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Stream;
