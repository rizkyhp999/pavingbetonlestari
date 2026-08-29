"use client";

import Image from "next/image";
import AnimatedBackground from "./animated-background";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-100/90 pt-20 pb-8 md:pt-28 md:pb-16 border-b-2 border-slate-200/80">
      <AnimatedBackground />
      {/* Background decorative blobs */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100/40 to-teal-100/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-teal-100/30 to-blue-50/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Text & CTA Buttons */}
          <div className="lg:col-span-6 text-left flex flex-col items-start" data-aos="fade-right">
            {/* Heading */}
            <h1 className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.1] text-slate-900 pb-2">
              Paving Beton Lestari{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400">
                Lampung
              </span>
            </h1>

            {/* Mobile View: Hero Image (No text overlay) */}
            <div className="block lg:hidden w-full my-6 relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 group">
              <div className="relative h-64 sm:h-80 w-full">
                <Image
                  src="/images/brosur-3.jpg"
                  alt="Paving Beton Lestari"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>

            {/* Tagline */}
            <p className="mt-3 md:mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Kami menyediakan paving block, panel beton, dan pagar beton yang kuat, rapi, dan tahan lama. Siap mempercantik dan memperkokoh halaman rumah serta bangunan Anda.
            </p>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8 w-full sm:w-auto">
              <a
                href="#produk"
                className="group inline-flex justify-center items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-200 transition-all duration-200 hover:scale-105 hover:shadow-blue-300 w-full sm:w-auto"
              >
                Lihat Produk
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="https://wa.me/62811723830"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-7 py-3.5 rounded-xl border border-slate-200 shadow-sm transition-all duration-200 hover:scale-105 w-full sm:w-auto"
              >
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.112.544 4.101 1.497 5.836L.057 23.854A.75.75 0 0 0 .902 24l6.162-1.615A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75A9.75 9.75 0 1 1 12 2.25a9.75 9.75 0 0 1 0 19.5z" />
                </svg>
                Hubungi Kami
              </a>
            </div>
          </div>

          {/* RIGHT: Image Showcase for Desktop (Clean without text overlay) */}
          <div className="hidden lg:flex lg:col-span-6 relative items-center justify-center lg:justify-end mt-6 lg:mt-0" data-aos="fade-left">
            {/* SVG Dot grid background */}
            <div className="absolute -top-8 -right-8 w-40 h-40 text-blue-200/50 -z-10 pointer-events-none hidden md:block">
              <svg className="w-full h-full" fill="currentColor">
                <defs>
                  <pattern id="dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="2" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dots)" />
              </svg>
            </div>

            {/* Hero Image Container */}
            <div className="w-full max-w-lg relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 group bg-white p-2.5">
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/brosur-3.jpg"
                  alt="Paving Beton Lestari"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM: Horizontal Stats section */}
        <div
          className="hidden md:grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mt-12 md:mt-16 pt-8 border-t border-slate-100 w-full"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {[
            {
              value: "20+",
              label: "Tahun Pengalaman",
              icon: (
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              ),
            },
            {
              value: "500+",
              label: "Pekerjaan Selesai",
              icon: (
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
            },
            {
              value: "100%",
              label: "Hasil Rapi & Kuat",
              icon: (
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              ),
            },
          ].map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="flex-shrink-0 p-3 bg-blue-50 rounded-2xl border border-blue-100">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-slate-900 tracking-tight leading-none">
                  {stat.value}
                </span>
                <span className="text-sm text-slate-500 font-medium mt-1.5">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}