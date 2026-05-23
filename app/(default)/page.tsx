export const metadata = {
  title: "Beranda",
  description: "Selamat datang di Paving Beton Lestari Lampung. Solusi material konstruksi berkualitas tinggi.",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import HasilPekerjaan from "@/components/hasilpekerjaan";
import FeaturesBlocks from "@/components/features-blocks";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HasilPekerjaan />
      {/* <FeaturesBlocks /> */}
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
    </>
  );
}
