import PropTypes from 'prop-types';

const Card = ({ url, heading, p }) => {
  return (
    <div className="flex flex-col responsive-gap border border-zinc-600 basis-60 grow rounded-2xl p-6 hover:border-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 bg-zinc-800">
      <img
        className="h-12 w-12 rounded-full mx-auto sm:mx-0"
        src={url}
        alt={heading}
      />
      <h2 className="text-heading-4 text-center sm:text-left">{heading}</h2>
      <p className="text-body-medium text-zinc-400 text-center sm:text-left">
        {p}
      </p>
    </div>
  );
};

Card.propTypes = {
  url: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
};

export default Card;
