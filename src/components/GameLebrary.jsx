import { Library } from "../public/Data";
const GameLebrary = () => {
  return (
    <>
      <section className="w-full bg-zinc-900 flex flex-col px-16 py-10 rounded-2xl relative">
        <h1 className="text-4xl font-extrabold text-pink-500">
          <span className="text-zinc-300 underline">Your Gaming</span> Library
        </h1>

        <div className="flex flex-col my-10">
          {Library.map((item, index) => (
            <>
              <div
                className="flex items-center justify-between gap-6 flex-wrap py-6 border-b border-zinc-500"
                key={index}
              >
                <img
                  src={item.img}
                  className="bg-blue-600 h-20 w-20 rounded-2xl"
                />
                <div className="flex grow justify-between flex-wrap">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl text-zinc-100 font-medium">
                      {item.name}
                    </h2>
                    <h2 className=" text-zinc-500 ">{item.desc}</h2>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl text-zinc-100 font-medium">
                      Data Add
                    </h2>
                    <h2 className=" text-zinc-500 ">{item.dateAdd}</h2>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl text-zinc-100 font-medium">
                      Hours Played
                    </h2>
                    <h2 className=" text-zinc-500 ">{item.hoursPlayed}</h2>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl text-zinc-100 font-medium">
                      Currently
                    </h2>
                    <h2 className=" text-zinc-500 ">Downloaded</h2>
                  </div>
                </div>
                <button className="border text-zinc-500 border-zinc-500 py-3 px-12 rounded-3xl">
                  Download
                </button>
              </div>
            </>
          ))}
        </div>
        <button className="absolute -bottom-7 right-2/4 translate-x-1/2 rounded-3xl bg-pink-500 text-zinc-300 font-medium py-3 px-8">
          Discover Popular
        </button>
      </section>
    </>
  );
};

export default GameLebrary;
