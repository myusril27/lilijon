"use client";

import { useState } from "react";
import Link from "next/link";


export default function SignUpPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign Up Data:", form);
    alert("Sign Up successful! (demo only)");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-300 to-yellow-300 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl w-full max-w-md p-8 border border-white/20">
        <h1 className="text-4xl font-bold text-center text-white mb-6 tracking-wide">
          Create Your Account
        </h1>
        <p className="text-center text-white/80 mb-8">
          Join us and enjoy exclusive hotel offers ✨
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white/90 mb-2 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label className="block text-white/90 mb-2 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label className="block text-white/90 mb-2 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-orange-500 font-semibold py-3 rounded-lg hover:bg-orange-100 transition-all duration-300 hover:scale-105"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-white/70 text-sm mt-8">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="text-white font-semibold hover:underline hover:text-orange-100"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
