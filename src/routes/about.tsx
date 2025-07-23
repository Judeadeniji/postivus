import { TeamsSection } from "@/components/sections";
import { Card, Section } from "@/components/ui";
import { cn } from "@sglara/cn";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
	component: AboutPage,
});

function AboutHero() {
	return (
		<section className="px-4 mt-8">
			<div className="text-center space-y-6">
				<h1 className="text-h1-mobile md:text-h1 font-medium leading-tight">
					About Positivus
				</h1>
				<p className="text-p-mobile md:text-p text-dark-grey max-w-4xl mx-auto">
					We are a forward-thinking digital marketing agency dedicated to helping
					businesses navigate the ever-evolving digital landscape. Our passion
					lies in creating innovative strategies that drive real results and
					foster meaningful connections between brands and their audiences.
				</p>
			</div>
		</section>
	);
}

function MissionVisionSection() {
	return (
		<Section
			title="Our Mission & Vision"
			description="What drives us every day and where we're headed as a digital marketing agency"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
				<Card className="bg-green">
					<div className="space-y-6">
						<h3 className="text-h3-mobile md:text-h2 font-medium leading-tight">
							Our Mission
						</h3>
						<p className="text-p-mobile md:text-p text-dark-grey">
							To empower businesses of all sizes with innovative digital
							marketing solutions that drive growth, enhance brand visibility,
							and create lasting customer relationships. We believe in the power
							of data-driven strategies combined with creative excellence to
							deliver exceptional results.
						</p>
					</div>
				</Card>

				<Card className="bg-grey">
					<div className="space-y-6">
						<h3 className="text-h3-mobile md:text-h2 font-medium leading-tight">
							Our Vision
						</h3>
						<p className="text-p-mobile md:text-p text-dark-grey">
							To become the leading digital marketing agency that businesses
							trust for transformative growth. We envision a future where every
							business, regardless of size, can harness the full potential of
							digital marketing to achieve their goals and make a meaningful
							impact in their industry.
						</p>
					</div>
				</Card>
			</div>
		</Section>
	);
}

function ValuesSection() {
	const values = [
		{
			title: "Innovation",
			description:
				"We stay ahead of digital trends and continuously explore new technologies and strategies to keep our clients competitive.",
			icon: "💡",
		},
		{
			title: "Transparency",
			description:
				"We believe in open communication and provide clear, honest reporting on all campaigns and strategies.",
			icon: "🔍",
		},
		{
			title: "Results-Driven",
			description:
				"Every strategy we implement is designed with measurable outcomes in mind, focusing on ROI and business growth.",
			icon: "📈",
		},
		{
			title: "Collaboration",
			description:
				"We work closely with our clients as partners, ensuring their vision and goals are at the center of everything we do.",
			icon: "🤝",
		},
		{
			title: "Excellence",
			description:
				"We maintain the highest standards in all our work, from strategy development to campaign execution and reporting.",
			icon: "⭐",
		},
		{
			title: "Adaptability",
			description:
				"The digital landscape evolves rapidly, and we pride ourselves on being agile and responsive to change.",
			icon: "🔄",
		},
	];

	return (
		<Section
			title="Our Values"
			description="The principles that guide our work and define who we are as a team"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{values.map((value, index) => (
					<Card
						key={value.title}
						className={cn(
							"p-6",
							index % 3 === 0
								? "bg-grey"
								: index % 3 === 1
									? "bg-green"
									: "bg-dark-grey text-white",
						)}
					>
						<div className="space-y-4">
							<div className="text-4xl">{value.icon}</div>
							<h4
								className={cn(
									"text-h4-mobile md:text-h3 font-medium leading-tight",
									index % 3 === 2 ? "text-white" : "text-dark-grey",
								)}
							>
								{value.title}
							</h4>
							<p
								className={cn(
									"text-sm",
									index % 3 === 2 ? "text-grey" : "text-dark-grey",
								)}
							>
								{value.description}
							</p>
						</div>
					</Card>
				))}
			</div>
		</Section>
	);
}

function StorySection() {
	return (
		<Section
			title="Our Story"
			description="How Positivus came to be and the journey that shaped our approach to digital marketing"
		>
			<div className="space-y-12">
				<Card className="bg-grey">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
						<div className="space-y-6">
							<h3 className="text-h3-mobile md:text-h2 font-medium leading-tight">
								The Beginning
							</h3>
							<p className="text-p-mobile md:text-p text-dark-grey">
								Founded in 2018, Positivus emerged from a simple observation:
								many businesses were struggling to adapt to the rapidly changing
								digital landscape. Our founders, with combined experience of over
								20 years in marketing and technology, saw an opportunity to
								bridge this gap.
							</p>
						</div>
						<div className="flex justify-center">
							<div className="w-64 h-64 bg-green rounded-full flex items-center justify-center">
								<span className="text-6xl">🚀</span>
							</div>
						</div>
					</div>
				</Card>

				<Card className="bg-green">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
						<div className="flex justify-center order-2 md:order-1">
							<div className="w-64 h-64 bg-dark-grey rounded-full flex items-center justify-center">
								<span className="text-6xl text-white">🌱</span>
							</div>
						</div>
						<div className="space-y-6 order-1 md:order-2">
							<h3 className="text-h3-mobile md:text-h2 font-medium leading-tight">
								Growth & Evolution
							</h3>
							<p className="text-p-mobile md:text-p text-dark-grey">
								What started as a small team of passionate marketers has grown
								into a full-service digital marketing agency. We've helped over
								200 businesses achieve their digital goals, from startups to
								Fortune 500 companies, adapting our strategies to meet the
								unique needs of each client.
							</p>
						</div>
					</div>
				</Card>

				<Card className="bg-dark-grey text-white">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
						<div className="space-y-6">
							<h3 className="text-h3-mobile md:text-h2 font-medium leading-tight text-white">
								Today & Beyond
							</h3>
							<p className="text-p-mobile md:text-p text-grey">
								Today, Positivus stands as a trusted partner for businesses
								looking to thrive in the digital age. We continue to innovate,
								staying ahead of industry trends while maintaining our core
								commitment to delivering measurable results and exceptional
								service.
							</p>
						</div>
						<div className="flex justify-center">
							<div className="w-64 h-64 bg-white rounded-full flex items-center justify-center">
								<span className="text-6xl">🎯</span>
							</div>
						</div>
					</div>
				</Card>
			</div>
		</Section>
	);
}

function StatsSection() {
	const stats = [
		{ number: "200+", label: "Clients Served" },
		{ number: "500+", label: "Campaigns Launched" },
		{ number: "50M+", label: "Impressions Generated" },
		{ number: "300%", label: "Average ROI Increase" },
	];

	return (
		<Section
			title="Our Impact"
			description="Numbers that showcase our commitment to delivering exceptional results"
		>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
				{stats.map((stat, index) => (
					<Card
						key={stat.label}
						className={cn(
							"text-center p-8",
							index % 2 === 0 ? "bg-green" : "bg-grey",
						)}
					>
						<div className="space-y-4">
							<div className="text-h1-mobile md:text-h1 font-bold text-dark-grey">
								{stat.number}
							</div>
							<p className="text-p-mobile md:text-p text-dark-grey">
								{stat.label}
							</p>
						</div>
					</Card>
				))}
			</div>
		</Section>
	);
}

function WhyChooseUsSection() {
	const reasons = [
		{
			title: "Proven Track Record",
			description:
				"With over 6 years in the industry and 200+ successful campaigns, we have the experience to drive your business forward.",
		},
		{
			title: "Customized Strategies",
			description:
				"We don't believe in one-size-fits-all. Every strategy is tailored to your specific business goals and target audience.",
		},
		{
			title: "Data-Driven Approach",
			description:
				"All our decisions are backed by comprehensive analytics and market research to ensure maximum ROI.",
		},
		{
			title: "Full-Service Solutions",
			description:
				"From SEO to social media, PPC to content creation, we offer comprehensive digital marketing services under one roof.",
		},
	];

	return (
		<Section
			title="Why Choose Positivus"
			description="What sets us apart in the competitive world of digital marketing"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{reasons.map((reason, index) => (
					<Card
						key={reason.title}
						className={cn(
							"p-8",
							index % 2 === 0 ? "bg-grey" : "bg-green",
						)}
					>
						<div className="space-y-4">
							<h4 className="text-h4-mobile md:text-h3 font-medium leading-tight text-dark-grey">
								{reason.title}
							</h4>
							<p className="text-p-mobile md:text-p text-dark-grey">
								{reason.description}
							</p>
						</div>
					</Card>
				))}
			</div>
		</Section>
	);
}

function AboutPage() {
	return (
		<div className="space-y-24">
			<AboutHero />
			<MissionVisionSection />
			<ValuesSection />
			<StorySection />
			<StatsSection />
			<TeamsSection />
			<WhyChooseUsSection />
		</div>
	);
}
