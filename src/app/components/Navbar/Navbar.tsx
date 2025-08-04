"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-3">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="Logo" width={45} height={45} />
          <div>
            <h1 className="text-sm font-bold leading-none">DUNN</h1>
            <p className="text-xs text-gray-300">CORPORATE RESOURCES</p>
          </div>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="lg:hidden text-white text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Nav Links */}
        <nav className={`flex-col lg:flex-row lg:flex ${menuOpen ? "flex" : "hidden"} lg:items-center gap-6 text-sm font-medium`}>
          <Link href="/" className="text-white hover:underline">Home</Link>
          <Link href="/about-us" className="text-gray-300 hover:text-white">About Us</Link>

          {/* Solutions Dropdown */}
          <div className="relative group">
            <button className="text-gray-300 hover:text-white">Solutions ▾</button>
            <div className="absolute hidden group-hover:block bg-gray-700 text-sm rounded mt-1 z-50">
              <Link href="/solutions/unemployment-cost-control" className="block px-4 py-2 hover:bg-gray-600">Unemployment Cost Control</Link>
              <Link href="/solutions/contingency-refunds" className="block px-4 py-2 hover:bg-gray-600">Contingency Refunds</Link>
              <Link href="/solutions/human-resources" className="block px-4 py-2 hover:bg-gray-600">Human Resources</Link>
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="text-gray-300 hover:text-white">Services ▾</button>
            <div className="absolute hidden group-hover:block bg-gray-700 text-sm rounded mt-1 z-50">
              <Link href="/employment-verification" className="block px-4 py-2 hover:bg-gray-600">Employment Verification</Link>
              {/* Add more services if needed */}
            </div>
          </div>

          <Link href="/resources" className="text-gray-300 hover:text-white">Resources</Link>
          <Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link>
          <Link href="/contact-us" className="text-gray-300 hover:text-white">Contact Us</Link>
          <Link href="/portal" className="text-gray-300 hover:text-white">Client Portal</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
