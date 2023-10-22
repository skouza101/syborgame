const Card = (props) => {
  return (
    <div className="flex flex-col gap-y-4 border border-zinc-500 basis-60 grow rounded-2xl px-6  py-8">
      <img
        className="h-12 w-12 rounded-full "
        src={props.url}
      />
      <h2 className="text-zinc-100 text-xl font-semibold">{props.heading}</h2>
      <p className="text-zinc-500">
        {props.p}
      </p>
    </div>
  );
};

export default Card;
