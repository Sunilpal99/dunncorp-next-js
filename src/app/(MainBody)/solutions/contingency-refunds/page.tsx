"use client";
import Image from "next/image";
import { useState } from "react";

const ContingencyRefunds = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What are contingency refunds?",
      answer: "Contingency refunds are recoveries of overpaid unemployment insurance taxes. We identify errors in tax calculations, rate assignments, and benefit charges, then recover the overpaid amounts on your behalf with no upfront fees."
    },
    {
      question: "How do you find refund opportunities?",
      answer: "Our experts analyze your unemployment tax history, looking for merger/acquisition activity, incorrect tax rate assignments, erroneous charges, experience rating errors, and improper benefit charges from the past 4 years."
    },
    {
      question: "What if no refund is found?",
      answer: "There's no cost to you if we don't find any refund opportunities. Our contingency-based approach means we only get paid when we successfully recover money for your business."
    },
    {
      question: "How long does the process take?",
      answer: "The timeline varies depending on the complexity of your case and state processing times. Typically, the analysis takes 2-4 weeks, and refund processing can take 3-6 months once submitted."
    },
    {
      question: "What documentation do you need?",
      answer: "We'll need your unemployment tax returns, quarterly reports, and any merger/acquisition documentation from the past 4 years. Our team will guide you through the specific documents needed for your case."
    },
    {
      question: "How much can we expect to recover?",
      answer: "Recovery amounts vary significantly based on your business size, tax history, and the types of errors found. We've recovered anywhere from a few thousand to millions of dollars for our clients."
    }
  ];

    return (
      <>
        {/* Hero Section */}
        <section className="relative h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/contingency-refunds-banner-new.jpg')" }}>
          <div className="bg-black/50 text-white p-6 rounded-md text-center max-w-4xl mx-auto">
            <img src="/images/index-white/CONTINGENCY-REFUNDS.png" alt="Contingency Refunds" className="mx-auto mb-6 h-20" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contingency Refunds</h1>
            <p className="mt-4 text-lg md:text-xl">Expert management of unemployment claims to reduce costs and protect your business</p>
            <a href="/contact-us" className="mt-6 inline-block bg-white text-gray-900 font-semibold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors">
              Get Started Today
            </a>
          </div>
        </section>
  
        {/* What We Do Section */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4">
         
  
            <div className="grid md:grid-cols-4 gap-10">
              <div className="text-center p-6 bg-gray-10 rounded-bg-white p-6 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-[#397bad] rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/images/contingency-refunds/$8,000,000+white.png" alt="$8,000,000+" className="w-7 h-7 color-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">$8,000,000+</h3>
                <p className="text-gray-600">
                  Expert handling of unemployment claims to ensure proper documentation and representation at hearings.
                </p>
              </div>
  
              <div className="text-center p-6 bg-gray-10 rounded-bg-white p-6 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-[#397bad] rounded-full flex items-center justify-center mx-auto mb-4">
                    <img src="/images/contingency-refunds/Error-founds-white.png" alt="Error-founds" className="w-7 h-7 color-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">100% of Errors Found</h3>
                <p className="text-gray-600">
                  Strategic analysis and management of unemployment tax rates to minimize your tax burden.
                </p>
              </div>
  
              <div className="text-center p-6 bg-gray-10 rounded-bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#397bad] rounded-full flex items-center justify-center mx-auto mb-4">
                    <img src="/images/contingency-refunds/All-Work-Done-white.png" alt="All-Work-Done" className="w-7 h-7 color-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">All Work Done by DCR</h3>
                <p className="text-gray-600">
                  Ensuring your business stays compliant with unemployment insurance regulations and requirements.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-10 rounded-bg-white p-6 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-[#397bad] rounded-full flex items-center justify-center mx-auto mb-4">
                    <img src="/images/contingency-refunds/Zero-Fees-to-the-white.png" alt="Zero-Fees-to-the" className="w-7 h-7 color-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Zero Fees to the Employer</h3>
                <p className="text-gray-600">
                  Ensuring your business stays compliant with unemployment insurance regulations and requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services List Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#397bad] mb-6">The Benefits</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-6">
                We specialize in identifying and recovering overpaid unemployment insurance taxes through comprehensive analysis and expert representation.
              </p>
              <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#397bad] rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">1</div>
                    <span>No fee / cost associated with retaining service (contingency basis)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#397bad] rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">2</div>
                    <span>Refunds issued</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#397bad] rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">3</div>
                    <span>Credits recovered</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#397bad] rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">4</div>
                    <span>Rate reductions when applicable </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#397bad] rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">5</div>
                    <span>Assurance that employer payroll / tax related merger & acquisition issues were properly addressed
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#397bad] rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">5</div>
                    <span>Assurance that no penalties, interest or delinquency issues occurred</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#397bad] rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">5</div>
                    <span>Dunn Corporate Resources handles all work associated with service (research, review, revisions, refunds)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#397bad] rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">5</div>
                    <span>Increased awareness of areas to be watched in future mergers & acquisitions</span>
                  </li>
                </ul>
            </div>

          </div>
        </section>
        {/* Services List Section */}
        <section className="py-20 bg-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-[#397bad] mb-6">Finding Refunds</h2>
                    <p>
                        Our experts analyze overlooked and misunderstood aspects of mergers and acquisitions relating to various state and federal payroll taxes. Experience has shown that the majority of refunds recovered were the result of government agency errors, outsourced vendor communications, and overlooked opportunities that employers were unaware of. As a result, we have excelled in providing sizable re-funds and credits to our clients.
                    </p>
            
                </div>

            </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#397bad] mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-700">
                Get answers to common questions about contingency refunds
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="text-lg font-semibold text-[#397bad]">{faq.question}</h3>
                    <svg
                      className="w-5 h-5 text-[#397bad] transform transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={openFaq === index ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"}
                      />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

    
      </>
    );
  };
  
  export default ContingencyRefunds;