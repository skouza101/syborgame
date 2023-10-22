import Card from "../Card";

const StarLive = () => {
  return (
    <section className="flex flex-col relative py-20 gap-y-16">
      <h1 className="md:text-4xl text-3xl grow font-extrabold text-pink-500 flex-wrap  justify-center flex gap-2">
        <span className="text-zinc-300 underline ">How To Start Your</span>
        Live Stream
      </h1>
      <div className="flex gap-4 flex-wrap">
        <Card
          url="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/service-01.jpg"
          heading="Go To Your Profile"
          p="Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout."
        />
        <Card
          url="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/service-02.jpg"
          p="If you wish to support us, you can make a small contribution via PayPal to info [at] templatemo.com"
          heading="Live Stream Button"
        />
        <Card
          url="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/service-03.jpg"
          p="You are not allowed to redistribute this template's downloadable ZIP file on any other template collection website."
          heading="You Are Live"
        />
      </div>
      <button className="absolute -bottom-0 right-2/4 translate-x-1/2 rounded-3xl bg-pink-500 text-zinc-300 font-medium py-3 px-8">
        Discover Popular
      </button>
    </section>
  );
};

export default StarLive;
