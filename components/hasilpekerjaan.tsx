"use client";

import Image from "next/image";

export default function HasilPekerjaan() {
  const portfolioItems = [
    { src: "/images/hasilpekerjaan/p1.jpg", caption: "Pagar Panel Beton" },
    { src: "/images/hasilpekerjaan/p2.jpg", caption: "Kanstin (Batu Pinggir Jalan)" },
    { src: "/images/hasilpekerjaan/p3.jpg", caption: "Pagar Panel Beton" },
    { src: "/images/hasilpekerjaan/p4.jpg", caption: "Pintu Gerbang" },
    { src: "/images/hasilpekerjaan/p5.jpg", caption: "Pagar Panel Beton" },
    { src: "/images/hasilpekerjaan/p6.jpg", caption: "Paving Block Halaman" },
    { src: "/images/hasilpekerjaan/p7.jpg", caption: "Turap Penahan Tanah" },
    { src: "/images/hasilpekerjaan/p8.jpg", caption: "Perahu Speedboat" },
    { src: "/images/hasilpekerjaan/p9.jpg", caption: "Kerajinan Fiberglass" },
    { src: "/images/hasilpekerjaan/p10.jpg", caption: "Kincir Air Tambak Udang" },
    { src: "/images/hasilpekerjaan/p11.JPG", caption: "Pekerjaan Lainnya" },
  ];

  return (
    <section id="portfolio" className="relative pt-12 pb-16 md:pt-20 md:pb-24 bg-slate-100/90 text-slate-900 overflow-hidden border-b-2 border-slate-300/80">
      {/* Decorative Background Effects */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold tracking-wide uppercase mb-4 shadow-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Contoh Pekerjaan
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
            Hasil Foto Pekerjaan Kami
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Beberapa contoh hasil pemasangan paving block, pagar panel beton, dan produk fiberglass yang sudah kami kerjakan.
          </p>
        </div>

        {/* Grid Layout for Portfolio (2 columns on HP mode) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {portfolioItems.map((item, index) => (
            <a 
              key={index} 
              href={item.src}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-md border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 aspect-square"
              data-aos="fade-up"
              data-aos-delay={(index % 4) * 50}
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="object-contain p-1.5 sm:p-2 transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent opacity-85 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Caption Content */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 transition-transform duration-300">
                <h5 className="text-xs sm:text-base font-bold text-white drop-shadow-md leading-tight line-clamp-2">
                  {item.caption}
                </h5>
                <p className="hidden sm:flex text-slate-200 text-xs mt-1.5 font-semibold items-center gap-1">
                  Lihat Foto
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </p>
              </div>
            </a>
          ))}
        </div>
        
      </div>
    </section>
  );
}
