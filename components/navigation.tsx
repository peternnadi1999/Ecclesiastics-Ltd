"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		element?.scrollIntoView({ behavior: "smooth" });
		setIsOpen(false);
	};

	return (
		<nav className="sticky z-50">
			<div className="bg-white border border-gray-200 shadow-lg">
				<div className="flex justify-between items-center h-20 px-7 md:px-14 max-w-7xl mx-auto">
					{/* Logo */}
					<div className="flex mb-2 items-center space-x-3">
						<div className="flex-shrink-0">
							<img
								src="/images/logo.jpeg"
								alt="Ecclesiastics Ltd"
								className="h-14 w-auto rounded-md"
							/>
						</div>
						<h3 className="font-bold ml-2 text-foreground">
							Ecclesiastics Ltd
						</h3>
					</div>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center gap-8">
						<button
							onClick={() => scrollToSection("about")}
							className="text-gray-700 hover:text-[#be0060] font-bold transition-colors"
						>
							About Us
						</button>
						<button
							onClick={() => scrollToSection("services")}
							className="text-gray-700 hover:text-[#be0060] font-bold transition-colors"
						>
							Services
						</button>
						<button
							onClick={() => scrollToSection("team")}
							className="text-gray-700 hover:text-[#be0060] font-bold transition-colors"
						>
							Our Team
						</button>
						<button
							onClick={() => scrollToSection("contact")}
							className="text-gray-700 hover:text-[#be0060] font-bold transition-colors"
						>
							Contact Us
						</button>
					</div>

					<Link
						href="https://calendly.com"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-[#be0060] text-white md:block hidden px-6 py-2 rounded-full font-medium hover:bg-[#be0060] transition-all hover:shadow-lg hover:shadow-primary/50"
					>
						Book Now
					</Link>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden text-gray-700"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<div className="md:hidden pb-4 border-t border-gray-200 space-y-3 pt-4 px-8">
						<button
							onClick={() => scrollToSection("about")}
							className="block w-full text-left text-gray-700 hover:text-[#be0060] py-2 font-medium"
						>
							About Us
						</button>
						<button
							onClick={() => scrollToSection("services")}
							className="block w-full text-left text-gray-700 hover:text-[#be0060] py-2 font-medium"
						>
							Services
						</button>
						<button
							onClick={() => scrollToSection("team")}
							className="block w-full text-left text-gray-700 hover:text-[#be0060] py-2 font-medium"
						>
							Our Team
						</button>
						<button
							onClick={() => scrollToSection("contact")}
							className="block w-full text-left text-gray-700 hover:text-[#be0060] py-2 font-medium"
						>
							Contact Us
						</button>
						<Link
							href="https://calendly.com"
							target="_blank"
							rel="noopener noreferrer"
							className="block w-full bg-[#be0060] text-white px-6 py-2 rounded-full font-medium text-center hover:bg-[#c41e3ab7] transition-all"
						>
							Book Now
						</Link>
					</div>
				)}
			</div>
		</nav>
	);
}
