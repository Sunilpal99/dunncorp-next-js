"use client";
import Image from "next/image";

const UnemploymentCostControl = () => {
    return (
      <>
        {/* Hero Section */}
        <section className="relative h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/ucc-banner-new.jpg')" }}>
          <div className="bg-black/50 text-white p-6 rounded-md text-center max-w-4xl mx-auto">
            <img src="/images/index-white/UNEMPLOYMENT-COST-CONTROL.png" alt="Unemployment Cost Control" className="mx-auto mb-6 h-20" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Unemployment Cost Control</h1>
            <p className="mt-4 text-lg md:text-xl">Expert management of unemployment claims to reduce costs and protect your business</p>
            <a href="/contact-us" className="mt-6 inline-block bg-white text-gray-900 font-semibold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors">
              Get Started Today
            </a>
          </div>
        </section>
  
        {/* What We Do Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#397bad] mb-6">What We Do</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                We provide comprehensive unemployment cost control services to help businesses reduce their unemployment insurance costs
                through expert claims management, strategic planning, and proven methodologies.
              </p>
            </div>
  
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-[#397bad] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Claims Management</h3>
                <p className="text-gray-600">
                  Expert handling of unemployment claims to ensure proper documentation and representation at hearings.
                </p>
              </div>
  
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-[#397bad] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Tax Rate Optimization</h3>
                <p className="text-gray-600">
                  Strategic analysis and management of unemployment tax rates to minimize your tax burden.
                </p>
              </div>
  
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-[#397bad] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Compliance Support</h3>
                <p className="text-gray-600">
                  Ensuring your business stays compliant with unemployment insurance regulations and requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
  

  
        {/* Process Section */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#397bad] mb-6">Our Process</h2>
              <p className="text-xl text-gray-700">
                A systematic approach to reducing your unemployment costs
              </p>
            </div>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#397bad] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Assessment</h3>
                <p className="text-gray-600">
                  Comprehensive analysis of your current unemployment costs and processes
                </p>
              </div>
  
              <div className="text-center">
                <div className="w-16 h-16 bg-[#397bad] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Strategy</h3>
                <p className="text-gray-600">
                  Development of customized cost control strategies and implementation plan
                </p>
              </div>
  
              <div className="text-center">
                <div className="w-16 h-16 bg-[#397bad] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Implementation</h3>
                <p className="text-gray-600">
                  Expert execution of claims management and tax optimization strategies
                </p>
              </div>
  
              <div className="text-center">
                <div className="w-16 h-16 bg-[#397bad] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">4</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Monitoring</h3>
                <p className="text-gray-600">
                  Ongoing monitoring and optimization to ensure continued cost savings
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Our Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#397bad] mb-6">Our Services</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Our premier services, ranging from initial claims response to hearings representation, will take the burden off of your hands so you can get back to running your business.
              </p>
            </div>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-[#397bad] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Web-based Access & Tiered Services</h3>
                <p className="text-gray-600 text-sm">
                  Customized web portal with tiered service levels to meet your specific needs and budget.
                </p>
              </div>
  
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-[#397bad] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Real-time Claims Status & Reports</h3>
                <p className="text-gray-600 text-sm">
                  Live tracking of claims status and comprehensive account activity reports for complete transparency.
                </p>
              </div>
  
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-[#397bad] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Educational Seminars & Workshops</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive training programs to help your team understand unemployment cost control best practices.
                </p>
              </div>
  
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-[#397bad] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Client Conferences</h3>
                <p className="text-gray-600 text-sm">
                  Regular client meetings and conferences to review progress and discuss strategic improvements.
                </p>
              </div>
  
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-[#397bad] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Analysis & Verification of Tax Rates</h3>
                <p className="text-gray-600 text-sm">
                  Thorough analysis and verification of your unemployment tax rates to ensure accuracy and optimization.
                </p>
              </div>
  
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-[#397bad] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Voluntary Contribution Advice</h3>
                <p className="text-gray-600 text-sm">
                  Strategic guidance on voluntary contributions to optimize your unemployment tax burden.
                </p>
              </div>
  
  

            </div>
          </div>
        </section>
  
        {/* Testimonial Section */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-[#397bad] mb-8">What Our Clients Say</h2>
            <blockquote className="text-xl text-gray-700 italic border-l-4 border-[#397bad] pl-6 mb-6">
              "The expertise and attention to detail that Dunn Corporate Resources brings has resulted in paramount savings.
              The ROI on our investment with Dunn has been outstanding!"
            </blockquote>
            <p className="text-lg font-semibold text-gray-800">– Multi State Auto Group</p>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#397bad] to-[#005595] text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Reduce Your Unemployment Costs?</h2>
            <p className="text-xl mb-8">
              Let's discuss how we can help you control unemployment costs and improve your bottom line.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="inline-block bg-white text-[#397bad] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </a>
              <a
                href="/resources"
                className="inline-block border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-[#397bad] transition-colors"
              >
                Download Resources
              </a>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default UnemploymentCostControl;