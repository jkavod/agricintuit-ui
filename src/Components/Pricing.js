import React, { useState } from "react";
import '../UI/Style.css'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <>
      <div>
        {/* Pricing toggle */}
        <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
          <div className="relative flex w-full p-1 bg-white dark:bg-gray-100 rounded-full">
            <span
              className="absolute inset-0 m-1 pointer-events-none"
              aria-hidden="true"
            >
              <span
                className={`absolute inset-0 w-1/2 bg-green rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${
                  isAnnual ? "translate-x-0" : "translate-x-full"
                }`}
              ></span>
            </span>
            <button
              className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
                isAnnual ? "text-white" : "text-black dark:text-black"
              }`}
              onClick={() => setIsAnnual(true)}
              aria-pressed={isAnnual}
            >
              Monthly
              
            </button>
            <button
              className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
                isAnnual ? "text-black dark:text-black" : "text-white"
              }`}
              onClick={() => setIsAnnual(false)}
              aria-pressed={!isAnnual}
            >
              Yearly{" "}
              <span
                className={
                  isAnnual ? "text-black" : "text-white dark:text-white"
                }
              >
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="max-w-sm mx-auto grid gap-6 md:max-w-full lg:grid-cols-4 items-start lg:max-w-full md:grid-cols-2">
          {/* Basic */}
          <div class="dark h-full">
            <div class="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-gray-100 border border-slate-200 dark:border-gray-100 shadow-lg shadow-slate-950/5">
              <div class="mb-5">
                <div class="text-black dark:black font-semibold mb-1">
                  <h1 className="text-2xl">Basic</h1>
                  <p className="text-sm font-normal">
                    Either Livestock farmer or Crop Growers
                  </p>
                </div>
                <div className="inline-flex items-baseline mb-2">
                  <span className="text-black dark:black font-bold text-3xl">
                    $
                  </span>
                  <span className="text-black dark:black font-bold text-4xl">
                    {isAnnual ? "20" : "200"}
                  </span>
                  <span className="text-black font-medium">/mo</span>
                </div>

                {/* <div class="text-sm text-black mb-5">
                Either Livestock farmer or Crop Growers
                </div> */}
                <a
                  class="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-green px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-greenShade focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                  href="#0"
                >
                  Purchase Plan
                </a>
              </div>
              <div class="text-black dark:black font-medium mb-3">
                Includes:
              </div>
              <ul class="text-black dark:text-black text-sm space-y-3 grow">
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>
                    Specifically for growers with less than 3 acres of land or
                    livestock farmers with fewer than 21 animals who operate on
                    a small scale
                  </span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>
                    One comprehensive platform to plan, track, and manage your
                    agriculture or livestock business efficiently.
                  </span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Inventory tracking and management.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Limited support</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Sensors and animal tags are not included.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>
                    Online and offline farm record keeping that is secure
                  </span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>99.9% platform availability</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Standard */}
          <div class="dark h-full">
            <div class="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-gray-100 border border-slate-200 dark:border-gray-100 shadow-lg shadow-slate-950/5">
              <div class="absolute top-0 right-0 mr-6 -mt-4">
                <div class="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-yellow text-white rounded-full shadow-sm shadow-slate-950/5">
                  Popular
                </div>
              </div>
              <div class="mb-5">
                <div class="text-black dark:black font-semibold mb-1">
                  <h1 className="text-2xl">Standard</h1>
                  <p className="text-sm font-normal">Growers</p>
                </div>
                <div className="inline-flex items-baseline mb-2">
                  <span className="text-black dark:black font-bold text-3xl">
                    $
                  </span>
                  <span className="text-black dark:black font-bold text-4xl">
                    {isAnnual ? "79" : "900"}
                  </span>
                  <span className="text-black font-medium">/mo</span>
                </div>

                {/* <div class="text-sm text-black mb-5">Growers</div> */}
                <a
                  class="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-green px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-greenShade focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                  href="#0"
                >
                  Purchase Plan
                </a>
              </div>
              <div class="text-black dark:black font-medium mb-3">
                Includes:
              </div>
              <ul class="text-black dark:text-black text-sm space-y-3 grow">
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>A complete farm platform for crop growers of any kind.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Crop planning, planting, harvesting, health and management.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Soil nutrition, health, and treatment.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Geographical mapping.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Inventory tracking and management.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Tasks, timelines and reminders.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Payroll and contact information.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Farm accounting and financial management.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Inventory, maintenance, and service records for equipment or farm assets.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Dedicated support.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Sensors and animal tags are not included.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Inventory tracking and management.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Online and offline farm record keeping that is secure.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>99.9% platform availability.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Standard */}
          <div class="h-full">
            <div class="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-gray-100 border border-slate-200 dark:border-gray-100 shadow-lg shadow-slate-950/5">
              <div class="mb-5">
                <div class="absolute top-0 right-0 mr-6 -mt-4">
                  <div class="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-yellow text-white rounded-full shadow-sm shadow-slate-950/5">
                    Popular
                  </div>
                </div>
                <div class="text-black dark:black font-semibold mb-1">
                  <h1 className="text-2xl">Standard</h1>
                  <p className="text-sm font-normal">Livestock</p>
                </div>
                <div className="inline-flex items-baseline mb-2">
                  <span className="text-black dark:black font-bold text-3xl">
                    $
                  </span>
                  <span className="text-black dark:black font-bold text-4xl">
                    {isAnnual ? "79" : "900"}
                  </span>
                  <span className="text-black font-medium">/mo</span>
                </div>

                {/* <div class="text-sm text-black mb-5">
                  There are many variations available, but the majority have
                  suffered.
                </div> */}
                <a
                  class="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-green px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-greenShade focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                  href="#0"
                >
                  Purchase Plan
                </a>
              </div>
              <div class="text-black dark:black font-medium mb-3">
                Includes:
              </div>
              <ul class="text-black dark:text-black text-sm space-y-3 grow">
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>A complete farm platform for management of livestock and herds.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Animal health and treatment.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Remote monitoring.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Geographical mapping.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Inventory tracking and management.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Tasks, timelines and reminders.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Payroll and contact information.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Farm accounting and financial management.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Inventory, maintenance, and service records for equipment or farm assets.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Dedicated support.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Sensors and animal tags are not included.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Online and offline farm record keeping that is secure.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>99.9% platform availability.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Premium */}
          <div class="h-full">
            <div class="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-gray-100 border border-slate-200 dark:border-gray-100 shadow-lg shadow-slate-950/5">
              <div class="mb-5">
              <div class="text-black dark:black font-semibold mb-1">
                  <h1 className="text-2xl">Premium</h1>
                  <p className="text-sm font-normal">Growers and Livestock Farmers</p>
                </div>
                <div className="inline-flex items-baseline mb-2">
                  <span className="text-black dark:black font-bold text-3xl">
                    $
                  </span>
                  <span className="text-black dark:black font-bold text-4xl">
                    {isAnnual ? "129" : "1,348"}
                  </span>
                  <span className="text-black font-medium">/mo</span>
                </div>

                {/* <div class="text-sm text-black mb-5">
                  There are many variations available, but the majority have
                  suffered.
                </div> */}
                <a
                  class="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-green px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-greenShade focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                  href="#0"
                >
                  Purchase Plan
                </a>
              </div>
              <div class="text-black dark:black font-medium mb-3">
                Includes:
              </div>
              <ul class="text-black dark:text-black text-sm space-y-3 grow">
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Management of livestock and herds using a complete farm management platform.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>A comprehensive farm platform for crop growers of all types.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Manage multiple crops and animals on a single farm or across multiple farms.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Crop planning, planting, harvesting, health and management.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Soil nutrition, health, and treatment.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Animal health and treatment.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Remote monitoring.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Geographical mapping.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Inventory tracking and management.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Tasks, timelines and reminders.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Payroll and contact information.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Farm accounting and financial management.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Inventory, maintenance, and service records for equipment or farm assets.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Dedicated support.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Sensors and animal tags are not included.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Online and offline farm record keeping that is secure.</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns=""
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>99.9% platform availability.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
