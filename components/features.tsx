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
            <h1 className="h2 mb-4">Kami Menangani</h1>
            <p className="text-xl text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat.
            </p>
          </div>
          {/* Section content */}
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <Card
            className="max-w-sm m-5"
            renderImage={() => (
              <Image
                width={500}
                height={500}
                src="/images/brosur-5.jpg"
                alt="image 1"
              />
            )}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
              Paving
            </h5>

            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lebih dari 20 tahun menangani paving beton dengan segala ukuran
              dan bentuk.
            </p>
          </Card>
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

            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lebih dari 20 tahun menangani panel beton dengan segala ukuran dan
              bentuk.
            </p>
          </Card>

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

            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lebih dari 20 tahun membuat benda dengan fiberglass
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
