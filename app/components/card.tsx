"use client";

import Image from "next/image";
import Link from "next/link";
import { IoPeopleOutline } from "react-icons/io5";


type CardProps = {
  image: string;
  title: string;
  description?: string;
  price: number;
  people: number;
  rating?: number;
  link?: string;
};

export default function Card({
  image,
  title,
  description,
  price,
  people,
  rating,
  link = "#",
}: CardProps)
{
  return (
    <article className="bg-white shadow-lg rounded-sm overflow-hidden transform transition hover:scale-105 duration-200">
      <div className="relative h-[260px] w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">
          <Link href={link} className="hover:text-gray-900">
            {title}
          </Link>
        </h3>

        {description && <p className="text-gray-600 mb-4">{description}</p>}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <IoPeopleOutline />
            <span>{people} People</span>
          </div>

          <div className="text-right">
            <div className="font-semibold">Rp {price.toLocaleString()}</div>
            <div className="text-sm text-gray-400">/Night</div>
          </div>
        </div>

        <div className="mt-4">
          <Link
            href={link}
            className="inline-block px-6 py-2.5 rounded bg-orange-500 text-white font-semibold hover:bg-orange-600"
          >
            Book Now
          </Link>
        </div>
      </div>
    </article>
  );
}
