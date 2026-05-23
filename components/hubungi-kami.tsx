"use client";

import { useState } from "react";

export default function HubungiKami() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Mohon isi Nama dan Nomor Telepon Anda.");
      return;
    }
    const waText = `Halo Paving Beton Lestari, nama saya ${formData.name} (${formData.phone}). ${formData.message}`;
    const waUrl = `https://wa.me/62811723830?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div id="kontak">
      {/* CTA Banner Section */}
      <section className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-stone-950/20" />
        <div className="relative max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Siap Membangun Jalan yang Lebih Kuat & Rapi?
          </h2>
          <p className="text-stone-300 text-xl font-normal leading-relaxed max-w-2xl mb-10">
            Diskusikan kebutuhan proyek paving block atau precast panel beton Anda secara gratis dengan tim ahli kami sekarang juga.
          </p>
          <a
            href="https://wa.me/62811723830?text=Halo%20Paving%20Beton%20Lestari%2C%20saya%20tertarik%20untuk%20berkonsultasi..."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20ba59] text-white text-xl font-extrabold px-12 py-5 rounded-2xl flex items-center gap-3 shadow-lg transition-all transform active:scale-95 border-2 border-white/20"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.963 3.41 1.47 5.259 1.471h.006c5.786 0 10.493-4.702 10.496-10.492.002-2.805-1.093-5.443-3.082-7.437C17.278 2.701 14.636 1.6 11.83 1.6 6.046 1.6 1.339 6.302 1.336 12.093c-.001 1.955.511 3.868 1.488 5.564L1.87 21.657l4.777-1.253-.001-.001z"/>
            </svg>
            Hubungi Konsultan Kami (Gratis)
          </a>
        </div>
      </section>

      {/* Main Contact & Map Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Details & Form */}
            <div className="lg:col-span-6">
              <span className="text-[#1E3F20] font-extrabold uppercase tracking-widest text-sm block mb-4">
                📞 DETAIL KONTAK
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-8">
                Kunjungi Kantor & Pabrik Kami
              </h2>

              <div className="flex flex-col gap-6 mb-12">
                <div className="flex gap-5 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                  <span className="text-2xl select-none" aria-hidden="true">📍</span>
                  <div>
                    <h3 className="font-bold text-stone-900 text-lg">Alamat Pabrik & Kantor</h3>
                    <p className="text-stone-600 text-base leading-relaxed font-normal mt-1">
                      Jl. Raya Lintas Sumatra, Bandar Lampung, Provinsi Lampung, Indonesia
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                  <span className="text-2xl select-none" aria-hidden="true">🕰️</span>
                  <div>
                    <h3 className="font-bold text-stone-900 text-lg">Jam Kerja Operasional</h3>
                    <p className="text-stone-600 text-base leading-relaxed font-normal mt-1">
                      Senin s.d Sabtu: 08:00 - 17:00 WIB (Minggu Libur)
                    </p>
                  </div>
                </div>
              </div>

              {/* Accessible Form */}
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm flex flex-col gap-6">
                <h3 className="font-bold text-stone-900 text-2xl">Kirim Pesan Penawaran Harga</h3>
                <div>
                  <label htmlFor="name" className="block font-bold text-stone-855 mb-2">Nama Lengkap Anda <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-4 rounded-xl border border-stone-300 text-stone-850 font-normal focus:border-stone-900 focus:ring-1 focus:ring-stone-900 text-lg"
                    placeholder="Contoh: Budi Santoso"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-bold text-stone-855 mb-2">Nomor Telepon / WA <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-4 rounded-xl border border-stone-300 text-stone-850 font-normal focus:border-stone-900 focus:ring-1 focus:ring-stone-900 text-lg"
                    placeholder="Contoh: 081234567890"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-bold text-stone-855 mb-2">Pesan Kebutuhan Anda</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 rounded-xl border border-stone-300 text-stone-850 font-normal focus:border-stone-900 focus:ring-1 focus:ring-stone-900 text-lg"
                    placeholder="Contoh: Saya membutuhkan paving block bata ketebalan 6cm sejumlah 200 meter persegi untuk dikirim ke Metro."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-stone-900 hover:bg-stone-850 text-white font-bold p-5 rounded-2xl flex items-center justify-center gap-2.5 shadow-md active:scale-98 transition-all text-xl"
                >
                  Kirim Pesan Ke WhatsApp
                </button>
              </form>
            </div>

            {/* Google Map Section */}
            <div className="lg:col-span-6 flex flex-col h-full">
              <span className="text-[#1E3F20] font-extrabold uppercase tracking-widest text-sm block mb-4">
                🗺️ LOKASI PABRIK
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-8">
                Peta Terintegrasi Google Maps
              </h2>
              
              <div className="grow w-full h-[450px] lg:h-auto min-h-[400px] rounded-3xl overflow-hidden border border-stone-300 shadow-sm relative">
                <iframe
                  title="Lokasi Pabrik Paving Beton Lestari"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127110.05260195537!2d105.18731557999818!3d-5.419088656641885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40dbcd26bc8f3d%3A0x3f360980fa2a9efd!2sBandar%20Lampung%2C%20Lampung!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
