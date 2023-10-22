import {  FaStar, FaDownload } from "react-icons/fa6";

const GameCard = (props) => {
  return (
    <div className="flex w-full ">
      <img src={props.url} className="h-14 w-14 rounded-xl"/>
      <div className="flex justify-between md:grow-0 grow w-full px-3 my-auto">
        <div className="grid ">
          <h3 className="text-zinc-100 text-xl font-medium">{props.name}</h3>
          <p className="text-zinc-500">{props.desc}</p>
        </div>
        <div className="grid gap-2">
          <FaStar className="text-yellow-500"/>
          <FaDownload className="text-pink-500"/>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
