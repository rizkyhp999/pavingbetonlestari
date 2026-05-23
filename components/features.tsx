"use client";

import Image from "next/image";
import Link from "next/link";

export default function Features() {
  const products = [
    {
      title: "Paving Beton",
      description:
        "Lebih dari 20 tahun menangani paving beton. Material konstruksi berkualitas tinggi untuk kemudahan pemasangan pada jalan dan area luar ruangan Anda.",
      image: "/images/brosur-7.jpg",
      link: "/paving",
      delay: "100"
    },
    {
      title: "Panel Beton",
      description:
        "Pagar panel beton dengan campuran cor terbaik. Solusi tepat dan kuat sebagai pembatas lahan kosong, pabrik, maupun kawasan industri.",
      image: "/images/brosur-3.jpg",
      link: "/panel",
      delay: "200"
    },
    {
      title: "Fiberglass",
      description:
        "Konstruksi serat kaca tahan lama untuk berbagai kebutuhan. Mulai dari speedboat, bebek-bebekan air, kano, hingga kincir air tambak.",
      image: "/images/brosur-6.jpg",
      link: "/fiberglass",
      delay: "300"
    },
  ];

  return (
    <section id="produk" className="relative pt-8 pb-10 md:pt-16 md:pb-20 bg-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-24" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold tracking-wide uppercase mb-5 shadow-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Produk Utama Kami
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Solusi Material Konstruksi & Fiberglass
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Lebih dari 20 tahun pengalaman menghadirkan kualitas terbaik. Kami siap melayani kebutuhan paving, panel beton, hingga produk fiberglass untuk proyek Anda.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10 mb-10 md:mb-24">
          {products.map((product, idx) => (
            <Link 
              href={product.link} 
              key={idx}
              className="group flex flex-col bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 mb-8 md:mb-0"
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
                  Pelajari Lebih Lanjut
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
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">Butuh Konsultasi Proyek?</h3>
            <p className="text-slate-300 text-lg sm:text-xl">Hubungi tim ahli kami untuk mendapatkan penawaran harga terbaik.</p>
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
            Hubungi 0811-723-830
          </a>
        </div>
      </div>
    </section>
  );
}
