import { FaServer, FaGamepad, FaStar, FaDownload } from "react-icons/fa6";

const FortniteInfo = () => {
  return (
    <section className="grow basis-1/2 bg-zinc-800 p-6 rounded-2xl flex justify-evenly text-white border border-zinc-700">
      <div className="grid gap-2 text-center">
        <FaStar className="text-yellow-500 mx-auto text-xl" />
        <p className="text-body-medium">4.8</p>
      </div>
      <div className="grid gap-2 text-center">
        <FaDownload className="text-pink-500 mx-auto text-xl" />
        <p className="text-body-medium">2.3M</p>
      </div>
      <div className="grid gap-2 text-center">
        <FaServer className="text-pink-500 mx-auto text-xl" />
        <p className="text-body-medium">36 GB</p>
      </div>
      <div className="grid gap-2 text-center">
        <FaGamepad className="text-pink-500 mx-auto text-xl" />
        <p className="text-body-medium">Action</p>
      </div>
    </section>
  );
};

export default FortniteInfo;
