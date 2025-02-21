import Btn from "../components/Btn";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import LogoLight from "@/public/logo--white.svg";
import Arrow from "@/public/icon-arrow.svg";
import Tick from "@/public/icon-tick.svg";
import Graph from "@/public/graph.svg";
import Rating from "@/public/rating-stars.svg";
import Crow from "@/public/crow.svg";



export default function Home() {
	return (
	<div className="flex flex-col gap-[120px]">
		<header className="p-6 w-[1200px] max-w-[1200px] mx-auto flex justify-between items-center">
		<a href="https://www.investujdopole.cz/"><Image src={Logo} alt="Logo Investuj do pole" width={150} height={50} /></a>
			<nav>
				<ul className={"flex gap-10"}>
					<li><a href="" className="text-[#757575] text-base font-normal">Vyjímečný pozemek</a></li>
					<li><a href="" className="text-[#757575] text-base font-normal">O nás</a></li>
					<li><a href="" className="text-[#757575] text-base font-normal">Reference</a></li>
					<li><a href="" className="text-[#757575] text-base font-normal">Kontakt</a></li>
				</ul>
			</nav>
			<Btn text="Chci poslední pozemek" iconPosition="left" icon={<Image src="/icon-flash.svg" alt="Flash Icon" width={22} height={23} />} />
		</header>

		<section data-layer="Hero Container" className="HeroContainer max-w-[1200px] flex-col self-center justify-start items-center gap-9 inline-flex">
			<div className="self-stretch flex-col justify-start items-center gap-6 flex">
				<div className="self-stretch text-center"><span className="text-[#2c2758] text-7xl font-bold">Poslední perla <br/>trojských pozemků</span><span className="text-[#8cb679] text-7xl font-bold">.</span></div>
				<div className="text-center text-[#757575] text-2xl">Objevte jedinečnou příležitost vlastnit poslední pozemek<br/> této velikosti a exkluzivity v Praze-Troji.</div>
			</div>
			<Btn text="Chci poslední pozemek" iconPosition="left" icon={<Image src="/icon-flash.svg" alt="Flash Icon" width={22} height={23} />} />
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

		<section className="max-w-[1200px] mx-auto flex flex-col gap-12 items-center text-center">
			<div className="flex flex-col gap-6 items-center">
				<div className="text-[#b4d6a5] text-xl">Nepropásněte</div>
				<div className="text-[#2c2758] text-5xl font-bold">Výjimečný pozemek, výjimečná investice</div>
				<div className="max-w-[580px] text-[#757575] text-xl">
				Tento pozemek o rozloze 6000 m<sup>2</sup> je poslední volnou
				plochou této velikosti v Praze-Troji.
				</div>
			</div>
			<div className="grid grid-cols-3 gap-8">
				<div className="flex flex-col items-center">
				<div data-svg-wrapper className="w-[304px] h-[228px] bg-[#b4d6a5] rounded-2xl shadow-[11.91822338104248px_8.342756271362305px_23.83644676208496px_0px_rgba(0,0,0,0.08)]"></div>
				<div className="mt-4">
					<span className="block text-[#2c2758] text-3xl font-bold">Kouzlo přírody,</span>
					<span className="text-[#2c2758] text-xl">kterou si zamilujete!</span>
				</div>
				</div>
				<div className="flex flex-col items-center">
				<div data-svg-wrapper className="w-[304px] h-[228px] bg-white rounded-2xl shadow-[11.91822338104248px_8.342756271362305px_23.83644676208496px_0px_rgba(0,0,0,0.08)]"></div>
				<div className="mt-4">
					<span className="block text-[#2c2758] text-3xl font-bold">Bohatá historie,</span>
					<span className="text-[#2c2758] text-xl">která vypráví příběhy.</span>
				</div>
				</div>
				<div className="flex flex-col items-center">
				<div data-svg-wrapper className="w-[304px] h-[228px] bg-[#2c2758] rounded-2xl shadow-[11.91822338104248px_8.342756271362305px_23.83644676208496px_0px_rgba(0,0,0,0.08)]"></div>
				<div className="mt-4">
					<span className="block text-[#2c2758] text-3xl font-bold">Luxusní lokalita</span>
					<span className="text-[#2c2758] text-xl">jen pár kroků od centra!</span>
				</div>
				</div>
			</div>
			<Btn text="Chci prestižní adresu" iconPosition="right" icon={<Image src="/icon-flash.svg" alt="Flash Icon" width={22} height={23} />} />
		</section>

		<section className="max-w-[780px] mx-auto bg-gradient-to-b from-[#2c2758] to-[#3b357a] rounded-2xl p-8 flex flex-col items-center text-center gap-6">
			<Image src={Crow} alt="" className="w-16 h-16" />
			<div>
				<h2 className="text-white text-3xl font-bold">Staňte se majitelem této trofejní nemovitosti<br />
					<span className="text-white text-xl mt-2 font-normal"> a využijte neopakovatelné příležitosti!</span>
				</h2>
			</div>
			<div className="flex justify-between gap-8 w-full">
				<div className="flex items-center gap-3">
					<Image src={Tick} alt="" />
					<span className="text-white text-lg">Poslední pozemek</span>
				</div>
				<div className="flex items-center gap-3">
					<Image src={Tick} alt="" />
					<span className="text-white text-lg">Prestižní lokalita</span>
				</div>
				<div className="flex items-center gap-3">
					<Image src={Tick} alt="" />
					<span className="text-white text-lg">V blízkosti centra</span>
				</div>
			</div>
		</section>

		<section className="max-w-[1200px] flex flex-col mx-auto gap-12">
			<div className="self-stretch text-center">
					<span className="text-[#2c2758] text-7xl">Praha na dlani</span>
					<span className="text-[#8cb679] text-7xl">.</span>
			</div>
			<div className="w-[1200px] h-96 bg-white rounded-2xl shadow-[0px_4px_19.399999618530273px_0px_rgba(0,0,0,0.25)]" />
		</section>

		<section className="grid grid-cols-4 gap-6 max-w-[1200px] mx-auto" >
			<div className="p-6 flex flex-col justify-center gap-6 bg-[#2c2758] rounded-2xl shadow-[0px_8px_17px_0px_rgba(0,0,0,0.10)] shadow-[0px_31px_31px_0px_rgba(0,0,0,0.09)] border border-[#e9f4e4]">
				<div className="text-[#b4d6a5] text-4xl">Zastavitelná plocha</div>
				<div className="text-white text-lg">Metropolitní plán</div>
			</div>
			<div className="bg-[#e9f4e4] p-6 flex flex-col gap-6 rounded-2xl shadow-[0px_8px_17px_0px_rgba(0,0,0,0.10)] shadow-[0px_31px_31px_0px_rgba(0,0,0,0.09)] border border-[#e9f4e4]">
				<div className="w-14 h-14 ml-auto relative bg-[#2c2758] rounded-full border border-[#e9f4e4]" />
				<div data-svg-wrapper className="left-[11.05px] top-[10.28px] absolute">
					{/* TODO svg */}
				</div>
				<div>
					<div className="text-[#86b870] text-4xl">
						<span className="text-[#2c2758] text-4xl">6 055</span>
						<span> m</span>
						<sup>2</sup>
					</div>
					<div className="text-[#2c2758] text-lg">Celková výměra pozemků</div>
				</div>
			</div>
			<div className="bg-[#e9f4e4] p-6 flex flex-col gap-6 rounded-2xl shadow-[0px_8px_17px_0px_rgba(0,0,0,0.10)] shadow-[0px_31px_31px_0px_rgba(0,0,0,0.09)] border border-[#e9f4e4]">
				<div className="w-14 h-14 ml-auto relative bg-[#2c2758] rounded-full border border-[#e9f4e4]" />
				<div data-svg-wrapper className="left-[11.05px] top-[10.28px] absolute">
					{/* TODO svg */}
				</div>
				<div>
					<div className="text-[#2c2758] text-4xl">Troja</div>
					<div className="text-[#2c2758] text-lg">Pražská luxusní lokalita</div>
				</div>
			</div>
			<div className="bg-[#e9f4e4] p-6 flex flex-col gap-6 rounded-2xl shadow-[0px_8px_17px_0px_rgba(0,0,0,0.10)] shadow-[0px_31px_31px_0px_rgba(0,0,0,0.09)] border border-[#e9f4e4]">
				<div className="w-14 h-14 ml-auto relative bg-[#2c2758] rounded-full border border-[#e9f4e4]" />
				<div data-svg-wrapper className="left-[11.05px] top-[10.28px] absolute">
					{/* TODO svg */}
				</div>
				<div>
					<div className="text-[#2c2758] text-4xl">Výstavba RD</div>
					<div className="text-[#2c2758] text-lg">Poslední v této lokalitě</div>
				</div>
			</div>
		</section>

		<section className="max-w-[1200px] grid grid-cols-2 mx-auto items-center justify-between gap-10">
			<div className="flex flex-col gap-6">
				<div className="text-4xl font-bold leading-[1.5]">
					<span className="text-[#8cb679]">Srdce</span>
					<span className="text-[#2c2758]"> pražské Troji<br /> ve výjimečném sousedství</span>
					<span className="text-[#8cb679]">.</span>
				</div>
				<div className="text-[#757575] text-xl">V místě, kde se setkává barokní krása Trojského zámku a přesto pouhých deset minut od pulzující metropole, objevíte klenot mezi pražskými pozemky.</div>
				<Btn text="Chci prestižní adresu" iconPosition="right" icon={<Image src="/icon-flash.svg" alt="Flash Icon" width={22} height={23} />} />
			</div>
			<div className="h-96 w-[584px] bg-[#b4d6a5] rounded-2xl shadow-md" />
		</section>

		<section className="max-w-[1200px] grid grid-cols-2 mx-auto items-center justify-between gap-10">
			<div className="grid gap-12">
				<div className="text-center text-[#2c2758] text-5xl">Centrum na dosah<span className="text-[#8cb679] text-5xl">.</span></div>
				<div className="h-96 w-[584px] bg-white rounded-2xl shadow-md" />
			</div>
			<div className="grid gap-12">
				<div className="text-center text-[#2c2758] text-5xl">Božský klid<span className="text-[#8cb679] text-5xl">.</span></div>
				<div className="h-96 w-[584px] bg-[#e9f4e4] rounded-2xl shadow-md"  />
			</div>
		</section>

		<section className="bg-[#2c2758] py-16 flex flex-col justify-center text-center gap-16">
			<div className="grid gap-6">
				<div className="text-5xl">
					<span className="text-white">5 000</span>
					<span className="text-[#b4d6a5]">+</span>
					<span className="text-white"> spokojených klientů</span>
				</div>
				<div className="mx-auto text-white text-xl max-w-[1000px]">Spokojenost klientů je pro nás prioritou. Zkušenosti těch, kteří nám svěřili své investice a pozemky, dokazují naši odbornost a férový přístup. Vaše důvěra nás motivuje být stále lepšími.</div>
			</div>
			<div className="self-center grid grid-cols-[1fr_1fr_1fr] items-end gap-11">
				<div className="h-[458px] w-[284px] p-10 bg-white rounded-2xl">
					{/*TODO video*/}
				</div>
				<div className="border-[3px] border-white h-[510px] w-[284px] p-12 bg-gradient-to-b from-[#2c2758] to-[#3b357a] rounded-2xl">
					{/*TODO video*/}
				</div>
				<div className="h-[458px] w-[284px] p-10 bg-white rounded-2xl">
					{/*TODO video*/}
				</div>
			</div>
				<a href="">
					<div className="text-white text-lg">Prohlédnout všechny reference</div>
					{/*TODO arrow icon*/}
				</a>
		</section>

		{/* CONTINUE HERE */}

		<section className="max-w-[1200px] p-12 flex justify-between bg-indigo-950 rounded-xl">
			<div className="flex flex-col text-white">
				<div className="left-0 top-[47px]"><span className="text-white text-7xl">Bc. František <br/>Šťastník</span><span className="text-[#b4d6a5] text-7xl font-normal  leading-10">.</span></div>
				<div className="left-0 top-0 text-[#b4d6a5] text-xl uppercase">Váš realitní makléř</div>
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
					<a href="https://www.investujdopole.cz/">Investujdopole.cz</a>|
					<a href="">Zásady ochrany osobních údajů (GDPR)</a>|
					<a href="">Zásady cookies</a>
				</div>
				<div className="text-slate-400">© Investujdopole s.r.o., 2025</div>
			</div>
		</footer>
	</div>
	);
  }
