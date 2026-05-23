"use client";

export default function Produk() {
  const products = [
    {
      title: "Paving Block Bata",
      desc: "Model paving block paling populer dan klasik. Sangat mudah disusun dan fleksibel untuk berbagai rancangan pola.",
      specs: [
        { name: "Ketebalan", val: "6 cm / 8 cm" },
        { name: "Kekuatan", val: "K-200 s.d K-300" },
        { name: "Aplikasi", val: "Jalan Kompleks, Halaman, Taman" }
      ],
      emoji: "🧱"
    },
    {
      title: "Paving Block Segienam (Hexagon)",
      desc: "Mengunci sangat erat antar sudutnya. Memberikan estetika jalanan berpola sarang lebah yang kokoh dan indah.",
      specs: [
        { name: "Ketebalan", val: "6 cm / 8 cm" },
        { name: "Kekuatan", val: "K-200 s.d K-250" },
        { name: "Aplikasi", val: "Halaman Parkir, Trotoar, Jalan Kampung" }
      ],
      emoji: "🛑"
    },
    {
      title: "Grass Block (Paving Rumput)",
      desc: "Paving berlubang besar yang dapat ditumbuhi rumput alami. Cocok bagi area hijau serapan air maksimal.",
      specs: [
        { name: "Ketebalan", val: "8 cm (5 lubang / 8 lubang)" },
        { name: "Kekuatan", val: "K-200" },
        { name: "Aplikasi", val: "Taman Rumah, Carport Hijau, Gazebo" }
      ],
      emoji: "🌱"
    },
    {
      title: "Kanstin Beton (Pembatas)",
      desc: "Beton pembatas pinggiran jalan paving block agar susunan paving terkunci rapat dan tidak bergeser.",
      specs: [
        { name: "Model", val: "Kanstin Taman / Kanstin Jalan" },
        { name: "Kekuatan", val: "K-250" },
        { name: "Aplikasi", val: "Batas Jalan, Bahu Jalan Kompleks" }
      ],
      emoji: "📐"
    },
    {
      title: "Pagar Panel Beton Precast",
      desc: "Pagar pelindung properti cepat pasang yang dicetak presisi. Sangat awet, kuat, kokoh, dan tahan benturan.",
      specs: [
        { name: "Ukuran", val: "240 x 40 x 5 cm" },
        { name: "Tiang Kolom", val: "Sesuai tinggi pagar" },
        { name: "Aplikasi", val: "Pembatas Kebun, Gudang, Perumahan" }
      ],
      emoji: "🚧"
    }
  ];

  return (
    <section id="produk" className="py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1E3F20] font-extrabold uppercase tracking-widest text-sm block mb-4">
            🏗️ KATALOG PRODUK
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight mb-6">
            Pilihan Material Beton Pracetak Kuat & Bergaransi
          </h2>
          <p className="text-stone-600 text-xl font-normal leading-relaxed">
            Diproduksi dengan bahan baku pilihan berkualitas dan pengawasan ketat untuk menghasilkan daya tahan beton terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div 
              key={i} 
              className="bg-white rounded-3xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
            >
              {/* Product Visual Area */}
              <div className="h-48 bg-stone-100 flex items-center justify-center text-7xl select-none">
                {p.emoji}
              </div>

              {/* Product Info */}
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-stone-950 mb-3">{p.title}</h3>
                <p className="text-stone-600 text-base leading-relaxed mb-6 font-normal">{p.desc}</p>
                
                {/* Specifications Grid */}
                <div className="border-t border-stone-100 pt-6 flex flex-col gap-3.5">
                  {p.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex justify-between items-baseline gap-4 text-base">
                      <span className="font-semibold text-stone-500 shrink-0">{spec.name}:</span>
                      <span className="font-bold text-stone-850 text-right">{spec.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Action Button */}
              <div className="px-8 pb-8 pt-2">
                <a
                  href={`https://wa.me/62811723830?text=Halo%20Paving%20Beton%20Lestari%2C%20saya%20tertarik%20tanya%20dan%20pesan%20produk%20${encodeURIComponent(p.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white text-lg font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-2.5 transition-all transform active:scale-95 shadow-sm"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.963 3.41 1.47 5.259 1.471h.006c5.786 0 10.493-4.702 10.496-10.492.002-2.805-1.093-5.443-3.082-7.437C17.278 2.701 14.636 1.6 11.83 1.6 6.046 1.6 1.339 6.302 1.336 12.093c-.001 1.955.511 3.868 1.488 5.564L1.87 21.657l4.777-1.253-.001-.001z"/>
                  </svg>
                  Tanya Paving Ini
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
