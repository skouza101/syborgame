import { FaStar ,FaDownload} from "react-icons/fa6";

const FortniteCard = () => {
  return (
    <section className="grow basis-1/2 bg-zinc-800 rounded-2xl flex justify-between py-6 px-6">
      <div className="flex flex-col gap-y-2 my-auto">
        <h1 className="text-zinc-100 text-xl font-semibold">Fortnite</h1>
        <p className="text-zinc-500">Sandbox</p>
      </div>
      <div className="flex flex-col gap-y-2 my-auto font-medium">
        <div className="flex items-center gap-x-2">
          <FaStar className=" text-yellow-500" />
          <p className="text-zinc-100">4.8</p>
        </div>
        <div className="flex items-center gap-x-2">
        <FaDownload className=" text-pink-500" />
          <p className="text-zinc-100">2.3M</p>
        </div>
      </div>
    </section>
  );
};

export default FortniteCard;
