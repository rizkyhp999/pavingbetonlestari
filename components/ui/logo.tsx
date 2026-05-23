import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group focus:outline-none" aria-label="Beranda Paving Beton Lestari">
      <div className="w-10 h-10 bg-stone-900 text-stone-100 flex items-center justify-center rounded-xl font-bold text-lg shadow-md group-hover:bg-stone-850 transition-colors">
        P
      </div>
      <div className="flex flex-col">
        <span className="font-extrabold text-stone-900 leading-none text-xl tracking-tight">BETON LESTARI</span>
        <span className="text-xs font-semibold text-stone-500 tracking-widest mt-0.5">PAVING BLOCK & PRECAST</span>
      </div>
    </Link>
  );
}
