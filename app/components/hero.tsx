"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="hero image"
          fill
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-3 capitalize">
          Book your luxury room
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Get special offers just for you today.
        </p>

        <div className="flex gap-4">
          <Link
            href="/room"
            className="bg-orange-500 text-white hover:bg-orange-600 py-2 px-6 md:px-10 text-lg font-semibold rounded shadow"
          >
            Book Now
          </Link>

          <Link
            href="/contact"
            className="border-2 border-orange-500 text-orange-500 px-4 py-1.5 rounded-md hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
