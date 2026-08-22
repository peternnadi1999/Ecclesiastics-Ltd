import Link from "next/link";
import BookingModal from "./booking-modal";

export default function CTA() {
	return (
		<section className="py-16 bg-primary/95 text-white">
			<div className="max-w-6xl mx-auto px-10 sm:px-6 lg:px-8">
				<div className="text-center space-y-6">
					<h2 className="text-xl md:text-3xl font-bold">
						Let's Make It Sparkle
					</h2>
					<p className="text-sm md:text-xl text-white/90 max-w-2xl mx-auto">
						From homes and offices to rental properties, new builds and post-party clean-ups, Ecclesiastics Ltd delivers more than cleaning; we clean, maintain and elevate every space.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
						<BookingModal
							className="border-2 border-white cursor-pointer text-white hover:bg-white hover:text-primary/95 px-8 py-2 flex items-center justify-center rounded-full font-semibold transition-colors text-center"
						>
							Book Your Consultation
						</BookingModal>
						<Link
							href="tel:+447425171644"
							className="border-2 border-white text-white px-8 py-2 flex items-center justify-center rounded-full font-semibold hover:bg-white hover:text-primary/95 transition-colors text-center"
						>
							Call Us Today
						</Link>
						<a
							href="https://wa.me/447425171644"
							target="_blank"
							rel="noopener noreferrer"
							className="border-2 border-white text-white px-8 py-2 flex items-center justify-center rounded-full font-semibold hover:bg-white hover:text-primary/95 transition-colors text-center"
						>
							WhatsApp Us
						</a>
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
