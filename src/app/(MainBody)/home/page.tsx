"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

import Layout from "../../secondcomponents";



const Home = () => {


  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
  });
  return (
     <Layout>

      <section className="h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: "linear-gradient(rgb(0 0 0 / 35%), rgba(0, 0, 0, 0.6)), url('/images/banner-home-new.jpg')" }} >
        <div className="bg-black/50 text-white p-6 rounded-md text-center">
          <h1 className="text-4xl font-bold">With Dunn, you take control.</h1>
          <p className="mt-4 text-lg">A leader in unemployment cost control and tax savings.</p>
          <a href="/contact-us" className="mt-4 inline-block w-full md:w-1/2 bg-white text-gray-900 font-medium py-2 px-4 rounded hover:bg-gray-200 transition text-center"   >
            Learn More
          </a>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">

          {/* Card 1 */}
          <div className="p-6 bg-white shadow rounded ">
            <img src="images/index-page/UNEMPLOYMENT-COST-CONTROL.png" alt="Unemployment Cost Control" className="mx-auto mb-4 h-24" />
            <h3 className="text-sm text-black-500 font-bold uppercase">Unemployment Cost Control</h3>
            <p className="mt-2 text-gray-700 text-sm">A dedicated personal team committed to making your life easier. Simple yet effective client interface to suit your needs.</p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white shadow rounded">
            <img src="images/index-page/CONTINGENCY-REFUNDS.png" alt="contingency refunds" className="mx-auto mb-4 h-24" />
            <h3 className="text-sm text-black-500 font-bold uppercase">contingency refunds</h3>
            <p className="mt-2 text-gray-700 text-sm">Has your company been involved with a merger or acquisition in the past 4 years? Let us take a look to see if we can recover money. There’s no cost!</p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white shadow rounded">
            <img src="images/index-page/HUMAN-RESOURCES.png" alt="human resources" className="mx-auto mb-4 h-24" />
            <h3 className="text-sm text-black-500 font-bold uppercase">human resources</h3>
            <p className="mt-2 text-gray-700 text-sm">Experienced HR professionals here to help with any situation that arises. Policy language, the latest paper forms, law changes. We can help.</p>
          </div>

        </div>
      </section>
      <section className="py-16 bg-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#005595]">
            Customized software designed with our clients' needs in mind.
          </h2>
          <p className="mt-2 text-gray-700 text-lg">
            We want to make your life easier.
          </p>

          <blockquote className="mt-8 text-gray-600 italic border-l-4 border-blue-300 pl-4 text-sm md:text-base">
            “The expertise and attention to detail that Dunn Corporate Resources brings has
            resulted in paramount savings. The ROI on our investment with Dunn has been outstanding!”
            <br />
            <span className="not-italic font-semibold text-gray-800 block mt-2">
              – Multi State Auto Group
            </span>
          </blockquote>
        </div>
      </section>
      <section className="py-16 bg-gray-100 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#397bad] mb-4">Stay Informed with Our Latest Insights</h2>
          <p className="text-gray-700 mb-6">
            Explore articles, tips, and updates on unemployment cost control, HR solutions, and more.
          </p>
          <a
            href="/blog"
            className="inline-block bg-[#397bad] text-white font-semibold py-3 px-6 rounded hover:bg-blue-800 transition"
          >
            View Blog
          </a>
        </div>
      </section>
      <section className="py-16 bg-white text-center px-4">
        <div ref={sliderRef} className="keen-slider max-w-3xl mx-auto">
          <div className="keen-slider__slide number-slide1">
            <Image
              src="/images/nysada.jpg"
              alt="Unemployment Cost Control"
              width={150}
              height={150}
              className="mx-auto mb-4 h-24 object-contain"
            />
          </div>
          <div className="keen-slider__slide number-slide2">
            <Image
              src="/images/shrm.jpg"
              alt="Contingency Refunds"
              width={150}
              height={150}
              className="mx-auto mb-4 h-24 object-contain"
            />
          </div>
          <div className="keen-slider__slide number-slide3">
            <Image
              src="/images/fladco.jpg"
              alt="Human Resources"
              width={150}
              height={150}
              className="mx-auto mb-4 h-24 object-contain"
            />
          </div>
        </div>
        {/* Navigation Buttons */}
        <div className="flex justify-center mt-6 gap-6">
          <button onClick={() => instanceRef.current?.prev()}>⬅️ Prev</button>
          <button onClick={() => instanceRef.current?.next()}>Next ➡️</button>

        </div>
      </section>
     </Layout>







  );
};

export default Home;
