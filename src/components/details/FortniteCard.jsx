import { FaStar, FaDownload } from "react-icons/fa6";

const FortniteCard = () => {
  return (
    <section className="grow basis-1/2 bg-zinc-800 rounded-2xl flex justify-between p-6 border border-zinc-700">
      <div className="flex flex-col responsive-gap my-auto">
        <h1 className="text-heading-4">Fortnite</h1>
        <p className="text-body-medium text-zinc-400">Sandbox</p>
      </div>
      <div className="flex flex-col responsive-gap my-auto font-medium">
        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-500" />
          <p className="text-white">4.8</p>
        </div>
        <div className="flex items-center gap-2">
          <FaDownload className="text-pink-500" />
          <p className="text-white">2.3M</p>
        </div>
      </div>
    </section>
  );
};

export default FortniteCard;
