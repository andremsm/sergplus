import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleQuestion,
	faAddressCard,
} from "@fortawesome/free-regular-svg-icons";
//import { faInbox } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
	return (
		<header className="bg-gray-800 border-solid border-b-1 border-b-gray-900 pb-2 pt-1">
			<div className="mx-auto flex h-auto max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
				<Link className="block" href="/">
					<span className="sr-only">Home</span>
					<div className="relative h-10 aspect-[3/1] sm:h-12 md:h-20">
						<Image
							src="/logo_white.png"
							alt="Sergplus"
							fill
							className="lg:-ml-5 py-1 object-contain"
							priority
							quality={100}
						></Image>
					</div>
				</Link>
				<nav className="-ml-2 lg:-mr-5 flex flex-1 items-center justify-end">
					<ul className="flex items-center gap-6 sm:text-sm md:text-lg">
						<li className="flex items-center gap-1 text-gray-100">
							<Link href="/about" className="flex items-center gap-0.5">
								<FontAwesomeIcon icon={faCircleQuestion} className="w-4 h-4 " />
								Sobre
							</Link>
						</li>
						<li className="flex items-center gap-2 text-gray-100">
							<Link href="/contact" className="flex items-center gap-1">
								<FontAwesomeIcon icon={faAddressCard} className="w-4 h-4 " />
								Contato
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
