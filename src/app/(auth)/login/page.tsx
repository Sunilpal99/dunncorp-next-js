"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function LoginPage() {
   const router = useRouter(); // ✅ add this
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");






  // const [isSubmitting, setIsSubmitting] = useState(false);

  // async function handleSubmit(e: FormEvent) {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || !password) return alert("Email and password are required.");

     // Check for specific credentials
  if (email === "sunilpal05399@gmail.com" && password === "asdf") {
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", password);

    alert("Login successful!");
    setEmail("");
    setPassword("");

    router.push("/home"); // Only redirect if credentials match
  } else {
    alert("Invalid email or password.");
  }
  }

  return (
    <section className="py-37 bg-gray-100">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-white shadow rounded p-6 md:p-8">
          <h1 className="text-2xl font-bold text-[#005595] mb-1">Welcome back</h1>
          <p className="text-sm text-gray-600 mb-6">Sign in to continue to your dashboard.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                
                className="w-full rounded border px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                
                className="w-full rounded border px-3 py-2"
              />
            </div>

            {/* <div className="flex items-center justify-between">
              <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-[#397bad] focus:ring-[#397bad]"
                />
                Remember me
              </label>
              <Link href="#" className="text-sm text-[#397bad] hover:underline">
                Forgot password?
              </Link>
            </div> */}

            {/* <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#397bad] text-white font-semibold py-2.5 rounded hover:bg-blue-800 transition disabled:opacity-60"
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </button> */}
            <div>
              <input
                className="w-full bg-[#397bad] text-center text-white font-semibold py-2.5 rounded hover:bg-blue-800 transition disabled:opacity-60"
                type="submit"
                value="Sign In"
                name="submit-btn"
              />
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="text-[#397bad] font-medium hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
