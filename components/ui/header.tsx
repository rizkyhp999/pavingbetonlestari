"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);
  const pathname = usePathname();

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 transition-all duration-300 ease-in-out ${
        !top ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center gap-1">
              <li>
                <Link
                  href="/"
                  className={`font-medium px-4 py-2 rounded-full flex items-center transition-all duration-200 ${
                    pathname === "/"
                      ? "text-blue-600 bg-slate-50 shadow-sm"
                      : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/paving"
                  className={`font-medium px-4 py-2 rounded-full flex items-center transition-all duration-200 ${
                    pathname === "/paving"
                      ? "text-blue-600 bg-slate-50 shadow-sm"
                      : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  Paving
                </Link>
              </li>
              <li>
                <Link
                  href="/panel"
                  className={`font-medium px-4 py-2 rounded-full flex items-center transition-all duration-200 ${
                    pathname === "/panel"
                      ? "text-blue-600 bg-slate-50 shadow-sm"
                      : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  Panel Beton
                </Link>
              </li>
              <li>
                <Link
                  href="/fiberglass"
                  className={`font-medium px-4 py-2 rounded-full flex items-center transition-all duration-200 ${
                    pathname === "/fiberglass"
                      ? "text-blue-600 bg-slate-50 shadow-sm"
                      : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  Fiberglass
                </Link>
              </li>
              <li>
                <Link
                  href="/lain"
                  className={`font-medium px-4 py-2 rounded-full flex items-center transition-all duration-200 ${
                    pathname === "/lain"
                      ? "text-blue-600 bg-slate-50 shadow-sm"
                      : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  Lainnya
                </Link>
              </li>
              <li className="ml-2">
                <Link
                  href="https://wa.me/62811723830"
                  className="font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg shadow-blue-500/30 px-6 py-2 rounded-full flex items-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
