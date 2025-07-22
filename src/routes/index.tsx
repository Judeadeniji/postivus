import amazonLogo from "@/assets/amazon.svg";
import ArrowIcon2 from "@/assets/arrow-icon-2.svg";
import ArrowIcon from "@/assets/arrow-icon.svg";
import contactIllustration from "@/assets/contact-illustration.png";
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
import {
	type ChangeEventHandler,
	Children,
	type ComponentProps,
	type PropsWithChildren,
	type ReactElement,
	cloneElement,
	isValidElement,
	useState,
} from "react";

export const Route = createFileRoute("/")({
	component: App,
});

function Hero() {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 px-4">
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
			<div className="col-span-1 md:col-span-2">
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
		<div className="flex flex-col md:flex-row items-center gap-x-12 gap-y-4 mb-8 md:mb-12">
			<div>
				<h2 className="text-h2-mobile md:text-h2 px-2 inline font-medium leading-tight bg-green rounded-md">
					{title}
				</h2>
			</div>
			<p className="text-p-mobile md:text-p text-center md:text-start text-dark-grey max-w-xl">
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
		<section className="px-4">
			<SectionHeader title={title} description={description} />
			{children}
		</section>
	);
}

function Card({ className, ...props }: ComponentProps<"div">) {
	return (
		<div className="col-span-1 relative" {...props}>
			<div className="absolute -inset-x-0.5 -inset-y-1.5 transform translate-y-1 bg-black rounded-4xl" />
			<div
				className={cn(
					"relative z-10 h-full rounded-[calc(var(--radius-4xl)-2px)] p-8 md:p-12",
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
							<div>
								<h3 className="text-h4-mobile md:text-h3 leading-tight !inline [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-green rounded-md px-2">
									Search Engine Optimization
								</h3>
							</div>

							<div className="flex space-x-4 items-center">
								<img src={ArrowIcon} alt="Arrow Icon" />
								<p className="text-p-mobile md:text-p text-dark-grey">
									Learn more
								</p>
							</div>
						</div>
						<div className="col-span-1">
							<img
								src={seoImage}
								alt="Magnifier"
								className="w-full h-auto aspect-square"
							/>
						</div>
					</div>
				</Card>

				<Card className="bg-green">
					<div className="grid grid-cols-2 gap-x-4 md:gap-x-8">
						<div className="col-span-1 flex flex-col justify-between">
							<div>
								<h3 className="text-h4-mobile md:text-h3 leading-tight !inline [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-grey rounded-md px-2">
									Pay-Per-Click Advertising
								</h3>
							</div>

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
								className="w-full h-auto aspect-square"
							/>
						</div>
					</div>
				</Card>

				<Card className="bg-dark-grey">
					<div className="grid grid-cols-2 gap-x-4 md:gap-x-8">
						<div className="col-span-1 flex flex-col justify-between">
							<div>
								<h3 className="text-h4-mobile md:text-h3 leading-tight !inline [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-white rounded-md px-2">
									Social Media Marketing
								</h3>
							</div>

							<div className="flex space-x-4 items-center">
								<img src={ArrowIcon2} alt="Arrow Icon" />
								<p className="text-p-mobile md:text-p text-white">Learn more</p>
							</div>
						</div>
						<div className="col-span-1">
							<img
								src={smmImage}
								alt="Browser Window with Likes"
								className="w-full h-auto aspect-square"
							/>
						</div>
					</div>
				</Card>

				<Card className="bg-grey">
					<div className="grid grid-cols-2 gap-x-4 md:gap-x-8">
						<div className="col-span-1 flex flex-col justify-between">
							<div>
								<h3 className="text-h4-mobile md:text-h3 leading-tight !inline [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-green rounded-md px-2">
									Email Marketing
								</h3>
							</div>

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
								className="w-full h-auto aspect-square"
							/>
						</div>
					</div>
				</Card>

				<Card className="bg-green">
					<div className="grid grid-cols-2 gap-x-4 md:gap-x-8">
						<div className="col-span-1 flex flex-col justify-between">
							<div>
								<h3 className="text-h4-mobile md:text-h3 leading-tight !inline [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-grey rounded-md px-2">
									Content Creation
								</h3>
							</div>

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
								className="w-full h-auto aspect-square"
							/>
						</div>
					</div>
				</Card>

				<Card className="bg-dark-grey">
					<div className="grid grid-cols-2 gap-x-4 md:gap-x-8">
						<div className="col-span-1 flex flex-col justify-between min-w-0">
							<div>
								<h3 className="text-h4-mobile md:text-h3 leading-tight !inline [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-white rounded-md px-2">
									Analytics and tracking
								</h3>
							</div>

							<div className="flex space-x-4 items-center">
								<img src={ArrowIcon2} alt="Arrow Icon" />
								<p className="text-p-mobile md:text-p text-white">Learn more</p>
							</div>
						</div>
						<div className="col-span-1">
							<img
								src={analyticsImage}
								alt="Analytics in Web Browsers"
								className="w-full h-auto aspect-square"
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
		<section className="mx-4 bg-grey grid grid-cols-1 md:grid-cols-3 gap-x-12 px-8 md:px-12 py-6 rounded-4xl">
			<div className="flex flex-col justify-center space-y-6 text-left col-span-1 md:col-span-2">
				<h2 className="text-h2-mobile md:text-h2 font-medium leading-tight">
					Let’s make things happen
				</h2>
				<p className="text-p-mobile md:text-p text-dark-grey max-w-xl">
					Contact us today to learn more about how our digital marketing
					services can help your business grow and succeed online.
				</p>
				<button
					type="button"
					className="py-3 px-6 bg-dark-grey text-white rounded-xl w-54 hover:underline"
				>
					Get your free proposal
				</button>
			</div>

			<div className="col-span-1 relative hidden md:flex items-center justify-center">
				<img
					src={CTAImage}
					alt="Contact Us"
					className="w-full md:max-w-md h-auto"
				/>
			</div>
		</section>
	);
}

function CaseStudySection() {
	return (
		<Section
			title="Case Studies"
			description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
		>
			<section className="bg-dark-grey grid grid-cols-1 md:grid-cols-3 gap-x-12 p-12 rounded-4xl md:divide-x divide-white">
				<div className="col-span-1 p-4">
					<div className="flex flex-col justify-center space-y-6 text-left">
						<p className="text-grey">
							For a local restaurant, we implemented a targeted PPC campaign
							that resulted in a 50% increase in website traffic and a 25%
							increase in sales.
						</p>
						<button
							type="button"
							className="hover:underline flex items-center space-x-2 text-green"
						>
							<span>Learn more</span>
							<img
								src={ArrowIcon}
								alt="Arrow Icon"
								className="inline h-6 w-6"
							/>
						</button>
					</div>
				</div>

				<div className="col-span-1 p-4">
					<div className="flex flex-col justify-center space-y-6 text-left">
						<p className="text-grey">
							For a B2B software company, we developed an SEO strategy that
							resulted in a first page ranking for key keywords and a 200%
							increase in organic traffic.
						</p>
						<button
							type="button"
							className="hover:underline flex items-center space-x-2 text-green"
						>
							<span>Learn more</span>
							<img
								src={ArrowIcon}
								alt="Arrow Icon"
								className="inline h-6 w-6"
							/>
						</button>
					</div>
				</div>

				<div className="col-span-1 p-4">
					<div className="flex flex-col justify-center space-y-6 text-left">
						<p className="text-grey">
							For a national retail chain, we created a social media marketing
							campaign that increased followers by 25% and generated a 20%
							increase in online sales.
						</p>
						<button
							type="button"
							className="hover:underline flex items-center space-x-2 text-green"
						>
							<span>Learn more</span>
							<img
								src={ArrowIcon}
								alt="Arrow Icon"
								className="inline h-6 w-6"
							/>
						</button>
					</div>
				</div>
			</section>
		</Section>
	);
}

function AccordionItem({
	index,
	title,
	description,
	isOpen,
	onToggle,
}: {
	index: number;
	title: string;
	description: string;
	isOpen?: boolean;
	onToggle?: () => void;
}) {
	return (
		<Card
			className={cn(
				{
					"bg-grey": !isOpen,
					"bg-green": isOpen,
					"cursor-pointer": onToggle,
					"hover:bg-green/80": onToggle && !isOpen,
					"hover:bg-grey/80": onToggle && isOpen,
				},
				"p-8",
			)}
		>
			<div
				className={cn({
					"divide-y divide-black": isOpen,
				})}
			>
				<button
					type="button"
					className="w-full text-left focus:outline-none flex justify-between items-center"
					onClick={onToggle}
				>
					<div className="flex items-center space-x-1">
						<span className="text-h1-mobile md:text-h1 font-medium leading-tight">
							{`0${index + 1}`}
						</span>
						<span
							className={cn(
								"text-h4-mobile md:text-h3 leading-tight !inline [box-decoration-break:clone] [-webkit-box-decoration-break:clone] rounded-md px-2",
							)}
						>
							{title}
						</span>
					</div>
					<div className="flex items-center justify-center w-8 h-8 bg-white rounded-full border border-black">
						<span className="text-3xl font-medium">{isOpen ? "−" : "+"}</span>
					</div>
				</button>
				<div
					className={cn(
						"overflow-hidden transition-all duration-300 ease-in-out",
						isOpen ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0",
					)}
				>
					<p className={cn("text-base")}>{description}</p>
				</div>
			</div>
		</Card>
	);
}

function Accordion({ children }: PropsWithChildren) {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const handleToggle = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="space-y-8">
			{Children.map(children, (child, index) => {
				if (isValidElement(child)) {
					return cloneElement(child as ReactElement<typeof AccordionItem>, {
						// @ts-ignore
						isOpen: openIndex === index,
						onToggle: () => handleToggle(index),
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key: index,
					});
				}
				return child;
			})}
		</div>
	);
}

const processSteps = [
	{
		title: "Initial Consultation",
		description:
			"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
	},
	{
		title: "Research and Strategy Development",
		description:
			"We conduct in-depth market research to identify opportunities and challenges, then develop a comprehensive strategy aligned with your business goals.",
	},
	{
		title: "Implementation",
		description:
			"Our team executes the strategy using the latest tools and techniques to achieve optimal results.",
	},
	{
		title: "Monitoring and Optimization",
		description:
			"We continuously monitor the performance of your campaigns and make data-driven adjustments to maximize ROI.",
	},
	{
		title: "Reporting and Communication",
		description:
			"Regular reports provide transparent insights into campaign performance, and we maintain open communication to keep you informed every step of the way.",
	},
	{
		title: "Continual Improvement",
		description:
			"Based on performance data and market trends, we continuously refine our strategies to ensure long-term growth and sustained success.",
	},
];

// WorkingProcessSection component: Now uses the Accordion and AccordionItem components.
function WorkingProcessSection() {
	return (
		<Section
			title="Our Working Process"
			description="We follow a structured approach to ensure the success of our digital marketing campaigns. Our process includes:"
		>
			<Accordion>
				{/* Map over the processSteps data to render each AccordionItem */}
				{processSteps.map((step, index) => (
					<AccordionItem
						index={index}
						key={step.title} // Unique key for list rendering
						title={step.title}
						description={step.description}
					/>
				))}
			</Accordion>
		</Section>
	);
}

function TeamsSection() {
	// Array of team members data
	const teamMembers = [
		{
			name: "John Doe",
			position: "Senior Digital Marketing Strategist",
			description:
				"John leads our strategic initiatives, crafting bespoke digital marketing plans that drive measurable results and exceed client expectations.",
			imageUrl: "https://placehold.co/100x100/E0F2F7/000000?text=John", // Smaller placeholder image for horizontal layout
		},
		{
			name: "Jane Smith",
			position: "Content Marketing Specialist",
			description:
				"Jane is a master storyteller, creating compelling content that resonates with target audiences and elevates brand presence across all platforms.",
			imageUrl: "https://placehold.co/100x100/D1F2EB/000000?text=Jane", // Smaller placeholder image
		},
		{
			name: "Mike Johnson",
			position: "Social Media Manager",
			description:
				"Mike expertly manages social media campaigns, fostering strong community engagement and maximizing reach through innovative strategies.",
			imageUrl: "https://placehold.co/100x100/FBE7C6/000000?text=Mike", // Smaller placeholder image
		},
		{
			name: "Sarah Lee",
			position: "SEO Expert",
			description:
				"Sarah optimizes online visibility, ensuring our clients rank high in search results and capture organic traffic effectively.",
			imageUrl: "https://placehold.co/100x100/C6E2E9/000000?text=Sarah", // Smaller placeholder image
		},
		{
			name: "David Chen",
			position: "PPC Campaign Manager",
			description:
				"David manages pay-per-click campaigns with precision, driving high ROI through targeted advertising and continuous performance analysis.",
			imageUrl: "https://placehold.co/100x100/B0E0E6/000000?text=David", // Smaller placeholder image
		},
		{
			name: "Emily White",
			position: "Analytics & Reporting Specialist",
			description:
				"Emily transforms data into actionable insights, providing clear reports that guide strategic decisions and highlight campaign success.",
			imageUrl: "https://placehold.co/100x100/ADD8E6/000000?text=Emily", // Smaller placeholder image
		},
	];

	return (
		<Section
			title="Our Teams"
			description="Meet the talented individuals behind our success. Our teams are dedicated to delivering exceptional results for our clients."
		>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
				{teamMembers.map((member, index) => (
					<Card
						key={member.name}
						className={cn(
							"p-8",
							index % 3 === 0
								? "bg-grey"
								: index % 3 === 1
									? "bg-green"
									: "bg-dark-grey text-white",
						)}
					>
						<div
							className={cn(
								"divide-y",
								index % 3 === 2 ? "divide-white" : "divide-dark-grey",
							)}
						>
							<div className="flex items-center pb-4">
								{/* Team member image */}
								<img
									src={member.imageUrl}
									alt={member.name}
									className="w-24 h-24 rounded-full object-cover mr-4 border-4 border-white shadow-lg flex-shrink-0"
								/>
								{/* Container for name and position, stacked vertically */}
								<div className="flex flex-col text-left">
									{" "}
									{/* Stacks name and position */}
									{/* Team member name */}
									<div>
										<h3
											className={cn(
												"text-h4-mobile md:text-h3 leading-tight !inline [box-decoration-break:clone] [-webkit-box-decoration-break:clone] rounded-md px-2",
												index % 3 === 0
													? "bg-green"
													: index % 3 === 1
														? "bg-dark-grey text-white"
														: "bg-grey text-dark-grey",
											)}
										>
											{member.name}
										</h3>
									</div>
									{/* Team member position */}
									<p
										className={cn(
											"text-p-mobile mt-1", // Reduced margin-top for tighter spacing
											index % 3 === 2 ? "text-white" : "text-dark-grey",
										)}
									>
										{member.position}
									</p>
								</div>
							</div>
							<p
								className={cn(
									"pt-4 text-left",
									index % 3 === 2 ? "text-grey" : "text-dark-grey",
								)}
							>
								{member.description}
							</p>
						</div>
					</Card>
				))}
			</div>
			<div className="w-full flex flex-row-reverse mt-8">
				<button
					type="button"
					className="md:ml-auto py-3.5 px-6 bg-dark-grey text-white rounded-xl w-full md:w-54 hover:underline"
				>
					See all team members
				</button>
			</div>
		</Section>
	);
}

function CustomRadioButtons() {
	const [selectedGreeting, setSelectedGreeting] = useState("say-hi");

	const handleGreetingChange: ChangeEventHandler<HTMLInputElement> = (
		event,
	) => {
		setSelectedGreeting(event.target.value);
	};

	return (
		<div className="flex gap-x-8">
			<div className="flex items-center">
				<input
					type="radio"
					id="say-hi"
					name="greeting-type"
					value="say-hi"
					className="hidden"
					checked={selectedGreeting === "say-hi"}
					onChange={handleGreetingChange}
				/>
				<label
					htmlFor="say-hi"
					className="relative flex items-center cursor-pointer text-gray-700 text-lg"
				>
					<span className="w-6 h-6 rounded-full border mr-2 bg-white flex items-center justify-center transition-all duration-200 ease-in-out">
						<span
							className={cn(
								"w-3 h-3 rounded-full bg-transparent transition-all duration-200 ease-in-out",
								{
									"bg-green": selectedGreeting === "say-hi",
								},
							)}
						/>
					</span>
					Say Hi
				</label>
			</div>

			<div className="flex items-center">
				<input
					type="radio"
					id="get-a-quote"
					name="greeting-type"
					value="get-a-quote"
					className="hidden"
					checked={selectedGreeting === "get-a-quote"}
					onChange={handleGreetingChange}
				/>
				<label
					htmlFor="get-a-quote"
					className="relative flex items-center cursor-pointer text-gray-700 text-lg"
				>
					<span className="w-6 h-6 rounded-full border mr-2 bg-white flex items-center justify-center transition-all duration-200 ease-in-out">
						<span
							className={cn(
								"w-3 h-3 rounded-full bg-transparent transition-all duration-200 ease-in-out",
								{
									"bg-green": selectedGreeting === "get-a-quote",
								},
							)}
						/>
					</span>
					Get a Quote
				</label>
			</div>
		</div>
	);
}

function ContactForm() {
	return (
		<div className="max-w-md mt-8">
			{/* Name Input */}
			<div className="mb-6">
				<label
					htmlFor="name"
					className="block text-gray-700 text-base font-medium mb-2"
				>
					Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Name"
					className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
				/>
			</div>

			{/* Email Input */}
			<div className="mb-6">
				<label
					htmlFor="email"
					className="block text-gray-700 text-base font-medium mb-2"
				>
					Email*
				</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Email"
					required
					className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
				/>
			</div>

			{/* Message Textarea */}
			<div className="mb-8">
				<label
					htmlFor="message"
					className="block text-gray-700 text-base font-medium mb-2"
				>
					Message*
				</label>
				<textarea
					id="message"
					name="message"
					placeholder="Message"
					rows={6}
					required
					className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition duration-200 ease-in-out"
				/>
			</div>

			<button
				type="submit"
				className="w-full bg-dark-grey text-white py-3 rounded-lg font-semibold hover:bg-dark-grey/80 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 transition duration-200 ease-in-out"
			>
				Send Message
			</button>
		</div>
	);
}

function ContactUsSection() {
	return (
		<Section
			title="Contact Us"
			description="Ready to take your digital marketing to the next level? Contact us today to discuss how we can help your business grow and succeed online."
		>
			<div className="bg-grey py-8 md:py-12 rounded-4xl grid grid-cols-1 md:grid-cols-4">
				<div className="col-span-3 pl-8 md:pl-12">
					<form>
						<CustomRadioButtons />
						<ContactForm />
					</form>
				</div>
				<div className="col-span-1 overflow-clip md:py-16">
					<img
						src={contactIllustration}
						alt="illustration"
						className="relative aspect-auto h-full -right-1/2"
					/>
				</div>
			</div>
		</Section>
	);
}

function App() {
	return (
		<div className="space-y-24">
			<Hero />
			<ServicesSection />
			<CTA />
			<CaseStudySection />
			<WorkingProcessSection />
			<TeamsSection />
			<ContactUsSection />
		</div>
	);
}
