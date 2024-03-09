import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { AboutImage, Logo, ProactiveAI } from "../Assets";
import { Footer, Nav } from "../UI";
import { StaticButton } from "../Constants";
import "../UI/Style.css";

const navigation = [
  { name: "Product", href: "#product-section" },
  { name: "Features", href: "#features-section" },
  { name: "Pricing", href: "#pricing-section" },
  { name: "Support", href: "#footer-section" },
];

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

  return <p style={{ fontSize: '3rem', fontWeight: 'bold' }}>{count}%</p>;
};

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <Nav />
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Yiieldy</span>
                <img className="h-8 w-auto" src={Logo} alt="Logo" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      {/* ABOUT HERO SECTION */}
      <div className="relative bg-gray-100">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-72">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-green sm:text-4xl sm:leading-none">
              About Us
            </h2>
            <p className="mb-6 text-base font-normal tracking-wide text-green md:text-lg">
              Welcome to our story! Discover the heart behind our journey and
              values in the 'About Us' section below.
            </p>
            <a
              href="#about"
              aria-label="Scroll down"
              className="flex items-center justify-center w-10 h-10 mx-auto text-green duration-300 transform border border-green rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ABOUT US */}
      <div
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        id="about"
      >
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2" id="pres-farm">
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96 bg-none"
                src={AboutImage}
                alt=""
              />
            </div>
          </div>
          <div
            className="flex flex-col justify-center sm:items-center"
            id="pres-farm"
          >
            <div className="mb-6" id="text-sec">
              {/* <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Precision Farming Revolution */}
              {/* <br className="hidden md:block" />
                  jumps over{" "}
                  <span className="relative px-1">
                    <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                    <span className="relative inline-block text-deep-purple-accent-400">
                      a lazy dog
                    </span>
                  </span>
                </h2> */}
              <h1 className="mb-6 font-sans text-3xl font-bold  text-gray-900 sm:text-4xl">
              Yiieldy is a leading AgTech platform revolutionizing the agricultural industry with AI products to ensure a sustainable future
              </h1>
              <div className="lg:pr-20">
                <p className="text-base text-justify text-gray-700 md:text-lg">
                  We specialize in harnessing the power of Artificial
                  Intelligence (AI) to craft solutions that drive businesses
                  towards a brighter, more efficient future.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="grid gap-5 row-gap-8 lg:grid-cols-2 mt-20"
          id="pres-farm"
        >
          <div
            className="flex flex-col justify-center sm:items-center"
            id="pres-farm"
          >
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="grid gap-6 row-gap-10 lg:grid-cols-1">
                <h1 className="text-4xl font-bold px-10">
                  Unlock the power of AI with Yiieldy
                </h1>
                <div className="lg:py-6 lg:pr-16">
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div>
                        <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                          <svg
                            className="w-4 text-gray-600"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <line
                              fill="none"
                              strokeMiterlimit="10"
                              x1="12"
                              y1="2"
                              x2="12"
                              y2="22"
                            />
                            <polyline
                              fill="none"
                              strokeMiterlimit="10"
                              points="19,15 12,22 5,15"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="w-px h-full bg-gray-300" />
                    </div>
                    <div className="pt-1 pb-8">
                      <p className="mb-2 text-2xl font-bold">
                        Our Vision: Redefining Possibilities
                      </p>
                      <p className="text-gray-700">
                        To help our farmers achieve more by applying AI and
                        innovative technologies.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div>
                        <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                          <svg
                            className="w-4 text-gray-600"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <line
                              fill="none"
                              strokeMiterlimit="10"
                              x1="12"
                              y1="2"
                              x2="12"
                              y2="22"
                            />
                            <polyline
                              fill="none"
                              strokeMiterlimit="10"
                              points="19,15 12,22 5,15"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="pt-1 pb-8">
                      <p className="mb-2 text-2xl font-bold">
                        Our Mission: Bridging AI and Reality
                      </p>
                      <p className="text-gray-700">
                        We aim to provide complete AI-powered solutions for
                        sustainable agriculture.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          {/* <div className="bg-white">
            <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0"></div>
              <div className="relative grid gap-5 sm:grid-cols-1 lg:grid-cols-2">
                <div className="overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                  <div className="p-5 flex flex-col justify-center items-center h-full">
                    <CountingNumbers targetNumber={98} />
                    <p className="text-2xl leading-5 text-center text-gray-900">
                      Prescient AI Actions
                    </p>
                  </div>
                  <div className="w-full h-20 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                </div>
                <div className="overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                  <div className="p-5 flex flex-col justify-center items-center h-full">
                  <CountingNumbers targetNumber={90} />
                    <p className="text-2xl leading-5 text-center text-gray-900">
                      Sustainable
                    </p>
                  </div>
                  <div className="w-full h-20 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                </div>
                <div className="overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                  <div className="p-5 flex flex-col justify-center items-center h-full">
                  <CountingNumbers targetNumber={95} />
                    <p className="text-2xl leading-5 text-center text-gray-900">
                      Happy Users
                    </p>
                  </div>
                  <div className="w-full h-20 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                </div>
                <div className="overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                  <div className="p-5 flex flex-col justify-center items-center h-full">
                  <CountingNumbers targetNumber={90} />
                    <p className="text-2xl leading-5 text-center text-gray-900">
                      Innovative
                    </p>
                  </div>
                  <div className="w-full h-20 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
      <StaticButton />
    </div>
  );
}
