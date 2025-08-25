"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  
  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[confirmPassword,setConfirmPassword] = useState("");

  function handleSubmit (e: { preventDefault: () => void; }) {
    e.preventDefault(); 

    if(!name || !email || !password || !email || !confirmPassword ) return (alert("All the fields are required"))
    if(password !== confirmPassword) return (alert("password and confirm password is not same"))

    
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("password",password)
    localStorage.setItem("confirmPassword",confirmPassword)

    alert("Signup form submitted successfully!");

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-white shadow rounded p-6 md:p-8">
          <h1 className="text-2xl font-bold text-[#005595] mb-1">Create Account</h1>
          <p className="text-sm text-gray-600 mb-6">Sign up to get started.</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}
                className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#397bad]"
                placeholder="John Doe" required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#397bad]"
                placeholder="you@company.com" required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#397bad]"
                placeholder="••••••••" required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#397bad]"
                placeholder="••••••••" required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#397bad] text-white font-semibold py-2.5 rounded hover:bg-blue-800 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-[#397bad] font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
