import Btn from "../components/Btn";
import Image from "next/image";
import Logo from "@/public/logo.svg";
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
import TestimonialSlider from "../components/TestimonialSlider";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="flex flex-col gap-[120px]">
      <Header></Header>

      <section
        data-layer="Hero Container"
        className="HeroContainer container inline-flex flex-col items-center justify-start gap-9 self-center"
      >
        <div className="flex flex-col items-center justify-start gap-6 self-stretch">
          <div className="self-stretch text-center">
            <span className="text-7xl font-bold text-primary-blue">
              Poslední perla <br />
              trojských pozemků
            </span>
            <span className="text-7xl font-bold text-primary-blue-light">
              .
            </span>
          </div>
          <div className="text-muted-foreground text-center text-2xl">
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
        className="SocialProof container grid grid-cols-[1fr_1.4fr_1fr] gap-11 self-center"
      >
        <div className="flex flex-col items-center justify-center gap-7 self-center self-baseline rounded-2xl bg-white p-10 shadow-xl">
          <div className="inline-flex items-start justify-start gap-10">
            <div className="inline-flex flex-col items-center justify-start gap-1.5">
              <div>
                <span className="text-4xl font-black text-primary-blue">
                  20
                </span>
                <span className="font-['Noto Sans'] text-4xl font-black leading-10 text-primary-blue-light">
                  +
                </span>
              </div>
              <div className="text-sm font-normal text-[#636363]">
                Let zkušeností
              </div>
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-10">
            <div className="inline-flex flex-col items-center justify-start gap-1.5">
              <div>
                <span className="text-4xl font-black text-primary-blue">
                  Top{" "}
                </span>
                <span className="font-['Noto Sans'] text-4xl font-black leading-10 text-primary-blue-light">
                  9
                </span>
              </div>
              <div className="text-sm font-normal text-[#636363]">
                Realitní kancelář
              </div>
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-10">
            <div className="inline-flex flex-col items-center justify-start gap-1">
              <div>
                <span className="text-4xl font-black text-primary-blue">
                  5000
                </span>
                <span className="font-['Noto Sans'] text-4xl font-black leading-10 text-primary-blue-light">
                  +
                </span>
              </div>
              <div className="text-sm font-normal text-[#636363]">
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
        <div className="row-span-2 flex flex-col items-center justify-center gap-4 self-baseline rounded-2xl bg-gradient-to-b from-primary-blue to-primary-blue-light p-12 shadow-2xl">
          <TestimonialSlider />
        </div>
        <div className="flex flex-col items-center justify-center gap-8 self-center self-baseline rounded-2xl bg-white p-10 shadow-xl">
          <div className="inline-flex items-center justify-center gap-3.5">
            <div className="text-center text-xl font-normal text-primary-blue">
              Vývoj ceny pozemků
            </div>
          </div>
          {/*TODO graf*/}
          <Image src={Graph} alt="" />
          <div className="inline-flex items-start justify-start gap-6">
            <div className="inline-flex flex-col items-center justify-start gap-1">
              <div className="text-3xl font-extrabold text-primary-blue">
                +50.4 %
              </div>
              <div className="text-xs font-medium text-[#636363]">
                Nárůst ceny
              </div>
            </div>
            <div className="inline-flex flex-col items-center justify-start gap-1">
              <div className="text-3xl font-extrabold text-primary-blue">
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
        <div className="flex flex-col items-center gap-6">
          <div className="text-xl text-[#b4d6a5]">Nepropásněte</div>
          <div className="text-5xl font-bold text-primary-blue">
            Výjimečný pozemek, výjimečná investice
          </div>
          <div className="text-muted-foreground max-w-[580px] text-xl">
            Tento pozemek o rozloze 6000 m<sup>2</sup> je poslední volnou
            plochou této velikosti v Praze-Troji.
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img
              src="https://placehold.jp/280x200.png"
              className="rounded-2xl shadow"
              alt=""
            />
            <div className="mt-4">
              <span className="block text-3xl font-bold text-primary-blue">
                Kouzlo přírody,
              </span>
              <span className="text-xl text-primary-blue">
                kterou si zamilujete!
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
              <span className="block text-3xl font-bold text-primary-blue">
                Bohatá historie,
              </span>
              <span className="text-xl text-primary-blue">
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
              <span className="block text-3xl font-bold text-primary-blue">
                Luxusní lokalita
              </span>
              <span className="text-xl text-primary-blue">
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
          <span className="text-7xl text-primary-blue">Praha na dlani</span>
          <span className="text-7xl text-primary-blue-light">.</span>
        </div>
        <img
          src="https://placehold.jp/1200x440.png"
          className="rounded-2xl shadow-xl"
          alt=""
        />
      </section>

      <section className="container mx-auto grid grid-cols-4 gap-6">
        <div className="flex flex-col justify-center gap-6 rounded-2xl border border-[#e9f4e4] bg-primary-blue p-6 shadow">
          <div className="text-4xl text-[#b4d6a5]">Zastavitelná plocha</div>
          <div className="text-lg text-white">Metropolitní plán</div>
        </div>
        <div className="flex flex-col gap-6 rounded-2xl border border-[#e9f4e4] bg-[#e9f4e4] p-6 shadow">
          <div className="relative ml-auto h-14 w-14 rounded-full border border-[#e9f4e4] bg-primary-blue" />
          <div
            data-svg-wrapper
            className="absolute left-[11.05px] top-[10.28px]"
          >
            {/* TODO svg */}
          </div>
          <div>
            <div className="text-4xl text-[#86b870]">
              <span className="text-4xl text-primary-blue">6 055</span>
              <span> m</span>
              <sup>2</sup>
            </div>
            <div className="text-lg text-primary-blue">
              Celková výměra pozemků
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 rounded-2xl border border-[#e9f4e4] bg-[#e9f4e4] p-6 shadow">
          <div className="relative ml-auto h-14 w-14 rounded-full border border-[#e9f4e4] bg-primary-blue" />
          <div
            data-svg-wrapper
            className="absolute left-[11.05px] top-[10.28px]"
          >
            {/* TODO svg */}
          </div>
          <div>
            <div className="text-4xl text-primary-blue">Troja</div>
            <div className="text-lg text-primary-blue">
              Pražská luxusní lokalita
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 rounded-2xl border border-[#e9f4e4] bg-[#e9f4e4] p-6 shadow">
          <div className="relative ml-auto h-14 w-14 rounded-full border border-[#e9f4e4] bg-primary-blue" />
          <div
            data-svg-wrapper
            className="absolute left-[11.05px] top-[10.28px]"
          >
            {/* TODO svg */}
          </div>
          <div>
            <div className="text-4xl text-primary-blue">Výstavba RD</div>
            <div className="text-lg text-primary-blue">
              Poslední v této lokalitě
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid grid-cols-2 items-center justify-between gap-10">
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

      <section className="container mx-auto grid grid-cols-2 items-center justify-between gap-10">
        <div className="grid gap-12">
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
        <div className="grid gap-12">
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

      <section className="flex flex-col justify-center gap-16 bg-primary-blue py-16 text-center">
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
        <div className="grid grid-cols-[1fr_1fr_1fr] items-end justify-items-center gap-11 self-center">
          <img
            src="https://placehold.jp/290x510.png"
            className="max-h-[460px] rounded-2xl"
            alt=""
          />
          <img
            src="https://placehold.jp/290x510.png"
            className="max-h-[510px] rounded-2xl border-[3px] border-white"
            alt=""
          />
          <img
            src="https://placehold.jp/290x510.png"
            className="max-h-[460px] rounded-2xl"
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
        className="HeroContainer container inline-flex flex-col items-center justify-start gap-14 self-center"
      >
        <div className="flex flex-col items-center justify-start gap-6 self-stretch">
          <div className="text-xl uppercase text-[#b4d6a5]">
            Nepropásněte to!
          </div>
          <div className="self-stretch text-center">
            <span className="text-7xl font-bold text-primary-blue">
              Příležitost, kterou máte jen jednou za život
            </span>
            <span className="text-7xl font-bold text-primary-blue-light">
              .
            </span>
          </div>
        </div>
        <div className="text-muted-foreground text-center text-2xl">
          Domluvte si prohlídku této výjimečné investiční příležitosti.
        </div>
        <Image src={Arrow} alt="" height={18} className="rotate-90" />
      </section>

      <section className="container mx-auto grid w-full grid-cols-2 gap-10 rounded-2xl bg-gradient-to-b from-primary-blue to-primary-blue-light p-12">
        <div className="flex flex-1 flex-col justify-between gap-6 text-white">
          <div>
            <div className="text-xl uppercase text-[#b4d6a5]">
              Váš realitní makléř
            </div>
            <div className="text-7xl text-white">
              Bc. František <br />
              Šťastník<span className="text-7xl text-[#b4d6a5]">.</span>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Image src={Mail} alt="" />
                <a href="mailto:frantisek.stastnik@investujdopole.cz">
                  frantisek.stastnik@investujdopole.cz
                </a>
              </div>
              <div className="inline-flex items-center justify-start gap-3.5 rounded-xl border-2 border-[#b4d6a5] bg-[#b4d6a5]/50 py-5 pl-5 pr-52">
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
        <div className="flex flex-col gap-6 rounded-2xl bg-white p-8 text-primary-blue shadow-md">
          <h3 className="text-5xl font-bold text-primary-blue">
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

      <footer className="bg-primary-blue px-[120px] py-[68px]">
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
            <ul className="grid gap-6">
              <li className="text-lg text-white">O společnosti.</li>
              <li>
                <a href="" className="text-[#afbbd4]">
                  O nás
                </a>
              </li>
              <li>
                <a href="" className="text-[#afbbd4]">
                  Naše nabídka
                </a>
              </li>
              <li>
                <a href="" className="text-[#afbbd4]">
                  Kontakt
                </a>
              </li>
            </ul>
            <ul className="grid gap-6">
              <li className="text-lg text-white">Vzdělávání.</li>
              <li>
                <a href="" className="text-[#afbbd4]">
                  Blog
                </a>
              </li>
              <li>
                <a href="" className="text-[#afbbd4]">
                  Webinář
                </a>
              </li>
              <li>
                <a href="" className="text-[#afbbd4]">
                  Newsletter
                </a>
              </li>
            </ul>
            <ul className="grid gap-6">
              <li className="text-lg text-white">Sledujte nás.</li>
              <li>
                <a href="" className="text-[#afbbd4]">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="" className="text-[#afbbd4]">
                  Facebook
                </a>
              </li>
              <li>
                <a href="" className="text-[#afbbd4]">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-between border-t border-slate-600 pt-4">
            <div className="text-white">
              <a href="https://www.investujdopole.cz/">Investujdopole.cz</a>|
              <a href="">Zásady ochrany osobních údajů (GDPR)</a>|
              <a href="">Zásady cookies</a>
            </div>
            <div className="text-[#afbbd4]">© Investujdopole s.r.o., 2025</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
