"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Arrow from "@/public/icon-arrow.svg";
import Rating from "@/public/rating-stars.svg";

interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dagmar",
    text: "Spolupráce s Investujdopole.cz byla pro mě příjemnou a profesionální zkušeností. Oceňuji především jejich lidský přístup, férové jednání a schopnost srozumitelně vysvětlit celý proces obchodu s pozemky.",
    rating: 4.5,
    image: "https://picsum.photos/seed/3/100",
  },
  {
    id: 2,
    name: "Jan",
    text: "Velmi profesionální přístup a skvělá komunikace. Celý proces nákupu pozemku proběhl hladce a bez komplikací. Doporučuji všem, kdo hledají spolehlivého partnera pro investice do pozemků.",
    rating: 5.0,
    image: "https://picsum.photos/seed/2/100",
  },
  {
    id: 3,
    name: "Marie",
    text: "Díky Investujdopole.cz jsem našla perfektní pozemek pro svůj projekt. Jejich expertíza v oblasti realit a individuální přístup ke klientům jsou skutečně na vysoké úrovni.",
    rating: 4.8,
    image: "https://picsum.photos/seed/1/100",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const previousTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const currentTestimonial = testimonials[currentIndex];
  const prevIndex =
    currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
  const nextIndex =
    currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="inline-flex items-center justify-center gap-4">
        <button type="button" onClick={previousTestimonial}>
          <Image
            src={Arrow}
            alt="Přechozí"
            height={22}
            className="rotate-180"
          />
          <span className="sr-only">Předchozí</span>
        </button>

        <div className="relative">
          <div className="flex items-center">
            <motion.img
              initial={{ scale: 0.8, x: 20, y: -10, opacity: 0.5 }}
              animate={{ scale: 1, x: 0, y: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: direction === 1 ? 0 : 0.2,
              }}
              src={testimonials[prevIndex].image}
              className="-mr-8 size-20 rounded-full border-2 border-white shadow-xl"
              alt={testimonials[prevIndex].name}
            />
            <motion.img
              key={currentIndex}
              initial={{ scale: 0.8, x: direction * 40, opacity: 1 }}
              animate={{ scale: 1, x: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.1,
              }}
              className="z-10 size-32 rounded-full border-2 border-white shadow-xl"
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
            />
            <motion.img
              initial={{ scale: 0.8, x: -20, y: -10, opacity: 0.5 }}
              animate={{ scale: 1, x: 0, y: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: direction === -1 ? 0 : 0.2,
              }}
              src={testimonials[nextIndex].image}
              className="-ml-8 size-20 rounded-full border-2 border-white shadow-xl"
              alt={testimonials[nextIndex].name}
            />
          </div>
        </div>

        <button type="button" onClick={nextTestimonial}>
          <Image src={Arrow} alt="Další" height={22} />
          <span className="sr-only">Další</span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: direction * 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -60 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="text-2xl text-white">{currentTestimonial.name}</div>
          <div className="self-stretch text-center text-base text-white">
            {currentTestimonial.text}
          </div>
          <div className="inline-flex items-center justify-center gap-4">
            <div>
              <span className="text-xl text-white">
                {currentTestimonial.rating}
              </span>
              <span className="text-xs font-normal text-[#b4d6a5]">
                /5.0 hodnocení
              </span>
            </div>
            <Image src={Rating} alt="Rating" />
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href=""
        className="inline-flex items-center justify-center gap-2.5 p-1.5"
      >
        <div className="text-sm font-normal text-white">
          Zobrazit všechny recenze
        </div>
        <Image src={Arrow} alt="" height={18} />
      </motion.a>
    </div>
  );
}
