import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  light?: boolean;
}

export default function Logo({ light = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5 focus:outline-none"
      aria-label="PBL - Paving Beton Lestari"
    >
      {/* Black PBL Badge */}
      <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300 bg-black flex items-center justify-center text-white font-black text-sm tracking-widest border border-slate-800">
        <Image
          src="/images/pbl-logo.png"
          alt="PBL Logo"
          fill
          className="object-cover"
        />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`text-base sm:text-lg font-black tracking-tight ${light ? "text-white" : "text-slate-900"} group-hover:text-blue-600 transition-colors`}>
            PAVING BETON
          </span>
          <span className="text-base sm:text-lg font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400">
            LESTARI
          </span>
        </div>
        <span className={`text-[10px] font-bold tracking-wider uppercase mt-0.5 ${light ? "text-slate-400" : "text-slate-500"}`}>
          Lampung
        </span>
      </div>
    </Link>
  );
}
