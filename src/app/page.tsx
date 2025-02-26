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
import Feature1 from "@/public/images/features-1.jpg";
import Feature2 from "@/public/images/features-2.jpg";
import Feature3 from "@/public/images/features-3.jpg";
import Praha from "@/public/images/pozemek-top.jpg";
import Salesman from "@/public/images/salesman.png";
import Elipse from "@/public/images/elipse.svg";
import Elipse2 from "@/public/images/elipse-2.svg";
import Graph from "@/public/graph.svg";
import Crow from "@/public/crow.svg";
import ThumbUp from "@/public/images/thumb-up-dynamic-clay.png";
import { TestimonialSlider } from "../components/TestimonialSlider";
import Header from "../components/Header";
import { VideoReveal } from "../components/VideoReveal";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 lg:gap-28">
      <Header></Header>

      <section
        data-layer="Hero Container"
        className="HeroContainer container inline-flex flex-col items-center justify-start gap-6 self-center px-4 sm:px-6 md:gap-9"
      >
        <div className="flex flex-col items-center justify-start gap-4 self-stretch md:gap-6">
          <div className="self-stretch text-center">
            <span className="text-primary-gradient text-3xl font-bold sm:text-4xl md:text-5xl lg:text-7xl">
              Poslední perla <br />
              trojských pozemků
              <span className="text-primary-green-light">.</span>
            </span>
          </div>
          <div className="text-center text-base text-muted-foreground sm:text-lg lg:text-2xl">
            Objevte jedinečnou příležitost vlastnit poslední pozemek
            <br className="hidden sm:block" /> této velikosti a exkluzivity v
            Praze-Troji.
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

      <div className="relative overflow-hidden lg:-mt-12">
        <section
          data-layer="Video"
          className="Video group container flex justify-center"
        >
          <VideoReveal />
        </section>
      </div>

      <section
        data-layer="Social proof"
        className="SocialProof container grid grid-cols-1 gap-4 self-center px-4 sm:grid-cols-2 sm:px-6 md:items-center lg:grid-cols-[1fr_1.4fr_1fr] lg:gap-11"
      >
        <div className="flex flex-col items-center justify-center gap-5 rounded-2xl bg-white p-4 shadow-xl md:gap-7 md:p-10">
          <div className="inline-flex items-start justify-start gap-10">
            <div className="inline-flex flex-col items-center justify-start gap-1.5">
              <div>
                <span className="text-xl font-black text-primary-blue sm:text-2xl md:text-4xl">
                  20
                </span>
                <span className="text-xl font-black text-primary-blue-light sm:text-2xl md:text-4xl">
                  +
                </span>
              </div>
              <div className="text-xs font-normal text-muted-foreground sm:text-sm">
                Let zkušeností
              </div>
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-10">
            <div className="inline-flex flex-col items-center justify-start gap-1.5">
              <div>
                <span className="text-xl font-black text-primary-blue sm:text-2xl md:text-4xl">
                  Top{" "}
                </span>
                <span className="text-xl font-black text-primary-blue-light sm:text-2xl md:text-4xl">
                  9
                </span>
              </div>
              <div className="text-xs font-normal text-muted-foreground sm:text-sm">
                Realitní kancelář
              </div>
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-10">
            <div className="inline-flex flex-col items-center justify-start gap-1">
              <div>
                <span className="text-xl font-black text-primary-blue sm:text-2xl md:text-4xl">
                  5000
                </span>
                <span className="text-xl font-black text-primary-blue-light sm:text-2xl md:text-4xl">
                  +
                </span>
              </div>
              <div className="text-xs font-normal text-muted-foreground sm:text-sm">
                Prodaných pozemků
              </div>
            </div>
          </div>
          {/*<a
            href="#"
            className="inline-flex items-center justify-center gap-2.5 p-1.5"
          >
            <div className="text-xs font-normal text-primary-blue sm:text-sm">
              Více o Investuj do pole
            </div>
            <Image src={Arrow} alt="" height={18} />
          </a>*/}
        </div>
        <div className="order-first flex flex-col items-center justify-center gap-4 self-baseline rounded-2xl bg-gradient-to-b from-primary-blue to-primary-blue-light p-6 py-8 shadow-2xl sm:col-span-2 lg:order-none lg:col-span-1 xl:p-12">
          <TestimonialSlider />
        </div>
        <div className="flex flex-col items-center justify-center gap-5 rounded-2xl bg-white p-4 shadow-xl md:gap-8 md:p-10">
          <div className="inline-flex items-center justify-center gap-3.5">
            <div className="text-center text-base font-normal text-primary-blue sm:text-xl">
              Vývoj ceny pozemků
            </div>
          </div>
          {/*TODO graf*/}
          <Image src={Graph} alt="" className="w-full" />
          <div className="inline-flex items-start justify-start gap-4 sm:gap-6">
            <div className="inline-flex flex-col items-center justify-start gap-1">
              <div className="text-lg font-extrabold text-primary-blue sm:text-xl md:text-3xl">
                +50.4 %
              </div>
              <div className="text-xs font-medium text-[#636363]">
                Nárůst ceny
              </div>
            </div>
            <div className="inline-flex flex-col items-center justify-start gap-1">
              <div className="text-lg font-extrabold text-primary-blue sm:text-xl md:text-3xl">
                5 let
              </div>
              <div className="text-xs font-medium text-[#636363]">
                za období
              </div>
            </div>
          </div>
          {/*}
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2.5 p-1.5"
          >
            <div className="text-xs font-normal text-primary-blue sm:text-sm">
              Bližší informace
            </div>
            <Image src={Arrow} alt="" height={18} />
          </a>*/}
        </div>
      </section>

      <section className="container mx-auto flex flex-col items-center gap-8 px-4 text-center sm:px-6 md:gap-12">
        <div className="flex flex-col items-center gap-2 lg:gap-4">
          <div className="text-lg text-primary-green-light sm:text-xl">
            Nepropásněte
          </div>
          <div className="text-primary-gradient text-2xl font-bold sm:text-3xl lg:text-5xl">
            Výjimečný pozemek, výjimečná investice
          </div>
          <div className="max-w-[580px] text-base text-muted-foreground sm:text-lg lg:text-xl">
            Tento pozemek o rozloze 6000 m<sup>2</sup> je poslední volnou
            plochou této velikosti v Praze-Troji.
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col items-center sm:col-span-2 lg:col-span-1">
            <Image
              src={Feature1}
              className="w-full rounded-2xl text-5xl shadow"
              alt="Kouzlo přírody"
            />
            <div className="mt-4">
              <span className="block text-xl font-bold text-primary-blue sm:text-2xl sm:text-3xl">
                Kouzlo přírody,
              </span>
              <span className="text-base text-primary-blue sm:text-lg md:text-xl">
                kterou si zamilujete!
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={Feature2}
              className="w-full rounded-2xl shadow"
              alt="Bohatá historie"
            />
            <div className="mt-4">
              <span className="block text-xl font-bold text-primary-blue sm:text-2xl md:text-3xl">
                Bohatá historie,
              </span>
              <span className="text-base text-primary-blue sm:text-lg md:text-xl">
                která vypráví příběhy.
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={Feature3}
              className="w-full rounded-2xl shadow"
              alt="Luxusní lokalita"
            />
            <div className="mt-4">
              <span className="block text-xl font-bold text-primary-blue sm:text-2xl md:text-3xl">
                Luxusní lokalita
              </span>
              <span className="text-base text-primary-blue sm:text-lg md:text-xl">
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

      <section className="container relative mx-auto flex max-w-[800px] flex-col items-center gap-4 overflow-hidden rounded-2xl bg-gradient-to-b from-primary-blue to-primary-blue-light px-4 py-6 text-center sm:gap-8 sm:px-10 sm:py-10">
        <Image
          src={Crow}
          alt="Ikonka korunky"
          className="size-12 sm:h-16 sm:w-16"
        />
        <Image
          src={Elipse}
          alt="Elipse"
          className="absolute right-0 top-0 h-full w-auto"
        />
        <Image
          src={Crow}
          alt="Ikonka korunky"
          className="absolute left-[10%] top-10 size-24 rotate-12 opacity-50 blur-sm"
        />
        <Image
          src={Crow}
          alt="Ikonka korunky"
          className="absolute right-[15%] top-4 size-28 -rotate-12 opacity-50 blur-sm"
        />
        <Image
          src={Crow}
          alt="Ikonka korunky"
          className="absolute bottom-0 right-0 size-40 rotate-12 opacity-30 blur"
        />
        <div className="relative">
          <h2 className="text-2xl font-bold text-white sm:text-4xl">
            Staňte se majitelem této trofejní nemovitosti
            <br className="hidden sm:block" />
            <span className="mt-2 block text-lg font-normal text-white sm:inline sm:text-xl">
              {" "}
              a využijte neopakovatelné příležitosti!
            </span>
          </h2>
        </div>
        <div className="relative flex w-full flex-col justify-between gap-4 sm:flex-row sm:gap-8">
          <div className="flex items-center gap-3">
            <Image src={Tick} alt="" />
            <span className="text-base text-white sm:text-lg">
              Poslední pozemek
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Image src={Tick} alt="" />
            <span className="text-base text-white sm:text-lg">
              Prestižní lokalita
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Image src={Tick} alt="" />
            <span className="text-base text-white sm:text-lg">
              V blízkosti centra
            </span>
          </div>
        </div>
      </section>

      <section className="container mx-auto flex flex-col gap-8 px-4 sm:px-6">
        <div className="self-stretch text-center">
          <span className="text-primary-gradient text-3xl font-bold sm:text-4xl md:text-5xl lg:text-7xl">
            Jedinečný pozemek
          </span>
          <span className="text-3xl text-primary-green-light sm:text-4xl md:text-5xl lg:text-7xl">
            .
          </span>
        </div>
        <Image
          src={Praha}
          className="w-full rounded-2xl shadow-xl"
          alt="Praha na dlani"
        />
      </section>

      <section className="container mx-auto grid grid-cols-2 gap-4 px-4 sm:px-6 lg:grid-cols-4 lg:gap-6">
        <div className="relative flex flex-col justify-center gap-4 overflow-hidden rounded-2xl bg-gradient-to-b from-primary-blue to-primary-blue-light p-4 shadow sm:gap-6 xl:p-6">
          <Image
            src={Elipse2}
            alt="Elipse"
            className="absolute right-0 top-0 h-full w-auto"
          />
          <div className="relative text-xl font-medium text-[#b4d6a5] sm:text-2xl xl:text-4xl">
            Zastavitelná plocha
          </div>
          <div className="relative text-sm text-white sm:text-base xl:text-lg">
            Metropolitní plán
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-2xl border border-[#e9f4e4] bg-[#e9f4e4] p-4 shadow sm:gap-6 xl:p-6">
          <div className="relative ml-auto h-10 w-10 rounded-full border border-[#e9f4e4] bg-primary-blue sm:h-14 sm:w-14" />
          <div
            data-svg-wrapper
            className="absolute left-[11.05px] top-[10.28px]"
          >
            {/* TODO svg */}
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-xl font-semibold text-[#86b870] sm:text-2xl xl:text-4xl">
              <span className="text-primary-blue">6 055</span>
              <span> m</span>
              <sup>2</sup>
            </div>
            <div className="text-sm font-medium text-primary-blue sm:text-base xl:text-lg">
              Celková výměra pozemků
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-2xl border border-[#e9f4e4] bg-[#e9f4e4] p-4 shadow sm:gap-6 xl:p-6">
          <div className="relative ml-auto h-10 w-10 rounded-full border border-[#e9f4e4] bg-primary-blue sm:h-14 sm:w-14" />
          <div
            data-svg-wrapper
            className="absolute left-[11.05px] top-[10.28px]"
          >
            {/* TODO svg */}
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-xl font-semibold text-primary-blue sm:text-2xl xl:text-4xl">
              Troja
            </div>
            <div className="text-sm font-medium text-primary-blue sm:text-base">
              Pražská luxusní lokalita
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-2xl border border-[#e9f4e4] bg-[#e9f4e4] p-4 shadow sm:gap-6 xl:p-6">
          <div className="relative ml-auto h-10 w-10 rounded-full border border-[#e9f4e4] bg-primary-blue sm:h-14 sm:w-14" />
          <div
            data-svg-wrapper
            className="absolute left-[11.05px] top-[10.28px]"
          >
            {/* TODO svg */}
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-xl font-semibold text-primary-blue sm:text-2xl xl:text-4xl">
              Výstavba RD
            </div>
            <div className="text-sm font-medium text-primary-blue sm:text-base xl:text-lg">
              Poslední v této lokalitě
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid items-center justify-between gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-2">
        <div className="flex flex-col gap-4 lg:gap-10">
          <div className="text-3xl font-bold leading-[1.5] md:text-4xl">
            <span className="text-primary-green-light">Srdce</span>
            <span className="text-primary-blue">
              {" "}
              pražské Troji
              <br /> ve výjimečném sousedství
            </span>
            <span className="text-primary-blue-light">.</span>
          </div>
          <div className="text-base text-muted-foreground lg:text-lg xl:text-xl">
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
          className="hidden w-full rounded-2xl shadow-md sm:block"
          alt=""
        />
      </section>

      <section className="container mx-auto grid items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-2 lg:justify-between">
        <div className="flex flex-col gap-4 lg:gap-8">
          <div className="text-center text-3xl font-medium text-primary-blue sm:text-4xl md:text-5xl">
            Centrum na dosah
            <span className="text-primary-blue-light">.</span>
          </div>
          <img
            src="https://placehold.jp/590x440.png"
            className="w-full rounded-2xl shadow-md"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 lg:gap-8">
          <div className="text-center text-3xl font-medium text-primary-blue sm:text-4xl md:text-5xl">
            Božský klid
            <span className="text-primary-blue-light">.</span>
          </div>
          <img
            src="https://placehold.jp/590x440.png"
            className="w-full rounded-2xl shadow-md"
            alt=""
          />
        </div>
      </section>

      <section className="relative flex flex-col justify-center bg-gradient-to-b from-primary-blue to-primary-blue-light px-4 py-10 text-center sm:py-16 lg:gap-16">
        <Image
          src={ThumbUp}
          alt="ThumbUp"
          className="absolute left-0 top-1/4 size-44 w-auto"
        />
        <Image
          src={ThumbUp}
          alt="ThumbUp"
          className="absolute bottom-1/4 right-0 size-44 w-auto"
          style={{ transform: "scaleX(-1)" }}
        />
        <Image
          src={Elipse}
          alt="Elipse"
          className="absolute bottom-0 left-0 aspect-square h-auto w-1/3 rotate-90"
        />
        <Image
          src={Elipse}
          alt="Elipse"
          className="absolute right-0 top-0 aspect-square h-auto w-1/3 -rotate-90"
        />
        <div className="relative grid gap-4 sm:gap-6">
          <div className="text-3xl font-bold sm:text-4xl md:text-5xl">
            <span className="text-white">5 000</span>
            <span className="text-[#b4d6a5]">+</span>
            <span className="text-white"> spokojených klientů</span>
          </div>
          <div className="mx-auto max-w-[1000px] text-base text-white sm:text-lg md:text-xl">
            Spokojenost klientů je pro nás prioritou. Zkušenosti těch, kteří nám
            svěřili své investice a pozemky, dokazují naši odbornost a férový
            přístup. Vaše důvěra nás motivuje být stále lepšími.
          </div>
        </div>
        <div className="z-10 mt-8 grid grid-cols-3 items-end justify-items-center gap-2 self-center sm:gap-4 lg:gap-10">
          <img
            src="https://placehold.jp/290x510.png"
            className="max-h-[300px] rounded-2xl border-[3px] border-transparent sm:max-h-[460px]"
            alt=""
          />
          <img
            src="https://placehold.jp/290x510.png"
            className="max-h-[340px] rounded-2xl border-[3px] border-white sm:max-h-[510px]"
            alt=""
          />
          <img
            src="https://placehold.jp/290x510.png"
            className="max-h-[300px] rounded-2xl border-[3px] border-transparent sm:max-h-[460px]"
            alt=""
          />
        </div>
        <a
          href="https://www.firmy.cz/detail/13625165#hodnoceni"
          className="mt-6 sm:mt-8"
        >
          <div className="text-base text-white sm:text-lg">
            Prohlédnout všechny reference
          </div>
          {/*TODO arrow icon*/}
        </a>
      </section>

      <section
        data-layer="Hero Container"
        className="HeroContainer container inline-flex flex-col items-center justify-start gap-6 self-center px-4 sm:gap-8 sm:px-6 lg:gap-14"
      >
        <div className="flex flex-col items-center justify-start gap-2 self-stretch lg:gap-6">
          <div className="text-base uppercase text-[#b4d6a5] sm:text-lg lg:text-xl">
            Nepropásněte to!
          </div>
          <div className="self-stretch text-center">
            <span className="text-2xl font-bold text-primary-blue sm:text-3xl md:text-5xl lg:text-7xl">
              Příležitost, kterou máte jen jednou za život
            </span>
            <span className="text-2xl font-bold text-primary-blue-light sm:text-3xl md:text-5xl lg:text-7xl">
              .
            </span>
          </div>
        </div>
        <div className="text-center text-base text-muted-foreground sm:text-lg lg:text-2xl">
          Domluvte si prohlídku této výjimečné investiční příležitosti.
        </div>
        <Image src={Arrow} alt="" height={18} className="rotate-90" />
      </section>

      <section className="container mx-auto px-4 sm:px-6">
        <div className="relative grid w-full gap-8 overflow-hidden rounded-2xl bg-gradient-to-b from-primary-blue to-primary-blue-light p-6 sm:gap-10 md:p-12 lg:grid-cols-2">
          <div className="absolute -right-1/4 bottom-1/2 h-1/2 lg:bottom-0 lg:left-[21%] lg:right-0 lg:h-full xl:left-[23%]">
            <Image
              src={Salesman}
              className="h-full w-auto"
              alt="Frantisek Šťastník"
            />
          </div>
          <div className="relative flex flex-1 flex-col justify-between gap-6 text-white">
            <div>
              <div className="text-base uppercase text-[#b4d6a5] sm:text-lg md:text-xl">
                Váš realitní makléř
              </div>
              <div className="text-2xl font-bold !leading-tight text-white sm:text-3xl md:text-5xl xl:text-6xl">
                Bc. František <br className="hidden md:block" />
                Šťastník<span className="text-[#b4d6a5]">.</span>
              </div>

              <div className="mt-4 flex flex-col items-start gap-4 sm:mt-6">
                <div className="flex items-center gap-3">
                  <Image src={Mail} alt="" />
                  <a
                    href="mailto:frantisek.stastnik@investujdopole.cz"
                    className="break-all text-sm sm:text-base"
                  >
                    frantisek.stastnik@investujdopole.cz
                  </a>
                </div>
                <div className="inline-flex items-center justify-start gap-3.5 rounded-xl border-2 border-[#b4d6a5] bg-[#b4d6a5]/50 px-3 py-3 sm:px-5 sm:py-5">
                  <Image src={Phone} alt="" />
                  <a href="tel:+420775972405" className="text-sm sm:text-base">
                    +420 775 972 405
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Web} alt="" />
                  <a
                    href="https://www.investujdopole.cz/"
                    className="text-sm sm:text-base"
                  >
                    Investujdopole.cz
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-4">
              <a href="#">
                <Image src={Facebook} alt="" />
              </a>
              <a href="#">
                <Image src={Instagram} alt="" />
              </a>
              <a href="#">
                <Image src={Linkedin} alt="" />
              </a>
            </div>
          </div>
          <div className="relative flex flex-col gap-6 rounded-2xl bg-white p-4 text-primary-blue shadow-md max-sm:-mx-6 max-sm:border max-sm:border-primary-blue sm:p-6 lg:p-8">
            <h3 className="text-2xl font-bold text-primary-blue sm:text-3xl lg:text-5xl">
              Kontaktujte mě.
            </h3>
            <input
              type="text"
              placeholder="Jméno Příjmení"
              className="border-b-2 border-b-primary-green-light p-2 text-primary-blue placeholder-[#757575] outline-none"
            />
            <input
              type="text"
              placeholder="Telefonní číslo"
              className="border-b-2 border-b-primary-green-light p-2 text-primary-blue placeholder-[#757575] outline-none"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="border-b-2 border-b-primary-green-light p-2 text-primary-blue placeholder-[#757575] outline-none"
            />
            <textarea
              placeholder="Vaše zpráva..."
              rows={6}
              className="rounded-lg border-2 border-primary-green-light p-2 placeholder-[#757575] outline-none"
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
        </div>
      </section>

      <footer className="bg-primary-blue py-4">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="my-8 grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <div className="space-y-4 text-white md:col-span-3 lg:col-span-2">
              <a href="https://www.investujdopole.cz/">
                <Image
                  src={LogoLight}
                  alt="Logo Investuj do pole"
                  height={42}
                  className="mx-auto sm:mx-0"
                />
              </a>
              <a
                className="flex justify-center text-lg sm:justify-start sm:text-xl md:text-2xl"
                href="mailto:info@investujdopole.cz"
              >
                info@investujdopole.cz
              </a>
              <a
                className="flex justify-center text-lg sm:justify-start sm:text-xl md:text-2xl"
                href="tel:+420775972405"
              >
                <span className="text-[#b4d6a5]">+420</span> 775 972 405
              </a>
            </div>
            <ul className="grid text-center sm:text-left md:gap-1">
              <li className="pb-3 text-base font-medium text-white sm:text-lg">
                O společnosti.
              </li>
              <li>
                <a
                  href="#"
                  className="block py-1.5 text-[#afbbd4] transition-colors hover:text-white md:py-2"
                >
                  O nás
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-1.5 text-[#afbbd4] transition-colors hover:text-white md:py-2"
                >
                  Naše nabídka
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-1.5 text-[#afbbd4] transition-colors hover:text-white md:py-2"
                >
                  Kontakt
                </a>
              </li>
            </ul>
            <ul className="grid text-center sm:text-left md:gap-1">
              <li className="pb-3 text-base font-medium text-white sm:text-lg">
                Vzdělávání.
              </li>
              <li>
                <a
                  href="#"
                  className="block py-1.5 text-[#afbbd4] transition-colors hover:text-white md:py-2"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-1.5 text-[#afbbd4] transition-colors hover:text-white md:py-2"
                >
                  Webinář
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-1.5 text-[#afbbd4] transition-colors hover:text-white md:py-2"
                >
                  Newsletter
                </a>
              </li>
            </ul>
            <ul className="grid text-center sm:text-left md:gap-1">
              <li className="pb-3 text-base font-medium text-white sm:text-lg">
                Sledujte nás.
              </li>
              <li>
                <a
                  href="#"
                  className="block py-1.5 text-[#afbbd4] transition-colors hover:text-white md:py-2"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-1.5 text-[#afbbd4] transition-colors hover:text-white md:py-2"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-1.5 text-[#afbbd4] transition-colors hover:text-white md:py-2"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-between border-t border-slate-600 pt-4 sm:flex-row sm:gap-4">
            <div className="flex flex-wrap justify-center gap-2 text-center text-xs text-[#afbbd4] sm:text-left">
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
            <div className="mt-4 text-center text-xs text-[#afbbd4] sm:mt-0 sm:text-right">
              © Investujdopole s.r.o., 2025
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
