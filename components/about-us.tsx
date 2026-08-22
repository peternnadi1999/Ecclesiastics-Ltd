"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
	return (
		<section id="about" className="w-full bg-white py-16 md:py-16">
			<div className="max-w-6xl mx-auto px-4 md:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

					{/* Left content - fade in from left */}
					<motion.div
						initial={{ opacity: 0, x: -60 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.8 }}
						className="space-y-5"
					>
						<h2 className="text-xl font-bold tracking-[0.08em] text-primary">
							About Us
						</h2>

						<div className="space-y-4 text-gray-700 text-lg leading-relaxed">
							<p>
								Ecclesiastics Ltd is a registered UK business proudly committed
								to delivering cleaning and maintenance services that meet and
								exceed appropriate industry standards. With a dedication to
								professionalism, integrity, and consistent quality, we aim to
								simplify space care and provide holistic solutions for homes,
								commercial spaces, and short-term rentals.
							</p>

							<p>
								Our team is trained, experienced, and passionate about helping
								our clients maintain pristine, functional, and inviting
								environments.
							</p>
						</div>
					</motion.div>

					{/* Right image - fade in from right */}
					<motion.div
						initial={{ opacity: 0, x: 60 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.8 }}
						className="relative h-96 md:h-[26rem]"
					>
						{/* Accent block behind the photo for depth */}
						<div className="absolute -top-4 -right-4 w-full h-full rounded-2xl bg-primary/10 hidden md:block" />
						<div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-secondary/20 hidden md:block" />

						<div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
							<Image
								src="/images/about-clean.png"
								width={663}
								height={804}
								alt="Ecclesiastics Ltd team providing professional cleaning services"
								className="w-full h-full object-cover"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
