import React from 'react';

const AnimatedLink = ({ name, href }) => {
  return (
    <a 
      href={href} 
      className="rounded-lg group relative w-28 h-12 text-neutral-50 bg-neutral-800 p-2 overflow-hidden no-underline"
    >
      <p className="absolute font-bold z-10 duration-500">{name}</p>
      <div className="">
        <div className="absolute duration-500 bg-cyan-600 w-4 h-16 bottom-12 group-hover:-bottom-1 delay-500 right-0"></div>
        <div className="absolute duration-500 bg-cyan-600 w-4 h-16 -bottom-16 group-hover:-bottom-1 right-4"></div>
        <div className="absolute duration-500 bg-cyan-600 w-4 h-16 bottom-12 group-hover:-bottom-1 delay-500 right-8"></div>
        <div className="absolute duration-500 bg-cyan-600 w-4 h-16 -bottom-16 group-hover:-bottom-1 right-12"></div>
        <div className="absolute duration-500 bg-cyan-600 w-4 h-16 bottom-12 group-hover:-bottom-1 delay-500 right-16"></div>
        <div className="absolute duration-500 bg-cyan-600 w-4 h-16 -bottom-16 group-hover:-bottom-1 right-20"></div>
        <div className="absolute duration-500 bg-cyan-600 w-4 h-16 bottom-12 group-hover:-bottom-1 delay-500 right-24"></div>
      </div>
    </a>
  );
};

export default AnimatedLink;
