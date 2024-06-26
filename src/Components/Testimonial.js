import React, { useState, useEffect } from "react";

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  const quotes = [
    {
      text: "Yiieldy Fiidz AI Staff is a game-changer; it is like having a pocket expert ready to provide real-time solutions. It empowers my team with knowledge, improving productivity and profitability. Keep up the great work!",
      author: "Ekaidem Jeremiah",
      role: "Ecoregions Nigeria",
      // imageUrl:
      //   "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      text: "Previously, I relied on my intuition to discuss my poultry production. However, since using Yiieldy Fiidz, I have gained invaluable insights into how efficiently my flocks convert feed into weight gain. This has enabled me to make informed decisions about their feeding strategies and boosted my confidence in my poultry management. I am impressed with integrating such a data-driven tool into the app. Fantastic job!",
      author: "Abu Warlord",
      role: "Azuri-Green Acres",
      // imageUrl:
      //   "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      text: "I recently used the Yiieldy Fiidz app's feed calculator to estimate my poultry production. This app makes feed management easier by removing the guesswork, which has helped me save significant money. Its simple and accurate design makes it a must-have for every poultry farmer.",
      author: "Jacob Odiakosa",
      role: "Winners Farm Ltd",
      // imageUrl:
      //   "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  const goToNextQuote = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextQuote, 5000);

    return () => clearInterval(intervalId);
  }, [quotes.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-10 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className="flex flex-col gap-5 justify-center items-center mb-10">
          <h1 className="text-xl font-bold text-center">Testimonial</h1>
          <p className="text-4xl text-gray-500 text-center">
            What Users Say About Us
          </p>
        </div>

        {/* Carousel Content */}
        <div className="relative mt-10 pb-6">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out ${
                index === activeIndex ? "block" : "hidden"
              }`}
            >
              <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>{quote.text}</p>
              </blockquote>
              <figcaption className="mt-10">
                {/* <img
                  className="mx-auto h-10 w-10 rounded-full"
                  src={quote.imageUrl}
                  alt={`${quote.author}'s headshot`}
                /> */}
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900">
                    {quote.author}
                  </div>
                  <svg
                    viewBox="0 0 2 2"
                    width={3}
                    height={3}
                    aria-hidden="true"
                    className="fill-gray-900"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="text-gray-600">{quote.role}</div>
                </div>
              </figcaption>
            </div>
          ))}

          {/* Dotted Indicators */}
          <div className="flex justify-center mt-4">
            {quotes.map((_, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 mx-2 rounded-full cursor-pointer ${
                  index === activeIndex ? "bg-green" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
