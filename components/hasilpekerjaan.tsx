"use client";

import Image from "next/image";

export default function HasilPekerjaan() {
  const portfolioItems = [
    { src: "/images/hasilpekerjaan/p1.jpg", caption: "Panel Beton" },
    { src: "/images/hasilpekerjaan/p2.jpg", caption: "Kanstin" },
    { src: "/images/hasilpekerjaan/p3.jpg", caption: "Panel Beton" },
    { src: "/images/hasilpekerjaan/p4.jpg", caption: "Gerbang" },
    { src: "/images/hasilpekerjaan/p5.jpg", caption: "Panel Beton" },
    { src: "/images/hasilpekerjaan/p6.jpg", caption: "Paving Motif" },
    { src: "/images/hasilpekerjaan/p7.jpg", caption: "Turap" },
    { src: "/images/hasilpekerjaan/p8.jpg", caption: "Speedboat" },
    { src: "/images/hasilpekerjaan/p9.jpg", caption: "Fiberglass" },
    { src: "/images/hasilpekerjaan/p10.jpg", caption: "Kincir Air Tambak Udang & Taman Kupu-kupu" },
    { src: "/images/hasilpekerjaan/p11.JPG", caption: "Hasil Pekerjaan Lainnya" },
  ];

  return (
    <section id="portfolio" className="relative pt-8 pb-10 md:pt-16 md:pb-20 bg-slate-100 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-teal-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>



      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-600 text-sm font-semibold tracking-wide uppercase mb-5 shadow-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Portfolio Kami
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Hasil Pekerjaan Terbaik Kami
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Kumpulan proyek paving, panel beton, dan konstruksi fiberglass yang telah sukses kami selesaikan dengan standar kualitas tinggi.
          </p>
        </div>

        {/* Masonry / Grid Layout for Portfolio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {portfolioItems.map((item, index) => (
            <a 
              key={index} 
              href={item.src}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-3xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 aspect-square sm:aspect-[4/3]"
              data-aos="fade-up"
              data-aos-delay={(index % 4) * 100}
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Caption Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-10 h-1 bg-teal-400 mb-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                <h5 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                  {item.caption}
                </h5>
                <p className="text-white/80 text-sm mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 flex items-center gap-1">
                  Lihat Gambar
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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
