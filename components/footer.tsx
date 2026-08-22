export default function Footer() {
	return (
		<footer id="contact" className="bg-gray-50 border-t border-gray-200 py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-4 gap-8 mb-8">
					<div>
						<div className="flex mb-2 items-center space-x-3">
							<div className="flex-shrink-0">
								<img
									src="/images/logo.png"
									alt="Ecclesiastics Ltd"
									className="h-12 w-auto rounded-md"
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
								<a
									href="#services"
									className="hover:text-primary transition-colors"
								>
									General Cleaning
								</a>
							</li>
							<li>
								<a
									href="#services"
									className="hover:text-primary transition-colors"
								>
									Post-Construction
								</a>
							</li>
							<li>
								<a
									href="#services"
									className="hover:text-primary transition-colors"
								>
									Airbnb Setup
								</a>
							</li>
							<li>
								<a
									href="#services"
									className="hover:text-primary transition-colors"
								>
									Maintenance
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-semibold text-foreground mb-4">Company</h4>
						<ul className="space-y-2 text-gray-600 text-sm">
							<li>
								<a href="#" className="hover:text-primary transition-colors">
									About Us
								</a>
							</li>
							<li>
								<a
									href="#team"
									className="hover:text-primary transition-colors"
								>
									Our Team
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-primary transition-colors">
									Careers
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-primary transition-colors">
									Contact
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-semibold text-foreground mb-4">Contact</h4>
						<ul className="space-y-2 text-gray-600 text-sm">
							<li>
								<a
									href="tel:+447425171644"
									className="hover:text-primary transition-colors"
								>
									+44 7425 171644
								</a>
							</li>
							<li>
								<a
									href="mailto:info@ecclesiasticsltd.co.uk"
									className="hover:text-primary transition-colors"
								>
									info@ecclesiasticsltd.co.uk
								</a>
							</li>
							<li>
								<a
									href="https://wa.me/447425171644"
									target="_blank"
									rel="noopener noreferrer"
									className="font-medium text-[#25D366] hover:text-[#128C7E] transition-colors"
								>
									Contact us on WhatsApp
								</a>
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
						<a href="#" className="hover:text-primary transition-colors">
							Privacy Policy
						</a>
						<a href="#" className="hover:text-primary transition-colors">
							Terms of Service
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
