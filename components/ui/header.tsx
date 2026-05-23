"use client";

import { useState, useEffect } from "react";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  const scrollHandler = () => {
    window.scrollY > 20 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const navLinks = [
    { name: "Tentang Kami", href: "#tentang-kami" },
    { name: "Produk", href: "#produk" },
    { name: "Keunggulan", href: "#keunggulan" },
    { name: "Galeri", href: "#galeri" },
    { name: "FAQ", href: "#faq" },
    { name: "Hubungi Kami", href: "#kontak" },
  ];

  return (
    <header
      className={`fixed w-full z-40 transition-all duration-300 ${
        !top ? "bg-white/95 backdrop-blur-md shadow-md py-4" : "bg-stone-50/20 py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-1.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-stone-600 hover:text-stone-900 font-bold px-4 py-2.5 rounded-xl transition-all hover:bg-stone-100/60 text-lg"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/62811723830?text=Halo%20Paving%20Beton%20Lestari%2C%20saya%20ingin%20bertanya%20mengenai%20produk%20paving%20block..."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold px-6 py-3.5 rounded-2xl flex items-center gap-2 shadow-sm transition-all transform active:scale-95 text-lg"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.963 3.41 1.47 5.259 1.471h.006c5.786 0 10.493-4.702 10.496-10.492.002-2.805-1.093-5.443-3.082-7.437C17.278 2.701 14.636 1.6 11.83 1.6 6.046 1.6 1.339 6.302 1.336 12.093c-.001 1.955.511 3.868 1.488 5.564L1.87 21.657l4.777-1.253-.001-.001z"/>
              </svg>
              Hubungi Kami
            </a>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
