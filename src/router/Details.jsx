// import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FortniteDetails from "../components/details/FortniteDetails";
import FortniteScreenShot from "../components/details/FortniteScreenShot";
import Head from "../components/details/Head";
import OtherGames from "../components/details/OtherGames";

const Details = () => {
  return (
    <>
      <Header />
      <section className="flex flex-col gap-8 bg-zinc-800 w-full rounded-2xl p-8 md:px-16">
        <Head />
        <h1 className="text-zinc-100 md:text-5xl text-3xl font-bold md:mx-auto mx-0 my-2">
          Fortnite Details
        </h1>
        <FortniteDetails />
        <FortniteScreenShot />
        <p className="w-full text-zinc-500 break-all">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem suscipit, atque deserunt recusandae quas natus id
          nobis, error neque molestiae a voluptas ipsam? Iure blanditiis ipsum
          dolores obcaecati eligendi similique labore molestiae illum, ad qui
          tenetur quidem nesciunt ratione itaque? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Maxime elit.
        </p>
        <button className="border-pink-500 border rounded-3xl py-2 text-pink-500 hover:bg-pink-500 hover:border-zinc-100 hover:text-zinc-100 duration-300 ease-out">
          Download Fortnite Now !
        </button>
        <OtherGames />
      </section>
      <Footer />
    </>
  );
};

export default Details;
