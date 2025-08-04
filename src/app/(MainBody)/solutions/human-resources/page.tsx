"use client";
import Image from "next/image";
import { useState } from "react";

const HumanResources = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does Dunn Corporate Resources provide related to HR and employee benefits?",
      answer: "We offer comprehensive HR support, including compliance with changing laws and employee handbook updates. Our goal is to help small and midsize organizations achieve large-employer advantages at minimal cost."
    },
    {
      question: "How can Dunn Corporate Resources help my organization stay compliant with current laws?",
      answer: "We monitor legislative changes and ensure your HR policies, procedures, and documents, such as employee handbooks, are up-to-date and legally compliant."
    },
    {
      question: "Is Dunn Corporate Resources experienced in HR compliance?",
      answer: "Yes. With over 30 years of experience in the HR industry, we bring deep expertise and insight into best practices for compliance, documentation, and administration."
    },
    {
      question: "Can you help us update our employee handbook?",
      answer: "Absolutely. We assist in drafting or revising handbooks to ensure they contain appropriate legal language and reflect the latest changes in employment laws."
    },
    {
      question: "Are your services affordable for small businesses?",
      answer: "Yes. Our mission is to provide high-quality, scalable HR solutions that are accessible to small and midsize businesses without the high costs typically associated with enterprise-level services."
    },
    {
      question: "Do you offer consulting for benefits plan comparison and selection?",
      answer: "Yes. We guide organizations through the process of evaluating and selecting the most effective and affordable benefits packages for their employees."
    },
    {
      question: "We have employees in more than one state. Can you help with compliance across the board?",
      answer: "We can. Multi-state compliance can get confusing fast, but we stay on top of every regulation and help you do the same, no matter where your team works."
    }
  ];

    return (
      <>
        {/* Hero Section */}
        <section className="relative h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/contingency-refunds-banner-new.jpg')" }}>
          <div className="bg-black/50 text-white p-6 rounded-md text-center max-w-4xl mx-auto">
            <img src="/images/index-white/HUMAN-RESOURCES.png" alt="Contingency Refunds" className="mx-auto mb-6 h-20" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Human Resources</h1>
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
                  <img src="/images/human-resources/Employees-Receive.png" alt="Employees Receive 10% More in Coverage" className="w-7 h-7 color-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Employees Receive
                10% More in Coverage</h3>
                <p className="text-gray-600">
                  Expert handling of unemployment claims to ensure proper documentation and representation at hearings.
                </p>
              </div>
  
              <div className="text-center p-6 bg-gray-10 rounded-bg-white p-6 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-[#397bad] rounded-full flex items-center justify-center mx-auto mb-4">
                    <img src="/images/human-resources/Better-Benefits.png" alt="Employers Save
20% in Premiums" className="w-7 h-7 color-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Employers Save
                20% in Premiums</h3>
                <p className="text-gray-600">
                  Strategic analysis and management of unemployment tax rates to minimize your tax burden.
                </p>
              </div>
  
              <div className="text-center p-6 bg-gray-10 rounded-bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#397bad] rounded-full flex items-center justify-center mx-auto mb-4">
                    <img src="/images/human-resources/Better-Benefits.png" alt="Better Benefits
for Employees" className="w-7 h-7 color-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Better Benefits
                for Employees</h3>
                <p className="text-gray-600">
                  Ensuring your business stays compliant with unemployment insurance regulations and requirements.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-10 rounded-bg-white p-6 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-[#397bad] rounded-full flex items-center justify-center mx-auto mb-4">
                    <img src="/images/human-resources/Superior-Service.png" alt="Superior Service
for Employers" className="w-7 h-7 color-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Superior Service
                for Employersr</h3>
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
                    <h2 className="text-4xl font-bold text-[#397bad] mb-6">HR + Employee Benefits</h2>
                    <p>
                        Whether you are trying to keep up with the latest law changes, looking for appropriate language in your updated handbook, ensuring compliance with ERISA, or shopping around for the best benefits package possible, we can help.
                    </p>
                    <p>
                    Dunn Corporate Resources has over 30 years of experience in the world of HR. We focus on optimizing our clients’ needs at minimal cost. Our customized benefits packages aim to provide large employer access and buying power to small and midsized employers.
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
  
  export default HumanResources;