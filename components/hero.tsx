"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-stone-100 overflow-hidden pt-28 pb-16">
      {/* Dynamic Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 pointer-events-none filter brightness-95 opacity-[0.08]"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=1200')` }}
      />
      
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50/80 via-stone-50/10 to-stone-50" />

      <div className="relative max-w-5xl mx-auto px-6 text-center z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          {/* Tagline */}
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-stone-200/60 border border-stone-300/40 text-stone-800 rounded-full font-bold text-sm sm:text-base mb-6 tracking-wide uppercase">
            🛡️ Jaminan Kualitas Premium
          </span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.15] mb-6 max-w-4xl">
            Paving Berkualitas untuk Jalan yang Lebih Kuat dan Rapi
          </h1>

          {/* Supporting Text */}
          <p className="text-xl sm:text-2xl text-stone-600 font-medium leading-relaxed max-w-3xl mb-10">
            Produsen terpercaya lebih dari 20 tahun di Lampung. Kami mencetak paving block & pagar panel beton berkualitas SNI dengan daya tahan maksimal untuk perumahan, taman, dan kawasan industri.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full max-w-md sm:max-w-none mb-14">
            <a
              href="https://wa.me/62811723830?text=Halo%20Paving%20Beton%20Lestari%2C%20saya%20ingin%20tahu%20harga%20dan%20jenis%20paving%20block..."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white text-xl font-extrabold px-10 py-5 rounded-2xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all transform active:scale-95"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.963 3.41 1.47 5.259 1.471h.006c5.786 0 10.493-4.702 10.496-10.492.002-2.805-1.093-5.443-3.082-7.437C17.278 2.701 14.636 1.6 11.83 1.6 6.046 1.6 1.339 6.302 1.336 12.093c-.001 1.955.511 3.868 1.488 5.564L1.87 21.657l4.777-1.253-.001-.001z"/>
              </svg>
              Hubungi Kami Sekarang
            </a>
            <a
              href="#produk"
              className="bg-stone-900 hover:bg-stone-850 text-white text-xl font-bold px-10 py-5 rounded-2xl flex items-center justify-center border border-stone-800 transition-all transform active:scale-95 shadow-sm"
            >
              Lihat Katalog Produk
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 border-t border-stone-300/40 w-full pt-10 text-left">
            <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm p-5 rounded-2xl border border-stone-200/30">
              <div className="w-12 h-12 rounded-xl bg-stone-900 text-stone-100 flex items-center justify-center font-extrabold text-xl shrink-0">
                20+
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-lg">Bertahun Pengalaman</h3>
                <p className="text-sm text-stone-500 font-semibold">Melayani pembangunan Lampung</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm p-5 rounded-2xl border border-stone-200/30">
              <div className="w-12 h-12 rounded-xl bg-stone-900 text-stone-100 flex items-center justify-center font-extrabold text-xl shrink-0">
                SNI
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-lg">Kualitas Terjamin</h3>
                <p className="text-sm text-stone-500 font-semibold">Bahan pilihan standar SNI</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm p-5 rounded-2xl border border-stone-200/30">
              <div className="w-12 h-12 rounded-xl bg-stone-900 text-stone-100 flex items-center justify-center font-extrabold text-xl shrink-0">
                ⚙️
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-lg">Pengerjaan Profesional</h3>
                <p className="text-sm text-stone-500 font-semibold">Mesin press hidrolik modern</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}