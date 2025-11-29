import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
	return (
		<div className="font-[family-name:var(--font-montserrat)]">
			<Header></Header>
			<div className="-mt-20 lg:mt-0 grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 pb-20 gap-16 sm:p-2">
				<main className="flex flex-col gap-[32px] row-start-2 items-start">
					<h1 className="relative pl-4 text-3xl text-neutral-800 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-yellow-400">
						Sobre
					</h1>
					<p className="text-md lg:text-md mt-0 text-neutral-700 max-w-150">
						Estamos localizados na Avenida Presidente Getúlio Vargas, 374.
					</p>
					<p className="text-md lg:text-md -mt-8 text-neutral-700 max-w-150">
						Atendemos das 09:00 às 12:00 e das 13:00 às 18:00 de segunda a
						sexta-feira.
					</p>
					<iframe
						className="rounded border-solid border-3 border-b-neutral-600 w-70 h-110 lg:w-180 lg:h-150"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.9553893276375!2d-50.65956252369736!3d-25.473165034602797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e7d560ced239e9%3A0x77f79f0f424a07a4!2sSergplus%20Corretora%20De%20Seguros!5e0!3m2!1spt-BR!2sbr!4v1751918837019!5m2!1spt-BR!2sbr"
						allowFullScreen={false}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</main>
			</div>
			<Footer></Footer>
		</div>
	);
}
