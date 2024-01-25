"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Card } from "flowbite-react";
export default function page() {
  const images = [
    "/images/fiberglass/p1.jpg",
    "/images/fiberglass/p2.jpg",
    "/images/fiberglass/p3.jpg",
    "/images/fiberglass/p4.jpg",
    "/images/fiberglass/p5.jpg",
    "/images/fiberglass/p6.jpg",
    "/images/fiberglass/p7.JPG",
    "/images/fiberglass/p8.jpg",
    "/images/fiberglass/p9.JPG",
    "/images/fiberglass/p10.JPG",
    "/images/fiberglass/p11.jpg",
    "/images/fiberglass/p12.jpg",
    "/images/fiberglass/p13.jpg",
    "/images/fiberglass/p14.jpg",
  ];
  const captions = [
    "Fiberglass",
    "Speedboat",
    "Kincir Air Tambak Udang & Taman Kupu Kupu",
    "Bebek-bebekan",
    "Bebek-bebekan",
    "Bebek-bebekan",
    "Speedboat",
    "Speedboat",
    "Speedboat",
    "Speedboat",
    "Speedboat",
    "Speedboat",
    "Kano",
    "Kano",
  ];
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}

      <div className="relative  mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center ">
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
          <p
            className="text-sm md:text-xl text-gray-600  text-justify pt-8 lg:mx-20 "
            data-aos="zoom-y-out"
            data-aos-delay="150"
          >
            Perusahaan percetakan kami di Lampung menyediakan beragam produk
            konstruksi seperti pagar beton, panel beton, paving beton, dan
            fiberglass dengan kualitas terbaik. Dalam upaya meningkatkan layanan
            dan memenuhi kebutuhan pelanggan, kami menyediakan pagar beton
            precast yang kokoh dan tahan lama. Panel beton kami dirancang dengan
            estetika tinggi dan ketersediaan berbagai motif, sesuai dengan
            kebutuhan desain proyek Anda. Paving beton kami tidak hanya
            menawarkan daya tahan yang optimal, tetapi juga memiliki elemen anti
            slip yang cocok untuk area luar ruangan.
            <br />
            <br />
            Dengan komitmen kami terhadap kualitas, inovasi, dan layanan
            pelanggan yang unggul, kami siap menjadi mitra terpercaya dalam
            memenuhi kebutuhan material konstruksi Anda di Lampung. Temukan
            produk dan layanan terbaik kami untuk proyek-proyek Anda di situs
            web kami, dan jangan ragu untuk menghubungi kami untuk informasi
            lebih lanjut.
          </p>
          <div className="text-[1px] text-white">
            <p>
              Pagar Beton Berkualitas Panel Beton Tahan Lama Paving Beton
              Terbaik Produk Fiberglass Pagar Beton Kedaton Panel Beton Lampung
              Paving Beton Indonesia Fiberglass Kedaton Pagar Beton Murah Panel
              Beton Murah Paving Beton Murah Fiberglass Murah Pagar Beton Tahan
              Lama Panel Beton Berkualitas Paving Beton Kedaton Fiberglass
              Lampung Pagar Beton Lampung Panel Beton Kedaton Paving Beton
              Lampung Fiberglass Indonesia Pagar Beton Indonesia Panel Beton
              Indonesia Paving Beton Kedaton Fiberglass Kedaton Pagar Beton
              Terbaik Panel Beton Terbaik Paving Beton Terbaik Fiberglass
              Terbaik Pagar Beton Modern Panel Beton Modern Paving Beton Modern
              Fiberglass Modern Pagar Beton Minimalis Panel Beton Minimalis
              Paving Beton Minimalis Fiberglass Minimalis Pagar Beton Custom
              Panel Beton Custom Paving Beton Custom Fiberglass Custom Pagar
              Beton Desain Unik Panel Beton Desain Unik Paving Beton Desain Unik
              Fiberglass Desain Unik Pagar Beton Desain Modern Panel Beton
              Desain Modern Paving Beton Desain Modern Fiberglass Desain Modern
              Pagar Beton Desain Minimalis Panel Beton Desain Minimalis Paving
              Beton Desain Minimalis Fiberglass Desain Minimalis Pagar Beton
              Desain Custom Panel Beton Desain Custom Paving Beton Desain Custom
              Fiberglass Desain Custom Pagar Beton Harga Terjangkau Panel Beton
              Harga Terjangkau Paving Beton Harga Terjangkau Fiberglass Harga
              Terjangkau Pagar Beton Harga Kompetitif Panel Beton Harga
              Kompetitif Paving Beton Harga Kompetitif Fiberglass Harga
              Kompetitif Pagar Beton Harga Murah Panel Beton Harga Murah Paving
              Beton Harga Murah Fiberglass Harga Murah Pagar Beton Harga
              Ekonomis Panel Beton Harga Ekonomis Paving Beton Harga Ekonomis
              Fiberglass Harga Ekonomis Pagar Beton Harga Bersaing Panel Beton
              Harga Bersaing Paving Beton Harga Bersaing Fiberglass Harga
              Bersaing Pagar Beton Harga Bagus Panel Beton Harga Bagus Paving
              Beton Harga Bagus Fiberglass Harga Bagus Pagar Beton Harga Pas
              Panel Beton Harga Pas Paving Beton Harga Pas Fiberglass Harga Pas
              Pagar Beton Harga Hemat Panel Beton Harga Hemat Paving Beton Harga
              Hemat Fiberglass Harga Hemat Pagar Beton Harga Diskon Panel Beton
              Harga Diskon Paving Beton Harga Diskon Fiberglass Harga Diskon
              Pagar Beton Harga Promo Panel Beton Harga Promo Paving Beton Harga
              Promo Fiberglass Harga Promo Pagar Beton Harga Spesial Panel Beton
              Harga Spesial Paving Beton Harga Spesial Fiberglass Harga Spesial
            </p>
            <p>
              Percetakan Pagar Beton Lampung Panel Beton Berkualitas Lampung
              Paving Beton Terbaik di Lampung Fiberglass Murah Lampung Jasa
              Percetakan Pagar Beton Panel Beton Tahan Lama Paving Beton dengan
              Harga Terjangkau Fiberglass dengan Kualitas Terbaik Pagar Beton
              Berkualitas Panel Beton Lampung Paving Beton Lampung Fiberglass
              Lampung Pagar Beton Tahan Lama Panel Beton dengan Harga Terjangkau
              Paving Beton Berkualitas Fiberglass Tahan Lama Jasa Pagar Beton
              Lampung Jasa Panel Beton Lampung Jasa Paving Beton Lampung Jasa
              Fiberglass Lampung Pagar Beton dengan Harga Terjangkau Panel Beton
              Berkualitas Paving Beton Tahan Lama Fiberglass dengan Harga
              Terjangkau Pagar Beton Lampung Panel Beton Terbaik di Lampung
              Paving Beton Murah Lampung Fiberglass Terbaik di Lampung Jasa
              Pagar Beton Jasa Panel Beton Jasa Paving Beton Jasa Fiberglass
              Pagar Beton Murah Panel Beton Tahan Lama Paving Beton Berkualitas
              Fiberglass Tahan Lama Pagar Beton Terbaik di Lampung Panel Beton
              Murah Lampung Paving Beton Terbaik di Lampung Fiberglass Murah
              Lampung Jasa Percetakan Pagar Beton Lampung Jasa Percetakan Panel
              Beton Lampung Jasa Percetakan Paving Beton Lampung Jasa Percetakan
              Fiberglass Lampung Pagar Beton dengan Kualitas Terbaik Panel Beton
              dengan Kualitas Terbaik Paving Beton dengan Kualitas Terbaik
              Fiberglass dengan Kualitas Terbaik Pagar Beton Tahan Lama Lampung
              Panel Beton Tahan Lama Lampung Paving Beton Tahan Lama Lampung
              Fiberglass Tahan Lama Lampung Pagar Beton Murah Lampung Panel
              Beton Murah Lampung Paving Beton Murah Lampung Fiberglass Murah
              Lampung Pagar Beton Harga Terjangkau Lampung Panel Beton Harga
              Terjangkau Lampung Paving Beton Harga Terjangkau Lampung
              Fiberglass Harga Terjangkau Lampung Pagar Beton Berkualitas Tinggi
              Lampung Panel Beton Berkualitas Tinggi Lampung Paving Beton
              Berkualitas Tinggi Lampung Fiberglass Berkualitas Tinggi Lampung
              Pagar Beton Terpercaya Lampung Panel Beton Terpercaya Lampung
              Paving Beton Terpercaya Lampung Fiberglass Terpercaya Lampung
              Pagar Beton Profesional Lampung Panel Beton Profesional Lampung
              Paving Beton Profesional Lampung Fiberglass Profesional Lampung
              Pagar Beton Lampung Terbaik Panel Beton Lampung Terbaik Paving
              Beton Lampung Terbaik Fiberglass Lampung Terbaik Pagar Beton
              Lampung Tahan Lama Panel Beton Lampung Tahan Lama Paving Beton
              Lampung Tahan Lama Fiberglass Lampung Tahan Lama Pagar Beton
              Lampung Murah Panel Beton Lampung Murah Paving Beton Lampung Murah
              Fiberglass Lampung Murah Pagar Beton Lampung Harga Terjangkau
              Panel Beton Lampung Harga Terjangkau Paving Beton Lampung Harga
              Terjangkau Fiberglass Lampung Harga Terjangkau Pagar Beton Lampung
              Berkualitas Tinggi Panel Beton Lampung Berkualitas Tinggi Paving
              Beton Lampung Berkualitas Tinggi Fiberglass Lampung Berkualitas
              Tinggi Pagar Beton Lampung Terpercaya Panel Beton Lampung
              Terpercaya Paving Beton Lampung Terpercaya Fiberglass Lampung
              Terpercaya Pagar Beton Lampung Profesional Panel Beton Lampung
              Profesional Paving Beton Lampung Profesional Fiberglass Lampung
              Profesional
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
                  {captions[index]}
                </h5>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
