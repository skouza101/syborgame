import {Library} from "../../public/Data"
import { FaStar, FaDownload } from "react-icons/fa";

const TopDownload = () => {
  return (
    <section className="bg-zinc-900 lg:w-2/5 w-full grow py-10 flex flex-col gap-10 md:px-10 px-4 rounded-2xl">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl mx-auto lg:mx-0 font-extrabold text-pink-500 text-center flex  gap-4">
          <span className="text-zinc-300 underline">Top</span>
          Downloaded
        </h1>
      </div>
      {Library.map((item, index) => (
        <div className="" key={index}>
          <div className="flex w-full justify-between items-center">
            <img src={item.img} className="bg-blue-400 h-16 w-16 rounded-3xl" />
            <div className="flex justify-between w-40 flex-wrap">
              <div className="flex flex-col">
                <h1 className="text-zinc-100 font-semibold text-lg ">
                  {item.name}
                </h1>
                <h3 className="text-zinc-500 ">{item.desc}</h3>
              </div>
              <div className="flex  flex-col text-right text-zinc-300 justify-between">
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
            <button className=" text-pink-500 bg-zinc-700 h-12 w-12 rounded-full flex items-center justify-center">
              <FaDownload />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default TopDownload