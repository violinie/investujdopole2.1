import Btn from "../components/Btn";
import Image from "next/image";
import logo from "@/public/logo.svg";

export default function Home() {
	return (
	<div>
		<header className={"p-6 flex justify-between items-center"}>
		<a href="https://www.investujdopole.cz/"><Image src={logo} alt="Logo Investuj do pole" width={150} height={50} /></a>
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
			<h1 className={"text-4xl font-bold text-center py-4"}>
				Poslední perla trojských pozemků.
			</h1>
			<p>Objevte jedinečnou příležitost vlastnit poslední pozemek této velikosti a exkluzivity v Praze-Troji.</p>
			<Btn text="Chci poslední pozemek"/>

			<video controls width="250">
				<source src="/media/cc0-videos/flower.webm" type="video/webm" />
				<source src="/media/cc0-videos/flower.mp4" type="video/mp4" />
			</video>
			<Btn text="Chci prestižní adresu"/>
			<div></div>

		<footer></footer>
	</div>
	);
  }
