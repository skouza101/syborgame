const FortniteScreenShot = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 responsive-gap">
      <img
        src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/details-01.jpg"
        alt="Game Screenshot 1"
        className="h-52 rounded-xl w-full object-cover border border-zinc-600 hover:scale-105 transition-transform duration-300 cursor-pointer"
      />
      <img
        src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/details-02.jpg"
        alt="Game Screenshot 2"
        className="h-52 w-full rounded-xl object-cover border border-zinc-600 hover:scale-105 transition-transform duration-300 cursor-pointer"
      />
      <img
        src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/details-03.jpg"
        alt="Game Screenshot 3"
        className="h-52 w-full rounded-xl object-cover border border-zinc-600 hover:scale-105 transition-transform duration-300 cursor-pointer"
      />
    </section>
  );
};

export default FortniteScreenShot;
