import { Featured } from "../../public/Data";
import "react-slideshow-image/dist/styles.css";
// import { Fade } from "react-slideshow-image";
import { FaStar, FaDownload } from "react-icons/fa6";

const FeaturedGame = ({ title_w, title_p }) => {
  return (
    <section className="bg-zinc-900 w-full py-10 flex flex-col gap-10 lg:px-10 px-4  rounded-2xl">
      <div className="flex items-center justify-between w-full">
        <h1 className="lg:text-4xl text-3xl font-extrabold flex-wrap text-pink-500 text-center flex mx-auto lg:mx-0 gap-2 ">
          <span className="text-zinc-300 underline">{title_w} </span>
          {title_p}
        </h1>
      </div>

      <div className="max-w-96 min-w-80 flex flex-wrap">
            {Featured.map((item, index) => (
              <div key={index} className="flex flex-col ">
                <img src={item.img} className="mx-auto rounded-2xl" />
                <div className="flex mx-auto gap-2 justify-between mt-2">
                  <div className="flex flex-col">
                    <h1 className="text-zinc-100 font-semibold text-lg ">
                      {item.name}
                    </h1>
                    <h3 className="text-zinc-500">{item.desc}</h3>
                  </div>
                  <div className="flex flex-col text-right text-zinc-300 ">
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
            ))}
      </div>
    </section>
  );
};

export default FeaturedGame;
