"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Arrow from "@/public/icon-arrow.svg";
import Rating from "@/public/rating-stars.svg";

interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Milan Suk",
    text: "Děkuji panu Bc. Františku Šťastníkovi za rychlé a seriózní jednání při prodeji pozemků a lesa. Byl jsem s touto firmou velmi spokojen.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jaroslav Turay",
    text: "Děkuji panu Šťastníkovi za jeho skvělý a profesionální přístup. Rychlý prodej pozemků a jeho zájem o všechny kroky spojené s prodejem mě velmi mile překvapily. Mohu jen doporučit.",
    rating: 5,
  },
  {
    id: 3,
    name: "Petr Holub",
    text: "Děkuji panu Šťastníkovi, že si dokázal poradit, i když situace byla komplikovaná.",
    rating: 5,
  },
  {
    id: 4,
    name: "Kateřina Nováková",
    text: "Se službami pana Šťastníka a společnosti Investuj do pole jsme byli spokojeni. Jednání bylo transparentní a vstřícné, byla zde velká snaha vyhovět našim požadavkům a najít pro nás vhodné řešení. Oceňuji, že nás pan Šťastník průběžně informoval o situaci a věnoval pozornost našim připomínkám a návrhům. Pokud hledáte spolehlivého, poctivého a příjemně vystupujícího zprostředkovatele, pak Vám pana Šťastníka doporučuji.",
    rating: 5,
  },
  {
    id: 5,
    name: "Jitka Rázová",
    text: "Děkujeme panu Františku Šťastníkovi za rychlé vyřízení prodeje polí. Až se dohodneme na dalším prodeji, tak oslovíme vaši firmu. Ještě jednou moc děkujeme. Rázová, Rokosová",
    rating: 5,
  },
  {
    id: 6,
    name: "Honza Vonasek",
    text: "Bezproblémová spolupráce, pan Šťastník nám vyšel vstříc a vše probíhalo dobře. Mohu doporučit.",
    rating: 4,
  },
  {
    id: 7,
    name: "Otto Forman",
    text: "S jednáním, přípravou i realizací obchodu (koupě 7 ha zemědělských pozemků) zprostředkovaného panem Bc. Františkem Šťastníkem (Investujdopole.cz s.r.o.) jsem byl plně spokojen. K oboustranné spokojenosti byly vyřešeny a dohodnuty i nestandardní požadavky účastníků obchodu. Firmu a především makléře pana Šťastníka mohu jen doporučit.",
    rating: 5,
  },
];

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(3);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const previousTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex w-full items-center justify-between gap-4">
        <motion.button
          type="button"
          onClick={previousTestimonial}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={Arrow}
            alt="Přechozí"
            height={20}
            className="rotate-180"
          />
          <span className="sr-only">Předchozí</span>
        </motion.button>

        <motion.div
          key={currentTestimonial.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl text-white"
        >
          {currentTestimonial.name}
        </motion.div>

        <motion.button
          type="button"
          onClick={nextTestimonial}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image src={Arrow} alt="Další" height={20} />
          <span className="sr-only">Další</span>
        </motion.button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="self-stretch text-center text-base text-white">
            {currentTestimonial.text}
          </div>
          <div className="inline-flex items-center justify-center gap-4">
            <div>
              <span className="h-auto text-xl text-white transition-all">
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
        href="https://www.firmy.cz/detail/13625165#hodnoceni"
        className="inline-flex items-center justify-center gap-2.5 p-1.5"
      >
        <span className="text-sm font-normal text-white">
          Zobrazit všechny recenze
        </span>
        <Image src={Arrow} alt="" height={18} />
      </motion.a>
    </div>
  );
}
