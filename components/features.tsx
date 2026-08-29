"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Features() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      title: "Paving Beton",
      description:
        "Paving block presisi dan kuat untuk merapikan halaman rumah, jalan setapak, atau tempat parkir agar bebas becek dan tampak bersih.",
      image: "/images/brosur-7.jpg",
      link: "/paving",
      delay: "100"
    },
    {
      title: "Panel Beton",
      description:
        "Pagar panel beton kokoh untuk membatasi tanah, rumah, pabrik, atau kebun. Pemasangan cepat, hemat biaya, dan tidak mudah rusak.",
      image: "/images/brosur-3.jpg",
      link: "/panel",
      delay: "200"
    },
    {
      title: "Fiberglass",
      description:
        "Aneka olahan serat kaca tahan air dan cuaca. Sangat awet untuk perahu bebek air, kano, tangki, hingga kincir air tambak.",
      image: "/images/brosur-6.jpg",
      link: "/fiberglass",
      delay: "300"
    },
  ];

  const scrollToSlide = (index: number) => {
    if (index < 0 || index >= products.length) return;
    setCurrentIndex(index);
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth"
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.clientWidth;
      if (cardWidth > 0) {
        const newIndex = Math.round(scrollPosition / cardWidth);
        if (newIndex !== currentIndex && newIndex >= 0 && newIndex < products.length) {
          setCurrentIndex(newIndex);
        }
      }
    }
  };

  return (
    <section id="produk" className="relative pt-12 pb-14 md:pt-20 md:pb-24 bg-white overflow-hidden border-b-2 border-slate-200/80">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold tracking-wide uppercase mb-4 shadow-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Produk Pilihan
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
            Pilihan Produk Terbaik Kami
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Pengalaman lebih dari 20 tahun. Kami siap membantu kebutuhan halaman rumah, pagar pembatas, hingga kerajinan fiberglass Anda dengan hasil yang rapi dan kuat.
          </p>
        </div>

        {/* Mobile View: Carousel with Left / Right buttons */}
        <div className="block md:hidden mb-10">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth gap-4 pb-4 -mx-5 px-5"
          >
            {products.map((product, idx) => (
              <div key={idx} className="w-full flex-shrink-0 snap-center">
                <Link 
                  href={product.link}
                  className="group flex flex-col bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 shadow-md h-full"
                >
                  <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-grow p-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm mb-5 flex-grow">
                      {product.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm mt-auto">
                      Lihat Selengkapnya
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Carousel Navigation Buttons & Dots for Mobile */}
          <div className="flex items-center justify-between mt-4 px-2">
            <button
              onClick={() => scrollToSlide(currentIndex - 1)}
              disabled={currentIndex === 0}
              className={`flex items-center justify-center w-11 h-11 rounded-full border border-slate-200 bg-white shadow-md text-slate-700 active:scale-95 transition-all ${
                currentIndex === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
              }`}
              aria-label="Geser Kiri"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Slide indicators / Dots */}
            <div className="flex items-center gap-2">
              {products.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "w-7 bg-blue-600" : "w-2.5 bg-slate-300"
                  }`}
                  aria-label={`Ke slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => scrollToSlide(currentIndex + 1)}
              disabled={currentIndex === products.length - 1}
              className={`flex items-center justify-center w-11 h-11 rounded-full border border-slate-200 bg-white shadow-md text-slate-700 active:scale-95 transition-all ${
                currentIndex === products.length - 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
              }`}
              aria-label="Geser Kanan"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop View Product Cards Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10 mb-10 md:mb-24">
          {products.map((product, idx) => (
            <Link 
              href={product.link} 
              key={idx}
              className="group flex flex-col bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={product.delay}
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="flex flex-col flex-grow p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {product.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                  {product.description}
                </p>
                <div className="inline-flex items-center gap-2 text-blue-600 font-semibold mt-auto">
                  Lihat Selengkapnya
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Contact Banner below cards */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden" data-aos="zoom-in" data-aos-delay="400">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">Bingung Pilih yang Mana?</h3>
            <p className="text-slate-300 text-lg sm:text-xl">Hubungi kami via WhatsApp. Kami siap menjawab pertanyaan dan memberikan info harga terbaik.</p>
          </div>
          <a
            href="https://wa.me/62811723830"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 flex-shrink-0 inline-flex justify-center items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-green-500/30 transition-all duration-200 hover:scale-105 w-full sm:w-auto"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            </svg>
            Hubungi Kami via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
