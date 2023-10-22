import { BiSolidBadgeCheck } from "react-icons/bi";

const CardStrem = ({name}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <div className="flex gap-2 items-center">
          <span className="text-zinc-100 text-lg font-semibold">01</span>
          <img
            src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/avatar-01.jpg"
            className="rounded-full w-12 h-12"
          />
        </div>
        <div className="text-pink-500 text-xl font-semibold flex gap-2 items-center">
          <BiSolidBadgeCheck /> {name}
        </div>
      </div>
      <button className="px-4 py-2 rounded-3xl bg-pink-500 text-zinc-100 hover:bg-zinc-100 hover:text-pink-500 duration-300 ease-in-out">
        Follow
      </button>
    </div>
  );
};

export default CardStrem;
