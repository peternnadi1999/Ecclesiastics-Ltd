import Link from "next/link";

export default function CTA() {
	return (
		<section className="py-16 bg-[#be005ff6] text-white">
			<div className="max-w-6xl mx-auto px-10 sm:px-6 lg:px-8">
				<div className="text-center space-y-6">
					<h2 className="text-xl md:text-3xl font-bold">
						Let's Make It Sparkle
					</h2>
					<p className="text-sm md:text-xl text-white/90 max-w-2xl mx-auto">
						Whether it’s your home, office, rental property, new build, or party
						aftermath, Ecclesiastics Ltd is here to help you clean it, maintain
						it, and elevate it.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
						<Link
							href="https://calendly.com"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-white text-[#be005ff6] px-8 py-2 flex items-center justify-center rounded-full font-semibold hover:bg-gray-100 transition-colors text-center"
						>
							Book Your Consultation
						</Link>
						<Link
							href="tel:+447425171644"
							className="border-2 border-white text-white px-8 py-2 flex items-center justify-center rounded-full font-semibold hover:bg-white/10 transition-colors text-center"
						>
							Call Us Today
						</Link>
					</div>

					<div className="pt-8 text-white/90 text-base">
						<p>
							Contact us today to book a consultation or learn more about our
							cleaning and maintenance packages.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
