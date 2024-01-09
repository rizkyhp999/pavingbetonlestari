"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import FeaturesBg from "@/public/images/features-bg.png";
import FeaturesElement from "@/public/images/features-element.png";
import { Card, Button, Modal } from "flowbite-react";
export default function Features() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}

      <div className="relative  mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">
              Lebih dari 20 Tahun Menangani Paving, Panel Beton, Fiberglass dan
              Lainnya
            </h1>
            <p className="text-4xl text-bold text-gray-600">
              Hubungi kami :{" "}
              <a
                href="https://wa.me/62811723830"
                className="text-green-800 hover:text-blue-600 "
              >
                0811-723-830
              </a>
            </p>
          </div>
          {/* Section content */}
        </div>
        <div className="flex flex-wrap justify-center">
          <a href="/paving">
            <Card
              className="max-w-sm m-5"
              renderImage={() => (
                <Image
                  width={500}
                  height={500}
                  src="/images/brosur-7.jpg"
                  alt="image 1"
                />
              )}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
                Paving
              </h5>

              <p className="font-normal text-gray-600 text-justify ">
                Lebih dari 20 tahun menangani paving beton. Paving block
                merupakan material konstruksi yang terbuat dari beton atau
                batu-bata bertekstur, dirancang dalam bentuk lempengan persegi
                panjang untuk memudahkan pemasangannya pada permukaan jalan atau
                area luar.
              </p>
            </Card>
          </a>
          <a href="/panel">
            <Card
              className="max-w-sm m-5"
              renderImage={() => (
                <Image
                  width={500}
                  height={500}
                  src="/images/brosur-3.jpg"
                  alt="image 1"
                />
              )}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
                Panel
              </h5>

              <p className="font-normal text-gray-600  text-justify">
                Pagar panel beton, atau dikenal sebagai pagar beton, dibuat dari
                campuran beton cor dengan kualitas terbaik yang dibentuk menjadi
                lempengan persegi panjang. Berfungsi sebagai pembatas lahan
                kosong, pabrik, dan kawasan industri lainnya.
              </p>
            </Card>
          </a>
          <a href="fiberglass">
            <Card
              className="max-w-sm m-5"
              renderImage={() => (
                <Image
                  width={500}
                  height={500}
                  src="/images/brosur-6.jpg"
                  alt="image 1"
                />
              )}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
                Fiberglass
              </h5>

              <p className="font-normal text-gray-600 text-justify">
                Fiberglass merupakan konstruksi yang terbuat dari material serat
                kaca yang dirancang dalam berbagai bentuk untuk keperluan
                tertentu. Misalnya, speedboat untuk transportasi cepat di air,
                bebek-bebekan sebagai mainan atau alat hiburan air, kano untuk
                perahu dayung, dan kincir air untuk pengaturan aliran air di
                tambak udang.
              </p>
            </Card>
          </a>
        </div>
      </div>
    </section>
  );
}
