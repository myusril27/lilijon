"use client";

import Card from "../card";

export default function RoomsList() {
  const rooms = [
    {
      image: "/hero.jpg",
      title: "Luxury Room",
      description: "A cozy and elegant space with ocean view and king-size bed.",
      price: 2100000,
      people: 2,
      rating: 5,
      link: "/room/luxury",
    },
    {
      image: "/room2.jpg",
      title: "Deluxe Suite",
      description: "Spacious suite with private balcony and premium amenities.",
      price: 3200000,
      people: 3,
      rating: 4,
      link: "/room/deluxe",
    },
    {
      image: "/room3.jpg",
      title: "Family Room",
      description: "Perfect for families, complete with a mini living area and twin beds.",
      price: 4500000,
      people: 4,
      rating: 4,
      link: "/room/family",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 uppercase">Rooms & Rates</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((r) => (
            <Card key={r.title} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
