"use client";

import { useState } from "react";

export default function Galeri() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, currentTarget: HTMLDivElement) => {
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX, e.currentTarget);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging && e.buttons !== 1) return;
    handleMove(e.clientX, e.currentTarget);
  };

  const galleryItems = [
    { title: "Paving Bata Taman", loc: "Bandar Lampung", tag: "Taman" },
    { title: "Jalan Kompleks Perumahan", loc: "Metro", tag: "Jalan Utama" },
    { title: "Carport Grass Block Hijau", loc: "Lampung Selatan", tag: "Carport" },
    { title: "Pagar Panel Kokoh", loc: "Lampung Tengah", tag: "Pagar Panel" }
  ];

  return (
    <section id="galeri" className="py-24 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1E3F20] font-extrabold uppercase tracking-widest text-sm block mb-4">
            📸 GALERI PROYEK
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight mb-6">
            Hasil Nyata Pemasangan Paving & Beton Kami
          </h2>
          <p className="text-stone-600 text-xl font-normal leading-relaxed">
            Lihat transformasi jalan tanah berdebu menjadi jalan paving block yang rapi, kuat, bersih, dan bebas genangan air.
          </p>
        </div>

        {/* Before / After Slider Section */}
        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm mb-16">
          <h3 className="text-2xl font-bold text-stone-900 text-center mb-6">Geser atau Sentuh untuk Melihat Perubahan</h3>
          
          <div 
            className="relative h-96 sm:h-[450px] w-full rounded-2xl overflow-hidden select-none cursor-ew-resize border border-stone-300 bg-stone-200"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
          >
            {/* Before Visual (Left) */}
            <div className="absolute inset-0 bg-stone-300 flex items-center justify-center text-stone-600 select-none text-2xl font-extrabold bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800')` }}>
              <div className="bg-stone-900/80 backdrop-blur-sm text-stone-100 px-6 py-3 rounded-xl max-w-xs sm:max-w-none text-center text-base sm:text-xl">
                Jalan Tanah Becek & Berlubang (SEBELUM)
              </div>
            </div>

            {/* After Visual (Right - Clipped) */}
            <div 
              className="absolute inset-0 bg-stone-200 flex items-center justify-center text-stone-850 select-none text-2xl font-extrabold bg-cover bg-center transition-all duration-75"
              style={{ 
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                backgroundImage: `url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800')` 
              }}
            >
              <div className="bg-[#1E3F20]/90 backdrop-blur-sm text-white px-6 py-3 rounded-xl absolute left-8 text-base sm:text-xl">
                Jalan Paving Rapi & Kuat (SESUDAH)
              </div>
            </div>

            {/* Slider Handle (Divider Bar) */}
            <div 
              className="absolute top-0 bottom-0 w-1.5 bg-white cursor-ew-resize flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 bg-stone-950 text-white rounded-full flex items-center justify-center shadow-2xl font-extrabold border-2 border-white select-none">
                ↔
              </div>
            </div>
          </div>
          
          {/* Quick Click Toggles for Senior Users */}
          <div className="flex justify-center gap-6 mt-6">
            <button 
              onClick={() => setSliderPosition(100)} 
              className="px-6 py-3 bg-stone-100 hover:bg-stone-200 border border-stone-300 font-bold rounded-xl text-stone-700 text-base active:scale-95 transition-all"
            >
              Lihat Sebelum
            </button>
            <button 
              onClick={() => setSliderPosition(0)} 
              className="px-6 py-3 bg-[#1E3F20] hover:bg-[#152e17] font-bold rounded-xl text-white text-base active:scale-95 transition-all"
            >
              Lihat Sesudah
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden group">
              <div className="h-48 bg-stone-250 flex items-center justify-center text-4xl select-none group-hover:scale-105 transition-transform duration-300">
                📸
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-[#1E3F20] bg-stone-100 px-3 py-1 rounded-full uppercase tracking-wider block w-fit mb-3">
                  {item.tag}
                </span>
                <h4 className="font-extrabold text-stone-900 text-lg leading-tight mb-1">{item.title}</h4>
                <p className="text-sm text-stone-500 font-semibold">📍 {item.loc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
