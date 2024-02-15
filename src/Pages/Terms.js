import { useState } from "react";
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

export default function Terms() {
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

      {/* TERMS HERO SECTION */}
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
              Terms and Conditions
            </h2>
            <p className="mb-6 text-base font-normal tracking-wide text-green md:text-lg">
              These guidelines outline user behaviour, responsibilities, and
              acceptable conduct while interacting with our products or
              services.
            </p>
            <a
              href="#terms"
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

      {/* TERMS AND CONDITIONS SECTION */}
      <div className="px-8 py-6 flex flex-col gap-3" id="terms">
        <section className="flex flex-col gap-3">
          {/* <h1 className="text-2xl">Terms and Conditions</h1> */}
          <p className="text-gray-500">Last updated: (13/02/2024)</p>
          <p className="text-[13px] text-justify">
            Please read these Terms and Conditions (these "Terms") carefully
            before using the Service (as defined below), either through our
            website at <a className="text-green font-bold" href="https://yiieldy.com">www.yiieldy.com</a> (the "Website"), the web-based platform
            at <a className="text-green font-bold" href="https://app.yiieldy.com">app.yiieldy.com</a> (the "Web App"), or the Yiieldy mobile
            applications (the "Mobile App"), in each case operated by Logicgraph
            Ltd working as Yiieldy ("Yiieldy", "us," "we," "our"). All
            references to "you" or "your" herein shall refer to the end customer
            purchasing access to the website, Service, web app, or mobile app
            described herein.
          </p>
        </section>
        <main className="flex flex-col gap-3">
          <ol className="list-decimal px-5 flex flex-col gap-10">
            <li className="text-xl">
              Conditions of Use &amp; Acceptance of Terms
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-[13px] text-justify">
                  Yiieldy provides its Service, Website, Web App, and Mobile App
                  to you, your employees, agents, or other representatives
                  (collectively referred to as &quot;Representatives&quot;),
                  subject to the Terms mentioned here. These Terms may be
                  updated from time to time without notice. We recommend you
                  check these Terms frequently as they may change. If you do not
                  agree with these Terms, you may not use the Website, Web App,
                  or Mobile App.
                </p>
                <p className="text-[13px] text-justify">
                  If Yiieldy does not use or enforce any right or part of the
                  Terms, that does not mean they are giving up that right or
                  part of the Terms. These Terms are applicable from the date
                  you or your Representatives first log into, access, or use the
                  Service, which we call the &quot;Effective Date&quot;.
                </p>
              </div>
            </li>
            <li className="text-xl">
              Privacy Policy; Confidentiality
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-[13px] text-justify">
                  Before using the Website, web app, or mobile app, we advise
                  you to read our privacy policy. Our privacy policy governs our
                  collection and use of your personal information, and reading
                  it will help you better understand our practices regarding
                  registration data and other information relevant to your
                  privacy.
                </p>
                <p className="text-[13px] text-justify">
                  Yiieldy is not responsible for the use or misuse of data by
                  any third party, including, without limitation, providers of
                  third-party products and services, the operator of any website
                  linked to Yiieldy’s Website, or any Yiieldy customer, even if
                  Yiieldy hosts such customer’s Website. You understand our
                  privacy policy applies only to the Service, Website, Web App,
                  or Mobile App. Yiieldy may notify you of leaks or exposure of
                  private data, but except to the extent required by law,
                  Yiieldy is not necessary to provide such notification.
                </p>
                <p className="text-[13px] text-justify">
                  You will employ reasonable security precautions in using the
                  Service, Website, Web App, or Mobile App, including encryption
                  of social security numbers and Information of similar
                  sensitivity belonging to you, your Representatives, customers,
                  suppliers, or other third parties. You will not use
                  Confidential Information (as defined below) for any purpose
                  other than in connection with your authorized use of the
                  Service, Website, Web App, or Mobile App following these
                  Terms. Except as expressly permitted in writing in advance by
                  Yiieldy, you will not disclose confidential information to any
                  third party. You will prevent the disclosure of personal
                  information in your possession or control. Without limiting
                  the generality of the preceding, you will take reasonable
                  precautions to protect confidential information. You will not
                  disclose Confidential Information to any of your
                  Representatives who do not need to know such Information.
                </p>
                <p className="text-[13px] text-justify">
                  Notwithstanding the preceding, you may disclose confidential
                  information as required by applicable law or by a proper legal
                  or governmental authority, provided you give Yiieldy advanced
                  notice reasonably sufficient to allow Yiieldy to seek a
                  protective order or otherwise to contest such required
                  disclosure and reasonably cooperate in such effort. You will
                  promptly notify Yiieldy in writing of any misuse or
                  misappropriation of confidential information that comes to
                  your attention. You will collaborate with Yiieldy to
                  investigate any such misappropriation and mitigate any damages
                  caused. Upon termination of these Terms or Yiieldy’s written
                  request, you will return all confidential information to
                  Yiieldy and certify, in writing, the destruction of any copies
                  thereof.
                </p>
                <p className="text-[13px] text-justify">
                  “Confidential Information” means any confidential or
                  proprietary information Yiieldy provides to you in any form.
                  However, Confidential Information does not include information
                  that:
                  <ol className="list-inside">
                    <li>
                      a. Is in your possession at the time of original
                      disclosure by Yiieldy;
                    </li>
                    <li>
                      b. Is independently developed by you without use of or
                      reference to information provided by Yiieldy; or
                    </li>
                    <li>
                      c. Becomes known publicly, before or after disclosure,
                      other than because of your improper action or inaction.
                    </li>
                  </ol>
                </p>
                <p className="text-[13px] text-justify">
                  You agree that breach of the provisions of this Section 2
                  might cause Yiieldy irreparable injury for which monetary
                  relief would not provide adequate compensation. Therefore, in
                  addition to any other remedies available, Yiieldy will be
                  entitled to preliminary, temporary, or permanent injunctive
                  relief against such breach or threatened breach without the
                  necessity of proving actual damages.
                </p>
              </div>
            </li>
            <li className="text-xl">
              Description of Service
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-[13px] text-justify">
                  Yiieldy provides users with access to a collection of online
                  and mobile tools designed to support farm management and
                  record-keeping needs (collectively, the &quot;Service&quot;).
                  You understand and agree that the Service may include
                  advertisements, sponsored links, promotional listings, or paid
                  placement. You also understand and agree that the Service may
                  include certain communications from Yiieldy, such as Service
                  announcements and administrative messages, and that these
                  communications are considered part of the Service. Unless
                  explicitly stated otherwise, any new features enhancing the
                  current Service shall be subject to these Terms.
                </p>
              </div>
            </li>
            <li className="text-xl">
              License and Site Access
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-[13px] text-justify">
                  We grant you a limited non-exclusive, non-transferable,
                  non-sublicensable, revocable right to access and make internal
                  business use of this Website, Web App, and the Mobile App in
                  accordance with these Terms. You acknowledge that Yiieldy may
                  establish general practices and limits concerning use of the
                  Website, Web App, and the Mobile App. You agree that Yiieldy
                  has no responsibility or liability for the deletion or failure
                  to store any messages, other communications, data, or other
                  content maintained or transmitted by or to the Service. You
                  acknowledge that Yiieldy reserves the right to deactivate
                  accounts that violate our Terms. You further acknowledge that
                  Yiieldy reserves the right to change these general practices
                  and limits at any time, in its sole discretion, with or
                  without notice. Certain areas of this Website, Web App, or the
                  Mobile App may be restricted from access by you, and Yiieldy
                  may further restrict access by you to any areas of this
                  Website, Web App, and/or the Mobile App at any time in its
                  sole and absolute discretion. Yiieldy reserves the right at
                  any time to modify or discontinue, temporarily or permanently,
                  the Service (or any part thereof) with or without notice. You
                  agree that Yiieldy shall not be liable to you or to any third
                  party for any modification, suspension or discontinuance of
                  the Service or any part of the Service. We reserve all rights
                  to terminate accounts, edit or remove content, and cancel the
                  Service in our sole discretion. You agree that Yiieldy, in its
                  sole discretion, may terminate your password, account (or any
                  part thereof), or use of the Service and may remove and
                  discard any data or content within the Service for any reason,
                  including, without limitation, if Yiieldy believes that you
                  have violated these Terms. You agree that any termination of
                  your access to the Service under any provision of these Terms
                  may occur without prior notice to you, and you acknowledge and
                  agree that Yiieldy may immediately deactivate or delete your
                  account and all related information and files in your account
                  and may bar any further access to such files and information.
                  Further, you agree that Yiieldy shall not be liable to you or
                  any third party for any termination of your access to the
                  Service.
                </p>
              </div>
            </li>
            <li className="text-xl">
              User Account; Compliance
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-[13px] text-justify">
                  If you are an owner of an account on this Website, Web App,
                  and/or the Mobile App, you are solely responsible for
                  maintaining the confidentiality of your private user details
                  (username and password) and the contents of your account. You
                  are responsible for all activities that occur under your
                  account or password. You agree to: (a) provide true, accurate,
                  current, and complete information about yourself; and (b)
                  maintain and promptly update the registration data to keep it
                  true, accurate, current, and complete. If you provide any
                  information that is untrue, inaccurate, not current, or
                  incomplete or if Yiieldy has reasonable grounds to suspect
                  that such information is untrue, Yiieldy has the right to
                  suspend or terminate your account and refuse all current or
                  future use of the Service (or any portion thereof). Further,
                  you will use the Service in accordance with all applicable
                  laws, rules, and regulations; as well as any of Yiieldy’s
                  standard published policies, if any, in effect as of the
                  Effective Date, and as may be amended by Yiieldy, in its sole
                  discretion, from time to time. Although Yiieldy has no
                  obligation to monitor your use of Service Website, Web App,
                  and/or Mobile App, Yiieldy may do so and may prohibit any use
                  of any of the foregoing if it reasonably believes may be (or
                  alleged to be) in violation of these Terms.
                </p>
              </div>
            </li>
            <li className="text-xl">
              Billing
              <div className="flex flex-col gap-3 mt-2">
                <h1 className="text-[13px]">Monthly</h1>
                <p className="text-[13px] text-justify">
                  As an Yiieldy customer, you expressly agree that we are
                  authorized to charge you a monthly fee at the rate set when
                  you registered for the Service and that we are allowed to
                  charge renewal fees to the credit/debit card you provided
                  during account activation or to such other replacement
                  credit/debit card as you notify us to use. The monthly fee
                  will be charged on the date that corresponds with the date you
                  activated your account. You can access your account at
                  Yiieldy.app to view information regarding your next renewal.
                  Billing for the Service to which you have subscribed will
                  continue month-to-month unless and until you cancel your
                  subscription or we terminate your account. You must cancel
                  your subscription before it renews each month to avoid billing
                  the following month&#39;s charge to your credit/debit card.
                  Subscription fees are fully earned upon payment, and Yiieldy
                  reserves the right to decline issuing refunds for partial
                  months. You may cancel your subscription anytime by logging
                  into your Yiieldy account. Yiieldy reserves the right from
                  time to time to increase the subscription fees charged for its
                  Service and shall provide ample notice to customers before any
                  change that would increase their subscription fee. In addition
                  to any other rights granted to Yiieldy herein, Yiieldy
                  reserves the right to suspend your access to and use of the
                  Service if you fail to pay any undisputed amount owed within
                  ten (10) days of your receipt of written notice from Yiieldy
                  that your payment is overdue. Overdue amounts are subject to a
                  late charge of 2.0% per month, or the maximum permitted by
                  law, whichever is less, plus all collection expenses.​
                </p>
              </div>
              <div className="flex flex-col gap-3 mt-2">
                <h1 className="text-[13px]">Yearly</h1>
                <p className="text-[13px] text-justify">
                  As an Yiieldy customer, you expressly agree that we are
                  authorized to charge you an annual fee at the rate set when
                  you registered for the Service and that we are allowed to
                  charge renewal fees to the credit/debit card you provided
                  during account activation or to such other replacement
                  credit/debit card as you notify us to use. The annual fee will
                  be charged on the date corresponding to the date you activated
                  your account. You can access your account at Yiieldy.app to
                  view information regarding your next renewal date and rate.
                  Billing for the Service to which you have subscribed will
                  continue annually unless and until you cancel your
                  subscription or we terminate your account. You must cancel
                  your subscription before it renews to avoid billing the
                  following year&#39;s charge to your credit/debit card.
                  Subscription fees are fully earned upon payment, and Yiieldy
                  reserves the right to decline issuing refunds for partial
                  years and reduce your refund amount by the amount of the
                  credit/debit card processing fee of your original credit/debit
                  card transaction. You may cancel your subscription anytime by
                  logging into your Yiieldy account. Yiieldy reserves the right
                  from time to time to increase the subscription fees charged
                  for its Service and shall provide ample notice to customers
                  before any change that would increase their subscription fee.
                  In addition to any other rights granted to Yiieldy herein,
                  Yiieldy reserves the right to suspend your access to and use
                  of the Service if you fail to pay any undisputed amount owed
                  within ten (10) days of your receipt of written notice from
                  Yiieldy that your payment is overdue. Overdue amounts are
                  subject to a late charge of 2.0% per month, or the maximum
                  permitted by law, whichever is less, plus all collection
                  expenses.
                </p>
              </div>
            </li>
            <li className="text-xl">
              Communications
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-[13px] text-justify">
                  All communication with us will be done electronically.
                  Whenever you send us an email or visit our Website, Web App,
                  or Mobile App, you will be communicating with us. By doing so,
                  you are giving your consent to receive communications from us.
                  We will update you by posting news and notices on our Website,
                  Web App, or Mobile App, and by sending you emails. You also
                  agree that all information, disclosures, agreements, and other
                  communications we provide to you electronically meet the legal
                  requirements that such communications be in writing. If you
                  have any questions regarding our communication policy, please
                  feel free to contact us.
                </p>
              </div>
            </li>
            <li className="text-xl">
              Comments, Reviews and Emails
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-[13px] text-justify">
                  You are allowed to upload or save content on the Website, Web
                  App, or Mobile App through the Service. However, the content
                  should not be obscene, illegal, defamatory, threatening,
                  infringing of intellectual property rights, invasive of
                  privacy, or harmful to third parties in any way. Additionally,
                  all such content must be free of software viruses, political
                  and commercial solicitation. Although we are not obligated to
                  do so, we reserve the right to remove or modify any such
                  content that is accessible to other users.
                </p>
              </div>
            </li>
            <li className="text-xl">
              Intellectual Property Rights; Improvements
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-[13px] text-justify">
                  Other than “Your Data” (as defined in Section 12 below), which
                  you may have opted to include on, submit to, or store on the
                  Website, Web App, and/or the Mobile App under these Terms,
                  content published or stored on the Website, Web App, and/or
                  the Mobile App, and the Service (including but not limited to
                  digital downloads, images, texts, code, graphics, and logos)
                  is the property of Yiieldy and/or its content creators and
                  licensors, and such content is protected by Nigeria and
                  international copyright laws. Yiieldy and/or its content
                  creators and licensors own all rights to the intellectual
                  property contained on the Website, Web App, and/or the Mobile
                  App, and all such rights are reserved. The entire compilation
                  of the content found on the Website, Web App, and/or the
                  Mobile App is the exclusive property of Yiieldy, with
                  copyright authorship for this compilation created solely by
                  Yiieldy.
                </p>
                <p className="text-[13px] text-justify">
                  You are granted a limited permission only, which is subject to
                  these Terms, for the purposes of viewing the material
                  contained on the Website, Web App, and/or the Mobile App and
                  using the Service as designed and in accordance with these
                  Terms. You acknowledge and agree that the Website, Web App,
                  and/or the Mobile App, and the Service contain proprietary and
                  confidential information of Yiieldy that is protected by
                  applicable intellectual property and other laws. You further
                  acknowledge and agree that content contained in advertisements
                  or information presented to you through the Website, Web App,
                  and/or the Mobile App, or the Service or presented by other
                  users or our advertisers is protected by copyright, trademark,
                  Service mark and patent law, as well as other proprietary
                  rights and laws. Except as expressly authorized by Yiieldy,
                  other users or advertisers, you agree not to modify, rent,
                  lease, loan, sell, distribute, or create derivative works
                  based on the Service, the Website, Web App, and/or the Mobile
                  App contents, in whole or in part.
                </p>
                <p className="text-[13px] text-justify">
                  You acknowledge that Yiieldy may continually develop, deliver,
                  and provide to you on-going innovation to the Website, Web
                  App, and/or the Mobile App in the form of new features,
                  functionality, and efficiencies. Accordingly, Yiieldy reserves
                  the right to modify the Website, Web App, and/or the Mobile
                  App, from time to time. Some modifications will be provided to
                  you at no additional charge. In the event Yiieldy adds
                  additional functionality to a particular Service, Yiieldy may
                  condition the implementation of such modifications on your
                  payment of additional fees provided you may continue to use
                  the version of the Website, Web App, and/or the Mobile App
                  that Yiieldy makes generally available (without such features)
                  without paying additional fees.
                </p>
              </div>
            </li>
            <li className="text-xl">
              Trademarks
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-[13px] text-justify">
                  The Yiieldy trademarks, service marks, logos, product names,
                  and service names, collectively referred to as &quot;Yiieldy
                  Marks,&quot; are the intellectual property of Yiieldy. You
                  must obtain Yiieldy&#39;s prior permission before displaying
                  or using any of the Yiieldy Marks. These Terms do not grant
                  you a license to use any of the Yiieldy Marks by implication,
                  estoppel, or otherwise.
                </p>
              </div>
            </li>
            <li className="text-xl">
              Intellectual Property Infringement
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-[13px] text-justify">
                  Yiieldy respects the intellectual property of others, and we
                  expect our users to do the same. If you believe that your work
                  has been infringed or your intellectual property rights have
                  been otherwise violated, please provide Yiieldy the following
                  information:
                </p>
                <p className="text-[13px] text-justify">
                  <ol className="list-inside">
                    <li>
                      a. Identification of the person authorized to act on
                      behalf of the owner of the intellectual property.
                    </li>
                    <li>
                      b. A description of the infringed intellectual property.
                    </li>
                    <li>
                      c. A description of where the infringing material is
                      located on the Website, Web App, and/or the Mobile App.
                    </li>
                    <li>
                      d. A statement by you that you have a good faith belief
                      that the disputed use is not authorized by the
                      intellectual property owner, its agent, or the law.
                    </li>
                    <li>
                      e. A statement by you, made under penalty of perjury, that
                      the above information in your notice is accurate and that
                      you are the intellectual property owner or authorized to
                      act on the intellectual
                    </li>
                  </ol>
                </p>
                <p className="text-[13px] text-justify">
                  property owner&#39;s behalf; and an electronic or physical
                  signature of the person authorized to act on behalf of the
                  owner of the intellectual property.
                </p>
                <p className="text-[13px] text-justify">
                  Notice of claims of intellectual property infringement should
                  be sent via Certified Mail to:
                </p>
                <p className="text-[13px] text-justify">Yiieldy</p>
                <p className="text-[13px] text-justify">
                  The Waterside, 5 Admiralty Road,
                </p>
                <p className="text-[13px] text-justify">Off Admiralty Way,</p>
                <p className="text-[13px] text-justify">Lekki Phase 1,</p>
                <p className="text-[13px] text-justify">Lagos, Nigeria.</p>
              </div>
            </li>
            <li className="text-xl">
              Your Data; Aggregate Data; Feedback
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-[13px] text-justify">
                  In these Terms, “Your Data” means any data, audio, video,
                  text, images, or other material provided by you or otherwise
                  displayed on, submitted to, or stored on Website, Web App,
                  and/or the Mobile App. With respect to Your Data, you hereby
                  grant Yiieldy a non-exclusive, worldwide, irrevocable,
                  royalty-free, perpetual, transferable, sublicensable license
                  to: (a) to create anonymized compilations and analyses of Your
                  Data (“Aggregate Data”); (b) to create reports, evaluations,
                  benchmarking tests, studies, analyses and other work product
                  from Aggregate Data (“Analyses”); and (c) to create, develop,
                  enhance our tools in connection with the Service, using such
                  Aggregate Data and Analyses.Yiieldy shall have exclusive
                  ownership rights to, and the exclusive right to use, such
                  Aggregate Data and Analyses for any purpose, including, but
                  not limited to product improvement and marketing to other
                  customers of the Website, Web App, and/or Mobile App;
                  provided, however, that Yiieldy will not distribute Aggregate
                  Data and Analyses in a manner that is identifiable as Your
                  Data.
                </p>
                <p className="text-[13px] text-justify">
                  Your Data must be your own and must not infringe on any third
                  party’s rights. Yiieldy reserves the right to remove any of
                  Your Data from the Website, Web App, and/or the Mobile App at
                  any time and for any reason, without notice.
                </p>
                <p className="text-[13px] text-justify">
                  From time to time, You or Representatives may submit to
                  Yiieldy comments, questions, enhancement requests,
                  suggestions, ideas, process descriptions or other information
                  related to the Service (“Feedback”). Yiieldy shall own all
                  Feedback, you hereby assign such Feedback to Yiieldy, and you
                  agree that Yiieldy has all rights to use and incorporate
                  Feedback into the Website, Web App, and/or the Mobile App
                  without restriction or payment to you. No rights are granted
                  to you other than as expressly set forth herein.
                </p>
              </div>
            </li>
            <li className="text-xl">
              Restrictions
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-[13px] text-justify">
                  You agree not to reproduce, duplicate, copy, sell, resell, or
                  exploit for any commercial purposes any portion of the
                  Website, Web App, and/or the Mobile App, the Service, use of
                  the Service, or access to the Website, Web App, and/or the
                  Mobile App, or the Service unless you have obtained written
                  permission to do so in advance from Yiieldy or unless the
                  Website, Web App, and/or the Mobile App, or the Service has
                  been expressly designed for such activity.
                </p>
                <p className="text-[13px] text-justify">
                  You are expressly prohibited from taking any of the following
                  actions unless you have obtained written permission to do so
                  in advance from Yiieldy:
                </p>
                <p className="text-[13px] text-justify">
                  <ol className="flex flex-col gap-2">
                    <li>
                      a. Downloading the Website, Web App, and/or the Mobile
                      App, or any material or content therein not expressly
                      designed for that purpose as part of the Service.
                    </li>
                    <li>
                      b. Modifying the Website, Web App, and/or the Mobile App,
                      or any content therein not expressly designed to be
                      modified as part of the Service.
                    </li>
                    <li>
                      c. Publishing any Website, Web App, and/or the Mobile App
                      material in any media.
                    </li>
                    <li>
                      d. Copy, duplicate or reproduce any portion of the
                      Website, Web App, and/or Mobile app.
                    </li>
                    <li>
                      e. Reverse engineer, disassemble or decompile the Website,
                      Web App, and/or the Mobile App, or attempt to derive the
                      source code or underlying ideas or algorithms of any part
                      of the Website, Web App, and/or the Mobile App (except to
                      the limited extent applicable laws specifically prohibit
                      such restriction).
                    </li>
                    <li>
                      f. Selling, sublicensing, and/or otherwise commercializing
                      any Website. Web App, and/or Mobile App material not
                      expressly designed to be sold, sublicensed, or
                      commercialized as part of the Service.
                    </li>
                    <li>
                      g. Publicly performing and/or displaying any Website, Web
                      App, and/or the Mobile App material.
                    </li>
                    <li>
                      h. Using the Website, Web App, and/or the Mobile App in
                      any way that impacts other user access thereof.
                    </li>
                    <li>
                      i. Engaging in any advertising or marketing either using
                      the Website, Web App, and/or the Mobile App content not
                      owned by you or using any portion thereof.
                    </li>
                    <li>
                      j. Using the Website, Web App, and/or the Mobile App in
                      any way that violates applicable laws and regulations.
                    </li>
                    <li>
                      j. Using the Website, Web App, and/or the Mobile App in
                      any way that is or may be damaging to the Website, Web
                      App, and/or the Mobile App, and/or the contents of either;
                      the Service and/or its contents; other users using the
                      Website, Web App, and/or the Mobile App; or to any person
                      or business entity.
                    </li>
                    <li>
                      l. Use the Service, Website, Web App, and/or the Mobile
                      App to share or store inappropriate materials, including
                      but not limited to (i) materials containing viruses or
                      other harmful or malicious code; (ii) unsolicited mail
                      (spam); (iii) copyrighted materials to which you do not
                      have sufficient rights; or (iv) harassing, tortious, or
                      defamatory materials; and
                    </li>
                    <li>
                      m. Engaging in any data mining, data harvesting, data
                      extracting, or any other similar activity in relation to
                      the Website, Web App, and/or the Mobile App unless such
                      activity is expressly included as part of the Service.
                    </li>
                    <li>
                      n. Perform any scanning, testing, auditing, security
                      vulnerability analysis, penetration testing or other forms
                      of vulnerability testing without prior written approval.
                    </li>
                  </ol>
                </p>
                <p className="text-[13px] text-justify">
                  We require that Yiieldy users comply with all federal and
                  state laws and regulations when using Yiieldy. Illegal,
                  regulated or forbidden items are prohibited from sale.
                </p>
              </div>
            </li>
            <li className="text-xl">
              Advertisers
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-[13px] text-justify">
                  Note that any interactions you have with advertisers on the
                  Website, or the Service are solely between you and the
                  advertiser. Yiieldy is not responsible for any losses or
                  damages that may arise from such interactions or the presence
                  of advertisers on the Website, Web App, or Mobile App.
                </p>
              </div>
            </li>
            <li className="text-xl">
              Links to Other Websites and Resources
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-[13px] text-justify">
                  The Website, Web App, and/or the Mobile App may contain links
                  to third-party websites or services that are not owned or
                  controlled by Yiieldy. Yiieldy has no control over, is not
                  responsible for the availability of such external sites or
                  resources, does not endorse, and assumes no responsibility for
                  the content, privacy policies, advertising, products, service,
                  or practices of any third-party websites or services. You
                  acknowledge and agree that Yiieldy shall not be responsible or
                  liable, directly, or indirectly, for any damage or loss caused
                  or alleged to be caused by or in connection with use of or
                  reliance on any such content, goods, or services available on
                  or through any such websites or services.
                </p>
                <p className="text-[13px] text-justify">
                  You further acknowledge that your access to and use of the
                  Website, Web App, or Mobile App are or may depend on
                  interoperability with certain third-party services also used
                  by you, such as Azure cloud services (“Third Party Service”).
                  By using the Service, you consent to the Website, Web App, or
                  Mobile App interacting with and receiving metadata from the
                  Third-Party Service and returning metadata to the Third-Party
                  Service. Yiieldy IS NOT LIABLE OR RESPONSIBLE FOR THIRD-PARTY
                  SERVICE. EXCEPT AS OTHERWISE EXPRESSLY AGREED BETWEEN US AND
                  YOU IN WRITING, YOU ARE SOLELY RESPONSIBLE FOR CONFIGURING THE
                  SERVICE, WEB APP, OR MOBILE APP TO ACHIEVE ITS DESIRED GOALS.
                </p>
              </div>
            </li>
            <li className="text-xl">
              No Warranties
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-[13px] text-justify">
                  You explicitly comprehend and consent to the following terms:
                </p>
                <ol className="flex flex-col gap-2">
                  <li>
                    a. The website, web app, and mobile app are provided “as
                    is,” with all faults, and Yiieldy makes no express or
                    implied representations or warranties of any kind related to
                    that or the materials contained on either. Nothing contained
                    on the website, web app, or mobile app shall be construed as
                    providing advice to you.
                  </li>
                  <li>
                    b. Your use of the website, web app, or mobile app, and the
                    service is at your sole risk. Yiieldy expressly disclaims
                    all warranties of any kind, whether express or implied,
                    including but not limited to the implied warranties of
                    merchantability, fitness for a particular purpose, and
                    non-infringement.
                  </li>
                  <li>
                    c. Yiieldy makes no warranty that (i) the website, web app,
                    or the mobile app, or the service will meet your
                    requirements; (ii) the website, web app, or the mobile app,
                    or the service will be uninterrupted, timely, secure, or
                    error-free; (iii) the results that may be obtained from the
                    use of the website, web app, or the mobile app, or the
                    service will be accurate or reliable; and (iv) the quality
                    of any products, services, information, or other material
                    purchased or obtained by you through the website, web app,
                    or the mobile app, or the service will meet your
                    expectations.
                  </li>
                  <li>
                    No information, whether oral or written, obtained by you
                    from Yiieldy or through the website, web app, or the mobile
                    app, or the service shall create any warranty not expressly
                    stated in the terms.
                  </li>
                </ol>
              </div>
            </li>
            <li className="text-xl">
              Limitation of Liability
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-[13px] text-justify">
                  Please understand and agree that Yiieldy, its officers,
                  directors, or employees are not liable for any damages,
                  including but not limited to loss of profits, goodwill, use,
                  or data, business interruption, or any other losses resulting
                  from: (i) your use or inability to use the website, web app,
                  or mobile app, or service; (ii) the cost of obtaining
                  substitute goods and services resulting from any goods, data,
                  information, or services purchased or obtained, or messages
                  received or transactions entered into through or from the
                  website, web app, or the mobile app, or the service; (iii)
                  statements made or conduct of any third-party on the website,
                  web app, and/or the mobile app, or the service; or (iv) any
                  other matter related to your use of the website, web app,
                  and/or the mobile app, or the service.
                </p>
              </div>
            </li>
            <li className="text-xl">
              Indemnification
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-[13px] text-justify">
                  You agree to defend, indemnify, and hold Yiieldy, its
                  subsidiaries, affiliates, officers, agents, co- branders,
                  other partners, and employees harmless to the fullest extent
                  from and against any and all liabilities, costs, demands,
                  causes of action, damages, and expenses (including reasonable
                  attorney’s fees) made by any third party due to or arising out
                  of use of the Website, Web App, or the Mobile App, information
                  you submit or make available through the Website, Web App, or
                  the Mobile App, your use of the Service, your connection to
                  the Website, Web App, or the Mobile App, Your Data, your
                  violation of the Terms, or your violation of any rights of
                  another.
                </p>
              </div>
            </li>
            <li className="text-xl">
              Exclusions and Limitations
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-[13px] text-justify">
                  SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN
                  WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY OR
                  CONSEQUENTIAL DAMAGES. ACCORDINGLY, SOME OF THE ABOVE
                  LIMITATIONS MAY NOT APPLY TO YOU. IN SUCH JURISDICTIONS THE
                  LIABILITY OF Yiieldy WILL BE LIMITED TO THE MAXIMUM EXTENT
                  PERMITTED BY LAW. THE PROVISIONS OF THIS AGREEMENT WILL APPLY
                  WITHOUT REGARD TO WHETHER OTHER PROVISIONS OF THE AGREEMENT
                  HAVE BEEN BREACHED, ANY LIMITED REMEDY HEREIN IS HELD TO FAIL
                  OF ITS ESSENTIAL PURPOSE OR THE FORM OF THE CLAIM OR CAUSE OF
                  ACTION, WHETHER IN CONTRACT, WARRANTY, STATUTE, TORT
                  (INCLUDING BUT NOT LIMITED TO NEGLIGENCE).
                </p>
              </div>
            </li>
            <li className="text-xl">
              Term; Suspension; Termination
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-[13px] text-justify">
                  Subject to earlier termination as provided below, these Terms
                  will commence on the Effective Date and extend for the
                  applicable period of your subscription or access to the
                  Website, Web App, or the Mobile App. At the end of the
                  applicable subscription term, these Terms and your
                  subscription shall thereafter automatically extend for an
                  additional period equal to your original subscription term,
                  unless either party delivers at least thirty (30) days prior
                  written notice to the other party of its desire to terminate.
                </p>
                <p className="text-[13px] text-justify">
                  At any time Yiieldy may, immediately upon notice to you,
                  suspend access to any Service for the following reasons: (a) a
                  threat to the technical security or technical integrity of the
                  Service; (b) any undisputed amount due under the Agreement is
                  not received by Yiieldy within five (5) days after it was due,
                  (c) breach or violation by you of any laws, rules, or
                  regulations in connection with your acts or omissions related
                  to these Terms, or (d) use of the Service in a manner that
                  overburdens the Service or otherwise impacts the integrity or
                  quality of the Service.
                </p>
                <p className="text-[13px] text-justify">
                  Upon termination or expiration of the Terms for any reason,
                  (a) any amounts owed to Yiieldy prior to such termination or
                  expiration will be immediately due and payable, (b) all
                  licensed, and access rights granted will immediately cease to
                  exist, (c) you shall discontinue all access and use of the
                  Website, Web App, or the Mobile App, and Yiieldy may disable
                  access thereto. All sections which are expressed to survive,
                  or which by their nature should survive, will survive any
                  expiration or termination of the Agreement.
                </p>
              </div>
            </li>
            <li className="text-xl">
              Independent Contractor
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-[13px] text-justify">
                  The relationship of the parties established under these Terms
                  is that of independent contractors and neither party is a
                  partner, employee, agent, or joint venture partner of or with
                  the other, and neither party has the right or authority to
                  assume or create any obligation on behalf of the other party.
                </p>
              </div>
            </li>
            <li className="text-xl">
              Force Majeure
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-[13px] text-justify">
                  Except for payment obligations, neither party will be liable
                  for any breach of these Terms, or for any delay or failure of
                  performance, resulting from any cause beyond that party’s
                  reasonable control.
                </p>
              </div>
            </li>
            <li className="text-xl">
              Severability
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-[13px] text-justify">
                  If any provision of the Terms is found by a court of competent
                  jurisdiction to be invalid, the parties nevertheless agree
                  that the court should endeavour to give effect to the
                  parties&#39; intentions as reflected in the provision. If any
                  provision of the Terms is found to be unenforceable or invalid
                  under any applicable law and is not modifiable by the
                  reviewing court in accordance with the preceding sentence,
                  such unenforceability or invalidity shall not render these
                  Terms unenforceable or invalid as a whole, and such
                  provision(s) shall be deleted without affecting the remaining
                  provisions.
                </p>
              </div>
            </li>
            <li className="text-xl">
              Notice
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-[13px] text-justify">
                  Note that we may send you important messages through email.
                  Additionally, we may inform you about any changes made to our
                  Terms of Service, Privacy Policy, or other matters related to
                  our Service through notices or links displayed on our Website,
                  Web App, or Mobile App.
                </p>
              </div>
            </li>
            <li className="text-xl">
              Use of Name and Logos
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-[13px] text-justify">
                  Yiieldy may include your name and logo: (a) on the Website and
                  in its marketing materials, identifying you as a user of the
                  Website, Web App, and/or the Mobile App, and/or (b) in a press
                  release favorably publicizing your use of the Website, Web
                  App, and/or the Mobile App.
                </p>
              </div>
            </li>
            <li className="text-xl">
              Assignment
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-[13px] text-justify">
                  Yiieldy may assign, transfer, and subcontract its rights or
                  obligations under these Terms without notifying you or
                  obtaining your consent. However, you may not assign, transfer,
                  or subcontract any of your rights and obligations under these
                  Terms without Yiieldy&#39;s written consent.
                </p>
              </div>
            </li>
            <li className="text-xl">
              Entire Agreement
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-[13px] text-justify">
                  These Terms, including any legal notices and disclaimers on
                  the website, constitute the entire agreement between you and
                  Yiieldy regarding your use of the website, web app, or mobile
                  app and supersede all prior agreements and understandings
                  concerning the same.
                </p>
              </div>
            </li>
            <li className="text-xl">
              Governing Law &amp; Disputes
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-[13px] text-justify">
                  These Terms will be governed by and construed by the laws of
                  Nigeria without regard to principles of conflict of laws. Any
                  dispute relating to your use of the Website, Web App, Mobile
                  App, or the Service shall be governed by and construed by the
                  laws of Nigeria, without regard to principles of conflict of
                  laws. You submit to the jurisdiction of the courts located
                  within the border of Nigeria to resolve any disputes between
                  you and Yiieldy. You agree that regardless of any statute or
                  law to the contrary, any claim or cause of action arising from
                  or related to the use of the Service or the Terms must be
                  filed within one year after such claim or cause of action
                  arose or be forever barred.
                </p>
              </div>
            </li>
            <li className="text-xl">
              Contact Us
              <div className="flex flex-col gap-3 mt-2">
                <p className="text-[13px] text-justify">
                  If you have any queries or concerns regarding these Terms,
                  please do not hesitate to contact us. Additionally, we will be
                  more than happy to assist you in any way we can.
                </p>
              </div>
            </li>
          </ol>
        </main>
      </div>
      <Footer />
      <StaticButton />
    </div>
  );
}
