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
						<h2 className="text-xl font-bold tracking-[0.08em] text-[#be0060]">
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
						className="relative h-96 md:h-full overflow-hidden"
					>
						<Image
							src="/images/about.png"
							width={500}
							height={500}
							alt="Ecclesiastics Ltd team providing professional cleaning services"
							className="w-full h-full z-10 object-cover"
						/>

						<Image
							src="/images/about-img2.jpg"
							width={500}
							height={500}
							alt="Ecclesiastics Ltd team providing professional cleaning services"
							className="
								w-56 h-56 
								z-50 
								rounded-full 
								absolute 
								left-1/2 
								-translate-x-1/2 
								-bottom-20 
								object-cover 
								animate-bounce
							"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
