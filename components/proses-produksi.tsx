"use client";

export default function ProsesProduksi() {
  const steps = [
    {
      num: "01",
      title: "Penyortiran Agregat Pilihan",
      desc: "Kami menyeleksi pasir silika tajam bebas lumpur, abu batu murni, dan semen PCC berkualitas tinggi sebagai fondasi beton kokoh."
    },
    {
      num: "02",
      title: "Pengepresan Tekanan Hidrolik",
      desc: "Campuran dicetak menggunakan mesin press hidrolik modern dengan tekanan tonase tinggi untuk hasil padat tanpa rongga udara."
    },
    {
      num: "03",
      title: "Curing (Pengeringan Alami)",
      desc: "Hasil cetakan disimpan dalam ruang curing terlindung suhu stabil agar hidrasi semen berjalan sempurna hingga matang dan siap pakai."
    }
  ];

  return (
    <section className="py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1E3F20] font-extrabold uppercase tracking-widest text-sm block mb-4">
            ⚙️ PROSES PRODUKSI
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Bagaimana Kami Menjamin Kualitas Beton Setiap Cetakan?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm relative">
              <span className="absolute top-6 right-8 font-extrabold text-5xl text-stone-200 select-none">
                {s.num}
              </span>
              <h3 className="text-2xl font-bold text-stone-950 mb-4 pr-12">{s.title}</h3>
              <p className="text-stone-600 text-lg leading-relaxed font-normal">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
