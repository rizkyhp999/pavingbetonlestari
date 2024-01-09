"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Card } from "flowbite-react";
export default function page() {
  const images = [
    "/images/paving/p1.jpg",
    "/images/paving/p2.jpg",
    "/images/paving/p3.jpg",
    "/images/paving/p4.jpg",
    "/images/paving/p5.jpg",
    "/images/paving/p6.jpg",
    "/images/paving/p7.jpg",
    "/images/paving/p8.jpg",
    "/images/paving/p9.jpg",
    "/images/paving/p10.jpg",
    "/images/paving/p11.jpg",
    "/images/paving/p12.jpg",
  ];
  const captions = ["Paving"];
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}

      <div className="relative  mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Hasil Pekerjaan Kami</h1>
            <p className="text-2xl text-bold text-gray-600">
              Hubungi kami :{" "}
              <a
                href="https://wa.me/620811723830"
                className="text-green-800 hover:text-blue-600 "
              >
                0811-723-830
              </a>
            </p>
          </div>
          {/* Section content */}
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {images.map((imageSrc, index) => (
            <a key={index} href={imageSrc}>
              <Card className="max-w-sm m-5">
                <Image
                  width={500}
                  height={500}
                  src={imageSrc}
                  alt={`image ${index + 1}`}
                />
                <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 ">
                  {captions[0]}
                </h5>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
