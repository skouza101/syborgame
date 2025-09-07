import FortniteCard from "./FortniteCard"
import FortniteInfo from "./FortniteInfo";

const FortniteDetails = () => {
  return (
    <section className="card-base">
      <div className="flex-responsive">
        <FortniteCard />
        <FortniteInfo />
      </div>
    </section>
  );
}

export default FortniteDetails