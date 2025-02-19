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

			video
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

		<section className="p-12 flex justify-between bg-indigo-950 my-[150px] rounded-xl">
			<div className="flex flex-col text-white">
				<div className="uppercase font-bold text-emerald-500">Váš realitní makléř</div>
				<div className="text-2xl">Bc. František Šťastník<span className="font-bold text-emerald-500">.</span></div>
				<a href="mailto:frantisek.stastnik@investujdopole.cz" className="p-5">frantisek.stastnik@investujdopole.cz</a>
				<a href="tel:+420775972405" className="p-5 border border-emerald-500 rounded-xl bg-emerald-900">+420 775 972 405</a>
				<a href="https://www.investujdopole.cz/" className="p-5">Investujdopole.cz</a>
			</div>
			<div className="p-9 bg-white text-indigo-950 rounded-xl">
				<h2 className="text-2xl">Kontaktujte mě.</h2>
				Jméno Příjmení|
				Telefonní číslo
				E-mail
				Vaše zpráva
				<Btn text="Odeslat zprávu"/>
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
