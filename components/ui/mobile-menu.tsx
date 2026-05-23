"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Tentang Kami", href: "#tentang-kami" },
    { name: "Produk", href: "#produk" },
    { name: "Keunggulan", href: "#keunggulan" },
    { name: "Galeri", href: "#galeri" },
    { name: "FAQ", href: "#faq" },
    { name: "Hubungi Kami", href: "#kontak" },
  ];

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 text-stone-900 rounded-xl bg-stone-100 hover:bg-stone-200 transition-colors focus:outline-none"
        aria-label="Buka Menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-[88px] left-0 right-0 bg-white z-50 flex flex-col p-6 animate-fadeIn shadow-2xl">
          <nav className="flex flex-col grow">
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-2xl font-bold text-stone-800 hover:text-stone-950 p-4 rounded-2xl bg-stone-50 hover:bg-stone-100 transition-all border border-stone-200/50"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-auto pt-6">
              <a
                href="https://wa.me/62811723830?text=Halo%20Paving%20Beton%20Lestari%2C%20saya%20ingin%20bertanya%20mengenai%20produk%20paving%20block..."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold p-5 rounded-2xl flex items-center justify-center gap-3 text-xl shadow-lg transition-all"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.963 3.41 1.47 5.259 1.471h.006c5.786 0 10.493-4.702 10.496-10.492.002-2.805-1.093-5.443-3.082-7.437C17.278 2.701 14.636 1.6 11.83 1.6 6.046 1.6 1.339 6.302 1.336 12.093c-.001 1.955.511 3.868 1.488 5.564L1.87 21.657l4.777-1.253-.001-.001z"/>
                </svg>
                Hubungi via WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
