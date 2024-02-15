import React from "react";
import { Footer, Nav } from "../UI";
import {
  AiPriceActions,
  AppleButton,
  Ecoregions,
  FinancialManagement,
  GoogleButton,
  HealthInsights,
  HerdsManagement,
  Mockup,
  MockupB,
  SplashA,
} from "../Assets";
import { StaticButton, Waitlist } from "../Constants";
import { CtaSection, Download, Pricing } from "../Components";

const shapedBorderStyle = {
  borderRadius: "50%",
  animation: "floatAnimation 2s infinite",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
};

export default function Home() {
  return (
    <>
      <div>
        <Nav />

        {/* Hero - Section */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-7xl md:px-24 lg:px-8 lg:py-40">
          <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
            <div className="mb-16 lg:mb-0 lg:max-w-7xl lg:pr-5">
              <div className="max-w-2xl mb-6 lg:mt-0 mt-20">
                <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-2xl mb-6">
                  {/* Stay ahead of the soaring costs of poultry feed with the Kaji
                  App */}
                  {/* Stay ahead of the soaring costs of poultry feed with the Yiieldy Fiidz App */}
                  Reduce your poultry feed costs by 40% with the Yiieldy Fiidz App
                </h2>
                {/* <p className="text-gray-700 text-base md:text-lg">
                  Yiieldy Fiidz helps you reduce feed costs, improve feed efficiency,
                  and enhance poultry performance. Download Kaji today and
                  discover the smartest way to feed your poultry.
                </p> */}
                <p className="text-gray-700 text-base md:text-lg">
                  Yiieldy Fiidz helps you reduce feed costs, improve feed
                  efficiency, and enhance poultry performance, Join the
                  waitlist.
                </p>
              </div>
              {/* <div className="flex items-center space-x-3">
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
                </div> */}
              <Waitlist />
            </div>
            <div className="flex items-center lg:justify-end lg:w-1/2 justify-center">
              <div className="w-2/5">
                <img className="object-cover" src={Mockup} alt="" />
              </div>
              <div className="w-5/12 -ml-16 lg:-ml-32">
                <img className="object-cover" src={MockupB} alt="" />
              </div>
            </div>
          </div>
          <a
            href="/"
            aria-label="Scroll down"
            className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
            </svg>
          </a>
        </div>

        {/* Features Section */}
        <div className="features-sec" id="features-section">
          <div className="">
            <div className="flex flex-col gap-4">
              <h1 className="text-center font-bold text-4xl">
                Awesome Features
              </h1>
              {/* <p className="text-center text-2xl font-semibold text-gray-700">
                Kaji: Empowering farmers with precision tech, health insights,
                and financial mastery.
              </p> */}
              <div className="flex justify-center items-center mb-20">
                <hr className="bg-green h-1 w-20 rounded-sm" />
              </div>
            </div>
            <div className="lg:flex justify-center">
              <div className="flex items-center gap-10" id="feat-grid">
                <div className="flex flex-col gap-20">
                  <div className="flex flex-col items-end gap-4 feat-div">
                    <div className="bg-green p-2" style={shapedBorderStyle}>
                      <img src={AiPriceActions} alt="" className="w-5 h-5" />
                    </div>
                    <h1 className="text-2xl">
                      Feed quality and usage optimization.
                    </h1>
                    <p className="text-end text-sm w-[250px]">
                      Optimize your feed usage and maximize your yields, all
                      while reducing costs and minimizing waste. Know how
                      efficiently your birds convert feed into gains like meat
                      or eggs. You can compare performance over time or across
                      groups with its built-in animal growth and productivity
                      intelligence for feed/bird performance.
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-4 feat-div">
                    <div className="bg-green p-2" style={shapedBorderStyle}>
                      <img src={HealthInsights} alt="" className="w-5 h-5" />
                    </div>
                    <h1 className="text-2xl">
                      Feed formulation/nutrient control
                    </h1>
                    <p className="text-end text-sm w-[250px]">
                      Formulation feed using locally sourced ingredients to suit
                      different types of birds and stages of production.
                      Maximize feed production efficiency with our tracking
                      system. Reduce costs while maintaining bird nutrition.
                      Reduce dependence on imported feed.
                    </p>
                  </div>
                </div>
                <div className="AppImg flex justify-center">
                  <img src={Mockup} alt="" className="w-[300px]" />
                </div>
                <div className="flex flex-col gap-20">
                  <div className="flex flex-col items-start gap-4 feat-div">
                    <div className="bg-green p-2" style={shapedBorderStyle}>
                      <img
                        src={FinancialManagement}
                        alt=""
                        className="w-5 h-5"
                      />
                    </div>
                    <h1 className="text-2xl">
                      AI assistant (knowledgeable Staff)
                    </h1>
                    <p className="text-start text-sm w-[250px]">
                      Yiieldy Fiidz brings AI assistant to poultry farmers, a
                      crucial tool that has the potential to revolutionize the
                      way we work in our poultry farms. It harnesses the power
                      of artificial intelligence (AI) to provide real-time
                      assistance, automate tasks, and facilitate knowledge
                      sharing.
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-4 feat-div">
                    <div className="bg-green p-2" style={shapedBorderStyle}>
                      <img src={HerdsManagement} alt="" className="w-5 h-5" />
                    </div>
                    <h1 className="text-2xl">Herds Management</h1>
                    <p className="text-start text-sm w-[250px]">
                      Yiieldy Fiidz's monitoring systems provide livestock
                      farmers with an efficient solution to manage their herds,
                      enabling them to confidently track the well-being and
                      activities of individual animals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        {/* <div className="bg-gray-700">
          <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            
            <div className="relative grid gap-5 sm:grid-cols-1 lg:grid-cols-3">
              <div className="px-10 py-20 text-center transition duration-300 transform bg-gray-600 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                <p className="font-semibold text-gray-200">
                  Kaji brings AI assistance to poultry farmers
                </p>
              </div>
              <div className="px-10 py-20 text-center transition duration-300 transform bg-gray-600 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                <p className="font-semibold text-gray-200">
                  Adjust your bird's feeding strategy based on insights from any
                  feed intake deviations.
                </p>
              </div>
              <div className="px-10 py-20 text-center transition duration-300 transform bg-gray-600 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                <p className="font-semibold text-gray-200">
                  Instead of lowering stock sizes, closing farms, or switching
                  to cheaper feed options, Kaji can assist you
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Pricing */}
        <div id="pricing-section">
          <div className="mb-10 flex flex-col gap-3">
            {/* <h1 className="text-4xl font-bold text-center">
              Yiieldy Fiidz options
            </h1> */}
            {/* <div className="lg:px-48 sm:px-0 md:px-10">
              <p className="text-center text-xl">
                Transform your farm management with our comprehensive service
                that empowers you to make data-driven decisions and run your
                farm with utmost efficiency.
              </p>
            </div> */}
          </div>
          {/* <Pricing /> */}
        </div>

        {/* Download Section */}
        <div className="lg:mt-20">
          <Download />
        </div>

        {/* Trusted Company */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
              Trusted by the world’s most innovative teams
            </h2>
            {/* <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-1 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"> */}
            <div className="mx-auto mt-10 flex justify-center items-center gap-x-8 gap-y-10 sm:max-w-xl lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                //  src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                src={Ecoregions}
                alt="Transistor"
                width={158}
                height={48}
              />
              {/* <img
           className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
           src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
           alt="Reform"
           width={158}
           height={48}
         />
         <img
           className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
           src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
           alt="Tuple"
           width={158}
           height={48}
         />
         <img
           className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
           src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
           alt="SavvyCal"
           width={158}
           height={48}
         />
         <img
           className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
           src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
           alt="Statamic"
           width={158}
           height={48}
         /> */}
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
        <StaticButton />
      </div>
    </>
  );
}
