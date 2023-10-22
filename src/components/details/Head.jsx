import { Link } from "react-router-dom";
const Head = () => {
  return (
    <section className="flex justify-between flex-wrap gap-6">
      <img
        src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/feature-left.jpg"
        className="grow mx-auto md:w-5/12 h-80 rounded-2xl"
      />
      <Link
        strict
        to="https://www.youtube.com/watch?v=r1b03uKWk_M"
        className="grow mx-auto md:w-6/12 h-60 md:h-80 rounded-2xl"
      >
        <img
          src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/feature-right.jpg"
          className="w-full h-full rounded-2xl"
        />
      </Link>
    </section>
  );
}

export default Head