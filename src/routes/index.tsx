import amazonLogo from "@/assets/amazon.svg";
import ArrowIcon2 from "@/assets/arrow-icon-2.svg";
import ArrowIcon from "@/assets/arrow-icon.svg";
import CTAImage from "@/assets/cta-img.png";
import dribbleLogo from "@/assets/dribble.svg";
import hubspotLogo from "@/assets/hubspot.svg";
import nexflixLogo from "@/assets/netflix.svg";
import notionLogo from "@/assets/notion.svg";
import smmImage from "@/assets/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.png";
import seoImage from "@/assets/tokyo-magnifier-web-search-with-elements 2.png";
import contentImage from "@/assets/tokyo-many-browser-windows-with-different-information 1.png";
import ppcImage from "@/assets/tokyo-selecting-a-value-in-the-browser-window 1.png";
import emailImage from "@/assets/tokyo-sending-messages-from-one-place-to-another 1.png";
import analyticsImage from "@/assets/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.png";
import zoomLogo from "@/assets/zoom.svg";
import { cn } from "@sglara/cn";
import { createFileRoute } from "@tanstack/react-router";
import type { ComponentProps } from "react";

export const Route = createFileRoute("/")({
	component: App,
});

function Hero() {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mt-8 px-4">
			<div className="col-span-1">
				<div className="md:px-4 space-y-6 my-auto">
					<h1 className="text-left font-medium text-h1-mobile md:text-h1 leading-tight">
						Navigating the digital landscape for success
					</h1>

					<p className="text-p-mobile md:text-p">
						Our digital marketing agency helps businesses grow and succeed
						online through a range of services including SEO, PPC, social media
						marketing, and content creation.
					</p>

					<button
						type="button"
						className="py-4 px-8 bg-dark-grey text-white rounded-xl"
					>
						Book a consultation
					</button>
				</div>
			</div>
			<div className="col-span-1 px-4">
				<img
					className="w-full aspect-square"
					src="/mega.png"
					alt="loudspeaker"
				/>
			</div>
			<div className="col-span-2">
				<Companies />
			</div>
		</section>
	);
}

function Companies() {
	return (
		<div className="flex items-center justify-between flex-wrap gap-4 mt-4">
			<div className="grayscale hover:grayscale-0 transition-all duration-300">
				<img src={amazonLogo} alt="Amazon Logo" className="h-8 w-auto" />
			</div>
			<div className="grayscale hover:grayscale-0 transition-all duration-300">
				<img src={dribbleLogo} alt="Dribble Logo" className="h-8 w-auto" />
			</div>
			<div className="grayscale hover:grayscale-0 transition-all duration-300">
				<img src={hubspotLogo} alt="HubSpot Logo" className="h-8 w-auto" />
			</div>
			<div className="grayscale hover:grayscale-0 transition-all duration-300">
				<img src={nexflixLogo} alt="Netflix Logo" className="h-8 w-auto" />
			</div>
			<div className="grayscale hover:grayscale-0 transition-all duration-300">
				<img src={notionLogo} alt="Notion Logo" className="h-8 w-auto" />
			</div>
			<div className="grayscale hover:grayscale-0 transition-all duration-300">
				<img src={zoomLogo} alt="Zoom Logo" className="h-8 w-auto" />
			</div>
		</div>
	);
}

function SectionHeader({
	title,
	description,
}: { title: string; description: string }) {
	return (
		<div className="flex flex-row items-center gap-x-12 mb-12">
			<h2 className="text-h2-mobile md:text-h2 px-2 font-medium leading-tight bg-green rounded-md">
				{title}
			</h2>
			<p className="text-p-mobile md:text-p text-dark-grey max-w-xl">
				{description}
			</p>
		</div>
	);
}

function Section({
	title,
	description,
	children,
}: { title: string; description: string; children: React.ReactNode }) {
	return (
		<section className="my-12 px-4">
			<SectionHeader title={title} description={description} />
			{children}
		</section>
	);
}

function Card({ className, ...props }: ComponentProps<"div">) {
	return (
		<div className={cn("col-span-1", "relative")} {...props}>
			<div className="absolute -inset-x-0.5 -inset-y-1.5 transform translate-y-1 bg-black rounded-4xl" />
			<div
				className={cn(
					"relative z-10 rounded-[calc(var(--radius-4xl)-2px)] p-12",
					className,
				)}
			>
				{props.children}
			</div>
		</div>
	);
}

function ServicesSection() {
	return (
		<Section
			title="Services"
			description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
				<Card className="bg-grey">
					<div className="grid grid-cols-2 gap-x-4 md:gap-x-8">
						<div className="col-span-1 flex flex-col justify-between">
							<h3 className="text-h3-mobile md:text-h3 leading-relaxed !inline [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-green rounded-md px-2">
								Search Engine Optimization
							</h3>

							<div className="flex space-x-4 items-center">
								<img src={ArrowIcon} alt="Arrow Icon" />
								<p className="text-p-mobile md:text-p text-dark-grey">
									Learn more
								</p>
							</div>
						</div>
						<div className="col-span-1">
							<img src={seoImage} alt="Magnifier" className="w-full h-auto" />
						</div>
					</div>
				</Card>

				<Card className="bg-green">
					<div className="grid grid-cols-2 gap-x-4 md:gap-x-8">
						<div className="col-span-1 flex flex-col justify-between">
							<h3 className="text-h3-mobile md:text-h3 leading-relaxed !inline [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-grey rounded-md px-2">
								Pay-Per-Click Advertising
							</h3>

							<div className="flex space-x-4 items-center">
								<img src={ArrowIcon} alt="Arrow Icon" />
								<p className="text-p-mobile md:text-p text-dark-grey">
									Learn more
								</p>
							</div>
						</div>
						<div className="col-span-1">
							<img
								src={ppcImage}
								alt="Browser Window"
								className="w-full h-auto"
							/>
						</div>
					</div>
				</Card>

				<Card className="bg-dark-grey">
					<div className="grid grid-cols-2 gap-x-4 md:gap-x-8">
						<div className="col-span-1 flex flex-col justify-between">
							<h3 className="text-h3-mobile md:text-h3 leading-relaxed !inline [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-white rounded-md px-2">
								Social Media Marketing
							</h3>

							<div className="flex space-x-4 items-center">
								<img src={ArrowIcon2} alt="Arrow Icon" />
								<p className="text-p-mobile md:text-p text-white">Learn more</p>
							</div>
						</div>
						<div className="col-span-1">
							<img
								src={smmImage}
								alt="Browser Window with Likes"
								className="w-full h-auto"
							/>
						</div>
					</div>
				</Card>

				<Card className="bg-grey">
					<div className="grid grid-cols-2 gap-x-4 md:gap-x-8">
						<div className="col-span-1 flex flex-col justify-between">
							<h3 className="text-h3-mobile md:text-h3 leading-relaxed !inline [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-green rounded-md px-2">
								Email Marketing
							</h3>

							<div className="flex space-x-4 items-center">
								<img src={ArrowIcon} alt="Arrow Icon" />
								<p className="text-p-mobile md:text-p text-dark-grey">
									Learn more
								</p>
							</div>
						</div>
						<div className="col-span-1">
							<img
								src={emailImage}
								alt="Sending Messages"
								className="w-full h-auto"
							/>
						</div>
					</div>
				</Card>

				<Card className="bg-green">
					<div className="grid grid-cols-2 gap-x-4 md:gap-x-8">
						<div className="col-span-1 flex flex-col justify-between">
							<h3 className="text-h3-mobile md:text-h3 leading-relaxed !inline [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-grey rounded-md px-2">
								Content Creation
							</h3>

							<div className="flex space-x-4 items-center">
								<img src={ArrowIcon} alt="Arrow Icon" />
								<p className="text-p-mobile md:text-p text-dark-grey">
									Learn more
								</p>
							</div>
						</div>
						<div className="col-span-1">
							<img
								src={contentImage}
								alt="Browser Windows with Information"
								className="w-full h-auto"
							/>
						</div>
					</div>
				</Card>

				<Card className="bg-dark-grey">
					<div className="grid grid-cols-2 gap-x-4 md:gap-x-8">
						<div className="col-span-1 flex flex-col justify-between">
							<h3 className="text-h3-mobile md:text-h3 leading-relaxed !inline [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-white rounded-md px-2">
								Analytics and tracking
							</h3>

							<div className="flex space-x-4 items-center">
								<img src={ArrowIcon2} alt="Arrow Icon" />
								<p className="text-p-mobile md:text-p text-white">Learn more</p>
							</div>
						</div>
						<div className="col-span-1">
							<img
								src={analyticsImage}
								alt="Analytics in Web Browsers"
								className="w-full h-auto"
							/>
						</div>
					</div>
				</Card>
			</div>
		</Section>
	);
}

function CTA() {
	return (
		<section className="my-12 bg-grey grid grid-cols-1 md:grid-cols-2 gap-x-12 p-12 rounded-4xl">
			<div className="flex flex-col space-y-6 text-left col-span-1">
				<h2 className="text-h2-mobile md:text-h2 font-medium leading-tight">
					Let’s make things happen
				</h2>
				<p className="text-p-mobile md:text-p text-dark-grey max-w-xl">
					Contact us today to learn more about how our digital marketing
					services can help your business grow and succeed online.
				</p>
				<button
					type="button"
					className="py-3 px-6 bg-dark-grey text-white rounded-xl w-54"
				>
					Get in touch
				</button>
			</div>

			<div className="col-span-1 relative">
				<img
					src={CTAImage}
					alt="Contact Us"
					className="w-full max-w-md h-auto absolute -inset-4"
				/>
			</div>
		</section>
	);
}

function App() {
	return (
		<div className="space-y-24">
			<Hero />
			<ServicesSection />
			<CTA />
		</div>
	);
}
