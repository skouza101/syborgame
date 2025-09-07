import { Link } from "react-router-dom";

const Head = () => {
  return (
    <section className="flex-responsive justify-between responsive-gap">
      <img
        src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/feature-left.jpg"
        alt="Game Feature"
        className="grow mx-auto md:w-5/12 h-80 rounded-2xl border border-zinc-600 object-cover"
      />
      <Link
        to="https://www.youtube.com/watch?v=r1b03uKWk_M"
        className="grow mx-auto md:w-6/12 h-60 md:h-80 rounded-2xl hover:scale-105 transition-transform duration-300"
      >
        <img
          src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/feature-right.jpg"
          alt="Game Trailer"
          className="w-full h-full rounded-2xl border border-zinc-600 object-cover"
        />
      </Link>
    </section>
  );
}

export default Head