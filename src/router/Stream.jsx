import Header from "../components/Header";
import Footer from "../components/Footer";
import FeaturedGame from "../components/browse/FeaturedGame";
import TopStream from "../components/stream/TopStream";
const Stream = () => {
  return (
    <>
      <Header />
      <section className="flex flex-col gap-8 bg-zinc-800 w-full rounded-2xl p-8 md:px-16">
        <div className="grid md:grid-cols-2 w-full gap-10 ">
          <FeaturedGame title_w={"Live"} title_p={"Streams"} />
          <TopStream />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Stream;
