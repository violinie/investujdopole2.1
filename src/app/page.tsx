import Btn from "../components/Btn";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import LogoLight from "@/public/logo--white.svg";
import Arrow from "@/public/icon-arrow.svg";
import Graph from "@/public/graph.svg";
import Rating from "@/public/rating-stars.svg";



export default function Home() {
	return (
	<div className="flex flex-col gap-[120px]">
		<header className="p-6 flex justify-between items-center">
		<a href="https://www.investujdopole.cz/"><Image src={Logo} alt="Logo Investuj do pole" width={150} height={50} /></a>
			<nav>
				<ul className={"flex gap-10"}>
					<li><a href="" className="text-[#757575] text-base font-normal">Vyjímečný pozemek</a></li>
					<li><a href="" className="text-[#757575] text-base font-normal">O nás</a></li>
					<li><a href="" className="text-[#757575] text-base font-normal">Reference</a></li>
					<li><a href="" className="text-[#757575] text-base font-normal">Kontakt</a></li>
				</ul>
			</nav>
			<Btn text="Chci poslední pozemek" iconPosition="left" icon={<Image src="/icon-flash.svg" alt="Flash Icon" width={22} height={23} />}  />

		</header>

		<section data-layer="Hero Container" className="HeroContainer max-w-[1200px] flex-col self-center justify-start items-center gap-9 inline-flex">
			<div className="self-stretch flex-col justify-start items-center gap-6 flex">
				<div className="self-stretch text-center"><span className="text-[#2c2758] text-7xl font-bold">Poslední perla <br/>trojských pozemků</span><span className="text-[#8cb679] text-7xl font-bold font-['Roboto'] leading-10">.</span></div>
				<div className="text-center text-[#757575] text-2xl font-normal0">Objevte jedinečnou příležitost vlastnit poslední pozemek<br/> této velikosti a exkluzivity v Praze-Troji.</div>
			</div>
			<Btn text="Chci poslední pozemek" iconPosition="left" icon={<Image src="/icon-flash.svg" alt="Flash Icon" width={22} height={23} />}  />
		</section>

		<section data-layer="Video" className="Video max-w-[1200px] self-center rounded-2xl">
			<div className="bg-[#b4d6a5] w-[1200px] rounded-2xl h-[679px]">{/*TODO VIDEO*/}</div>
		</section>

		<section data-layer="Social proof" className="SocialProof max-w-[1200px] self-center grid grid-cols-[1fr_1.4fr_1fr] items-center grid-rows-[auto_1fr_auto] gap-8">
			<div className="p-10 bg-white rounded-2xl shadow-[11.91822338104248px_8.342756271362305px_23.83644676208496px_0px_rgba(0,0,0,0.08)] flex-col justify-center items-center gap-7 self-center flex">
				<div className="justify-start items-start gap-10 inline-flex">
				<div className="flex-col justify-start items-center gap-1.5 inline-flex">
					<div><span className="text-[#2c2758] text-4xl font-black">20</span><span className="text-[#8cb679] text-4xl font-black font-['Noto Sans'] leading-10">+</span></div>
					<div className="text-[#636363] text-sm font-normal">Let zkušeností</div>
				</div>
				</div>
				<div className="justify-start items-start gap-10 inline-flex">
				<div className="flex-col justify-start items-center gap-1.5 inline-flex">
					<div><span className="text-[#2c2758] text-4xl font-black">Top </span><span className="text-[#8cb679] text-4xl font-black font-['Noto Sans'] leading-10">9</span></div>
					<div className="text-[#636363] text-sm font-normal">Realitní kancelář</div>
				</div>
				</div>
				<div className="justify-start items-start gap-10 inline-flex">
				<div className="flex-col justify-start items-center gap-1 inline-flex">
					<div><span className="text-[#2c2758] text-4xl font-black">5000</span><span className="text-[#8cb679] text-4xl font-black font-['Noto Sans'] leading-10">+</span></div>
					<div className="text-[#636363] text-sm font-normal">Prodaných pozemků</div>
				</div>
				</div>
				<a href="" className="p-1.5 justify-center items-center gap-2.5 inline-flex">
					<div className="text-[#2c2758] text-sm font-normal">Více o Investuj do pole</div>
					<Image src={Arrow} alt="" height={18} />
				</a>
			</div>
			<div className="p-12 bg-gradient-to-b from-[#2c2758] to-[#3b357a] rounded-2xl shadow-[12.955601692199707px_5.182241439819336px_51.82240676879883px_0px_rgba(0,0,0,0.16)] flex-col justify-center items-center gap-4 flex row-span-2">
				<div className="justify-center items-center gap-4 inline-flex">
				{/*TODO slider*/}
				<a href=""><Image src={Arrow} alt="" height={18} className="rotate-180" /></a>

				{/*TODO people*/}
				<div className="w-44 h-24 relative">
					<div className="w-44 h-12 left-0 top-[25.80px] absolute">
						<img className="w-14 h-12 left-0 top-0 absolute rounded-full shadow-[0px_5.182241439819336px_5.182241439819336px_0px_rgba(0,0,0,0.08)] border-2 border-white" src="https://placehold.co/52x52" />
						<img className="w-14 h-12 left-[122.28px] top-0 absolute rounded-full shadow-[0px_5.182241439819336px_5.182241439819336px_0px_rgba(0,0,0,0.08)] border-2 border-white" src="https://placehold.co/52x52" />
					</div>
					<img className="w-24 h-24 left-[35.12px] top-[-0px] absolute rounded-full shadow-[0px_10.346345901489258px_10.346345901489258px_0px_rgba(0,0,0,0.08)] border-2 border-white" src="https://placehold.co/104x103" />
				</div>

				<a href=""><Image src={Arrow} alt="" height={18} /></a>
				</div>
				<div className="text-white text-2xl">Dagmar</div>
				<div className="self-stretch text-center text-white text-base">Spolupráce s Investujdopole.cz byla pro mě příjemnou a profesionální zkušeností. Oceňuji především jejich lidský přístup, férové jednání a schopnost srozumitelně vysvětlit celý proces obchodu s pozemky.</div>
				<div className="justify-center items-center gap-4 inline-flex">
				<div><span className="text-white text-xl">4.5</span><span className="text-[#b4d6a5] text-xs font-normal">/5.0 hodnocení</span></div>
				<Image src={Rating} alt="" />
				</div>
				<a href="" className="p-1.5 justify-center items-center gap-2.5 inline-flex">
					<div className="text-white text-sm font-normal">Zobrazit všechny recenze</div>
					<Image src={Arrow} alt="" height={18} />
				</a>
			</div>
			<div className="p-10 bg-white rounded-2xl shadow-[11.91822338104248px_8.342756271362305px_23.83644676208496px_0px_rgba(0,0,0,0.08)] flex-col justify-center items-center gap-8 self-center flex">
				<div className="justify-center items-center gap-3.5 inline-flex">
				<div className="text-center text-[#2c2758] text-xl font-normal">Vývoj ceny pozemků</div>
				</div>
				{/*TODO graf*/}
				<Image src={Graph} alt=""/>
				<div className="justify-start items-start gap-6 inline-flex">
				<div className="flex-col justify-start items-center gap-1 inline-flex">
					<div className="text-[#2c2758] text-3xl font-extrabold">+50.4 %</div>
					<div className="text-[#636363] text-xs font-medium">Nárůst ceny</div>
				</div>
				<div className="flex-col justify-start items-center gap-1 inline-flex">
					<div className="text-[#2c2758] text-3xl font-extrabold">5 let</div>
					<div className="text-[#636363] text-xs font-medium">za období</div>
				</div>
				</div>
				<a href="" className="p-1.5 justify-center items-center gap-2.5 inline-flex">
					<div className="text-[#2c2758] text-sm font-normal ">Bližší informace</div>
					<Image src={Arrow} alt="" height={18} />
				</a>
			</div>
		</section>
			investment-highlights 3 containers
			Nepropásněte
			<section className="p-12 bg-indigo-950 rounded-xl text-white m-auto w-full max-w-3xl">
				<div className="text-4xl text-center">Staňte se majitelem této trofejní nemovitosti<br/>
				<span className="text-2xl">a využijte neopakovatelné příležitosti!</span></div>
				<div className="flex justify-between">
					<div>Poslední pozemek</div>
					<div>Prestižní lokalita</div>
					<div>V blízkosti centra</div>
				</div>
			</section>
			Praha na dlani.
			4 containers
			Srdce pražské Trojive výjimečném sousedství.
			2 containers
			Reference



			<Btn text="Chci prestižní adresu"/>
		<section>
			<div className="uppercase text-emerald-500 font-bold">Nepropásněte to!</div>
		Příležitost, kterou mátejen jednou za život.
		</section>

		<section className="max-w-[1200px] p-12 flex justify-between bg-indigo-950 rounded-xl">
			<div className="flex flex-col text-white">


			<div className="left-0 top-[47px]"><span className="text-white text-7xl font-normal leading-10">Bc. František <br/>Šťastník</span><span className="text-[#b4d6a5] text-7xl font-normal  leading-10">.</span></div>
			<div className="left-0 top-0 text-[#b4d6a5] text-xl font-normal uppercase leading-loose">Váš realitní makléř</div>

			<a href="mailto:frantisek.stastnik@investujdopole.cz"  className="pl-5 pr-28 py-5 rounded-xl justify-start items-center gap-3.5 inline-flex">
				<div data-svg-wrapper>
				<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_1356_3908)">
				<path d="M0.967714 5.25614C1.093 4.70717 1.40099 4.21701 1.84124 3.86593C2.28149 3.51486 2.82791 3.32369 3.391 3.32373H18.3035C18.8666 3.32369 19.413 3.51486 19.8532 3.86593C20.2935 4.21701 20.6015 4.70717 20.7268 5.25614L10.8472 11.2945L0.967714 5.25614ZM0.905579 6.67531V15.5035L8.11701 11.082L0.905579 6.67531ZM9.30753 11.8114L1.14294 16.8158C1.34466 17.2412 1.66304 17.6005 2.06103 17.852C2.45901 18.1034 2.92023 18.2367 3.391 18.2362H18.3035C18.7742 18.2363 19.2352 18.1028 19.633 17.8511C20.0307 17.5994 20.3489 17.24 20.5503 16.8146L12.3857 11.8102L10.8472 12.7509L9.30753 11.8102V11.8114ZM13.5775 11.0832L20.7889 15.5035V6.67531L13.5775 11.082V11.0832Z" fill="#B4D6A5"/>
				</g>
				<defs>
				<clipPath id="clip0_1356_3908">
				<rect width="19.8833" height="19.8833" fill="white" transform="translate(0.905579 0.838379)"/>
				</clipPath>
				</defs>
				</svg>
				</div>
				<div className="text-white text-base font-normal">frantisek.stastnik@investujdopole.cz</div>
			</a>


				<a href="tel:+420775972405" className="pl-5 pr-52 py-5 bg-[#b4d6a5]/50 rounded-xl border-2 border-[#b4d6a5] justify-start items-center gap-3.5 inline-flex">
				<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_1356_3912)" filter="url(#filter0_d_1356_3912)">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M7.24812 1.12325C7.46556 0.906136 7.72666 0.737711 8.01412 0.629137C8.30158 0.520564 8.60883 0.474322 8.91551 0.493475C9.22219 0.512627 9.5213 0.596738 9.79302 0.740233C10.0647 0.883728 10.3028 1.08333 10.4916 1.32581L12.7222 4.1915C13.1311 4.71716 13.2753 5.4019 13.1137 6.0481L12.4339 8.76964C12.3988 8.91059 12.4007 9.05825 12.4395 9.19826C12.4782 9.33827 12.5525 9.46588 12.6551 9.5687L15.7085 12.622C15.8114 12.7249 15.9392 12.7993 16.0795 12.8381C16.2197 12.8768 16.3676 12.8786 16.5088 12.8432L19.2291 12.1635C19.548 12.0837 19.8808 12.0775 20.2025 12.1454C20.5241 12.2132 20.8261 12.3532 21.0857 12.5549L23.9514 14.7843C24.9816 15.5859 25.076 17.1082 24.1539 18.0291L22.869 19.314C21.9494 20.2336 20.5749 20.6375 19.2937 20.1864C16.0144 19.0326 13.037 17.1552 10.5823 14.6936C8.12086 12.2393 6.24352 9.26232 5.08954 5.98348C4.63967 4.70349 5.04356 3.32782 5.96316 2.40821L7.24812 1.12325Z" fill="#B4D6A5"/>
					</g>
					<defs>
					<filter id="filter0_d_1356_3912" x="0.905579" y="0.488281" width="27.8834" height="27.8833" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
					<feFlood flood-opacity="0" result="BackgroundImageFix"/>
					<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
					<feOffset dy="4"/>
					<feGaussianBlur stdDeviation="2"/>
					<feComposite in2="hardAlpha" operator="out"/>
					<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1356_3912"/>
					<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1356_3912" result="shape"/>
					</filter>
					<clipPath id="clip0_1356_3912">
					<rect width="19.8833" height="19.8833" fill="white" transform="translate(4.90558 0.488281)"/>
					</clipPath>
					</defs>
				</svg>
					<div className="text-white text-base font-normal">+420 775 972 405</div>
				</a>
				<a href="https://www.investujdopole.cz/" className="pl-4 pr-28 py-5 rounded-xl justify-start items-center gap-3.5 flex">
					<div data-svg-wrapper className="relative">
					<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M2.38745 13.7043C2.8349 7.66963 7.87283 2.9126 14.0218 2.9126C13.0525 2.9126 12.1894 3.33751 11.4794 3.98725C10.773 4.63373 10.176 5.53618 9.69313 6.60295C9.20743 7.67602 8.83015 8.93107 8.57479 10.2931C8.3701 11.3849 8.24552 12.5359 8.204 13.7043H2.38745ZM2.38745 15.4543H8.204C8.24552 16.6227 8.3701 17.7737 8.57479 18.8655C8.83015 20.2275 9.20743 21.4826 9.69313 22.5556C10.176 23.6224 10.773 24.5248 11.4794 25.1713C12.1894 25.8211 13.0525 26.246 14.0218 26.246C7.87283 26.246 2.8349 21.4889 2.38745 15.4543Z" fill="#B4D6A5"/>
						<path d="M14.0218 2.9126C14.9912 2.9126 15.8542 3.33751 16.5642 3.98725C17.2707 4.63373 17.8677 5.53618 18.3505 6.60295C18.8362 7.67602 19.2135 8.93107 19.4689 10.2931C19.6736 11.3849 19.7981 12.5359 19.8396 13.7043H25.6562C25.2087 7.66963 20.1708 2.9126 14.0218 2.9126Z" fill="#B4D6A5"/>
						<path d="M19.4689 18.8655C19.2135 20.2275 18.8362 21.4826 18.3505 22.5556C17.8677 23.6224 17.2707 24.5248 16.5642 25.1713C15.8542 25.8211 14.9912 26.246 14.0218 26.246C20.1708 26.246 25.2087 21.4889 25.6562 15.4543H19.8396C19.7981 16.6227 19.6736 17.7737 19.4689 18.8655Z" fill="#B4D6A5"/>
						<path d="M14.023 4.54004C13.7022 4.54004 13.2877 4.67656 12.8057 5.11762C12.3202 5.56194 11.8341 6.25831 11.4047 7.20707C10.9781 8.14955 10.6317 9.28728 10.3933 10.5587C10.2056 11.56 10.0891 12.6214 10.0483 13.7038H17.9978C17.9569 12.6214 17.8405 11.56 17.6527 10.5587C17.4144 9.28728 17.068 8.14955 16.6414 7.20707C16.2119 6.25831 15.7259 5.56194 15.2403 5.11762C14.7584 4.67656 14.3439 4.54004 14.023 4.54004Z" fill="#8CB679"/>
						<path d="M10.3933 18.5989C10.6317 19.8704 10.9781 21.0081 11.4047 21.9506C11.8341 22.8993 12.3202 23.5957 12.8057 24.04C13.2877 24.4811 13.7022 24.6176 14.023 24.6176C14.3439 24.6176 14.7584 24.4811 15.2403 24.04C15.7259 23.5957 16.2119 22.8993 16.6414 21.9506C17.068 21.0081 17.4144 19.8704 17.6527 18.5989C17.8404 17.5977 17.9569 16.5363 17.9978 15.4538H10.0483C10.0891 16.5363 10.2056 17.5977 10.3933 18.5989Z" fill="#8CB679"/>
					</svg>
					</div>
					<div className="text-white text-base font-normal">investujdopole.cz</div>
				</a>

			</div>
			{
				/*<div className="p-9 bg-white text-indigo-950 rounded-xl">
				<h2 className="text-2xl">Kontaktujte mě.</h2>
				Jméno Příjmení|
				Telefonní číslo
				E-mail
				Vaše zpráva
				<Btn text="Odeslat zprávu"/>
			</div> */
			}

<div data-layer="contact-form" className="ContactForm w-96 h-96 relative bg-white rounded-2xl shadow-[0px_20px_45px_0px_rgba(0,0,0,0.10)] shadow-[0px_82px_82px_0px_rgba(0,0,0,0.09)] shadow-[0px_184px_110px_0px_rgba(0,0,0,0.05)] shadow-[0px_327px_131px_0px_rgba(0,0,0,0.01)] shadow-[0px_511px_143px_0px_rgba(0,0,0,0.00)]  overflow-hidden">
  <div data-layer="Frame 22" className="Frame22 h-96 left-[40px] top-[205px] absolute flex-col justify-center items-start gap-14 flex">
    <div data-layer="Frame 13" className="Frame13 h-96 flex-col justify-center items-start gap-8 flex">
      <div data-layer="Frame 12" className="Frame12 h-7 flex-col justify-start items-start gap-1.5 flex">
        <div data-layer="Jméno Příjmení|" className="JmNoPJmen"><span className="text-[#2c2758] text-base font-normal font-['Gilroy-Bold']">Jméno Příjmení</span><span className="text-[#b4d6a5] text-base font-normal font-['Gilroy-Bold']">|</span></div>
        <div data-layer="Line 1" className="Line1 w-96 h-px border-2 border-[#2c2758]"></div>
      </div>
      <div data-layer="Frame 11" className="Frame11 h-7 flex-col justify-start items-start gap-1.5 flex">
        <div data-layer="Telefonní číslo" className="TelefonnSlo text-[#2c2758] text-base font-normal font-['Gilroy-Bold']">Telefonní číslo</div>
        <div data-layer="Line 2" className="Line2 w-96 h-px border-2 border-[#b4d6a5]"></div>
      </div>
      <div data-layer="Frame 13" className="Frame13 h-7 flex-col justify-start items-start gap-1.5 flex">
        <div data-layer="E-mail" className="EMail text-[#2c2758] text-base font-normal font-['Gilroy-Bold']">E-mail</div>
        <div data-layer="Line 2" className="Line2 w-96 h-px border-2 border-[#b4d6a5]"></div>
      </div>
      <div data-layer="Frame 10" className="Frame10 h-48 flex-col justify-start items-start gap-1.5 flex">
        <div data-layer="Vaše zpráva" className="VaEZprVa text-[#2c2758] text-base font-normal font-['Gilroy-Bold']">Vaše zpráva</div>
        <div data-layer="Rectangle 26" className="Rectangle26 w-96 h-44 rounded-2xl border-2 border-[#b4d6a5]" />
      </div>
    </div>
  </div>
  <div data-layer="Frame 21" className="Frame21 pl-7 pr-10 py-2.5 left-[129px] top-[636px] absolute bg-gradient-to-b from-[#2c2758] to-[#3b357a] rounded-3xl justify-start items-center gap-3.5 inline-flex">
    <div data-svg-wrapper data-layer="Bold Duotone / Messages, Conversation / Plain 2" className="BoldDuotoneMessagesConversationPlain2 relative">
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.81354 18.6544L21.5763 2.89162C20.5849 1.90024 18.7067 2.52627 14.9504 3.77832L5.59141 6.89788C3.50338 7.59387 2.45936 7.94186 2.14247 8.70745C2.06799 8.88739 2.02295 9.07814 2.0091 9.27239C1.95014 10.0989 2.72831 10.877 4.28463 12.4333L4.5681 12.7167C4.82356 12.9722 4.95129 13.0999 5.04784 13.2421C5.23828 13.5225 5.34637 13.8506 5.35988 14.1893C5.36673 14.361 5.33992 14.5397 5.28629 14.8969C5.09002 16.2046 4.99189 16.8584 5.1075 17.3615C5.22176 17.8588 5.47021 18.303 5.81354 18.6544Z" fill="#B4D6A5"/>
    <path opacity="0.5" d="M17.5502 18.937L20.6901 9.51769C21.9422 5.76154 22.5683 3.88346 21.5769 2.89209L5.81409 18.6549C6.16317 19.0121 6.61034 19.2733 7.11428 19.3966C7.61574 19.5193 8.27091 19.4304 9.58124 19.2525L9.65289 19.2428C10.0223 19.1927 10.207 19.1676 10.3843 19.1783C10.7062 19.1978 11.0171 19.3026 11.2851 19.4821C11.4327 19.581 11.5645 19.7127 11.828 19.9763L12.0801 20.2283C13.5948 21.743 14.3522 22.5004 15.1557 22.461C15.3772 22.4501 15.5948 22.3987 15.7978 22.3094C16.5341 21.9854 16.8728 20.9693 17.5502 18.937Z" fill="#B4D6A5"/>
    </svg>
    </div>
    <div data-layer="Odeslat zprávu" className="OdeslatZprVu text-center text-[#eeeeee] text-base font-normal font-['Gilroy-Bold']">Odeslat zprávu</div>
  </div>
</div>



		</section>

		<footer className="bg-indigo-950 px-[120px] py-[68px]">
			<div className="grid grid-cols-5 gap-8 my-8">
				<div className="text-white col-span-2 space-y-4">
					<a href="https://www.investujdopole.cz/"><Image src={LogoLight} alt="Logo Investuj do pole" height={42} /></a>
					<a className="flex text-2xl" href="mailto:info@investujdopole.cz">info@investujdopole.cz</a>
					<a className="text-2xl" href="tel:+420775972405"><span className="text-emerald-500">+420</span> 775 972 405</a>

				</div>
				<ul className="grid gap-6">
					<li className="text-white text-lg">O společnosti.</li>
					<li><a href="" className="text-slate-400">O nás</a></li>
					<li><a href="" className="text-slate-400">Naše nabídka</a></li>
					<li><a href="" className="text-slate-400">Kontakt</a></li>
				</ul>
				<ul className="grid gap-6">
					<li className="text-white text-lg">Vzdělávání.</li>
					<li><a href="" className="text-slate-400">Blog</a></li>
					<li><a href="" className="text-slate-400">Webinář</a></li>
					<li><a href="" className="text-slate-400">Newsletter</a></li>
				</ul>
				<ul className="grid gap-6">
					<li className="text-white text-lg">Sledujte nás.</li>
					<li><a href="" className="text-slate-400">LinkedIn</a></li>
					<li><a href="" className="text-slate-400">Facebook</a></li>
					<li><a href="" className="text-slate-400">Instagram</a></li>
				</ul>
			</div>
			<div className="flex justify-between border-t border-slate-600 pt-4">
				<div className="text-white">
					<a href="https://www.investujdopole.cz/">Investujdopole.cz</a>
|
					<a href="">Zásady ochrany osobních údajů (GDPR)</a>
|
					<a href="">Zásady cookies</a>
				</div>
				<div className="text-slate-400">© Investujdopole s.r.o., 2025</div>
			</div>
		</footer>
	</div>
	);
  }
