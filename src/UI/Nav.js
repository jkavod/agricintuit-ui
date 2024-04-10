import { useState, useEffect } from "react";
import { Logo } from "../Assets";
import "./Style.css";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      setHasScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-${
        hasScrolled ? "white" : "transparent"
      } fixed top-0 w-full z-50`}
    >
      <div className="px-3 py-5 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 sm:px-14">
        <div className="relative flex items-center justify-between">
          <a
            href="/"
            aria-label="Yiieldy"
            title="Yiieldy"
            className="inline-flex items-center"
          >
            <img
              src={Logo}
              alt="Logo"
              className="w-32 text-teal-accent-400 lg:block hidden"
            />
          </a>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li className="relative">
              <div
                className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400 cursor-pointer relative"
                onMouseEnter={() => setIsProductDropdownOpen(true)}
                onMouseLeave={() => setIsProductDropdownOpen(false)}
              >
                Product
                {isProductDropdownOpen && (
                  <div className="absolute top-full left-0 bg-white border rounded-md shadow-md w-44 h-10">
                    <Link
                      to={"/fiidzapp"}
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 transition-colors duration-200 underln"
                    >
                      Fiidz App
                    </Link>
                  </div>
                )}
              </div>
            </li>
            <li className="relative">
              <div
                className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400 cursor-pointer relative"
                onMouseEnter={() => setIsResourcesDropdownOpen(true)}
                onMouseLeave={() => setIsResourcesDropdownOpen(false)}
              >
                Resources
                {isResourcesDropdownOpen && (
                  <div className="absolute top-full left-0 bg-white border rounded-md shadow-md w-44 h-10">
                    <a
                      href="https://help.yiieldy.com/"
                      target="_blank"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 transition-colors duration-200 underln"
                    >
                      Help & Support
                    </a>
                  </div>
                )}
              </div>
            </li>

            <li className="underln">
              <Link
                to={"/contact"}
                aria-label="Contact"
                title="Contact"
                className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
              >
                Contact
              </Link>
            </li>
            
            <li className="underln">
              <Link
                to={"/career"}
                aria-label="career"
                title="career"
                className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
              >
                Career
              </Link>
            </li>
            
            {/* <li className="underln">
              <a
                href="/#support-section"
                aria-label="Support"
                title="Support"
                className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
              >
                Support
              </a>
            </li> */}
          </ul>
          {/* <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-green transition duration-200 rounded shadow-md bg-white hover:bg-green hover:text-white border-2 focus:shadow-outline focus:outline-none"
                aria-label="Log in"
                title="Log in"
              >
                Log in
              </a>
            </li>
            <li>
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green hover:bg-green hover:bg-greenShade focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Sign up
              </a>
            </li>
          </ul> */}
          <div className="lg:hidden w-full">
            <div className="flex justify-between items-center">
              <img
                src={Logo}
                alt="Logo"
                className="w-20 text-teal-accent-400"
              />
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
            </div>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img
                          src={Logo}
                          alt="Logo"
                          className="w-20 text-teal-accent-400"
                        />
                        {/* <svg
                          className="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg> */}
                        {/* <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Company
                        </span> */}
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li className="relative">
                        <div
                          className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400 cursor-pointer relative"
                          onMouseEnter={() => setIsProductDropdownOpen(true)}
                          onMouseLeave={() => setIsProductDropdownOpen(false)}
                        >
                          Product
                          {isProductDropdownOpen && (
                            <div className="absolute top-full left-0 bg-white border rounded-md shadow-md w-44 h-10 z-50">
                              <Link
                                to={"/fiidzapp"}
                                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 transition-colors duration-200 underln"
                              >
                                Fiidz App
                              </Link>
                            </div>
                          )}
                        </div>
                      </li>
                      <li className="relative">
                        <div
                          className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400 cursor-pointer relative"
                          onMouseEnter={() => setIsResourcesDropdownOpen(true)}
                          onMouseLeave={() => setIsResourcesDropdownOpen(false)}
                        >
                          Resources
                          {isResourcesDropdownOpen && (
                            <div className="absolute top-full left-0 bg-white border rounded-md shadow-md w-44 h-10 z-50">
                              <Link
                                to={"/kaji"}
                                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 transition-colors duration-200 underln"
                              >
                                Help & Support
                              </Link>
                            </div>
                          )}
                        </div>
                      </li>
                      <li>
                        <Link
                          to={"/contact"}
                          aria-label="Contact"
                          title="Contact"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/career"}
                          aria-label="career"
                          title="career"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Career
                        </Link>
                      </li>
                      {/* <li>
                        <a
                          href="/#support-section"
                          aria-label="Pricing"
                          title="Pricing"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Support
                        </a>
                      </li> */}
                      {/* <li>
                        <a
                          href="/"
                          className="inline-flex items-center justify-start w-full h-12 font-medium tracking-wide text-gray-700 transition duration-200 rounded focus:outline-none"
                          aria-label="Log in"
                          title="Log in"
                        >
                          Log in
                        </a>
                        <a
                          href="/"
                          className="inline-flex items-center justify-start w-full h-12 font-medium tracking-wide text-gray-700 transition duration-200 rounded focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </a>
                      </li> */}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
