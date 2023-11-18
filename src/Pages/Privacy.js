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

export default function Privacy() {
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

      {/* PRIVACY HERO SECTION */}
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
              Privacy Policy
            </h2>
            <p className="mb-6 text-base font-normal tracking-wide text-green md:text-lg">
              This focuses on detailing clear and concise instructions for users
              to opt out of specific data collection, marketing communications,
              or any other activities outlined in the privacy policy.
            </p>
            <a
              href="#privacy"
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

      {/* PRIVACY POLICY SECTION */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" id="privacy">
        <div className="max-w-screen-lg sm:mx-auto">
          <div className="flex flex-col items-start py-4 transform rounded sm:px-4 lg:flex-row">
            <div className="mb-4 lg:mb-0">
              <h1 className="mb-4 lg:text-4xl font-bold leading-none sm:text-2xl text-center">
                Welcome To AgricIntuit Privacy Policys
              </h1>
              <div className="relative">
                <p className="text-base text-gray-700 md:text-lg text-center">
                  Welcome to our Privacy Policy. This document explains how we
                  collect, use, disclose, and protect your personal information
                  when you use our services. We are committed to respecting your
                  privacy and ensuring the confidentiality and security of your
                  personal information.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transform rounded sm:px-4 lg:flex-row">
            <div className="mb-4 lg:mb-0">
              <h2 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                Information We Collect:
              </h2>
              <div className="relative">
                <p>
                  We may collect various types of information, including but not
                  limited to:
                </p>
                <ul className="list-disc px-5" id="priv-ul">
                  <li>
                    Personal Information: Name, contact information, email
                    address, etc.
                  </li>
                  <li>
                    Usage Information: Data about your interaction with our
                    services, including log data and analytics.
                  </li>
                  <li>
                    Cookies and Tracking: Information obtained through cookies
                    and similar technologies.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transform rounded sm:px-4 lg:flex-row">
            <div className="mb-4 lg:mb-0">
              <h2 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                Information We Collect:
              </h2>
              <div className="relative">
                <p>
                  We may collect various types of information, including but not
                  limited to:
                </p>
                <ul className="list-disc px-5" id="priv-ul">
                  <li>
                    Personal Information: Name, contact information, email
                    address, etc.
                  </li>
                  <li>
                    Usage Information: Data about your interaction with our
                    services, including log data and analytics.
                  </li>
                  <li>
                    Cookies and Tracking: Information obtained through cookies
                    and similar technologies.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transform rounded sm:px-4 lg:flex-row">
            <div className="mb-4 lg:mb-0">
              <h2 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                How We Use Your Information:
              </h2>
              <div className="relative">
                <p>
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc px-5" id="priv-ul">
                  <li>Provide and maintain our services.</li>
                  <li>Personalize and enhance your experience.</li>
                  <li>Communicate with you and respond to inquiries.</li>
                  <li>Monitor and analyze usage patterns and trends.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transform rounded sm:px-4 lg:flex-row">
            <div className="mb-4 lg:mb-0">
              <h2 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                Data Sharing and Disclosure:
              </h2>
              <div className="relative">
                <p>
                  We may share your information with third parties in the
                  following circumstances:
                </p>
                <ul className="list-disc px-5" id="priv-ul">
                  <li>With your consent.</li>
                  <li>To comply with legal obligations.</li>
                  <li>For legitimate business purposes.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transform rounded sm:px-4 lg:flex-row">
            <div className="mb-4 lg:mb-0">
              <h2 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                Data Security:
              </h2>
              <p>
                We implement appropriate security measures to protect your
                personal information from unauthorized access, alteration,
                disclosure, or destruction.:
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transform rounded sm:px-4 lg:flex-row">
            <div className="mb-4 lg:mb-0">
              <h2 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                Your Rights and Choices:
              </h2>
              <div className="relative">
                <p>You have the right to:</p>
                <ul className="list-disc px-5" id="priv-ul">
                  <li>Access and correct your personal information.</li>
                  <li>Opt-out of receiving communications from us.</li>
                  <li>Request the deletion of your personal information.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transform rounded sm:px-4 lg:flex-row">
            <div className="mb-4 lg:mb-0">
              <h2 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
              Third-Party Links:
              </h2>
              <p>
              Our services may contain links to third-party websites. We are not responsible for the content or privacy practices of these websites.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transform rounded sm:px-4 lg:flex-row">
            <div className="mb-4 lg:mb-0">
              <h2 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
              Changes to this Privacy Policy:
              </h2>
              <p>
              We may update this Privacy Policy periodically. Any changes will be posted on this page, and the effective date will be updated accordingly.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transform rounded sm:px-4 lg:flex-row">
            <div className="mb-4 lg:mb-0">
              <h2 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                Contact Us:
              </h2>
              <div className="relative">
                <p>
                If you have any questions or concerns about this Privacy Policy, please contact us at:
                </p>
                <ul className="list-disc px-5" id="priv-ul">
                  <li>
                   Tel: +(234)8055316857
                  </li>
                  <li>
                  E-mail: contactus@logicgraph.net
                  </li>
                </ul>
                <p>By using our services, you consent to the terms outlined in this Privacy Policy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
