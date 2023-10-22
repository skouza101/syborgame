import Data from "../public/Data";
import { FaStar, FaDownload } from "react-icons/fa";
const MostPopular = () => {
  return (
    <section className="w-full bg-zinc-900 flex flex-col px-16 py-10 rounded-2xl gap-10 relative">
      <h1 className="text-4xl font-extrabold text-pink-500">
        <span className="text-zinc-300 underline">Most Popular</span> Right Now
      </h1>
      <div className="flex flex-wrap gap-x-6 gap-y-5">
        {Data.map((game, index) => (
          <>
            <div className="flex grow flex-col basis-42 py-4 bg-zinc-800 rounded-2xl px-3 justify-center gap-6 " key={index}>
              <img src={game.img} className="flex bg-blue-800 h-40 w-full rounded-2xl" />
              <div className="flex justify-between ">
                <div className="flex flex-col">
                  <h1 className="text-zinc-100 font-semibold text-lg">{game.name}</h1>
                  <h3 className="text-zinc-500">{game.desc}</h3>
                </div>
                <div className="flex flex-col text-right text-zinc-300">
                  <span className="flex items-center gap-1 text-right text-zinc-100 font-medium">
                    <FaStar className=" text-yellow-500" />
                    4.8
                  </span>
                  <span className="flex items-center gap-1 text-zinc-100 font-medium">
                    <FaDownload className=" text-pink-500" />
                    2.3M
                  </span>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <button className="absolute -bottom-7 right-2/4 translate-x-1/2 rounded-3xl bg-pink-500 text-zinc-300 font-medium py-3 px-8">Discover Popular</button>
    </section>
  );
};

export default MostPopular;
