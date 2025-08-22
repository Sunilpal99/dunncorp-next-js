"use client";
import Layout from "@/app/secondcomponents";
import Image from "next/image";
import { useState } from "react";


const Contact = () => {
  function handleSubmit (e: { preventDefault: () => void; }) {
    e.preventDefault();
    
    if(!companyName || !contactName || !phone || !email || !service || !message) return (alert("All the fields are required"))
      
    
    // console.log({
    //   "your Company Name" : companyName,
    //   "your Contact Name" : contactName,
    //   "your Phone" : phone,
    //   "your Email" : email,
    //   "your Service" : service,
    //   "your Message" : message,
    // })
    
    // Save state values to localStorage
    localStorage.setItem("companyName", companyName);
    localStorage.setItem("contactName", contactName);
    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);
    localStorage.setItem("service", service);
    localStorage.setItem("message", message);
    
    alert("Form Submitted successfully!");

    setCompanyName("");
    setContactName("");
    setPhone("");
    setEmail("");
    setService("");
    setMessage("");
  }
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

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

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company-name">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company-name"
                name="company-name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                
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
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                id="phone"
                maxLength={15}
                
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                
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
              value={service}
              onChange={(e) => setService(e.target.value)}
              
              placeholder="e.g. Unemployment Cost Control"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              // typeof="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
