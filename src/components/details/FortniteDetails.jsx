import FortniteCard from "./FortniteCard"
import FortniteInfo from "./FortniteInfo";

const FortniteDetails = () => {
  return (
    <section className="w-full bg-zinc-900 flex flex-col md:px-16 px-6 py-10 rounded-2xl relative">
      <div className="flex gap-6 flex-wrap lg:flex-nowrap ">
        <FortniteCard />
        <FortniteInfo />
      </div>
    </section>
  );
}

export default FortniteDetails