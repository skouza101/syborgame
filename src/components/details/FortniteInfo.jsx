import { FaServer, FaGamepad, FaStar, FaDownload } from "react-icons/fa6";

const FortniteInfo = () => {
  return (
    <section className="grow basis-1/2 bg-zinc-800 py-10 rounded-2xl flex justify-evenly text-zinc-100">
      <div className="grid gap-y-2">
        <FaStar className="text-yellow-500 mx-auto text-xl" />
        <p>4.8</p>
      </div>
      <div className="grid gap-y-2">
        <FaDownload className="text-pink-500 mx-auto text-xl" />
        <p>2.3M</p>
      </div>
      <div className="grid gap-y-2">
        <FaServer className="text-pink-500 mx-auto text-xl" />
        <p>36 GB</p>
      </div>
      <div className="grid gap-y-2">
        <FaGamepad className="text-pink-500 mx-auto text-xl" />
        <p>Action</p>
      </div>
    </section>
  );
};

export default FortniteInfo;
