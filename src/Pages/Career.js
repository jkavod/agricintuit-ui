import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Logo } from "../Assets";
import { Footer, Nav } from "../UI";
import { StaticButton } from "../Constants";
import "../UI/Style.css";

const navigation = [
  { name: "Product", href: "#product-section" },
  { name: "Features", href: "#features-section" },
  { name: "Pricing", href: "#pricing-section" },
  { name: "Support", href: "#footer-section" },
];

export default function Career() {
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
                {/* <div className="py-6">
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
                </div> */}
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
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-7xl md:px-24 lg:px-8 lg:py-72">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-green sm:text-4xl sm:leading-none">
              Career
            </h2>
            <p className="mb-6 text-base font-normal tracking-wide text-green md:text-lg">
              Positions at Yiieldy
            </p>
            <a
              href="#career"
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

      {/* Job */}
      <section className="px-20" id="career">
        <div className="flex flex-col gap-4 py-20">
          <h1 className="text-[30px] font-bold">
            Business Development Executive
          </h1>
          <p className="text-md text-justify">
            We are looking for an ambitious and energetic Business Development
            Manager to help us expand our clientele. You will be the front of
            the company and will have the dedication to create and apply an
            effective sales strategy.
          </p>
          <p className="text-md text-justify">
            The goal is to drive sustainable financial growth through boosting
            sales and forging strong relationships with clients.
          </p>

          <div className="flex flex-col gap-3">
            <h1 className="text-[25px] font-bold">Responsibilities</h1>
            <ul className="list-disc flex flex-col gap-2 ml-6">
              <li className="text-md">
                Develop a growth strategy focused both on financial gain and
                customer satisfaction
              </li>
              <li className="text-md">
                Conduct research to identify new markets and customer needs
              </li>
              <li className="text-md">
                Arrange business meetings with prospective clients
              </li>
              <li className="text-md">
                Promote the company’s products/services addressing or predicting
                clients’ objectives.
              </li>
              <li className="text-md">
                Keep records of sales, revenue, invoices etc.
              </li>
              <li className="text-md">
                Provide trustworthy feedback and after-sales support
              </li>
              <li className="text-md">
                Build long-term relationships with new and existing customers.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-[25px] font-bold">Requirements and skills</h1>
            <ul className="list-disc flex flex-col gap-2 ml-6">
              <li className="text-md">
                Proven working experience as a business development manager,
                sales executive or a relevant role
              </li>
              <li className="text-md">Proven sales track record</li>
              <li className="text-md">
                Experience in customer support is a plus
              </li>
              <li className="text-md">
                Proficiency in MS Office and CRM software (e.g. Salesforce,
                Hubspot)
              </li>
              <li className="text-md">Proficiency in English</li>
              <li className="text-md">Market knowledge</li>
              <li className="text-md">Communication and negotiation skills</li>
              <li className="text-md">Ability to build rapport</li>
              <li className="text-md">Time management and planning skills</li>
              <li className="text-md">
                BSc/BA in business administration, sales, or agriculture
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-[25px] font-bold">How To Apply</h1>
            <div className="text-[20px] text-justify">
            Kinldy mail your CV and Cover letter to <a href="mailto:contactus@yiieldy.com" className="text-green">contactus@yiieldy.com</a>
            </div>
            <p className="text-[20px] font-bold text-red-600">Entry Closes on: April 19, 2024</p>
          </div>
        </div>
      </section>

      <Footer />
      <StaticButton />
    </div>
  );
}
