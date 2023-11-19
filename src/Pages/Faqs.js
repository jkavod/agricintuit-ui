import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Logo } from "../Assets";
import { Footer, Nav } from "../UI";
import "../UI/Style.css";
import { StaticButton } from "../Constants";

const navigation = [
  { name: "Product", href: "#product-section" },
  { name: "Features", href: "#features-section" },
  { name: "Pricing", href: "#pricing-section" },
  { name: "Support", href: "#footer-section" },
];

export default function Faqs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (idx) => {
    setActiveTab(activeTab === idx ? 0 : idx);
  };

  const handleRotate = (idx) => {
    return activeTab === idx ? "-rotate-180" : "";
  };

  const handleToggle = (idx) => {
    return activeTab === idx ? "max-h-full" : "max-h-0";
  };

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
                <span className="sr-only">AgricIntuit</span>
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

      {/* FAQS HERO SECTION */}
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
              FAQ's
            </h2>
            <p className="mb-6 text-base font-normal tracking-wide text-green md:text-lg">
              Resolving Common Problems: Troubleshooting Common Issues Our Users
              Might Encounter while Our Product or Service
            </p>
            <a
              href="#faqs"
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

      {/* FAQS QUESTIONS */}
      <div className="h-screen max-w-7xl px-2 py-3 mx-auto mt-32 tracking-wide md:px-4 md:mt-20">
        <div className="flex justify-center">
          <h1 className="text-3xl" id="faqs">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="grid gap-3 py-8 text-lg leading-6 text-gray-800 md:gap-8 md:grid-cols-2">
          {/* First FAQ */}
          <div className="space-y-3">
            <div
              className="relative transition-all duration-700 border rounded-xl hover:shadow-2xl"
              onClick={() => handleClick(1)}
            >
              <div className="w-full p-4 text-left cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="tracking-wide">
                    What is Agric Sense technology, and how does it relate to
                    agriculture?
                  </span>
                  <span
                    className={`transition-transform duration-500 transform fill-current ${handleRotate(
                      1
                    )}`}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </div>
              </div>

              <div
                className={`relative overflow-hidden transition-all duration-700 ${handleToggle(
                  1
                )}`}
                style={{
                  maxHeight: handleToggle(1) === "max-h-0" ? "0" : "100vh",
                }}
              >
                <div className="px-6 pb-4 text-gray-600">
                  Agric Sense technology involves utilizing sensors, IoT
                  devices, and data analytics in agriculture to monitor and
                  analyze various parameters such as soil conditions, weather,
                  and crop health. It helps farmers make data-driven decisions,
                  optimizing farming processes and improving yields.
                </div>
              </div>
            </div>
          </div>

          {/* Second FAQ */}
          <div className="space-y-3">
            <div
              className="relative transition-all duration-700 border rounded-xl hover:shadow-2xl"
              onClick={() => handleClick(2)}
            >
              <div className="w-full p-4 text-left cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="tracking-wide">
                    How does your company use artificial intelligence to play a
                    role in modern agriculture through Agric Sense technology?
                  </span>
                  <span
                    className={`transition-transform duration-500 transform fill-current ${handleRotate(
                      1
                    )}`}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </div>
              </div>

              <div
                className={`relative overflow-hidden transition-all duration-700 ${handleToggle(
                  1
                )}`}
                style={{
                  maxHeight: handleToggle(2) === "max-h-0" ? "0" : "100vh",
                }}
              >
                <div className="px-6 pb-4 text-gray-600">
                  We employ the use of AI which processes the data collected by
                  Agric Sense technology to derive meaningful insights. Our AI
                  algorithms analyze the data to provide predictions, optimize
                  irrigation, detect diseases, recommend crop rotations, and
                  offer real-time monitoring, ultimately enhancing farming
                  efficiency and productivity.
                </div>
              </div>
            </div>
          </div>

          {/* Third FAQ */}
          <div className="space-y-3">
            <div
              className="relative transition-all duration-700 border rounded-xl hover:shadow-2xl"
              onClick={() => handleClick(3)}
            >
              <div className="w-full p-4 text-left cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="tracking-wide">
                    What are the primary benefits of using our AI-powered Agric
                    Sense technology for farmers?
                  </span>
                  <span
                    className={`transition-transform duration-500 transform fill-current ${handleRotate(
                      1
                    )}`}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </div>
              </div>

              <div
                className={`relative overflow-hidden transition-all duration-700 ${handleToggle(
                  1
                )}`}
                style={{
                  maxHeight: handleToggle(3) === "max-h-0" ? "0" : "100vh",
                }}
              >
                <div className="px-6 pb-4 text-gray-600">
                  The benefits include precise resource management, enhanced
                  crop yield, reduced resource wastage, early disease detection,
                  optimized irrigation, efficient pest management, and informed
                  decision-making based on real-time data, leading to increased
                  profitability for farmers.
                </div>
              </div>
            </div>
          </div>

          {/* Fourth FAQ */}
          <div className="space-y-3">
            <div
              className="relative transition-all duration-700 border rounded-xl hover:shadow-2xl"
              onClick={() => handleClick(4)}
            >
              <div className="w-full p-4 text-left cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="tracking-wide">
                    Can you explain how your Agric Sense technology will help
                    optimize resource usage and increase efficiency in my
                    farming?
                  </span>
                  <span
                    className={`transition-transform duration-500 transform fill-current ${handleRotate(
                      1
                    )}`}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </div>
              </div>

              <div
                className={`relative overflow-hidden transition-all duration-700 ${handleToggle(
                  1
                )}`}
                style={{
                  maxHeight: handleToggle(4) === "max-h-0" ? "0" : "100vh",
                }}
              >
                <div className="px-6 pb-4 text-gray-600">
                  Using our Agric Sense technology, we collect data on soil
                  moisture, nutrient levels, and weather conditions. Our AI then
                  processes this data to optimize resource usage, ensuring
                  appropriate irrigation and fertilizer application. This
                  data-driven approach enhances farming efficiency and minimizes
                  resource wastage.
                </div>
              </div>
            </div>
          </div>

          {/* Fifth FAQ */}
          <div className="space-y-3">
            <div
              className="relative transition-all duration-700 border rounded-xl hover:shadow-2xl"
              onClick={() => handleClick(5)}
            >
              <div className="w-full p-4 text-left cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="tracking-wide">
                    Are there specific types of sensors or devices associated
                    with your Agric Sense technology?
                  </span>
                  <span
                    className={`transition-transform duration-500 transform fill-current ${handleRotate(
                      1
                    )}`}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </div>
              </div>

              <div
                className={`relative overflow-hidden transition-all duration-700 ${handleToggle(
                  1
                )}`}
                style={{
                  maxHeight: handleToggle(5) === "max-h-0" ? "0" : "100vh",
                }}
              >
                <div className="px-6 pb-4 text-gray-600">
                  Yes, our Agric Sense technology utilizes various sensors such
                  as soil moisture sensors, weather stations, drones, satellite
                  imagery, GPS devices, and IoT-enabled equipment to collect
                  relevant agricultural data.
                </div>
              </div>
            </div>
          </div>

          {/* Sixth FAQ */}
          <div className="space-y-3">
            <div
              className="relative transition-all duration-700 border rounded-xl hover:shadow-2xl"
              onClick={() => handleClick(6)}
            >
              <div className="w-full p-4 text-left cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="tracking-wide">
                    How does your Agric Sense technology aid in monitoring soil
                    health and nutrient levels in our crops?
                  </span>
                  <span
                    className={`transition-transform duration-500 transform fill-current ${handleRotate(
                      1
                    )}`}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </div>
              </div>

              <div
                className={`relative overflow-hidden transition-all duration-700 ${handleToggle(
                  1
                )}`}
                style={{
                  maxHeight: handleToggle(6) === "max-h-0" ? "0" : "100vh",
                }}
              >
                <div className="px-6 pb-4 text-gray-600">
                  Our Agric Sense technology employs soil sensors to measure
                  moisture, pH levels, and nutrient content while the AI
                  algorithms analyze this data to provide insights into soil
                  health and nutrient levels, enabling you to make informed
                  decisions about fertilizer application and land management.
                </div>
              </div>
            </div>
          </div>

          {/* Seventh FAQ */}
          <div className="space-y-3">
            <div
              className="relative transition-all duration-700 border rounded-xl hover:shadow-2xl"
              onClick={() => handleClick(7)}
            >
              <div className="w-full p-4 text-left cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="tracking-wide">
                    Are there AI algorithms used to predict crop growth and
                    yield based on Agric Sense data?
                  </span>
                  <span
                    className={`transition-transform duration-500 transform fill-current ${handleRotate(
                      1
                    )}`}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </div>
              </div>

              <div
                className={`relative overflow-hidden transition-all duration-700 ${handleToggle(
                  1
                )}`}
                style={{
                  maxHeight: handleToggle(7) === "max-h-0" ? "0" : "100vh",
                }}
              >
                <div className="px-6 pb-4 text-gray-600">
                  Absolutely, AI algorithms process agric sense data to predict
                  crop growth stages, yield estimates, and harvest times. These
                  predictions assist farmers in planning and optimizing their
                  harvests for maximum yield.
                </div>
              </div>
            </div>
          </div>

          {/* Eight FAQ */}
          <div className="space-y-3">
            <div
              className="relative transition-all duration-700 border rounded-xl hover:shadow-2xl"
              onClick={() => handleClick(8)}
            >
              <div className="w-full p-4 text-left cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="tracking-wide">
                    How can we as farmers access and interpret the data
                    collected through Agric Sense technology?
                  </span>
                  <span
                    className={`transition-transform duration-500 transform fill-current ${handleRotate(
                      1
                    )}`}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </div>
              </div>

              <div
                className={`relative overflow-hidden transition-all duration-700 ${handleToggle(
                  1
                )}`}
                style={{
                  maxHeight: handleToggle(8) === "max-h-0" ? "0" : "100vh",
                }}
              >
                <div className="px-6 pb-4 text-gray-600">
                  As farmers, you can access the data through user-friendly
                  interfaces, mobile apps, or web platforms. The data is
                  presented in a comprehensible format, and AI-generated
                  insights are provided to help you interpret and utilize the
                  information effectively.
                </div>
              </div>
            </div>
          </div>

          {/* Ninth FAQ */}
          <div className="space-y-3">
            <div
              className="relative transition-all duration-700 border rounded-xl hover:shadow-2xl"
              onClick={() => handleClick(9)}
            >
              <div className="w-full p-4 text-left cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="tracking-wide">
                    How does the Agric Sense technology ensure data privacy and
                    security for farmers?
                  </span>
                  <span
                    className={`transition-transform duration-500 transform fill-current ${handleRotate(
                      1
                    )}`}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </div>
              </div>

              <div
                className={`relative overflow-hidden transition-all duration-700 ${handleToggle(
                  1
                )}`}
                style={{
                  maxHeight: handleToggle(9) === "max-h-0" ? "0" : "100vh",
                }}
              >
                <div className="px-6 pb-4 text-gray-600">
                  Data privacy and security are maintained through encryption,
                  restricted access, compliance with privacy regulations, and
                  secure storage mechanisms. The technology follows best
                  practices to safeguard sensitive agricultural data.
                </div>
              </div>
            </div>
          </div>

          {/* Tenth FAQ */}
          <div className="space-y-3">
            <div
              className="relative transition-all duration-700 border rounded-xl hover:shadow-2xl"
              onClick={() => handleClick(10)}
            >
              <div className="w-full p-4 text-left cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="tracking-wide">
                    What are the key considerations for farmers before
                    implementing Agric Sense technology on their farms?
                  </span>
                  <span
                    className={`transition-transform duration-500 transform fill-current ${handleRotate(
                      1
                    )}`}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </div>
              </div>

              <div
                className={`relative overflow-hidden transition-all duration-700 ${handleToggle(
                  1
                )}`}
                style={{
                  maxHeight: handleToggle(10) === "max-h-0" ? "0" : "100vh",
                }}
              >
                <div className="px-6 pb-4 text-gray-600">
                  Key considerations include understanding the specific needs of
                  the farm, budget allocation, data management strategies,
                  integration with existing systems, and assessing the
                  scalability and compatibility of the technology with the
                  farm's future plans. Farmers should also consider the level of
                  technical support and training provided by the technology
                  provider.
                </div>
              </div>
            </div>
          </div>

          {/* Eleventh FAQ */}
          <div className="space-y-3">
            <div
              className="relative transition-all duration-700 border rounded-xl hover:shadow-2xl"
              onClick={() => handleClick(11)}
            >
              <div className="w-full p-4 text-left cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="tracking-wide">
                    I am into small-scale farming. Is Agric Sense technology
                    compatible with different types and scales of agriculture,
                    including small-scale farming?
                  </span>
                  <span
                    className={`transition-transform duration-500 transform fill-current ${handleRotate(
                      1
                    )}`}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </div>
              </div>

              <div
                className={`relative overflow-hidden transition-all duration-700 ${handleToggle(
                  1
                )}`}
                style={{
                  maxHeight: handleToggle(11) === "max-h-0" ? "0" : "100vh",
                }}
              >
                <div className="px-6 pb-4 text-gray-600">
                  Yes, Agric Sense technology is designed to cater to various
                  types and scales of agriculture, from small-scale farms to
                  large agricultural operations. The technology is adaptable and
                  can be customized to suit the specific needs of different
                  farming setups.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Question Section */}
      <div className="overflow-hidden" id="contact">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-center xl:flex-row">
            {/* Contact Form */}
            <div className="w-full max-w-7xl xl:px-8 xl:w-[100%]">
              <div className="relative">
                <div
                  className="relative rounded shadow-2xl p-7 sm:p-10"
                  id="text"
                >
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Ask Questions
                  </h3>
                  {/* <p className="mb-4 text-xl font-normal sm:text-center sm:mb-6 sm:text-xl">
                    Feel free to reach out with any questions or concerns by
                    sending us a message. We're here to assist you!
                  </p> */}
                  <form>
                    <div className="grid gap-4 lg:grid-cols-2 sm:grid-cols-1">
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="name"
                          className="inline-block mb-1 font-medium"
                        >
                          Name
                        </label>
                        <input
                          placeholder="John Doe"
                          required
                          type="text"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-green focus:outline-none focus:shadow-outline"
                          id="name"
                          name="name"
                        />
                      </div>
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="phone"
                          className="inline-block mb-1 font-medium"
                        >
                          Phone
                        </label>
                        <input
                          placeholder="234"
                          required
                          type="tel"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-green focus:outline-none focus:shadow-outline"
                          id="email"
                          name="phoneNumber"
                          pattern="^\+(?:[0-9] ?){6,14}[0-9]$"
                        />
                      </div>
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="email"
                          className="inline-block mb-1 font-medium"
                        >
                          E-mail
                        </label>
                        <input
                          placeholder="john.doe@example.org"
                          required
                          type="text"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-green focus:outline-none focus:shadow-outline"
                          id="email"
                          name="email"
                        />
                      </div>
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="text"
                          className="inline-block mb-1 font-medium"
                        >
                          Subject
                        </label>
                        <input
                          placeholder="Your Subject"
                          required
                          type="text"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-green focus:outline-none focus:shadow-outline"
                          id="subject"
                          name="subject"
                        />
                      </div>
                    </div>
                    <div className="relative w-full lg:max-w-7xl md:max-w-4xl sm:max-w-xl">
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="email"
                          className="inline-block mb-1 font-medium"
                        >
                          Message
                        </label>
                        <input
                          placeholder="Enter your message here..."
                          required
                          type="text"
                          className="flex-grow w-full h-32 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-green focus:outline-none focus:shadow-outline"
                          id="message"
                          name="message"
                        />
                      </div>
                      <div className="mt-4 mb-2 sm:mb-4">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <StaticButton />
    </div>
  );
}
