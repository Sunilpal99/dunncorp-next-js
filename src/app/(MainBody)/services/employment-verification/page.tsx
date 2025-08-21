

"use client";
import Layout from "@/app/secondcomponents";
import Image from "next/image";

const EmploymentVerification = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center" 
               style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/banner-verification.webp')" }}>
        <div className="bg-black/50 text-white p-6 rounded-md text-center">
          <h1 className="text-4xl font-bold">Employment Verification</h1>
        </div>
      </section>



      {/* Statistics Section */}
      <section className=" ">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">Dunn Corporate Resources offers a fast, secure, and efficient employment and income verification service designed to save time and reduce costs for organizations. By streamlining the verification process, we eliminate the <span style={{ whiteSpace: "nowrap" }}>labor-intensive</span> burden of <span style={{ whiteSpace: "nowrap" }}>in-house</span> verifications, providing accurate and <span style={{ whiteSpace: "nowrap" }}>up-to-date</span> information for current and former employees.</p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">This service, powered by advanced technology in collaboration with <strong>Vault Verify</strong>, ensures <span style={{ whiteSpace: "nowrap" }}>real-time</span> accuracy and a 99% reduction in potential employee data exposure. With a streamlined process that requires no PINs or salary keys, verifications are completed quickly and securely, adhering to strict <strong>FCRA compliance</strong> and state laws, such as <strong>CPRA</strong>, to protect employee data privacy.</p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">Accessible 24/7 through dedicated employee and admin portals, our verification service is easy to use and can be implemented in as little as two weeks. Whether you're an employer conducting background checks, a financial institution processing loans, or an individual verifying employment history, <strong>Employment Verification</strong> delivers reliable results with minimal data risk.</p>

        
          <div className="border border-primary bg-light p-5 mb-5 rounded d-inline-block">
            <p className="mb-0 text-dark text-lg fw-semibold">
              <i className="bi bi-telephone-fill me-2 text-primary"></i>
              📞 <a href="contact-us.php" className="text-primary text-decoration-none">Contact us</a> today to learn how Employment Verification services can simplify your processes while prioritizing efficiency, security, and compliance.
            </p>
          </div>

        </div>
      </section>

    </Layout>
  );
};

export default EmploymentVerification;
