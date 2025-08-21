"use client";
import Layout from "@/app/secondcomponents";
import Image from "next/image";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/banner-home-new.jpg')",
        }}
      >
        <div className="bg-black/50 text-white p-6 rounded-md text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
        </div>
      </section>

      {/* Contact Info */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center w-full sm:w-5/12">
            <Image
              src="/images/addres-contact.png"
              alt="Location Icon"
              width={40}
              height={40}
              className="mx-auto mb-3"
            />
            <h4 className="font-bold text-lg">Address</h4>
            <p className="m-0">
              5 Greentree Centre
              <br />
              525 Rt. 73 North, Suite 205
              <br />
              Marlton, NJ 08053
            </p>
          </div>

          <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center w-full sm:w-5/12">
            <Image
              src="/images/phone-contact.png"
              alt="Phone Icon"
              width={40}
              height={40}
              className="mx-auto mb-3"
            />
            <h4 className="font-bold text-lg">Phone</h4>
            <p className="m-0">
              <a href="tel:9516667268" className="text-[#464545] hover:text-blue-600">
                +91 9516667268
              </a>
            </p>
          </div>
        </div>

        {/* Message Us Form */}
        <h1 className="text-center text-3xl font-medium mb-2">Message Us</h1>
        <p className="text-center mb-8">
          Please fill out a form and a team member will contact you as soon as possible.
        </p>

        <form method="post" id="contact-form" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company-name">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company-name"
                name="company-name"
                required
                autoComplete="organization"
                placeholder="Your company"
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="contact-name">
                Contact Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="contact-name"
                name="contact-name"
                required
                autoComplete="name"
                placeholder="Your full name"
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone">
                Phone No <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                maxLength={15}
                required
                inputMode="tel"
                autoComplete="tel"
                pattern="[0-9+\-()\s]{7,}"
                placeholder="e.g. (555) 123-4567"
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="email">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label htmlFor="what-service">
              What service are you interested in? <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="what-service"
              name="what-service"
              required
              placeholder="e.g. Unemployment Cost Control"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              cols={40}
              rows={5}
              placeholder="Message"
              id="message"
              className="w-full border rounded px-3 py-2"
            ></textarea>
          </div>

          <div>
            <input
              className="bg-blue-600 text-white px-6 py-2 rounded cursor-pointer hover:bg-blue-700"
              type="submit"
              value="Submit"
              name="submit-btn"
            />
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
