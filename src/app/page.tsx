import Btn from "../components/Btn";
import Image from "next/image";
import LogoLight from "@/public/logo--white.svg";
import Arrow from "@/public/icon-arrow.svg";
import Tick from "@/public/icon-tick.svg";
import Mail from "@/public/icon-mail.svg";
import Phone from "@/public/icon-phone.svg";
import Web from "@/public/icon-web.svg";
import Cursor from "@/public/icon-cursor.svg";
import Location from "@/public/icon-location.svg";
import Facebook from "@/public/icon-social-fb.svg";
import Instagram from "@/public/icon-social-ig.svg";
import Linkedin from "@/public/icon-social-in.svg";
import Graph from "@/public/graph.svg";
import Crow from "@/public/crow.svg";
import { TestimonialSlider } from "../components/TestimonialSlider";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 lg:gap-28">
      <Header></Header>

      <section
        data-layer="Hero Container"
        className="HeroContainer container inline-flex flex-col items-center justify-start gap-9 self-center"
      >
        <div className="flex flex-col items-center justify-start gap-6 self-stretch">
          <div className="self-stretch text-center">
            <span className="text-5xl font-bold text-primary-blue lg:text-7xl">
              Poslední perla <br />
              trojských pozemků
              <span className="text-primary-green-light">.</span>
            </span>
          </div>
          <div className="text-muted-foreground text-center text-xl lg:text-2xl">
            Objevte jedinečnou příležitost vlastnit poslední pozemek
            <br /> této velikosti a exkluzivity v Praze-Troji.
          </div>
        </div>
        <Btn
          size="lg"
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
      </section>

      <section
        data-layer="Video"
        className="Video container self-center rounded-2xl"
      >
        {/*TODO VIDEO*/}
        <img
          className="rounded-2xl"
          src="https://placehold.jp/1200x680.png"
          alt=""
        />
      </section>

      <section
        data-layer="Social proof"
        className="SocialProof container grid grid-cols-2 gap-4 self-center md:items-center lg:grid-cols-[1fr_1.4fr_1fr] lg:gap-11"
      >
        <div className="flex flex-col items-center justify-center gap-7 rounded-2xl bg-white p-4 shadow-xl md:p-10">
          <div className="inline-flex items-start justify-start gap-10">
            <div className="inline-flex flex-col items-center justify-start gap-1.5">
              <div>
                <span className="text-2xl font-black text-primary-blue md:text-4xl">
                  20
                </span>
                <span className="text-2xl font-black text-primary-blue-light md:text-4xl">
                  +
                </span>
              </div>
              <div className="text-muted-foreground text-sm font-normal">
                Let zkušeností
              </div>
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-10">
            <div className="inline-flex flex-col items-center justify-start gap-1.5">
              <div>
                <span className="text-2xl font-black text-primary-blue md:text-4xl">
                  Top{" "}
                </span>
                <span className="text-2xl font-black text-primary-blue-light md:text-4xl">
                  9
                </span>
              </div>
              <div className="text-muted-foreground text-sm font-normal">
                Realitní kancelář
              </div>
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-10">
            <div className="inline-flex flex-col items-center justify-start gap-1">
              <div>
                <span className="text-2xl font-black text-primary-blue md:text-4xl">
                  5000
                </span>
                <span className="text-2xl font-black text-primary-blue-light md:text-4xl">
                  +
                </span>
              </div>
              <div className="text-muted-foreground text-sm font-normal">
                Prodaných pozemků
              </div>
            </div>
          </div>
          <a
            href=""
            className="inline-flex items-center justify-center gap-2.5 p-1.5"
          >
            <div className="text-sm font-normal text-primary-blue">
              Více o Investuj do pole
            </div>
            <Image src={Arrow} alt="" height={18} />
          </a>
        </div>
        <div className="order-first col-span-2 flex flex-col items-center justify-center gap-4 self-baseline rounded-2xl bg-gradient-to-b from-primary-blue to-primary-blue-light p-6 py-8 xl:p-12 shadow-2xl lg:order-none lg:col-span-1">
          <TestimonialSlider />
        </div>
        <div className="flex flex-col items-center justify-center gap-8 rounded-2xl bg-white p-4 shadow-xl md:p-10">
          <div className="inline-flex items-center justify-center gap-3.5">
            <div className="text-center text-xl font-normal text-primary-blue">
              Vývoj ceny pozemků
            </div>
          </div>
          {/*TODO graf*/}
          <Image src={Graph} alt="" />
          <div className="inline-flex items-start justify-start gap-6">
            <div className="inline-flex flex-col items-center justify-start gap-1">
              <div className="text-xl font-extrabold text-primary-blue md:text-3xl">
                +50.4 %
              </div>
              <div className="text-xs font-medium text-[#636363]">
                Nárůst ceny
              </div>
            </div>
            <div className="inline-flex flex-col items-center justify-start gap-1">
              <div className="text-xl font-extrabold text-primary-blue md:text-3xl">
                5 let
              </div>
              <div className="text-xs font-medium text-[#636363]">
                za období
              </div>
            </div>
          </div>
          <a
            href=""
            className="inline-flex items-center justify-center gap-2.5 p-1.5"
          >
            <div className="text-sm font-normal text-primary-blue">
              Bližší informace
            </div>
            <Image src={Arrow} alt="" height={18} />
          </a>
        </div>
      </section>

      <section className="container mx-auto flex flex-col items-center gap-12 text-center">
        <div className="flex flex-col items-center gap-2 lg:gap-4">
          <div className="text-xl text-primary-green-light">Nepropásněte</div>
          <div className="text-3xl font-bold text-primary-blue lg:text-5xl">
            Výjimečný pozemek, výjimečná investice
          </div>
          <div className="text-muted-foreground max-w-[580px] text-lg lg:text-xl">
            Tento pozemek o rozloze 6000 m<sup>2</sup> je poslední volnou
            plochou této velikosti v Praze-Troji.
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="col-span-2 flex flex-col items-center lg:col-span-1">
            <img
              src="https://placehold.jp/280x200.png"
              className="w-full rounded-2xl text-5xl shadow"
              alt=""
            />
            <div className="mt-4">
              <span className="block text-2xl font-bold text-primary-blue sm:text-3xl">
                Kouzlo přírody,
              </span>
              <span className="text-lg text-primary-blue md:text-xl">
                kterou si zamilujete!
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://placehold.jp/280x200.png"
              className="w-full rounded-2xl shadow"
              alt=""
            />
            <div className="mt-4">
              <span className="block text-2xl font-bold text-primary-blue md:text-3xl">
                Bohatá historie,
              </span>
              <span className="text-lg text-primary-blue md:text-xl">
                která vypráví příběhy.
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://placehold.jp/280x200.png"
              className="rounded-2xl shadow"
              alt=""
            />
            <div className="mt-4">
              <span className="block text-2xl font-bold text-primary-blue md:text-3xl">
                Luxusní lokalita
              </span>
              <span className="text-lg text-primary-blue md:text-xl">
                jen pár kroků od centra!
              </span>
            </div>
          </div>
        </div>
        <Btn
          iconPosition="right"
          icon={
            <Image src={Location} alt="Flash Icon" width={22} height={23} />
          }
        >
          Chci prestižní adresu
        </Btn>
      </section>

      <section className="container mx-auto flex max-w-[780px] flex-col items-center gap-6 rounded-2xl bg-gradient-to-b from-primary-blue to-primary-blue-light p-8 text-center">
        <Image src={Crow} alt="" className="h-16 w-16" />
        <div>
          <h2 className="text-3xl font-bold text-white">
            Staňte se majitelem této trofejní nemovitosti
            <br />
            <span className="mt-2 text-xl font-normal text-white">
              {" "}
              a využijte neopakovatelné příležitosti!
            </span>
          </h2>
        </div>
        <div className="flex w-full justify-between gap-8">
          <div className="flex items-center gap-3">
            <Image src={Tick} alt="" />
            <span className="text-lg text-white">Poslední pozemek</span>
          </div>
          <div className="flex items-center gap-3">
            <Image src={Tick} alt="" />
            <span className="text-lg text-white">Prestižní lokalita</span>
          </div>
          <div className="flex items-center gap-3">
            <Image src={Tick} alt="" />
            <span className="text-lg text-white">V blízkosti centra</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto flex flex-col gap-12">
        <div className="self-stretch text-center">
          <span className="text-5xl text-primary-blue lg:text-7xl">
            Praha na dlani
          </span>
          <span className="text-5xl text-primary-green-light lg:text-7xl">
            .
          </span>
        </div>
        <img
          src="https://placehold.jp/1200x440.png"
          className="rounded-2xl shadow-xl"
          alt=""
        />
      </section>

      <section className="container mx-auto grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        <div className="flex flex-col justify-center gap-6 rounded-2xl border border-[#e9f4e4] bg-primary-blue p-6 shadow">
          <div className="text-2xl font-medium text-[#b4d6a5] lg:text-4xl">
            Zastavitelná plocha
          </div>
          <div className="text-base text-white lg:text-lg">
            Metropolitní plán
          </div>
        </div>
        <div className="flex flex-col gap-6 rounded-2xl border border-[#e9f4e4] bg-[#e9f4e4] p-4 shadow lg:p-6">
          <div className="relative ml-auto h-14 w-14 rounded-full border border-[#e9f4e4] bg-primary-blue" />
          <div
            data-svg-wrapper
            className="absolute left-[11.05px] top-[10.28px]"
          >
            {/* TODO svg */}
          </div>
          <div>
            <div className="text-2xl text-[#86b870] lg:text-4xl">
              <span className="text-primary-blue">6 055</span>
              <span> m</span>
              <sup>2</sup>
            </div>
            <div className="text-base text-primary-blue lg:text-lg">
              Celková výměra pozemků
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 rounded-2xl border border-[#e9f4e4] bg-[#e9f4e4] p-4 shadow lg:p-6">
          <div className="relative ml-auto h-14 w-14 rounded-full border border-[#e9f4e4] bg-primary-blue" />
          <div
            data-svg-wrapper
            className="absolute left-[11.05px] top-[10.28px]"
          >
            {/* TODO svg */}
          </div>
          <div>
            <div className="text-2xl text-primary-blue lg:text-4xl">Troja</div>
            <div className="text-base text-primary-blue">
              Pražská luxusní lokalita
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 rounded-2xl border border-[#e9f4e4] bg-[#e9f4e4] p-4 shadow lg:p-6">
          <div className="relative ml-auto h-14 w-14 rounded-full border border-[#e9f4e4] bg-primary-blue" />
          <div
            data-svg-wrapper
            className="absolute left-[11.05px] top-[10.28px]"
          >
            {/* TODO svg */}
          </div>
          <div>
            <div className="text-2xl text-primary-blue lg:text-4xl">
              Výstavba RD
            </div>
            <div className="text-base text-primary-blue lg:text-lg">
              Poslední v této lokalitě
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid items-center justify-between gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-10">
          <div className="text-4xl font-bold leading-[1.5]">
            <span className="text-primary-blue-light">Srdce</span>
            <span className="text-primary-blue">
              {" "}
              pražské Troji
              <br /> ve výjimečném sousedství
            </span>
            <span className="text-primary-blue-light">.</span>
          </div>
          <div className="text-muted-foreground text-xl">
            V místě, kde se setkává barokní krása Trojského zámku a přesto
            pouhých deset minut od pulzující metropole, objevíte klenot mezi
            pražskými pozemky.
          </div>
          <div className="flex">
            <Btn
              iconPosition="right"
              icon={
                <Image
                  src="/icon-flash.svg"
                  alt="Flash Icon"
                  width={22}
                  height={23}
                />
              }
            >
              Chci prestižní adresu
            </Btn>
          </div>
        </div>
        <img
          src="https://placehold.jp/590x440.png"
          className="rounded-2xl shadow-md"
          alt=""
        />
      </section>

      <section className="container mx-auto grid items-center justify-between gap-10 lg:grid-cols-2">
        <div className="grid gap-4 lg:gap-12">
          <div className="text-center text-5xl text-primary-blue">
            Centrum na dosah
            <span className="text-5xl text-primary-blue-light">.</span>
          </div>
          <img
            src="https://placehold.jp/590x440.png"
            className="rounded-2xl shadow-md"
            alt=""
          />
        </div>
        <div className="grid gap-4 lg:gap-12">
          <div className="text-center text-5xl text-primary-blue">
            Božský klid
            <span className="text-5xl text-primary-blue-light">.</span>
          </div>
          <img
            src="https://placehold.jp/590x440.png"
            className="rounded-2xl shadow-md"
            alt=""
          />
        </div>
      </section>

      <section className="flex flex-col justify-center bg-primary-blue px-4 py-16 text-center lg:gap-16">
        <div className="grid gap-6">
          <div className="text-5xl">
            <span className="text-white">5 000</span>
            <span className="text-[#b4d6a5]">+</span>
            <span className="text-white"> spokojených klientů</span>
          </div>
          <div className="mx-auto max-w-[1000px] text-xl text-white">
            Spokojenost klientů je pro nás prioritou. Zkušenosti těch, kteří nám
            svěřili své investice a pozemky, dokazují naši odbornost a férový
            přístup. Vaše důvěra nás motivuje být stále lepšími.
          </div>
        </div>
        <div className="grid grid-cols-[1fr_1fr_1fr] items-end justify-items-center gap-4 self-center lg:gap-10">
          <img
            src="https://placehold.jp/290x510.png"
            className="max-h-[460px] rounded-2xl border-[3px] border-transparent"
            alt=""
          />
          <img
            src="https://placehold.jp/290x510.png"
            className="max-h-[510px] rounded-2xl border-[3px] border-white"
            alt=""
          />
          <img
            src="https://placehold.jp/290x510.png"
            className="max-h-[460px] rounded-2xl border-[3px] border-transparent"
            alt=""
          />
        </div>
        <a href="">
          <div className="text-lg text-white">
            Prohlédnout všechny reference
          </div>
          {/*TODO arrow icon*/}
        </a>
      </section>

      <section
        data-layer="Hero Container"
        className="HeroContainer container inline-flex flex-col items-center justify-start gap-8 self-center lg:gap-14"
      >
        <div className="flex flex-col items-center justify-start gap-2 self-stretch lg:gap-6">
          <div className="text-lg uppercase text-[#b4d6a5] lg:text-xl">
            Nepropásněte to!
          </div>
          <div className="self-stretch text-center">
            <span className="text-3xl font-bold text-primary-blue md:text-5xl lg:text-7xl">
              Příležitost, kterou máte jen jednou za život
            </span>
            <span className="text-3xl font-bold text-primary-blue-light md:text-5xl lg:text-7xl">
              .
            </span>
          </div>
        </div>
        <div className="text-muted-foreground text-center text-lg lg:text-2xl">
          Domluvte si prohlídku této výjimečné investiční příležitosti.
        </div>
        <Image src={Arrow} alt="" height={18} className="rotate-90" />
      </section>

      <section className="container mx-auto grid w-full gap-10 rounded-2xl bg-gradient-to-b from-primary-blue to-primary-blue-light p-6 md:p-12 lg:grid-cols-2">
        <div className="flex flex-1 flex-col justify-between gap-6 text-white">
          <div>
            <div className="text-lg uppercase text-[#b4d6a5] md:text-xl">
              Váš realitní makléř
            </div>
            <div className="text-3xl text-white md:text-5xl xl:text-7xl">
              Bc. František <br className="hidden md:block" />
              Šťastník<span className="text-[#b4d6a5]">.</span>
            </div>

            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-3">
                <Image src={Mail} alt="" />
                <a href="mailto:frantisek.stastnik@investujdopole.cz">
                  frantisek.stastnik@investujdopole.cz
                </a>
              </div>
              <div className="inline-flex items-center justify-start gap-3.5 rounded-xl border-2 border-[#b4d6a5] bg-[#b4d6a5]/50 px-5 py-5">
                <Image src={Phone} alt="" />
                <a href="tel:+420775972405">+420 775 972 405</a>
              </div>
              <div className="flex items-center gap-3">
                <Image src={Web} alt="" />
                <a href="https://www.investujdopole.cz/">Investujdopole.cz</a>
              </div>
            </div>
          </div>
          <div className="mt-4 flex gap-4">
            <a href="">
              <Image src={Facebook} alt="" />
            </a>
            <a href="">
              <Image src={Instagram} alt="" />
            </a>
            <a href="">
              <Image src={Linkedin} alt="" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-6 rounded-2xl bg-white p-6 text-primary-blue shadow-md lg:p-8">
          <h3 className="text-3xl font-bold text-primary-blue lg:text-5xl">
            Kontaktujte mě.
          </h3>
          <input
            type="text"
            placeholder="Jméno Příjmení"
            className="border-b p-2 text-primary-blue placeholder-[#757575] outline-none"
          />
          <input
            type="text"
            placeholder="Telefonní číslo"
            className="border-b p-2 outline-none"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="border-b p-2 outline-none"
          />
          <textarea
            placeholder="Vaše zpráva"
            className="min-h-[100px] rounded-lg border p-2 outline-none"
          ></textarea>
          <div className="self-center">
            <Btn
              iconPosition="left"
              icon={
                <Image src={Cursor} alt="Flash Icon" width={22} height={23} />
              }
            >
              Odeslat zprávu
            </Btn>
          </div>
        </div>
      </section>

      <footer className="bg-primary-blue py-4">
        <div className="container mx-auto">
          <div className="my-8 grid grid-cols-5 gap-8">
            <div className="col-span-2 space-y-4 text-white">
              <a href="https://www.investujdopole.cz/">
                <Image
                  src={LogoLight}
                  alt="Logo Investuj do pole"
                  height={42}
                />
              </a>
              <a className="flex text-2xl" href="mailto:info@investujdopole.cz">
                info@investujdopole.cz
              </a>
              <a className="text-2xl" href="tel:+420775972405">
                <span className="text-[#b4d6a5]">+420</span> 775 972 405
              </a>
            </div>
            <ul className="grid gap-1">
              <li className="text-lg text-white">O společnosti.</li>
              <li>
                <a href="" className="block py-2 text-[#afbbd4]">
                  O nás
                </a>
              </li>
              <li>
                <a href="" className="block py-2 text-[#afbbd4]">
                  Naše nabídka
                </a>
              </li>
              <li>
                <a href="" className="block py-2 text-[#afbbd4]">
                  Kontakt
                </a>
              </li>
            </ul>
            <ul className="grid gap-1">
              <li className="text-lg text-white">Vzdělávání.</li>
              <li>
                <a href="" className="block py-2 text-[#afbbd4]">
                  Blog
                </a>
              </li>
              <li>
                <a href="" className="block py-2 text-[#afbbd4]">
                  Webinář
                </a>
              </li>
              <li>
                <a href="" className="block py-2 text-[#afbbd4]">
                  Newsletter
                </a>
              </li>
            </ul>
            <ul className="grid gap-1">
              <li className="text-lg text-white">Sledujte nás.</li>
              <li>
                <a href="" className="block py-2 text-[#afbbd4]">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="" className="block py-2 text-[#afbbd4]">
                  Facebook
                </a>
              </li>
              <li>
                <a href="" className="block py-2 text-[#afbbd4]">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-between gap-4 border-t border-slate-600 pt-4">
            <div className="flex gap-2 text-white">
              <a
                href="https://www.investujdopole.cz/"
                className="hover:underline"
              >
                Investujdopole.cz
              </a>
              <span className="text-muted-foreground">|</span>
              <a href="#" className="hover:underline">
                Zásady ochrany osobních údajů (GDPR)
              </a>
              <span className="text-muted-foreground">|</span>
              <a href="#" className="hover:underline">
                Zásady cookies
              </a>
            </div>
            <div className="text-[#afbbd4]">© Investujdopole s.r.o., 2025</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
