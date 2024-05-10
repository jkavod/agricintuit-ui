import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { AfricanFarmers, Logo } from "../Assets";
import { Footer, Nav } from "../UI";
import { StaticButton } from "../Constants";
import "../UI/Style.css";

const navigation = [
  { name: "Product", href: "#product-section" },
  { name: "Features", href: "#features-section" },
  { name: "Pricing", href: "#pricing-section" },
  { name: "Support", href: "#footer-section" },
];

export default function Services() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, subject, message } = formData;
    const destinationEmail = "contactus@yiieldy.com";
    const mailtoLink = `mailto:${destinationEmail}?subject=${encodeURIComponent(
      subject
    )}&body=Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ASubject: ${subject}%0AMessage: ${message}`;

    // Open the user's email client with the pre-populated data
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <Nav />
        {/* <Dialog
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
        </Dialog> */}
      </header>

      {/* SERVICES HERO SECTION */}
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
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-7xl md:px-24 lg:px-8 lg:py-72">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-green sm:text-4xl sm:leading-none">
              Services
            </h2>
            <p className="mb-6 text-base font-normal tracking-wide text-green md:text-lg">
              Below are the Service Options offered by Yiieldy
            </p>
            <a
              href="#services"
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

      {/* Services Body Section */}
      <div className="overflow-hidden bg-white" id="services">
        <div className="px-4 py-16 mx-auto max-w-xl md:max-w-full lg:max-w-screen-7xl lg:px-8 lg:py-20 w-full flex justify-center items-center">
          {/* Free Training */}
          <div className="px-4 py-16 max-w-xl md:max-w-7xl lg:max-w-screen-full lg:py-20">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3">
               {/* Free Training */}
                <div className="rounded lg:p-5 lg:transition lg:duration-300 bg-indigo-50 p-3">
                  <div className="flex items-center mb-1 text-xl">
                    <span className="flex items-center justify-center w-4 h-4 mr-2 font-medium text-black rounded">
                      1.
                    </span>
                    <p className="font-bold">
                      Training: Free and customized training programs
                    </p>
                  </div>
                  <ul className="text-sm text-gray-900 list-disc px-10 gap-2 flex flex-col mt-2">
                    <li className="text-lg text-justify">
                      <span className="text-lg font-semibold">
                        Free training:
                      </span>{" "}
                      it should be in the form of short courses that poultry
                      farmers globally can access. This is more of a learning
                      Academy for poultry farmers. We could have courses like
                      farm management practices, feed utilization, disease
                      prevention, and AI technology utilization
                    </li>
                    <li className="text-lg text-justify">
                      <span className="text-lg font-semibold">
                        Customized Training:
                      </span>{" "}
                      This training can be delivered through workshops,
                      webinars, and on-site training sessions. The client, or
                      governmental organization can contact or opt for a
                      customized training session. Training for farmers Training
                      for extension workers, etc
                    </li>
                  </ul>
                </div>

                {/* Consultancy */}
                <div className="rounded lg:p-5 lg:transition lg:duration-300 bg-teal-50 p-3">
                  <div className="flex items-center mb-1 text-xl">
                    <span className="flex items-center justify-center w-4 h-4 mr-2 font-medium text-black rounded">
                      2.
                    </span>
                    <p className="font-bold">
                      Consultancy service: Paid consultancy services for poultry
                      farmers
                    </p>
                  </div>
                  <ul className="text-sm text-gray-900 list-disc px-10 gap-2 flex flex-col mt-2">
                    <li className="text-lg text-justify">
                      <span className="text-lg font-semibold">
                        Nutritional consultancy:
                      </span>{" "}
                      We can offer nutritional consultancy services to poultry
                      farmers, and optimize their feed formulation based on the
                      specific needs of their birds. E.g. Formulating custom
                      feed recipes, analyzing feed quality & providing
                      recommendations for improving feed efficiency.
                    </li>
                    <li className="text-lg text-justify">
                      <span className="text-lg font-semibold">
                        Disease prevention consultancy:
                      </span>{" "}
                      We can partner with veterinary firms or individual
                      consultants as a go-to partner to offer this service in
                      the areas of disease prevention, vaccination protocols,
                      early detection of health issues, etc
                    </li>
                    <li className="text-lg text-justify">
                      <span className="text-lg font-semibold">
                        Sustainability & Environment Management:
                      </span>{" "}
                      We can offer consultancy services on sustainable farming
                      practices, waste management, etc.
                    </li>
                  </ul>
                </div>

              </div>
                {/* Daily Analysis and Insights */}
                <div className="rounded lg:p-5 lg:transition lg:duration-300 bg-lime-100 p-3">
                  <div className="flex items-center mb-1 text-xl">
                    <span className="flex items-center justify-center w-4 h-4 mr-2 font-medium text-black rounded">
                      3.
                    </span>
                    <p className="font-bold">Data analysis and insights:</p>
                  </div>
                  <p className="text-lg text-justify">
                    We can leverage the data and insights collected from Yiieldy
                    fiidz app and other sources to provide farmers with valuable
                    insights on their farm performance, feed consumption
                    patterns, health trends, and productivity metrics.
                  </p>
                </div>
              <div className="relative md:col-span-2 lg:col-span-2 lg:py-60 py-0">
                <img
                  className="inset-0 object-cover object-bottom w-full h-full rounded shadow-lg lg:absolute lg:h-full"
                  src={AfricanFarmers}
                  alt="Farmers"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Map */}
      {/* <div className="relative h-[100vh] w-full lg:mt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.568961358926!2d3.4695703!3d6.4493440999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5906feb1da5%3A0x865cd308ad80ee19!2sRegus%20-%20Lagos%2C%20Lekki%20Admiralty!5e0!3m2!1sen!2suk!4v1696207079923!5m2!1sen!2suk"
          width="600"
          height="450"
          className="absolute inset-0 w-full h-full"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </div> */}
      <Footer />
      <StaticButton />
    </div>
  );
}
