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

      {/* FAQS HERO SECTION */}
      <div className="relative bg-gray-100 overflow-y-hidden">
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
              Resolving Common Problems: Troubleshooting common issues our users
              might encounter while using our products or services.
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
      <div className="h-full max-w-7xl px-2 py-3 mx-auto mt-32 tracking-wide md:px-4 md:mt-20">
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
                  What is Yiieldy, and how does it work?
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
                 Yiieldy is a comprehensive AgTech platform with various products and apps that help farmers grow and manage their farm businesses
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
                  Do I have to create an account to use Yiieldy app features?
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
                Yes. You only need to create one login account to access all Yiieldy apps.
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
                  Could you please provide me with the pricing information for the Yiieldy app?
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
                The cost of subscribing to a Yiieldy app varies depending on the specific app you are interested in. You can sign up for free and enjoy a five-day trial period without needing payment during the sign-up process. Once your trial expires, you can opt for a pricing plan that suits your needs.
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
                  What payment methods do you accept?
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
                We accept debit or credit card payments.
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
                  Experiencing problems paying?
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
                Please consider trying an alternative payment method or contacting our support team for assistance.
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
                  What currencies can I use?
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
                Now, we are currently receiving only Nigerian Naira. If there are any currencies you are looking for that aren't presently available, please get in touch with our support team.
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
                  Can I cancel anytime?
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
                Yes, You can cancel your subscription at any time, either by accessing the app's billing page or by contacting us.
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
                  I'm having trouble logging into my account; what should I do?
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
                Please try resetting your password initially. If this still doesn't work, please contact our support team with your account details, and we'll try to help!
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
                  How do I reset my password?
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
                We'll need to reset your password if you can't remember it.
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
                  Can you confirm if my data is secure?
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
                Yes. We prioritize your data security and privacy. Your data is always safe; we never sell or share it with anyone. We use encrypted data transmission (SSL) and perform regular backups to ensure its safety. You can rest assured that your data remains exclusively yours.
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
                  Can you please suggest other ways to demonstrate our data's safety?
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
                  <ol className="list-decimal px-5 text-justify flex flex-col gap-2">
                    <li>Yiieldy, our secure platform, is hosted on Microsoft Azure, a leading cloud hosting provider.  Please note that you can view the security and compliance standards that Azure meets by clicking on the following link: <a className="text-green" href="https://azure.microsoft.com/en-us/explore/trusted-cloud/">https://azure.microsoft.com/en-us/explore/trusted-cloud/</a></li>
                    <li>All data is encrypted in transit using SSL/HTTPS encryption. Additionally, all passwords are one-way hashed using strong cryptography.</li>
                    <li> We follow secure coding standards (OWASP) and limit access to customer accounts to authorized personnel for customer support.</li>
                    <li>We minimize the collection of Personally Identifiable Information (PII) from our clients to what is necessary and never sell or share any of  your data with anyone.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ - Twelve */}
          <div className="space-y-3">
            <div
              className="relative transition-all duration-700 border rounded-xl hover:shadow-2xl"
              onClick={() => handleClick(12)}
            >
              <div className="w-full p-4 text-left cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="tracking-wide">
                  How can I remove my personal information from your database?
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
                  maxHeight: handleToggle(12) === "max-h-0" ? "0" : "100vh",
                }}
              >
                <div className="px-6 pb-4 text-gray-600">
                If you want all information about yourself removed from our database, please contact our support team with your email address. 
                </div>
              </div>
            </div>
          </div>

          {/* FAQ - Thirteen */}
          <div className="space-y-3">
            <div
              className="relative transition-all duration-700 border rounded-xl hover:shadow-2xl"
              onClick={() => handleClick(13)}
            >
              <div className="w-full p-4 text-left cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="tracking-wide">
                  Is it possible for my employees to enter data into the Yiieldy application?
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
                  maxHeight: handleToggle(13) === "max-h-0" ? "0" : "100vh",
                }}
              >
                <div className="px-6 pb-4 text-gray-600">
                It is possible by creating additional users in the app.
                </div>
              </div>
            </div>
          </div>

          {/* FAQ - Forteen */}
          <div className="space-y-3">
            <div
              className="relative transition-all duration-700 border rounded-xl hover:shadow-2xl"
              onClick={() => handleClick(14)}
            >
              <div className="w-full p-4 text-left cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="tracking-wide">
                  Could you please clarify the size or type of farmers that Yiieldy supports?
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
                  maxHeight: handleToggle(14) === "max-h-0" ? "0" : "100vh",
                }}
              >
                <div className="px-6 pb-4 text-gray-600">
                Our Yiieldy products are designed to be highly flexible, enabling us to assist a wide range of agricultural businesses. Yiieldy caters to all types of farms.
                </div>
              </div>
            </div>
          </div>

          {/* FAQ - Fifteen */}
          <div className="space-y-3">
            <div
              className="relative transition-all duration-700 border rounded-xl hover:shadow-2xl"
              onClick={() => handleClick(15)}
            >
              <div className="w-full p-4 text-left cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="tracking-wide">
                  How can I receive assistance with my account or obtain responses to my inquiries?
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
                  maxHeight: handleToggle(15) === "max-h-0" ? "0" : "100vh",
                }}
              >
                <div className="px-6 pb-4 text-gray-600">
                You can reach out to us anytime for assistance. You can also browse our online help resources or register for one of our online trainings.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Question Section */}
      <div className="overflow-hidden z-50" id="contact">
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
                  <form onSubmit={handleSubmit}>
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
                          onChange={handleChange}
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
                          onChange={handleChange}
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
                          onChange={handleChange}
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
                          onChange={handleChange}
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
                          onChange={handleChange}
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
