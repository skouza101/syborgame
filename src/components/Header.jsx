import { FaSistrix } from "react-icons/fa6";
import {  NavLink} from "react-router-dom";
import "../css/header.css"

const Header = () => {
  return (
    <header className="flex items-center justify-between py-6">
      <img
        src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/logo.png"
        alt=""
      />
      <div className="flex relative text-zinc-600">
        <input
          type="search"
          placeholder="type something"
          className=" bg-zinc-800 w-72 h-10 rounded-3xl pl-10 placeholder:text-zinc-600"
        />
        <button className="absolute top-3 left-3 text-xl ">
          <FaSistrix />
        </button>
      </div>
      <div className="flex text-zinc-600 items-center gap-5 ">
        <NavLink
          to={"/"}
          className="hover:text-pink-500 duration-300 ease-in cursor-pointer"
        >
          Home
        </NavLink>
        <NavLink
          to={"/browse"}
          className="hover:text-pink-500 duration-300 ease-in cursor-pointer"
        >
          Browse
        </NavLink>
        <NavLink
          to={"/details"}
          className="hover:text-pink-500 duration-300 ease-in cursor-pointer"
        >
          Details
        </NavLink>
        <NavLink
          to={"/streams"}
          className="hover:text-pink-500 duration-300 ease-in cursor-pointer"
        >
          Streams
        </NavLink>
        <button className="hover:bg-pink-500 flex gap-4 bg-zinc-800 items-center py-2 px-3 text-lg rounded-3xl duration-300 ease-out hover:text-zinc-300">
          <h2>Profile</h2>
          <img
            className="rounded-full"
            src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/profile-header.jpg"
          />{" "}
        </button>
      </div>
    </header>
  );
};

export default Header;
