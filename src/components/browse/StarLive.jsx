import Card from "../Card";

const StarLive = () => {
  return (
    <section className="card-base">
      <div className="flex items-center gap-3 justify-center sm:justify-start mb-8">
        <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full"></div>
        <h1 className="text-heading-2">
          <span className="text-zinc-300">How To Start Your</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 ml-2">
            Live Stream
          </span>
        </h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
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
      
      <div className="flex justify-center">
        <button className="btn-primary">
          Start Streaming
        </button>
      </div>
    </section>
  );
};

export default StarLive;
