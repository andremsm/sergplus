import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
	return (
		<div className="font-[family-name:var(--font-montserrat)]">
			<Header></Header>
			<div className="-mt-20 lg:mt-0 grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 pb-20 gap-16 sm:p-2">
				<main className="flex flex-col gap-[32px] row-start-2 items-start">
					<h1 className="flex flex-wrap relative pl-4 text-3xl text-neutral-800 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-yellow-400">
						Telefone
					</h1>
					<p className="text-md lg:text-md mt-0 text-neutral-700 max-w-150">
						Você pode nos contatar através dos seguintes telefones, por ligação
						ou Whatsapp:
					</p>
					<Link href="tel:+55 (42) 9 9101-8067">
						<p className="mx-auto mt-0 max-w-md text-center leading-relaxed text-neutral-700 flex items-center gap-1 justify-center">
							<FontAwesomeIcon icon={faPhone} className="w-4 h-4 " />
							(42) 9 9101 8067 (Sergio)
						</p>
					</Link>
					<Link href="tel:+55 (42) 9 9947 6878">
						<p className="mx-auto mb-[12px] -mt-5 max-w-md text-center leading-relaxed text-neutral-700 flex items-center gap-1 justify-center">
							<FontAwesomeIcon icon={faPhone} className="w-4 h-4 " />
							(42) 9 9947 6878 (Celso)
						</p>
					</Link>
					<h1 className="flex flex-wrap relative pl-4 text-3xl text-neutral-800 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-yellow-400">
						Email
					</h1>
					<p className="text-md lg:text-md mt-0 text-neutral-700 max-w-150">
						Você também pode nos contatar por email através do seguinte
						endereço:
					</p>
					<Link href="mailto:sergplus.seguros@uol.com.br">
						<p className="mx-auto mt-[1px] max-w-md text-center leading-relaxed text-neutral-700 flex items-center gap-1 justify-center">
							<FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 " />
							sergplus.seguros@uol.com.br
						</p>
					</Link>
				</main>
			</div>
			<Footer></Footer>
		</div>
	);
}
