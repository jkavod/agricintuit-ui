import React, { useState, useEffect } from "react";
import '../UI/Style.css'


const CountingNumbers = ({ targetNumber }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = Math.ceil(targetNumber / 50);
    const timer = setInterval(() => {
      setCount((prevCount) => {
        const nextCount = prevCount + increment;
        return nextCount >= targetNumber ? targetNumber : nextCount;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [targetNumber]);

  return <p style={{ fontSize: '3rem', fontWeight: 'bold', color: "#149930" }}>{count}%</p>;
};

export default function Statistic() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-4xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"  id="text-sec">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-green sm:text-4xl md:mx-auto" id="stats">
          <span className="relative inline-block">
            {/* <svg
              viewBox="0 0 52 24"
              fill="#149930"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="d5589eeb-3fca-4f01-ac3e-983224745704"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#d5589eeb-3fca-4f01-ac3e-983224745704)"
                width="52"
                height="24"
              />
            </svg> */}
            <span className="relative">Our</span>
          </span>{' '}
          User Statistics
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
        Explore our User Statistics and check the box below to track your agricultural journey with AgricIntuit!
        </p>
      </div>
      <div className="relative w-full p-px mx-auto mb-4 overflow-hidden transition-shadow duration-300 border rounded lg:mb-8 lg:max-w-4xl group hover:shadow-xl">
        <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
        <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
        <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
        <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
        <div className="relative flex flex-col items-center h-full py-10 duration-300 bg-white rounded-sm transition-color sm:items-stretch sm:flex-row">
          <div className="px-12 py-8 text-center flex flex-col gap-3">
          
            <CountingNumbers targetNumber={82} />
            <p className="text-center md:text-base text-green">
              Returned Customer
            </p>
          </div>
          <div className="w-56 h-1 transition duration-300 transform bg-gray-300 rounded-full group-hover:bg-deep-purple-accent-400 group-hover:scale-110 sm:h-auto sm:w-1" />
          <div className="px-12 py-8 text-center flex flex-col gap-3">
          <CountingNumbers targetNumber={70} />
            <p className="text-center md:text-base text-green">
            Free Download
            </p>
          </div>
          <div className="w-56 h-1 transition duration-300 transform bg-gray-300 rounded-full group-hover:bg-deep-purple-accent-400 group-hover:scale-110 sm:h-auto sm:w-1" />
          <div className="px-12 py-8 text-center flex flex-col gap-3">
          <CountingNumbers targetNumber={80} />
            <p className="text-center md:text-base text-green">
            Best Award
            </p>
          </div>
          <div className="w-56 h-1 transition duration-300 transform bg-gray-300 rounded-full group-hover:bg-deep-purple-accent-400 group-hover:scale-110 sm:h-auto sm:w-1" />
          <div className="px-12 py-8 text-center flex flex-col gap-3">
          <CountingNumbers targetNumber={90} />
            <p className="text-center md:text-base text-green">
            App Download
            </p>
          </div>
        </div>
      </div>
      {/* <p className="mx-auto mb-4 text-gray-600 sm:text-center lg:max-w-2xl lg:mb-6 md:px-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p> */}
    </div>
  );
};