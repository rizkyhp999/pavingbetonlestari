"use client";

export default function TentangKami() {
  return (
    <section id="tentang-kami" className="py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <span className="text-[#1E3F20] font-extrabold uppercase tracking-widest text-sm block mb-4">
              ✨ PROFIL PERUSAHAAN
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight mb-8">
              Penyedia Beton & Paving Block Terbaik di Lampung
            </h2>
            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed mb-6 font-medium">
              Didirikan dengan tujuan memperkokoh infrastruktur jalanan di Lampung, <strong>Paving Beton Lestari</strong> telah memproduksi material berkualitas tinggi selama lebih dari 20 tahun.
            </p>
            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed font-normal">
              Kami menggabungkan mesin press hidrolik modern dengan agregat material pilihan guna melahirkan produk paving block dan pagar panel beton yang presisi, tahan tekanan tinggi, dan berdaya serap air sangat baik untuk iklim tropis.
            </p>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
              <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center mb-6 text-3xl">
                🏭
              </div>
              <h3 className="font-bold text-stone-900 text-xl mb-3">Pabrik Mandiri</h3>
              <p className="text-stone-600 text-lg leading-relaxed font-normal">
                Pabrik manufaktur luas yang berlokasi strategis di Lampung dengan kapasitas produksi massal harian.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
              <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center mb-6 text-3xl">
                🚜
              </div>
              <h3 className="font-bold text-stone-900 text-xl mb-3">Armada Sendiri</h3>
              <p className="text-stone-600 text-lg leading-relaxed font-normal">
                Didukung oleh belasan armada truk pengirim untuk menjamin ketepatan waktu proyek Anda di seluruh area Lampung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
