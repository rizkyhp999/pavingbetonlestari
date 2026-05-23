import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 py-16 border-t border-stone-850">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-12">
          
          <div className="md:col-span-6 flex flex-col gap-4">
            <Logo />
            <p className="text-stone-400 text-base leading-relaxed max-w-sm font-normal mt-2">
              Produsen paving block, kanstin, dan panel beton berkualitas tinggi standar pabrikan. Berkomitmen membangun infrastruktur Lampung yang awet dan rapi sejak lebih dari 20 tahun.
            </p>
          </div>

          <div className="md:col-span-6 grid grid-cols-2 gap-8 text-base">
            <div>
              <h3 className="font-extrabold text-white text-lg mb-4">Navigasi Utama</h3>
              <ul className="flex flex-col gap-3 font-normal">
                <li><a href="#tentang-kami" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#produk" className="hover:text-white transition-colors">Katalog Produk</a></li>
                <li><a href="#keunggulan" className="hover:text-white transition-colors">Keunggulan</a></li>
                <li><a href="#galeri" className="hover:text-white transition-colors">Galeri Proyek</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-extrabold text-white text-lg mb-4">Tautan Penting</h3>
              <ul className="flex flex-col gap-3 font-normal">
                <li><a href="#faq" className="hover:text-white transition-colors">Pertanyaan FAQ</a></li>
                <li><a href="#kontak" className="hover:text-white transition-colors">Kontak & Lokasi</a></li>
                <li><a href="https://wa.me/62811723830" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-bold hover:underline">Chat via WhatsApp</a></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="border-t border-stone-850 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-500 font-semibold">
          <p>© {new Date().getFullYear()} Paving Beton Lestari. Seluruh Hak Cipta Dilindungi Undang-Undang.</p>
          <p className="text-xs">Bandar Lampung, Provinsi Lampung, Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
