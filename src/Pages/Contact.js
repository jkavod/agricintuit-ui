import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Logo } from "../Assets";
import { Footer, Nav } from "../UI";
import "../UI/Style.css";

const navigation = [
  { name: "Product", href: "#product-section" },
  { name: "Features", href: "#features-section" },
  { name: "Pricing", href: "#pricing-section" },
  { name: "Support", href: "#footer-section" },
];

export default function Contact() {
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

      {/* CONTACT HERO SECTION */}
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
              Contact Us
            </h2>
            <p className="mb-6 text-base font-normal tracking-wide text-green md:text-lg">
              Outlined here are the various communication channels available for
              users to reach out, such as email, phone, live chat, or a contact
              form
            </p>
            <a
              href="#contact"
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

      {/* Contact Section */}
      <div className="overflow-hidden bg-white" id="contact">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            {/* Contact Form */}
            <div className="w-full max-w-2xl xl:px-8 xl:w-[100%]">
              <div className="relative">
                <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10" id="text">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Drop us a message for any query
                  </h3>
                  <p className="mb-4 text-xl font-normal sm:text-center sm:mb-6 sm:text-xl">
                    Feel free to reach out with any questions or concerns by
                    sending us a message. We're here to assist you!
                  </p>
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
                    <div className="relative w-full max-w-2xl">
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

            {/* Conatct Buttons */}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-2 sm:grid-cols-2">
                <div className="duration-300 transform bg-white border-l-4 border-green hover:-translate-y-2">
                  <div className="h-full p-5 border border-l-0 rounded-r shadow-sm flex justify-center items-center flex-col">
                    <h6 className="mb-2 font-semibold leading-5">Email Us:</h6>
                    <p className="text-sm text-gray-900 text-center">
                      <a
                        href="mailto:contactus@logicgraph.io"
                        className="transition-colors duration-300 text-gray-800 hover:text-gray-500 hover:text-teal-accent-400 text-xl"
                      >
                        <span className="text-gray-800 font-bold text-xl">
                          <span className="text-xl font-normal text-gray-700">
                            contactus@logicgraph.io
                          </span>
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="duration-300 transform bg-white border-l-4 border-green hover:-translate-y-2">
                  <div className="h-full p-5 border border-l-0 rounded-r shadow-sm flex justify-center items-center flex-col">
                    <h6 className="mb-2 font-semibold leading-5">Address</h6>
                    <p className="text-sm text-gray-900 text-center">
                      <a
                        href="#"
                        className="transition-colors duration-300 text-gray-800 hover:text-gray-500 hover:text-teal-accent-400 text-xl"
                      >
                        <span className="text-gray-800 font-bold text-xl">
                          <span className="text-xl font-normal text-gray-700 text-justify">
                            The Waterside, 5 Admiralty Road Off, Admiralty Way,
                            Lekki Phase 1, Lagos, Nigeria.
                          </span>
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="duration-300 transform bg-white border-l-4 border-green hover:-translate-y-2">
                  <div className="h-full p-5 border border-l-0 rounded-r shadow-sm flex justify-center items-center flex-col">
                    <h6 className="mb-2 font-semibold leading-5">Call Us</h6>
                    <p className="text-sm text-gray-900 text-center">
                      <a
                        href="tel:+(234)8055316857"
                        className="transition-colors duration-300 text-gray-800 hover:text-gray-500 hover:text-teal-accent-400 text-xl"
                      >
                        <span className="text-gray-800 font-bold text-xl">
                          <span className="text-xl font-normal text-gray-700">
                            +(234)8055316857
                          </span>
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Map */}
      <div className="relative h-[100vh] w-full lg:mt-20">
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
      </div>
      <Footer />
    </div>
  );
}
