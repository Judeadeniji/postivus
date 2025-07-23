import ArrowIcon2 from "@/assets/arrow-icon-2.svg";
import ArrowIcon from "@/assets/arrow-icon.svg";
import { ServicesSection } from "@/components/sections";
import { Card, Section } from "@/components/ui";
import { cn } from "@sglara/cn";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
	component: ServicesPage,
});

function ServicesHero() {
	const services = [
		{ name: "SEO", icon: "🔍", growth: "+150%" },
		{ name: "PPC", icon: "🎯", growth: "+300%" },
		{ name: "Social", icon: "📱", growth: "+250%" },
		{ name: "Content", icon: "📝", growth: "+200%" },
		{ name: "Email", icon: "✉️", growth: "+400%" },
		{ name: "Analytics", icon: "📊", growth: "+180%" },
	];

	return (
		<section className="px-4 mt-8 relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-20 left-10 w-32 h-32 bg-green rounded-full" />
				<div className="absolute top-40 right-20 w-24 h-24 bg-dark-grey rounded-full" />
				<div className="absolute bottom-20 left-1/4 w-40 h-40 bg-green rounded-full" />
				<div className="absolute bottom-10 right-10 w-28 h-28 bg-dark-grey rounded-full" />
			</div>

			<div className="relative z-10 max-w-7xl mx-auto">
				{/* Main Hero Content */}
				<div className="text-center space-y-8 mb-16 px-4 py-8 md:py-16 mt-8 bg-grey rounded-2xl">
					<div className="space-y-6">
						<div className="inline-flex items-center space-x-2 bg-green/10 px-6 py-3 rounded-full">
							<span className="text-2xl">🚀</span>
							<span className="text-sm font-medium text-dark-grey">
								Full-Service Digital Marketing
							</span>
						</div>
						
						<h1 className="text-h1-mobile md:text-6xl lg:text-7xl font-bold leading-tight">
							<span className="text-dark-grey">Transform Your</span>
							<br />
							<span className="text-green relative">
								Digital Presence
								<div className="absolute -bottom-2 left-0 w-full h-3 bg-green/20 -z-10" />
							</span>
						</h1>
						
						<p className="text-lg md:text-xl text-dark-grey/80 max-w-3xl mx-auto leading-relaxed">
							From startups to enterprises, we craft data-driven marketing strategies 
							that deliver measurable growth. Let's turn your digital challenges into 
							competitive advantages.
						</p>
					</div>

					{/* Interactive CTA Buttons */}
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<button
							type="button"
							className="bg-green text-dark-grey px-8 py-4 rounded-xl font-bold text-lg hover:bg-green/90 hover:scale-105 transition-all duration-300 flex items-center space-x-3 group"
						>
							<span>Start Your Growth Journey</span>
							<img src={ArrowIcon} alt="Arrow" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</button>
						<button
							type="button"
							className="border-2 border-dark-grey text-dark-grey px-8 py-4 rounded-xl font-bold text-lg hover:bg-dark-grey hover:text-white transition-all duration-300"
						>
							View Our Portfolio
						</button>
					</div>

					{/* Trust Indicators */}
					<div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-dark-grey/60">
						<div className="flex items-center space-x-2">
							<div className="w-6 h-6 bg-green rounded-full flex items-center justify-center">
								<span className="text-xs text-white font-bold">✓</span>
							</div>
							<span>500+ Happy Clients</span>
						</div>
						<div className="flex items-center space-x-2">
							<div className="w-6 h-6 bg-green rounded-full flex items-center justify-center">
								<span className="text-xs text-white font-bold">✓</span>
							</div>
							<span>$50M+ Revenue Generated</span>
						</div>
						<div className="flex items-center space-x-2">
							<div className="w-6 h-6 bg-green rounded-full flex items-center justify-center">
								<span className="text-xs text-white font-bold">✓</span>
							</div>
							<span>99% Client Retention</span>
						</div>
					</div>
				</div>

				{/* Interactive Services Grid */}
				<div className="space-y-8">
					<div className="text-center">
						<h2 className="text-2xl md:text-3xl font-bold text-dark-grey mb-2">
							Our Growth-Driven Services
						</h2>
						<p className="text-dark-grey/70">
							Hover over each service to see average client growth
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
						{services.map((service, index) => (
							<div
								key={service.name}
								className="group relative"
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<Card className="bg-white hover:bg-green transition-all duration-300 p-6 text-center cursor-pointer hover:scale-105 hover:shadow-lg relative overflow-hidden">
									{/* Background pattern */}
									<div className="absolute inset-0 bg-gradient-to-br from-transparent to-grey/10 group-hover:from-green/5 group-hover:to-green/20 transition-all duration-300" />
									
									<div className="relative z-10 space-y-3">
										<div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
											{service.icon}
										</div>
										<h3 className="font-bold text-dark-grey group-hover:text-white transition-colors">
											{service.name}
										</h3>
										
										{/* Growth indicator - shows on hover */}
										<div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
											<div className="bg-dark-grey text-white px-3 py-1 rounded-full text-xs font-bold">
												{service.growth}
											</div>
										</div>
									</div>

									{/* Hover overlay effect */}
									<div className="absolute inset-0 border-2 border-transparent group-hover:border-dark-grey/20 rounded-xl transition-all duration-300" />
								</Card>
							</div>
						))}
					</div>
				</div>

				{/* Stats Section */}
				<div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
					{[
						{ number: "500+", label: "Projects Completed", icon: "🎯" },
						{ number: "98%", label: "Success Rate", icon: "📈" },
						{ number: "24/7", label: "Support Available", icon: "🕒" },
						{ number: "50+", label: "Team Experts", icon: "👥" },
					].map((stat, index) => (
						<div
							key={stat.label}
							className="text-center space-y-2 p-4 rounded-xl hover:bg-grey/30 transition-colors duration-300"
							style={{ animationDelay: `${index * 0.2}s` }}
						>
							<div className="text-2xl">{stat.icon}</div>
							<div className="text-3xl md:text-4xl font-bold text-green">
								{stat.number}
							</div>
							<div className="text-sm text-dark-grey/70">
								{stat.label}
							</div>
						</div>
					))}
				</div>

				{/* Scroll Indicator */}
				<div className="text-center mt-16">
					<div className="inline-flex flex-col items-center space-y-2 text-dark-grey/50">
						<span className="text-sm">Explore Our Services</span>
						<div className="w-6 h-10 border-2 border-dark-grey/30 rounded-full flex justify-center">
							<div className="w-1 h-3 bg-dark-grey/30 rounded-full mt-2 animate-bounce" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function ServiceDetailsSection() {
	const services = [
		{
			title: "Search Engine Optimization",
			subtitle: "Dominate Search Results",
			description:
				"Boost your online visibility and drive organic traffic with our comprehensive SEO strategies.",
			features: [
				"Keyword Research & Analysis",
				"On-Page & Technical SEO",
				"Content Optimization",
				"Link Building Campaigns",
				"Local SEO Optimization",
				"Performance Tracking",
			],
			results: "Average 150% increase in organic traffic within 6 months",
			pricing: "Starting from $1,500/month",
			bgColor: "bg-green",
			textColor: "text-dark-grey",
		},
		{
			title: "Pay-Per-Click Advertising",
			subtitle: "Instant Visibility & Results",
			description:
				"Maximize your ROI with targeted PPC campaigns across Google, Bing, and social platforms.",
			features: [
				"Campaign Strategy & Setup",
				"Keyword Bidding Optimization",
				"Ad Copy Creation & Testing",
				"Landing Page Optimization",
				"Conversion Tracking",
				"Budget Management",
			],
			results: "Average 300% ROI on ad spend",
			pricing: "Starting from $2,000/month + ad spend",
			bgColor: "bg-grey",
			textColor: "text-dark-grey",
		},
		{
			title: "Social Media Marketing",
			subtitle: "Build Communities & Drive Engagement",
			description:
				"Create meaningful connections with your audience through strategic social media campaigns.",
			features: [
				"Social Media Strategy",
				"Content Creation & Curation",
				"Community Management",
				"Influencer Partnerships",
				"Social Advertising",
				"Analytics & Reporting",
			],
			results: "Average 250% increase in engagement rates",
			pricing: "Starting from $1,200/month",
			bgColor: "bg-dark-grey",
			textColor: "text-white",
		},
		{
			title: "Content Marketing",
			subtitle: "Tell Your Story, Drive Results",
			description:
				"Engage your audience with compelling content that builds trust and drives conversions.",
			features: [
				"Content Strategy Development",
				"Blog Writing & SEO Content",
				"Video Production",
				"Infographic Design",
				"Email Marketing Campaigns",
				"Content Distribution",
			],
			results: "Average 200% increase in lead generation",
			pricing: "Starting from $1,800/month",
			bgColor: "bg-green",
			textColor: "text-dark-grey",
		},
		{
			title: "Email Marketing",
			subtitle: "Nurture Leads, Convert Customers",
			description:
				"Build lasting relationships with personalized email campaigns that drive conversions.",
			features: [
				"Email Strategy & Planning",
				"List Building & Segmentation",
				"Template Design & Development",
				"Automated Drip Campaigns",
				"A/B Testing & Optimization",
				"Performance Analytics",
			],
			results: "Average 400% ROI on email campaigns",
			pricing: "Starting from $800/month",
			bgColor: "bg-grey",
			textColor: "text-dark-grey",
		},
		{
			title: "Analytics & Tracking",
			subtitle: "Data-Driven Decision Making",
			description:
				"Turn data into actionable insights with comprehensive analytics and reporting solutions.",
			features: [
				"Google Analytics Setup & Config",
				"Conversion Tracking Implementation",
				"Custom Dashboard Creation",
				"Monthly Performance Reports",
				"Competitor Analysis",
				"ROI Measurement",
			],
			results: "Improve decision-making accuracy by 80%",
			pricing: "Starting from $1,000/month",
			bgColor: "bg-dark-grey",
			textColor: "text-white",
		},
	];

	return (
		<Section
			title="Service Deep Dive"
			description="Explore our comprehensive digital marketing services with detailed features and expected outcomes"
		>
			<div className="space-y-12">
				{services.map((service) => (
					<Card key={service.title} className={cn(service.bgColor, "p-8")}>
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
							{/* Service Overview */}
							<div className="space-y-6">
								<div>
									<h3
										className={cn(
											"text-h3-mobile md:text-h2 font-medium leading-tight",
											service.textColor,
										)}
									>
										{service.title}
									</h3>
									<p
										className={cn(
											"text-lg font-medium mt-2",
											service.bgColor === "bg-dark-grey"
												? "text-green"
												: "text-dark-grey",
										)}
									>
										{service.subtitle}
									</p>
								</div>
								<p
									className={cn(
										"text-p-mobile md:text-p",
										service.bgColor === "bg-dark-grey"
											? "text-grey"
											: "text-dark-grey",
									)}
								>
									{service.description}
								</p>
								<div className="space-y-2">
									<p
										className={cn(
											"text-sm font-medium",
											service.bgColor === "bg-dark-grey"
												? "text-green"
												: "text-dark-grey",
										)}
									>
										Expected Results:
									</p>
									<p
										className={cn(
											"text-sm",
											service.bgColor === "bg-dark-grey"
												? "text-grey"
												: "text-dark-grey",
										)}
									>
										{service.results}
									</p>
								</div>
							</div>

							{/* Features List */}
							<div className="space-y-4">
								<h4
									className={cn(
										"text-h4-mobile md:text-h3 font-medium",
										service.textColor,
									)}
								>
									What's Included:
								</h4>
								<ul className="space-y-3">
									{service.features.map((feature) => (
										<li key={feature} className="flex items-start space-x-3">
											<div
												className={cn(
													"w-2 h-2 rounded-full mt-2 flex-shrink-0",
													service.bgColor === "bg-dark-grey"
														? "bg-green"
														: "bg-dark-grey",
												)}
											/>
											<span
												className={cn(
													"text-sm",
													service.bgColor === "bg-dark-grey"
														? "text-grey"
														: "text-dark-grey",
												)}
											>
												{feature}
											</span>
										</li>
									))}
								</ul>
							</div>

							{/* Pricing & CTA */}
							<div className="space-y-6">
								<div>
									<h4
										className={cn(
											"text-h4-mobile md:text-h3 font-medium",
											service.textColor,
										)}
									>
										Investment:
									</h4>
									<p
										className={cn(
											"text-xl font-bold mt-2",
											service.bgColor === "bg-dark-grey"
												? "text-green"
												: "text-dark-grey",
										)}
									>
										{service.pricing}
									</p>
								</div>
								<button
									type="button"
									className={cn(
										"flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all duration-200",
										service.bgColor === "bg-dark-grey"
											? "bg-green text-dark-grey hover:bg-green/80"
											: "bg-dark-grey text-white hover:bg-dark-grey/80",
									)}
								>
									<span>Get Started</span>
									<img
										src={
											service.bgColor === "bg-dark-grey"
												? ArrowIcon
												: ArrowIcon2
										}
										alt="Arrow"
										className="w-4 h-4"
									/>
								</button>
								<button
									type="button"
									className={cn(
										"block text-sm underline",
										service.bgColor === "bg-dark-grey"
											? "text-grey hover:text-white"
											: "text-dark-grey hover:text-black",
									)}
								>
									Learn More About This Service
								</button>
							</div>
						</div>
					</Card>
				))}
			</div>
		</Section>
	);
}

function PricingSection() {
	const plans = [
		{
			name: "Starter",
			subtitle: "Perfect for small businesses",
			price: "$2,500",
			period: "/month",
			features: [
				"SEO Basics",
				"Social Media Management (2 platforms)",
				"Monthly Analytics Report",
				"Email Support",
				"Basic Content Creation",
			],
			popular: false,
			bgColor: "bg-grey",
		},
		{
			name: "Professional",
			subtitle: "Ideal for growing companies",
			price: "$5,500",
			period: "/month",
			features: [
				"Complete SEO Package",
				"PPC Campaign Management",
				"Social Media (4 platforms)",
				"Content Marketing",
				"Email Marketing",
				"Weekly Reports",
				"Priority Support",
			],
			popular: true,
			bgColor: "bg-green",
		},
		{
			name: "Enterprise",
			subtitle: "For established businesses",
			price: "$12,000",
			period: "/month",
			features: [
				"Full-Service Marketing",
				"Advanced Analytics & Tracking",
				"Custom Strategy Development",
				"Dedicated Account Manager",
				"Daily Monitoring",
				"Custom Integrations",
				"24/7 Support",
			],
			popular: false,
			bgColor: "bg-dark-grey",
		},
	];

	return (
		<Section
			title="Service Packages"
			description="Choose the perfect package for your business needs and growth stage"
		>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{plans.map((plan) => (
					<Card
						key={plan.name}
						className={cn(
							plan.bgColor,
							"p-8 relative",
							plan.popular ? "ring-4 ring-green ring-opacity-50" : "",
						)}
					>
						{plan.popular && (
							<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
								<span className="bg-dark-grey text-white px-4 py-2 rounded-full text-sm font-medium">
									Most Popular
								</span>
							</div>
						)}
						<div className="space-y-6">
							<div className="text-center space-y-2">
								<h3
									className={cn(
										"text-h3-mobile md:text-h2 font-bold",
										plan.bgColor === "bg-dark-grey"
											? "text-white"
											: "text-dark-grey",
									)}
								>
									{plan.name}
								</h3>
								<p
									className={cn(
										"text-sm",
										plan.bgColor === "bg-dark-grey"
											? "text-grey"
											: "text-dark-grey",
									)}
								>
									{plan.subtitle}
								</p>
								<div className="pt-4">
									<span
										className={cn(
											"text-3xl font-bold",
											plan.bgColor === "bg-dark-grey"
												? "text-green"
												: "text-dark-grey",
										)}
									>
										{plan.price}
									</span>
									<span
										className={cn(
											"text-lg",
											plan.bgColor === "bg-dark-grey"
												? "text-grey"
												: "text-dark-grey",
										)}
									>
										{plan.period}
									</span>
								</div>
							</div>

							<ul className="space-y-3">
								{plan.features.map((feature) => (
									<li key={feature} className="flex items-start space-x-3">
										<div
											className={cn(
												"w-2 h-2 rounded-full mt-2 flex-shrink-0",
												plan.bgColor === "bg-dark-grey"
													? "bg-green"
													: "bg-dark-grey",
											)}
										/>
										<span
											className={cn(
												"text-sm",
												plan.bgColor === "bg-dark-grey"
													? "text-grey"
													: "text-dark-grey",
											)}
										>
											{feature}
										</span>
									</li>
								))}
							</ul>

							<button
								type="button"
								className={cn(
									"w-full py-3 px-6 rounded-xl font-medium transition-all duration-200",
									plan.bgColor === "bg-dark-grey"
										? "bg-green text-dark-grey hover:bg-green/80"
										: "bg-dark-grey text-white hover:bg-dark-grey/80",
								)}
							>
								Choose {plan.name}
							</button>
						</div>
					</Card>
				))}
			</div>
		</Section>
	);
}

function ProcessSection() {
	const steps = [
		{
			number: "01",
			title: "Discovery & Analysis",
			description:
				"We start by understanding your business, goals, target audience, and current digital presence through comprehensive analysis.",
			timeline: "Week 1",
		},
		{
			number: "02",
			title: "Strategy Development",
			description:
				"Based on our findings, we craft a customized digital marketing strategy tailored to your specific objectives and budget.",
			timeline: "Week 2",
		},
		{
			number: "03",
			title: "Implementation",
			description:
				"Our expert team executes the strategy across all chosen channels, setting up campaigns, content, and tracking systems.",
			timeline: "Week 3-4",
		},
		{
			number: "04",
			title: "Optimization & Growth",
			description:
				"We continuously monitor, test, and optimize your campaigns to maximize performance and deliver consistent growth.",
			timeline: "Ongoing",
		},
	];

	return (
		<Section
			title="Our Service Process"
			description="A proven 4-step approach that ensures your digital marketing success from day one"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{steps.map((step, index) => (
					<Card
						key={step.number}
						className={cn(
							"p-6 text-center",
							index % 2 === 0 ? "bg-green" : "bg-grey",
						)}
					>
						<div className="space-y-4">
							<div className="text-4xl font-bold text-dark-grey">
								{step.number}
							</div>
							<h4 className="text-h4-mobile md:text-h3 font-medium text-dark-grey leading-tight">
								{step.title}
							</h4>
							<p className="text-sm text-dark-grey">{step.description}</p>
							<div className="inline-block bg-dark-grey text-white px-3 py-1 rounded-full text-xs font-medium">
								{step.timeline}
							</div>
						</div>
					</Card>
				))}
			</div>
		</Section>
	);
}

function FAQSection() {
	const faqs = [
		{
			question: "How long does it take to see results?",
			answer:
				"Results vary by service. PPC campaigns can show immediate results, SEO typically takes 3-6 months for significant improvements, while social media and content marketing show gradual growth over 2-4 months.",
		},
		{
			question: "Do you work with businesses in my industry?",
			answer:
				"We work with businesses across all industries including B2B, B2C, e-commerce, healthcare, technology, finance, and more. Our strategies are customized to fit your specific industry requirements.",
		},
		{
			question: "What's included in your reporting?",
			answer:
				"Our reports include key performance metrics, traffic analysis, conversion tracking, ROI calculations, competitor insights, and actionable recommendations for optimization.",
		},
		{
			question: "Can I change my service package later?",
			answer:
				"Absolutely! We understand that business needs evolve. You can upgrade, downgrade, or customize your service package at any time with 30 days notice.",
		},
	];

	return (
		<Section
			title="Frequently Asked Questions"
			description="Get answers to common questions about our digital marketing services"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{faqs.map((faq, index) => (
					<Card
						key={faq.question}
						className={cn("p-6", index % 2 === 0 ? "bg-grey" : "bg-green")}
					>
						<div className="space-y-4">
							<h4 className="text-h4-mobile md:text-h3 font-medium text-dark-grey leading-tight">
								{faq.question}
							</h4>
							<p className="text-sm text-dark-grey">{faq.answer}</p>
						</div>
					</Card>
				))}
			</div>
		</Section>
	);
}

function ServicesPage() {
	return (
		<div className="space-y-24">
			<ServicesHero />
			<ServicesSection />
			<ServiceDetailsSection />
			<PricingSection />
			<ProcessSection />
			<FAQSection />
		</div>
	);
}
