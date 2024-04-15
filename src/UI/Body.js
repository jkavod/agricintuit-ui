import React from "react";
import {
  SplashA,
  AiPriceActions,
  HealthInsights,
  FinancialManagement,
  HerdsManagement,
  ProactiveAI,
} from "../Assets";
import {
  CarouselScreenshot,
  Statistics,
  CtaSection,
  Testimonials,
  Pricing,
  Download,
  Partners,
} from "../Components";
import "./Style.css";

const shapedBorderStyle = {
  borderRadius: "50%",
  animation: "floatAnimation 2s infinite",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
};

export default function Body() {
  return (
    <>
      <main className="top-0 relative p-6 lg:px-8 w-auto mt-20 h-auto">
        {/* <div className="grid grid-cols-2 justify-between items-center features mb-50 gap[100px]">
          <div className="px-3 w-[500px] flex flex-col gap-6 features-card">
            <h1 className="text-4xl font-bold">
              Dedicate yourself to the things that really matter
            </h1>
            <p className="text-2xl text-gray-500">
              Nec lacinia. Quod dicta donec perspiciatis rutrum saepe egestas,
              porro repellat curabitur, blandit rerum nostrud id conubia
              phasellus officiis penatibus ac fringilla delectus eu cum platea
              aspernatur taciti, maecenas natoque reiciendis aenean, viverra
              unde irure, eum eget voluptate, enim lorem.!
            </p>
            <div className="grid grid-cols-2 gap-2 download-btn">
              <a
                href="#"
                className="bg-green px-5 py-5 text-center rounded text-white font-bold hover:border-2 hover:text-green hover:bg-white"
              >
                Read More
              </a>
              <a
                href="#"
                className="bg-white border-2 px-5 py-5 text-center rounded text-green font-bold hover:border-2 hover:text-white hover:bg-green"
              >
                Download
              </a>
            </div>
          </div>
          <div className="ml-5 grid grid-cols-2 justify-end">
          <img
              src={App}
              alt="App Image"
              className="absolute top-[-50px] right-[250px]"
            />
            <img
              src={AppB}
              alt="App Image"
              className="absolute top-[150px] right-[50px]"
            />
          </div>
        </div> */}

        {/* <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-5 row-gap-8 lg:grid-cols-2" id="pres-farm">
            <div
              className="flex flex-col justify-center sm:items-center"
              id="pres-farm"
            >
              <div className="mb-6" id="text-sec">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Precision Farming Revolution
                <br className="hidden md:block" />
                  jumps over{" "}
                  <span className="relative px-1">
                    <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                    <span className="relative inline-block text-deep-purple-accent-400">
                      a lazy dog
                    </span>
                  </span>
                </h2>
                <h1 className="mb-6 font-sans text-3xl font-bold  text-gray-900 sm:text-4xl">
                  Precision Farming Revolution
                </h1>
                <div className="lg:pr-20">
                  <p className="text-base text-justify text-gray-700 md:text-lg">
                    Yiieldy pioneers precision farming, seamlessly
                    integrating technology and agronomy. From precise seed
                    placement using smart sensors to AI-driven harvesting,
                    AgriSense ensures optimal yield. Predictive analytics
                    empower farmers with actionable insights, elevating
                    efficiency and sustainability. Yiieldy's commitment
                    extends to personalized consultancy, where expert
                    agronomists collaborate with farmers. In the Precision
                    Farming Revolution, Yiieldy transforms agriculture into
                    a data-driven, sustainable success.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center -mx-4 lg:pl-8">
              <div>
                <img
                  className="object-cover w-full h-56 rounded shadow-lg sm:h-96 bg-none"
                  src={ProactiveAI}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div> */}

        {/* Features Section */}
        {/* <div className="features-sec" id="features-section">
          <div className="">
            <div className="flex flex-col gap-4">
              <h1 className="text-center font-bold text-4xl">
                Awesome Features
              </h1>
              <p className="text-center text-2xl font-semibold text-gray-700">
                Yiieldy: Empowering farmers with precision tech, health
                insights, and financial mastery.
              </p>
              <div className="flex justify-center items-center mb-20">
                <hr className="bg-green h-1 w-20 rounded-sm" />
              </div>
            </div>
            <div className="lg:flex justify-center">
              <div className="flex items-center gap-10" id="feat-grid">
                <div className="flex flex-col gap-20">
                  <div className="flex flex-col items-end gap-4 feat-div">
                    <div className="flex flex-col items-end gap-4 mb-10 feat-div">
                      <h1 className="text-4xl font-bold text-right">
                        Yield Intelligence
                      </h1>
                      <p className="text-end text-xl w-[350px]">
                        Farmers face inefficiencies, crop diseases, pests,
                        weather uncertainties, yield variations, and
                        sustainability issues. Yiieldy uses precision
                        technology that monitors weather, soil quality, and
                        animal health, together with advanced algorithms and
                        data analysis, to provide insights and statistics in
                        real-time to optimize farming practices for higher
                        yields and sustainable growth.
                      </p>
                    </div>
                    <div className="bg-green p-2" style={shapedBorderStyle}>
                      <img src={AiPriceActions} alt="" className="w-5 h-5" />
                    </div>
                    <h1 className="text-2xl">Yield Intelligence</h1>
                    <p className="text-end text-sm w-[250px]">
                      Farmers face inefficiencies, crop diseases, pests, weather
                      uncertainties, yield variations, and sustainability
                      issues. Yiieldy uses precision technology that
                      monitors weather, soil quality, and animal health,
                      together with advanced algorithms and data analysis, to
                      provide insights and statistics in real-time to optimize
                      farming practices for higher yields and sustainable
                      growth.
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-4 feat-div">
                    <div className="bg-green p-2" style={shapedBorderStyle}>
                      <img src={HealthInsights} alt="" className="w-5 h-5" />
                    </div>
                    <h1 className="text-2xl">Comprehensive Health Insights</h1>
                    <p className="text-end text-sm w-[250px]">
                      Yiieldy is the ultimate solution for farmers who need
                      to assess the conditions of soil, plants, and animals.
                      With cutting-edge sensors and AI, Yiieldy simplifies
                      this complex and time-consuming task. It provides farmers
                      with detailed reports and recommendations based on the
                      data it gathers.
                    </p>
                  </div>
                </div>
                <div className="AppImg flex justify-center">
                  <img src={SplashA} alt="" className="w-[300px]" />
                </div>
                <div className="flex flex-col gap-20">
                  <div className="flex flex-col items-start gap-4 feat-div">
                    <div className="flex flex-col items-start gap-4 mb-10 feat-div">
                      <h1 className="text-4xl font-bold text-right">
                        Task-Planning Efficiency
                      </h1>
                      <p className="text-start text-xl w-[350px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel Lorem
                        ipsum dolor sit amet, consectetur.
                      </p>
                    </div>
                    <div className="bg-green p-2" style={shapedBorderStyle}>
                      <img
                        src={FinancialManagement}
                        alt=""
                        className="w-5 h-5"
                      />
                    </div>
                    <h1 className="text-2xl">Financial Management</h1>
                    <p className="text-start text-sm w-[250px]">
                      A financial management tool in farming refers to software
                      or systems that assist farmers in budgeting, expense
                      tracking, income recording, and financial analysis to
                      optimize resource utilization and profitability. Through
                      sophisticated financial tracking tools that record farming
                      operation income and expenses, Yiieldy allows farmers
                      to confidently track their farm finances, manage them, and
                      plan for the future.
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-4 feat-div">
                    <div className="bg-green p-2" style={shapedBorderStyle}>
                      <img src={HerdsManagement} alt="" className="w-5 h-5" />
                    </div>
                    <h1 className="text-2xl">Herds Management</h1>
                    <p className="text-start text-sm w-[250px]">
                      Yiieldy's advanced RFID tagging and monitoring systems
                      provide livestock farmers with an efficient solution to
                      manage their herds, enabling them to confidently track the
                      well-being and activities of individual animals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* App Screenshot */}
        {/* <div>
          <div className="flex flex-col gap-4 items-center justify-center mb-20 AppScreenshots">
            <h1 className="text-4xl font-bold">App Screenshots</h1>
            <p className="text-xl text-gray-400">
              Ut totam hymenaeos a quasi enim, duis erat mollitia, pellentesque
              ac metus!
            </p>
            <div className="divider bg-green h-1 w-20 rounded-md"></div>
          </div>
          <CarouselScreenshot />
        </div> */}

        {/* Statistics */}
        {/* <div className="p-10 bg-white rounded mt-20">
          <Statistics />
        </div> */}

        {/* CTA Section */}
        {/* <div>
          <div className="flex flex-col justify-center items-center mt-20 gap-3">
            <h1 className="text-4xl font-bold text-center">Quick Overview</h1>
            <p className="text-xl text-center text-gray-500">
              Yiieldy pioneers precision farming for thriving agriculture
              with real-time insights
            </p>
            <div className="bg-green h-1 w-20 rounded-sm"></div>
          </div>
          <CtaSection />
        </div> */}

        {/* Testimonials */}
        <div className="lg:-mt-48 mb-32">
          <Testimonials />
        </div>

        {/* Pricing */}
        {/* <div id="pricing-section">
          <div className="mb-10 flex flex-col gap-3">
            <h1 className="text-4xl font-bold text-center">
              Yiieldy options
            </h1>
            <div className="lg:px-48 sm:px-0 md:px-10">
              <p className="text-center text-xl">
                Transform your farm management with our comprehensive service
                that empowers you to make data-driven decisions and run your
                farm with utmost efficiency.
              </p>
            </div>
          </div>
          <Pricing />
        </div> */}

        {/* Download Section */}
        <div className="lg:mt-20">
          <Download />
        </div>

        {/* Blog */}
        {/* <div>
          <BlogSection />
        </div> */}

        {/* Partners */}
        {/* <div>
          <Partners />
        </div> */}
      </main>
    </>
  );
}
