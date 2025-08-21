"use client";
import Layout from "@/app/secondcomponents";
import Image from "next/image";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center" 
               style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/banner-home-new.jpg')" }}>
        <div className="bg-black/50 text-white p-6 rounded-md text-center">
          <h1 className="text-4xl font-bold">About Dunn Corporate Resources</h1>
          <p className="mt-4 text-lg"> Leading the way in unemployment cost control and comprehensive business solutions since 1986</p>
        
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#397bad] mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Starting in 1986, we were primarily focused on unemployment cost control and tax savings. 
                As our business grew, so did our breadth of services. Through strategic acquisitions and 
                partnerships, we now boast an array of services ranging from business and personal financial 
                options to insurance and employee benefits.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#397bad] to-[#005595] p-8 rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/90 leading-relaxed">
                  To make our clients' lives easier through superior customer service, innovative solutions, 
                  and proven expertise in unemployment cost control and business optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#397bad] mb-16">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#397bad] mb-2">37+</div>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#397bad] mb-2">50</div>
              <p className="text-gray-600">States Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#397bad] mb-2">97%</div>
              <p className="text-gray-600">Client Retention Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#397bad] mb-2">1000+</div>
              <p className="text-gray-600">Active Clients</p>
            </div>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#397bad] mb-16">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#397bad] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, delivering superior results and service.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#397bad] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Partnership</h3>
              <p className="text-gray-600">
                Building long-lasting, mutually beneficial relationships with our clients.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#397bad] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-600">
                Continuously innovating our solutions to meet evolving business needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#397bad] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Care</h3>
              <p className="text-gray-600">
                We care deeply about our clients' success and well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* <h2 className="text-4xl font-bold text-[#397bad] mb-8">Our Commitment to You</h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Since the beginning, we have been committed to superior customer service and support. 
            Our job as a full service third party administrator is to make our clients' lives easier. 
            With our client retention rate at 97%, we can confidently say that we are proud of what we do.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            By combining our knowledge and expertise with our high quality of service, we strive to 
            accomplish our goal of building long lasting and mutually beneficial relationships with 
            all of our clients.
          </p> */}
          
          <div className="mt-12 bg-gradient-to-r from-[#397bad] to-[#005595] p-8 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6">
              Let's discuss how we can help optimize your unemployment costs and improve your business efficiency.
            </p>
            <a 
              href="/contact-us" 
              className="inline-block bg-white text-[#397bad] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
