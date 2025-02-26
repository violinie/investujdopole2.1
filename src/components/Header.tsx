"use client";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import Btn from "./Btn";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileNavOpen(false);
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="container relative mx-auto flex w-full items-center justify-between p-6">
      {/* Logo */}

      <AnimatePresence>
        <motion.a
          key="logo"
          href="/"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Image
            src={Logo}
            alt="Logo Investuj do pole"
            width={240}
            className="w-40 sm:w-44 lg:w-60"
          />
        </motion.a>
        {(!isMobile || mobileNavOpen) && (
          <motion.nav
            key="nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={cn(
              "z-30 flex w-full flex-col items-center gap-4 bg-white p-6 max-lg:absolute max-lg:left-0 max-lg:top-full max-lg:rounded-lg max-lg:shadow-xl lg:flex-row",
              {
                "max-lg:hidden": !mobileNavOpen,
              },
            )}
          >
            <ul className="mx-auto flex flex-col items-center gap-2 text-center text-base font-normal text-muted-foreground lg:flex-row">
              <li>
                <a href="#" className="block p-3 hover:text-gray-900">
                  Vyjímečný pozemek
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 hover:text-gray-900">
                  O nás
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 hover:text-gray-900">
                  Reference
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 hover:text-gray-900">
                  Kontakt
                </a>
              </li>
            </ul>
            <Btn
              iconPosition="left"
              icon={
                <Image
                  src="/icon-flash.svg"
                  alt="Flash Icon"
                  width={22}
                  height={23}
                />
              }
            >
              Chci poslední pozemek
            </Btn>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Hamburger button for mobile */}
      <button
        className="lg:hidden"
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </header>
  );
}
