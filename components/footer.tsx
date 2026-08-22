import Image from "next/image"
import Link from "next/link";
export default function Footer() {
	return (
		<footer id="contact" className="bg-gray-50 border-t border-gray-200 py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-4 gap-8 mb-8">
					<div>
						<div className="flex mb-2 items-center space-x-3">
							<div className="flex-shrink-0">
								<Image
									src="/images/logo.png"
									alt="Ecclesiastics Ltd"
									width={663}
									height={804}
									className="h-12  w-auto rounded-md"
								/>
							</div>
							<h3 className="font-bold ml-2 text-foreground">
								Ecclesiastics Ltd
							</h3>
						</div>
						<p className="text-gray-600 text-sm">
							Professional cleaning and maintenance services for homes,
							businesses, and rental properties.
						</p>
					</div>

					<div>
						<h4 className="font-semibold text-foreground mb-4">Services</h4>
						<ul className="space-y-2 text-gray-600 text-sm">
							<li>
								<Link
									href="#services"
									className="hover:text-primary transition-colors"
								>
									General Cleaning
								</Link>
							</li>
							<li>
								<Link
									href="#services"
									className="hover:text-primary transition-colors"
								>
									Post-Construction
								</Link>
							</li>
							<li>
								<Link
									href="#services"
									className="hover:text-primary transition-colors"
								>
									Airbnb Setup
								</Link>
							</li>
							<li>
								<Link
									href="#services"
									className="hover:text-primary transition-colors"
								>
									Maintenance
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-semibold text-foreground mb-4">Company</h4>
						<ul className="space-y-2 text-gray-600 text-sm">
							<li>
								<Link href="#" className="hover:text-primary transition-colors">
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="#team"
									className="hover:text-primary transition-colors"
								>
									Our Team
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-primary transition-colors">
									Careers
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-primary transition-colors">
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-semibold text-foreground mb-4">Contact</h4>
						<ul className="space-y-2 text-gray-600 text-sm">
							<li>
								<Link
									href="tel:+447425171644"
									className="hover:text-primary transition-colors"
								>
									+44 7425 171644
								</Link>
							</li>
							<li>
								<Link
									href="mailto:info@ecclesiasticsltd.co.uk"
									className="hover:text-primary transition-colors"
								>
									info@ecclesiasticsltd.co.uk
								</Link>
							</li>
							<li>
								<Link
									href="https://wa.me/447425171644"
									target="_blank"
									rel="noopener noreferrer"
									className="font-medium text-[#25D366] hover:text-[#128C7E] transition-colors"
								>
									Contact us on WhatsApp
								</Link>
							</li>
							<li className="text-gray-400 text-xs">
								UK-Based • DBS Checked • Fully Insured
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
					<p>&copy; 2025 Ecclesiastics Ltd. All rights reserved.</p>
					<div className="flex gap-6 mt-4 md:mt-0">
						<Link href="#" className="hover:text-primary transition-colors">
							Privacy Policy
						</Link>
						<Link href="#" className="hover:text-primary transition-colors">
							Terms of Service
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
