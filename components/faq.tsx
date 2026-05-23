"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      q: "Berapa minimal jumlah pemesanan paving block di Paving Beton Lestari?",
      a: "Kami melayani pesanan baik untuk skala eceran kecil (halaman rumah) maupun pemesanan skala volume besar (jalan perumahan/industri). Silakan hubungi kami melalui WhatsApp untuk berkonsultasi mengenai kebutuhan jumlah minimal."
    },
    {
      q: "Apakah harga yang tercantum sudah termasuk biaya kirim dan jasa pasang?",
      a: "Harga produk kami adalah harga pabrik (tangan pertama). Biaya pengiriman akan disesuaikan dengan jarak lokasi di wilayah Lampung. Kami juga dapat merekomendasikan tim tukang pasang paving block profesional yang terpercaya."
    },
    {
      q: "Bagaimana cara menentukan ketebalan paving block (6cm vs 8cm) untuk proyek saya?",
      a: "Sebagai panduan mudah: Ketebalan 6 cm sangat ideal untuk area beban ringan (halaman rumah, taman, jalur pedestrian). Sedangkan ketebalan 8 cm direkomendasikan untuk menopang beban berat (jalan perumahan utama, area gudang, halaman parkir truk)."
    },
    {
      q: "Berapa lama proses pembuatan paving block pesanan khusus (custom)?",
      a: "Tergantung volume pesanan dan antrean cetakan. Karena kapasitas mesin press kami yang besar, pesanan standar biasanya siap kirim dalam 3 hingga 7 hari kerja setelah penyerahan tanda jadi."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1E3F20] font-extrabold uppercase tracking-widest text-sm block mb-4">
            ❓ TANYA JAWAB (FAQ)
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Pertanyaan Umum yang Sering Ditanyakan
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-6 sm:p-8 flex justify-between items-center gap-6 font-bold text-stone-950 text-xl sm:text-2xl hover:bg-stone-50 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span className={`text-3xl font-extrabold transition-transform shrink-0 ${isOpen ? "rotate-45" : ""}`}>
                    ＋
                  </span>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 sm:px-8 sm:pb-8 text-stone-600 text-lg leading-relaxed font-normal border-t border-stone-100 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
