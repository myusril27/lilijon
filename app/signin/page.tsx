"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

// ✅ Tipe data response dari API login
interface LoginResponse {
  token: string;
  message?: string;
}

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // ✨ Handle Login Submit
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data: LoginResponse = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      // ⚠️ NOTE: Simpan token di cookie HTTPOnly di server untuk keamanan jangka panjang
      localStorage.setItem("token", data.token);

      router.replace("/dashboard");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  // Input Handlers
  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50">
      {/* 🌄 Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/public/logo.png"
          alt="Background Hotel"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 via-white/60 to-orange-100/80 backdrop-blur-sm" />
      </div>

      {/* ✨ Card Login */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-8 border border-orange-100"
      >
        {/* Logo & Header */}
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/logo-orange.png"
            alt="Hotel Logo"
            width={70}
            height={70}
            className="object-contain mb-3 drop-shadow-md"
          />
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
            Welcome to{" "}
            <span className="text-orange-500">Lilijon Hotel</span>
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Sign in to manage your reservations
          </p>
        </div>

        {/* 📝 Form Login */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all"
              value={email}
              onChange={handleChangeEmail}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all"
              value={password}
              onChange={handleChangePassword}
              required
            />
          </div>

          {error && (
            <p
              role="alert"
              aria-live="polite"
              className="text-red-500 text-sm text-center font-medium"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 text-white py-2.5 rounded-md font-semibold hover:bg-orange-600 shadow-md hover:shadow-orange-200 transition-all duration-300 disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <span className="flex-1 h-px bg-gray-200"></span>
          <span className="text-gray-400 text-sm px-2">or</span>
          <span className="flex-1 h-px bg-gray-200"></span>
        </div>

        {/* Google Sign-in (placeholder) */}
        <button
          type="button"
          className="w-full border border-gray-300 py-2.5 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
        >
          <Image src="/google-icon.svg" alt="Google" width={20} height={20} />
          <span className="text-gray-700 font-medium">
            Sign in with Google
          </span>
        </button>

        {/* Link ke Sign Up */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-orange-500 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </motion.div>
    </section>
  );
}
