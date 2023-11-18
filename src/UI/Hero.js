import React from "react";
import { AI, Agriculture, Sustainability } from "../Assets";
import "./Style.css";

const shapedBorderStyle = {
  borderRadius: "50%",
  animation: "floatAnimation 2s infinite",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
};

export default function Hero() {
  return (
    <>
      <main className="px-3 w-auto lg:h-[500px]" id="product-section" >
        <section>
          <div className="card-holder lg:flex gap-5 sm:grid-rows-3 sm:grid-cols-1 justify-center" id="card-holder">
            <div className="flex flex-col gap-3 p-10 justify-center items-center bg-gray-50 h-[350px] w-[350px] hover:-translate-y-5 hover:p-14 hover:bg-gray-300 transition-[10s] hover:shadow-lg shadow Hero">
              <div className="bg-gray-300 p-5" style={shapedBorderStyle}>
                <img src={Agriculture} alt="" className="w-10" />
              </div>
              <h1 className="text-2xl text-gray-900">Agriculture</h1>
              <p className="text-sm text-gray-500 text-center">
                Revolutionizing agriculture with comprehensive and impactful
                agri-solutions for Sustainable and Data-Driven farming practices
              </p>
            </div>
            <div className="flex flex-col gap-3 p-10 justify-center items-center bg-gray-50 h-[350px] w-[350px] hover:-translate-y-5 hover:p-14 hover:bg-gray-300 transition hover:shadow-lg shadow Hero">
              <div className="bg-gray-300 p-5" style={shapedBorderStyle}>
                <img src={AI} alt="" className="w-10" />
              </div>
              <h1 className="text-2xl text-gray-900">AI</h1>
              <p className="text-sm text-gray-500 text-center">
                With our AI-powered products, farmers can enjoy end-to-end
                support that completely transforms their agricultural processes.
                Our innovative solutions are designed to solve unique
                challenges, giving farmers the confidence they need to succeed.
              </p>
            </div>
            <div className="flex flex-col gap-3 p-10 justify-center items-center bg-gray-50 h-[350px] w-[350px] hover:-translate-y-5 hover:p-14 hover:bg-gray-300 transition hover:shadow-lg shadow Hero">
              <div className="bg-gray-300 p-5" style={shapedBorderStyle}>
                <img src={Sustainability} alt="" className="w-10" />
              </div>
              <h1 className="text-2xl text-gray-900">Sustainability</h1>
              <p className="text-sm text-gray-500 text-center">
                Our innovative solutions are tailored to farmers' specific
                challenges, providing end-to-end support that transforms their
                agricultural practices.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
