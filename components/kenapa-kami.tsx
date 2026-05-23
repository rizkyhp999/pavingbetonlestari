"use client";

export default function KenapaKami() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-stone-850" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Mutu & Presisi Tinggi",
      description: "Dicetak dengan tekanan hidro-elektrik tinggi sehingga dimensi produk presisi, sudut rapi, dan minim retak.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-stone-850" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      ),
      title: "Daya Serap Air Maksimal",
      description: "Paving block berongga mikro alami yang efektif menyerap genangan air hujan kembali ke dalam tanah secara cepat.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-stone-850" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: "Armada Distribusi Cepat",
      description: "Pengiriman terjadwal dan aman ke seluruh wilayah Lampung dengan logistik angkutan truk pribadi kami.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-stone-850" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Harga Pabrik Bersaing",
      description: "Kami adalah tangan pertama produsen langsung, menjamin harga terbaik tanpa perantara makelar.",
    },
  ];

  return (
    <section id="keunggulan" className="py-24 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1E3F20] font-extrabold uppercase tracking-widest text-sm block mb-4">
            👍 KEUNGGULAN KAMI
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Mengapa Proyek Paving Anda Harus Bermitra Dengan Kami?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-2xl bg-stone-100 flex items-center justify-center shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-950 mb-3">{feature.title}</h3>
                <p className="text-stone-600 text-lg leading-relaxed font-normal">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
