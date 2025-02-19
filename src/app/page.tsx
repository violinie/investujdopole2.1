import Btn from "../components/Btn";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import LogoLight from "@/public/logo--white.svg";

export default function Home() {
	return (
	<div>
		<header className="p-6 flex justify-between items-center">
		<a href="https://www.investujdopole.cz/"><Image src={Logo} alt="Logo Investuj do pole" width={150} height={50} /></a>
			<nav>
				<ul className={"flex gap-12"}>
					<li><a href="">Vyjímečný pozemek</a></li>
					<li><a href="">O nás</a></li>
					<li><a href="">Reference</a></li>
					<li><a href="">Kontakt</a></li>
				</ul>
			</nav>
			<Btn text="Chci poslední pozemek"/>
		</header>
			<h1 className="text-4xl font-bold text-center py-4">
				Poslední perla trojských pozemků.
			</h1>
			<p>Objevte jedinečnou příležitost vlastnit poslední pozemek této velikosti a exkluzivity v Praze-Troji.</p>
			<Btn text="Chci poslední pozemek"/>

			<Btn text="Chci prestižní adresu"/>

		<footer className="bg-indigo-950 px-[120px] py-[68px]">
			<div className="grid grid-cols-5 gap-8 my-8">
				<div className="text-white col-span-2 space-y-4">
					<a href="https://www.investujdopole.cz/"><Image src={LogoLight} alt="Logo Investuj do pole" height={42} /></a>
					<a className="flex text-2xl" href="mailto:info@investujdopole.cz">info@investujdopole.cz</a>
					<a className="text-2xl" href="tel:+420775972405"><span className="text-emerald-500">+420</span> 775 972 405</a>

				</div>
				<ul className="gap-2">
					<li className="text-white text-lg">O společnosti.</li>
					<li><a href="" className="text-slate-400">O nás</a></li>
					<li><a href="" className="text-slate-400">Naše nabídka</a></li>
					<li><a href="" className="text-slate-400">Kontakt</a></li>
				</ul>
				<ul>
					<li className="text-white text-lg">Vzdělávání.</li>
					<li><a href="" className="text-slate-400">Blog</a></li>
					<li><a href="" className="text-slate-400">Webinář</a></li>
					<li><a href="" className="text-slate-400">Newsletter</a></li>
				</ul>
				<ul>
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
