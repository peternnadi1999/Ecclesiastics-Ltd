"use client";

import { useEffect, useState } from "react";

const calendlyUrl = "https://calendly.com/petnacode644/professional-cleaning-service";

export default function BookingModal({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") setIsOpen(false);
		};

		document.addEventListener("keydown", handleKeyDown);
		document.body.style.overflow = "hidden";

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	return (
		<>
			<button type="button" onClick={() => setIsOpen(true)} className={className}>
				{children}
			</button>

			{isOpen && (
				<div
					role="dialog"
					aria-modal="true"
					aria-label="Book a consultation"
					className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
					onMouseDown={(event) => {
						if (event.target === event.currentTarget) setIsOpen(false);
					}}
				>
					<div className="relative h-[min(760px,calc(100vh-2rem))] w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-2xl">
						<button
							type="button"
							onClick={() => setIsOpen(false)}
							aria-label="Close booking modal"
							className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-2xl text-gray-700 shadow-md transition-colors hover:bg-gray-100"
						>
							<span aria-hidden="true">&times;</span>
						</button>
						<iframe
							title="Calendly booking"
							src={`${calendlyUrl}?embed_domain=${typeof window !== "undefined" ? window.location.hostname : ""}&embed_type=Inline`}
							className="h-full w-full border-0"
						/>
					</div>
				</div>
			)}
		</>
	);
}