import Hero from "@/components/hero";
import TentangKami from "@/components/tentang-kami";
import Produk from "@/components/produk";
import KenapaKami from "@/components/kenapa-kami";
import Galeri from "@/components/galeri";
import ProsesProduksi from "@/components/proses-produksi";
import Testimoni from "@/components/testimoni";
import FAQ from "@/components/faq";
import HubungiKami from "@/components/hubungi-kami";

export const metadata = {
  title: "Paving Beton Lestari Lampung - Paving Block & Panel Beton Berkualitas",
  description: "Produsen paving block, pagar panel beton, dan kanstin berkualitas premium standar SNI di Lampung. Terpercaya lebih dari 20 tahun.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TentangKami />
      <Produk />
      <KenapaKami />
      <Galeri />
      <ProsesProduksi />
      <Testimoni />
      <FAQ />
      <HubungiKami />
    </>
  );
}
