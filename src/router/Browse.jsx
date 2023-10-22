import Header from "../components/Header";
import Footer from "../components/Footer";
import FeaturedGame from "../components/browse/FeaturedGame";
import TopDownload from "../components/browse/TopDownload";
import StarLive from "../components/browse/StarLive";
import LiveStreme from "../components/browse/LiveStreme";
const Browse = () => {
  return (
    <>
      <Header />
      <section className="flex flex-col  bg-zinc-800 w-full rounded-2xl p-8 md:p-16">
        <div className="flex justify-between w-full flex-wrap gap-10">
          <FeaturedGame title_w="Featured" title_p="Games" />
          <TopDownload />
        </div>
        <StarLive />
        <LiveStreme />
      </section>
      <Footer />
    </>
  );
};

export default Browse;
