import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="bg-gray-800 border-solid border-t-3 border-t-gray-700 pb-2 pt-1">
			<div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
				<div className="flex justify-center">
					<Link className="block" href="/">
						<span className="sr-only">Home</span>
						<div className="relative h-20 aspect-[3/1] sm:h-12 md:h-20">
							<Image
								src="/logo_white.png"
								alt="Sergplus"
								fill
								className="py-1 object-contain"
								priority
								quality={100}
							></Image>
						</div>
					</Link>
				</div>

				<p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-300 flex items-center gap-1 justify-center">
					<FontAwesomeIcon
						icon={faLocationDot}
						className="w-4 h-4 hidden sm:block"
					/>
					Av. Pres. Getúlio Vargas, 374 - Irati, PR, 84500-000
				</p>
				<Link href="tel:+55 (42) 9 9101-8067">
					<p className="mx-auto mt-3 max-w-md text-center leading-relaxed text-gray-300 flex items-center gap-1 justify-center">
						<FontAwesomeIcon icon={faPhone} className="w-4 h-4 " />
						(42) 9 9101 8067 (Sergio)
					</p>
				</Link>
				<Link href="tel:+55 (42) 9 9947 6878">
					<p className="mx-auto -mt-0.5 max-w-md text-center leading-relaxed text-gray-300 flex items-center gap-1 justify-center">
						<FontAwesomeIcon icon={faPhone} className="w-4 h-4 " />
						(42) 9 9947 6878 (Celso)
					</p>
				</Link>
			</div>
		</footer>
	);
}
