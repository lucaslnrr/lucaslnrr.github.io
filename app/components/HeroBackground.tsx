"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const HERO_IMAGES = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
  "/images/img7.jpg",
  "/images/img8.jpg",
  "/images/img9.jpg",
];

const SLIDE_DURATION_MS = 3000;

export default function HeroBackground() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((previous) => (previous + 1) % HERO_IMAGES.length);
    }, SLIDE_DURATION_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <div className="relative h-full w-full">
        {HERO_IMAGES.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            sizes="100vw"
            className={`object-cover transition-opacity duration-[1200ms] ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
            aria-hidden
          />
        ))}
        <div className="absolute inset-0 hero-overlay" />
      </div>
    </div>
  );
}
