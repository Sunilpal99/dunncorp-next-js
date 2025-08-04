"use client";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-sm">

        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
            <div>
              <h1 className="text-xl font-bold">DUNN</h1>
              <p className="text-xs text-gray-400 -mt-1">CORPORATE RESOURCES</p>
            </div>
          </div>
          <p className="text-gray-400 leading-relaxed">
            5 Greentree Centre<br />
            525 Rt. 73 North Suite 205<br />
            Marlton NJ 08053<br />
            <Link href="tel:856-596-5510" className="hover:underline block mt-1">856-596-5510</Link>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about-us" className="hover:text-white">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/contact-us" className="hover:text-white">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Solutions</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="#" className="hover:text-white">UI Management</Link></li>
            <li><Link href="#" className="hover:text-white">HR Consulting</Link></li>
            <li><Link href="#" className="hover:text-white">Tax Recovery</Link></li>
            <li><Link href="#" className="hover:text-white">Claims Support</Link></li>
          </ul>
        </div>

        {/* Certificate or Badge */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/SOC2_TYPE2-new.png"
            alt="SOC 2 TYPE II"
            width={150}
            height={150}
            className="object-contain "
          />
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500 px-4">
        © {year} DUNN Corporate Resources. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
