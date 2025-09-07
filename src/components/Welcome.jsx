import { useState } from 'react';

const Welcome = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="card-base min-h-64 sm:min-h-80 lg:h-96 flex flex-col justify-center responsive-gap relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      
      <h2 className="text-body-large text-zinc-300 z-10 text-center sm:text-left">
        Welcome To Cyborg
      </h2>
      
      <div className="flex items-center gap-3 justify-center sm:justify-start z-10">
        <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full"></div>
        <h1 className="text-heading-1">
          <span className="text-zinc-300">Browse Our</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 ml-2">
            Popular Games Here
          </span>
        </h1>
      </div>
      
      <button 
        className="btn-primary w-fit mx-auto sm:mx-0 z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? '🎮 ' : ''}Browse Now
      </button>
    </section>
  );
};

export default Welcome;
