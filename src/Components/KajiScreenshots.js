import React from "react";
import "../UI/Style.css";
import { AppleButton, GoogleButton, Mockup, MockupB } from "../Assets";
import { Link } from "react-router-dom";

export default function KajiScreenshots() {
  return (
    <main>
      <section>
        <div className="px-4 py-32 mb-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-40">
          <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
            <div className="mb-16 lg:mb-0 lg:max-w-7xl lg:pr-5">
              <div className="max-w-xl mb-6">
                <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w- mb-6">
                  Instead of lowering stock sizes, closing farms, or switching
                  to cheaper feed options, Kaji App can assist you.
                </h2>
                <p className="text-gray-700 text-base md:text-lg">
                  Kaji App helps you reduce feed costs, improve feed efficiency, and
                  enhance poultry performance. Download Kaji today and discover
                  the smartest way to feed your poultry.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href="/"
                  className="w-32 transition duration-300 hover:shadow-lg"
                >
                  <img
                    src={AppleButton}
                    className="object-cover object-top w-full h-auto mx-auto rounded-2xl"
                    alt=""
                  />
                </a>
                <a
                  href="/"
                  className="w-32 transition duration-300 hover:shadow-lg"
                >
                  <img
                    src={GoogleButton}
                    className="object-cover object-top w-full h-auto mx-auto rounded-2xl"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <Link className="flex items-center justify-end lg:w-1/2"
            to={"/kaji"}>
              <div className="w-2/5">
                <img className="object-cover" src={Mockup} alt="" />
              </div>
              <div className="w-5/12 -ml-16 lg:-ml-32">
                <img className="object-cover" src={MockupB} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
