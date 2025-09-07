import { Library } from "../../public/Data";
import { FaStar, FaDownload } from "react-icons/fa6";

const TopDownload = () => {
  return (
    <section className="card-base lg:w-2/5 w-full grow">
      <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
        <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full"></div>
        <h1 className="text-heading-3">
          <span className="text-zinc-300">Top</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 ml-2">
            Downloaded
          </span>
        </h1>
      </div>
      
      <div className="flex flex-col gap-3">
        {Library.map((item, index) => (
          <div className="hover:bg-zinc-700 p-4 rounded-lg transition-colors duration-300 border border-zinc-600" key={index}>
            <div className="flex items-center gap-4">
              <img 
                src={item.img} 
                alt={item.name}
                className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 rounded-2xl object-cover flex-shrink-0 border border-zinc-600" 
              />
              
              <div className="flex-1 min-w-0">
                <h1 className="text-white font-semibold text-body-medium truncate mb-1">
                  {item.name}
                </h1>
                <h3 className="text-body-small text-zinc-400 truncate">{item.desc}</h3>
              </div>
              
              <div className="flex flex-col text-right gap-1 flex-shrink-0 min-w-0">
                <span className="flex items-center justify-end gap-1 text-white font-medium text-body-small">
                  <FaStar className="text-yellow-500 text-xs" />
                  4.8
                </span>
                <span className="flex items-center justify-end gap-1 text-white font-medium text-body-small">
                  <FaDownload className="text-pink-500 text-xs" />
                  2.3M
                </span>
              </div>
              
              <button className="text-pink-500 bg-zinc-700 hover:bg-pink-500 hover:text-zinc-100 h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 flex-shrink-0 border border-zinc-600 ml-3">
                <FaDownload className="text-sm sm:text-base" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopDownload;
