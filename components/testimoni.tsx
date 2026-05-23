"use client";

export default function Testimoni() {
  const reviews = [
    {
      text: "“Kualitas paving block bata di Paving Beton Lestari luar biasa keras. Proyek pengaspalan jalan masuk pergudangan kami di Lampung Selatan menggunakan paving 8cm K-300 dari mereka, sudah 3 tahun dilalui truk muatan besar tidak ada yang retak sedikit pun.”",
      author: "Ir. Hermawan Prayogo",
      role: "Kontraktor Utama PT Prima Karya Lampung",
      stars: 5
    },
    {
      text: "“Sangat terbantu dengan pelayanan armada kirimnya. Pesan Grass Block untuk pengerjaan area hijau carport komplek perumahan, semua diantar tepat waktu sesuai timeline. Harganya pun sangat miring karena tangan pertama pabrik.”",
      author: "Ibu Riana Astuti",
      role: "Developer Cluster Lestari Asri",
      stars: 5
    }
  ];

  return (
    <section className="py-24 bg-stone-100 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1E3F20] font-extrabold uppercase tracking-widest text-sm block mb-4">
            ⭐ TESTIMONI PELANGGAN
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Apa Kata Mereka yang Telah Bermitra dengan Kami?
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl border border-stone-200 shadow-sm">
              <div className="flex gap-1.5 mb-6">
                {Array.from({ length: r.stars }).map((_, sIdx) => (
                  <span key={sIdx} className="text-yellow-500 text-2xl select-none" aria-hidden="true">⭐</span>
                ))}
              </div>
              <blockquote className="text-xl sm:text-2xl text-stone-800 leading-relaxed font-medium mb-6">
                {r.text}
              </blockquote>
              <div className="border-t border-stone-150 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <cite className="font-extrabold text-stone-950 text-lg not-italic">{r.author}</cite>
                <span className="text-sm font-bold text-[#1E3F20] uppercase tracking-wider bg-stone-100 px-3 py-1 rounded-full">{r.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
