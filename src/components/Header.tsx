"use client";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import Btn from "./Btn";
import { useState } from "react";
import { cn } from "../lib/utils";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="container relative mx-auto flex w-full items-center justify-between p-6">
      {/* Logo */}
      <a href="https://www.investujdopole.cz/">
        <Image src={Logo} alt="Logo Investuj do pole" width={180} />
      </a>

      {/* Reused nav for both desktop & mobile */}
      <nav
        className={cn(
          "flex w-full flex-col items-center gap-4 bg-white p-6 max-lg:absolute max-lg:left-0 max-lg:top-full max-lg:rounded-lg max-lg:shadow-xl lg:flex-row",
          {
            "max-lg:hidden": !mobileNavOpen,
          },
        )}
      >
        <ul className="text-muted-foreground mx-auto flex flex-col items-center gap-2 text-center text-base font-normal lg:flex-row">
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
      </nav>

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
