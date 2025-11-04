"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">About Lilijon Hotel</h2>
          <p className="text-gray-600 mb-6">
            Lilijon Hotel offers premium rooms, exceptional service, and a location
            that puts you close to the citys best attractions. Designed for comfort
            and relaxation, our rooms combine modern amenities with warm hospitality.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <li className="text-gray-700">24/7 Front Desk</li>
            <li className="text-gray-700">Free Wi-Fi</li>
            <li className="text-gray-700">Swimming Pool & Spa</li>
            <li className="text-gray-700">Complimentary Breakfast</li>
          </ul>
        </div>

        {/* Ganti <img> jadi <Image /> */}
        <div className="relative w-full h-64 md:h-80 rounded overflow-hidden">
          <Image
            src="/about-image.jpg"
            alt="About Lilijon Hotel"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
