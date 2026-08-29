import Image from "next/image";

export const metadata = {
  title: "Paving Beton Terbaik",
  description: "Katalog produk paving beton berkualitas dari Paving Beton Lestari Lampung.",
};

export default function page() {
  const images = [
    "/images/paving/p1.jpg",
    "/images/paving/p2.jpg",
    "/images/paving/p3.jpg",
    "/images/paving/p4.jpg",
    "/images/paving/p5.jpg",
    "/images/paving/p6.jpg",
    "/images/paving/p7.jpg",
    "/images/paving/p8.jpg",
    "/images/paving/p9.jpg",
    "/images/paving/p10.jpg",
    "/images/paving/p11.jpg",
    "/images/paving/p12.jpg",
  ];
  return (
    <section className="relative overflow-hidden bg-white pt-24 md:pt-32 pb-12 md:pb-24">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-50/50 to-teal-50/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-slate-100/80 to-blue-50/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold tracking-wide uppercase mb-5" data-aos="fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Katalog Foto
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight" data-aos="fade-up" data-aos-delay="100">
            Paving Beton <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Lampung</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8" data-aos="fade-up" data-aos-delay="200">
            Paving block presisi dan kuat untuk jalan rumah, pelataran ruko, hingga tempat parkir. Bebas becek, rapi, dan tahan lama.
          </p>
          
          <div data-aos="fade-up" data-aos-delay="300">
            <a href="https://wa.me/62811723830" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 group">
              Hubungi Kami via WhatsApp
              <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Grid Layout for Portfolio (2 columns on mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {images.map((imageSrc, index) => (
            <a 
              key={index} 
              href={imageSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 aspect-square"
              data-aos="fade-up"
              data-aos-delay={(index % 4) * 50}
            >
              <Image
                src={imageSrc}
                alt={`Paving Beton ${index + 1}`}
                fill
                className="object-contain p-1.5 sm:p-2 transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-85 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end">
                <div className="p-3 sm:p-5 w-full">
                  <h3 className="text-white font-bold text-xs sm:text-base leading-tight drop-shadow-md">Paving Block #{index + 1}</h3>
                  <p className="hidden sm:flex text-blue-200 text-xs mt-1 font-medium items-center gap-1">
                    Lihat Foto
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
