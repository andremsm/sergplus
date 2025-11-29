import Header from "./components/header";
import Footer from "./components/footer";
import Image from "next/image";

export default function Home() {
	return (
		<div className="font-[family-name:var(--font-montserrat)]">
			<Header></Header>
			<section className="relative bg-[url('/background_alt.png')] bg-cover h-[400px] bg-[position:65%_center]">
				<div className="absolute inset-0 bg-black/50 sm:bg-transparent"></div>
				<div className="relative lg:ml-80 pt-17 lg:pt-30 z-10">
					<h1 className="text-5xl text-gray-100 font-[family-name:var(--font-montserrat)] ml-3 lg:-ml-5">
						<b>
							Serg<span className="text-yellow-300">Plus</span>
						</b>{" "}
						<span className="text-4xl">Corretora de Seguros</span>
					</h1>
					<p className="text-xl lg:text-2xl mt-5 ml-3 lg:-ml-5 text-gray-300 max-w-160">
						Tranquilidade e proteção que você precisa para seu patrimônio em
						Irati e região.
					</p>
				</div>
			</section>
			<h1 className="relative mt-4 ml-5 lg:mt-15 lg:ml-90 pl-4 text-2xl text-neutral-800 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-yellow-400">
				Sobre a SergPlus
			</h1>
			<p className="relative mt-3 ml-5 lg:mt-4 max-w-70 lg:max-w-300 lg:ml-90 pl-4 text-lg text-neutral-600 mb-20">
				Há 19 anos provemos nossos clientes com uma ampla variedade de
				coberturas e serviços para situações como acidentes, roubo ou furto,
				além de outros imprevistos, garantindo assistência completa ao
				motorista, aos passageiros e a terceiros que possam ser envolvidos.
			</p>

			<h1 className="relative mt-4 ml-5 lg:mt-1 lg:ml-90 pl-4 text-2xl text-neutral-800 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-yellow-400">
				Marcas
			</h1>
			<p className="relative mt-3 ml-5 lg:mt-4 max-w-80 lg:max-w-300 lg:ml-90 pl-4 text-lg text-neutral-600 mb-10">
				Trabalhamos com as seguintes empresas:
			</p>
			<ul className="flex flex-wrap relative mt-3 ml-5 lg:mt-4 max-w-70 lg:max-w-300 lg:ml-90 pl-4 text-lg text-neutral-600 mb-10">
				<li className="relative h-10 aspect-[3/1] sm:h-12 md:h-15 mr-1 lg:mr-auto ml-auto mb-5">
					<Image
						src="/brands/Allianz.svg"
						alt="Allianz"
						fill
						className="lg:-ml-5 py-1 object-contain"
						priority
						quality={100}
					></Image>
				</li>
				<li className="relative h-10 aspect-[3/1] sm:h-12 md:h-15 mr-1 lg:mr-auto ml-auto mb-5">
					<Image
						src="/brands/Bradesco.svg"
						alt="Bradesco"
						fill
						className="lg:-ml-5 py-1 object-contain"
						priority
						quality={100}
					></Image>
				</li>
				{/*Removed Essor*/}
				<li className="relative h-10 aspect-[3/1] sm:h-12 md:h-15 mr-1 lg:mr-auto ml-auto mb-5">
					<Image
						src="/brands/HDI.svg"
						alt="HDI"
						fill
						className="lg:-ml-5 py-1 object-contain"
						priority
						quality={100}
					></Image>
				</li>
				<li className="relative h-10 aspect-[3/1] sm:h-12 md:h-15 mr-1 lg:mr-auto ml-auto mb-5">
					<Image
						src="/brands/Mapfre.svg"
						alt="Mapfre"
						fill
						className="lg:-ml-5 py-1 object-contain"
						priority
						quality={100}
					></Image>
				</li>

				<li className="relative h-10 aspect-[3/1] sm:h-12 md:h-15 mr-1 lg:mr-auto ml-auto mb-5">
					<Image
						src="/brands/Porto.svg"
						alt="Porto"
						fill
						className="lg:-ml-5 py-1 object-contain"
						priority
						quality={100}
					></Image>
				</li>
				<li className="relative h-10 aspect-[3/1] sm:h-12 md:h-15 mr-1 lg:mr-auto ml-auto mb-5">
					<Image
						src="/brands/Sulamerica.png"
						alt="Sulamerica"
						fill
						className="lg:-ml-5 py-1 object-contain"
						priority
						quality={100}
					></Image>
				</li>
				<li className="relative h-10 aspect-[3/1] sm:h-12 md:h-15 mr-1 lg:mr-auto ml-auto mb-5">
					<Image
						src="/brands/Tokio_Marine.svg"
						alt="Tokio Marine"
						fill
						className="lg:-ml-5 py-1 object-contain"
						priority
						quality={100}
					></Image>
				</li>
				<li className="relative h-10 aspect-[3/1] sm:h-12 md:h-15 mr-1 lg:mr-auto ml-auto mb-5">
					<Image
						src="/brands/Yelum.svg"
						alt="Yelum"
						fill
						className="lg:-ml-5 py-1 object-contain"
						priority
						quality={100}
					></Image>
				</li>
				<li className="relative h-10 aspect-[3/1] sm:h-12 md:h-15 mr-1 lg:mr-auto ml-auto mb-5">
					<Image
						src="/brands/Zurich.svg"
						alt="Zurich"
						fill
						className="lg:-ml-5 py-1 object-contain"
						priority
						quality={100}
					></Image>
				</li>
			</ul>

			<Footer></Footer>
		</div>
	);
}
