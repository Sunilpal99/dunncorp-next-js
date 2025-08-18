"use client";
import Image from "next/image";

const Resources = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center" 
               style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/banner-resource-new.jpg')" }}>
        <div className="bg-black/50 text-white p-6 rounded-md text-center">
          <h1 className="text-4xl font-bold">Resources </h1>
        </div>
      </section>



      {/* Statistics Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#397bad] mb-16">State Reference Guide</h2>
          <p className="text-center text-gray-700 mb-8">Click on map for state specific information on error rate, max liability, and taxable wage base.</p>
          
          {/* Simple USA Map */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-32 h-32 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                </svg>
                <p className="text-gray-600 font-medium">USA Map</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#397bad] mb-16">Useful Documents</h2>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center flex flex-col items-center gap-2.5">
                <Image src="/images/Resources-icons/Seperation Form.png" alt="Seperation Form" width={100} height={100} />
            
                <h3 className="text-xl font-bold text-gray-800 mb-4"><a href="https://www.dunncorp.com/blog/wp-content/uploads/2017/09/SEPARATION-RECORD.pdf">Seperation Form</a></h3>
              </div>

              <div className="text-center flex flex-col items-center gap-2.5">
                <Image src="/images/Resources-icons/Work Refusal Form.png" alt="Work Refusal Form" width={100} height={100} />
            
                <h3 className="text-xl font-bold text-gray-800 mb-4"><a href="https://www.dunncorp.com/blog/wp-content/uploads/2017/09/BC6-Work-Refusal.pdf">Work Refusal Form</a></h3>
              </div>


          </div>
        </div>
      </section>

    </>
  );
};

export default Resources;
