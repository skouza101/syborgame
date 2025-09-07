import Layout from "../components/Container";
import FeaturedGame from "../components/browse/FeaturedGame";
import TopDownload from "../components/browse/TopDownload";
import StarLive from "../components/browse/StarLive";
import LiveStreme from "../components/browse/LiveStreme";

const Browse = () => {
  return (
    <Layout>
      <section className="card-base w-full grid gap-8">
        <div className="flex-responsive justify-between w-full">
          <FeaturedGame title_w="Featured" title_p="Games" />
          <TopDownload />
        </div>
        <StarLive />
        <LiveStreme />
      </section>
    </Layout>
  );
};

export default Browse;
