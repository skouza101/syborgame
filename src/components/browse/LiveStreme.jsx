import { BiSolidBadgeCheck } from "react-icons/bi";
import { streams } from "../../public/Data";
const LiveStreme = () => {
  return (
    <section className="bg-zinc-900 w-full py-10 flex flex-col gap-10 lg:px-10 px-4 mt-12 relative rounded-2xl">
      <h1 className="md:text-4xl text-3xl grow font-extrabold text-pink-500 flex-wrap  lg:justify-start justify-center flex gap-2">
        <span className="text-zinc-300 underline ">Most Popular</span>
        Live Stream
      </h1>
      <div className="flex flex-wrap w-full h-full gap-y-6 justify-between">
        {streams.map((item) => (
          <>
            <div className="flex max-w-80 basis-48 flex-col gap-4">
              <img src={item.url} className="rounded-2xl w-full" />
              <div className="flex gap-2 w-48">
                <img
                  src={item.logo}
                  className="w-12 h-12 rounded-full bg-blue-700 "
                />
                <div className="flex flex-col grow">
                  <h2 className="text-pink-500 text-xl font-semibold flex gap-1 items-center">
                    {item.name}
                    <span>
                      <BiSolidBadgeCheck />
                    </span>
                  </h2>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <button className="absolute -bottom-5 right-2/4 translate-x-1/2 rounded-3xl bg-pink-500 text-zinc-300 font-medium py-3 px-8">
        Discover Popular
      </button>
    </section>
  );
};
export default LiveStreme;
