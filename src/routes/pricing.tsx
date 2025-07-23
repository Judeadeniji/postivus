import ArrowIcon2 from "@/assets/arrow-icon-2.svg";
import ArrowIcon from "@/assets/arrow-icon.svg";
import { ContactUsSection } from "@/components/sections";
import { Card, Section } from "@/components/ui";
import { cn } from "@sglara/cn";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing")({
	component: PricingPage,
});

function PricingHero() {
	return (
		<section className="px-4 py-8 md:py-16 mt-8 bg-grey rounded-2xl">
			<div className="text-center space-y-6">
				<div className="inline-block px-4 py-2 bg-green/50 rounded-full">
					<span className="text-sm font-medium text-dark-grey">
						💰 Transparent Pricing
					</span>
				</div>
				<h1 className="text-h1-mobile md:text-h1 font-medium leading-tight max-w-4xl mx-auto">
					Choose the Perfect Plan for Your{" "}
					<span className="text-green">Digital Growth</span>
				</h1>
				<p className="text-p-mobile md:text-p text-dark-grey max-w-3xl mx-auto">
					No hidden fees, no surprises. Our transparent pricing scales with your
					business needs. Start small and grow into enterprise solutions as your
					success demands it.
				</p>
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
					<div className="flex items-center space-x-2 text-sm text-dark-grey">
						<div className="w-4 h-4 bg-green rounded-full flex items-center justify-center">
							<span className="text-xs text-white">✓</span>
						</div>
						<span>No setup fees</span>
					</div>
					<div className="flex items-center space-x-2 text-sm text-dark-grey">
						<div className="w-4 h-4 bg-green rounded-full flex items-center justify-center">
							<span className="text-xs text-white">✓</span>
						</div>
						<span>Cancel anytime</span>
					</div>
					<div className="flex items-center space-x-2 text-sm text-dark-grey">
						<div className="w-4 h-4 bg-green rounded-full flex items-center justify-center">
							<span className="text-xs text-white">✓</span>
						</div>
						<span>Money-back guarantee</span>
					</div>
				</div>
			</div>
		</section>
	);
}

function PricingTiersSection() {
	const pricingTiers = [
		{
			name: "Startup",
			subtitle: "Perfect for new businesses",
			price: "$2,500",
			period: "/month",
			description: "Get your digital presence off the ground with essential marketing services.",
			features: [
				"Website audit & optimization",
				"Basic SEO (up to 10 keywords)",
				"Social media management (2 platforms)",
				"Monthly performance reports",
				"Email support",
				"Google My Business setup",
				"Basic content creation (4 posts/week)",
				"Landing page optimization",
			],
			popular: false,
			bgColor: "bg-white",
			borderColor: "border-grey",
			buttonStyle: "bg-dark-grey text-white hover:bg-dark-grey/80",
			ctaText: "Start Growing",
		},
		{
			name: "Growth",
			subtitle: "Most popular for scaling businesses",
			price: "$5,500",
			period: "/month",
			description: "Comprehensive marketing suite designed to accelerate your business growth.",
			features: [
				"Everything in Startup, plus:",
				"Advanced SEO (up to 50 keywords)",
				"PPC campaign management ($2K ad spend included)",
				"Social media management (4 platforms)",
				"Weekly performance reports",
				"Email & phone support",
				"Content marketing strategy",
				"Conversion rate optimization",
				"Lead generation campaigns",
				"Marketing automation setup",
				"Competitor analysis",
			],
			popular: true,
			bgColor: "bg-green",
			borderColor: "border-green",
			buttonStyle: "bg-dark-grey text-white hover:bg-dark-grey/80",
			ctaText: "Most Popular",
		},
		{
			name: "Enterprise",
			subtitle: "For established businesses",
			price: "$12,500",
			period: "/month",
			description: "Full-service digital marketing with dedicated team and advanced strategies.",
			features: [
				"Everything in Growth, plus:",
				"Enterprise SEO (unlimited keywords)",
				"Advanced PPC management ($5K ad spend included)",
				"Social media management (all platforms)",
				"Daily reporting & analytics",
				"Dedicated account manager",
				"Custom marketing automation",
				"A/B testing & optimization",
				"Video content production",
				"Influencer marketing campaigns",
				"Advanced attribution modeling",
				"Priority support (24/7)",
			],
			popular: false,
			bgColor: "bg-dark-grey",
			borderColor: "border-dark-grey",
			buttonStyle: "bg-green text-dark-grey hover:bg-green/80",
			ctaText: "Scale Fast",
		},
	];

	return (
		<Section
			title="Choose Your Growth Plan"
			description="Flexible pricing that scales with your business ambitions"
		>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{pricingTiers.map((tier) => (
					<Card
						key={tier.name}
						className={cn(
							tier.bgColor,
							"p-8 relative",
							tier.popular && "ring-2 ring-green scale-105 z-10",
						)}
					>
						{tier.popular && (
							<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
								<div className="bg-green text-dark-grey px-4 py-1 rounded-full text-sm font-medium">
									🔥 Most Popular
								</div>
							</div>
						)}

						<div className="space-y-6">
							{/* Header */}
							<div className="text-center space-y-2">
								<h3
									className={cn(
										"text-h3-mobile md:text-h2 font-bold",
										tier.bgColor === "bg-dark-grey"
											? "text-white"
											: "text-dark-grey",
									)}
								>
									{tier.name}
								</h3>
								<p
									className={cn(
										"text-sm",
										tier.bgColor === "bg-dark-grey"
											? "text-green"
											: tier.bgColor === "bg-green"
											? "text-dark-grey"
											: "text-dark-grey",
									)}
								>
									{tier.subtitle}
								</p>
								<div className="space-y-1">
									<div
										className={cn(
											"text-3xl md:text-4xl font-bold",
											tier.bgColor === "bg-dark-grey"
												? "text-green"
												: "text-dark-grey",
										)}
									>
										{tier.price}
										<span
											className={cn(
												"text-lg font-normal",
												tier.bgColor === "bg-dark-grey"
													? "text-grey"
													: tier.bgColor === "bg-green"
													? "text-dark-grey/70"
													: "text-dark-grey/70",
											)}
										>
											{tier.period}
										</span>
									</div>
								</div>
								<p
									className={cn(
										"text-sm",
										tier.bgColor === "bg-dark-grey"
											? "text-grey"
											: tier.bgColor === "bg-green"
											? "text-dark-grey/80"
											: "text-dark-grey",
									)}
								>
									{tier.description}
								</p>
							</div>

							{/* Features */}
							<div className="space-y-3">
								{tier.features.map((feature) => (
									<div key={feature} className="flex items-start space-x-3">
										<div
											className={cn(
												"w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0",
												tier.bgColor === "bg-dark-grey"
													? "bg-green"
													: "bg-dark-grey",
											)}
										>
											<span
												className={cn(
													"text-xs",
													tier.bgColor === "bg-dark-grey"
														? "text-dark-grey"
														: "text-white",
												)}
											>
												✓
											</span>
										</div>
										<span
											className={cn(
												"text-sm",
												tier.bgColor === "bg-dark-grey"
													? "text-grey"
													: tier.bgColor === "bg-green"
													? "text-dark-grey"
													: "text-dark-grey",
												feature.startsWith("Everything in") && "font-medium",
											)}
										>
											{feature}
										</span>
									</div>
								))}
							</div>

							{/* CTA Button */}
							<button
								type="button"
								className={cn(
									"w-full py-4 px-6 rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2",
									tier.buttonStyle,
								)}
							>
								<span>{tier.ctaText}</span>
								<img
									src={
										tier.bgColor === "bg-dark-grey" ? ArrowIcon : ArrowIcon2
									}
									alt="Arrow"
									className="w-4 h-4"
								/>
							</button>
						</div>
					</Card>
				))}
			</div>

			{/* Additional Info */}
			<div className="text-center mt-12 space-y-4">
				<p className="text-dark-grey">
					All plans include a 30-day money-back guarantee and can be customized
					to your specific needs.
				</p>
				<button
					type="button"
					className="text-lime-600 font-medium hover:underline"
				>
					Need a custom plan? Let's talk →
				</button>
			</div>
		</Section>
	);
}

function AdditionalServicesSection() {
	const additionalServices = [
		{
			category: "Add-On Services",
			description: "Enhance any plan with specialized services",
			services: [
				{
					name: "Video Production",
					price: "$2,500",
					period: "/video",
					description: "Professional video content for ads and social media",
				},
				{
					name: "Influencer Campaigns",
					price: "$1,500",
					period: "/campaign",
					description: "Managed influencer partnerships and campaigns",
				},
				{
					name: "Website Redesign",
					price: "$8,500",
					period: "/project",
					description: "Complete website overhaul with modern design",
				},
				{
					name: "E-commerce Setup",
					price: "$5,500",
					period: "/setup",
					description: "Full online store setup and optimization",
				},
			],
		},
		{
			category: "Industry Specialists",
			description: "Expert services for specific industries",
			services: [
				{
					name: "Healthcare Marketing",
					price: "+$1,000",
					period: "/month",
					description: "HIPAA-compliant marketing for medical practices",
				},
				{
					name: "Legal Marketing",
					price: "+$1,200",
					period: "/month",
					description: "Specialized marketing for law firms and attorneys",
				},
				{
					name: "Real Estate Marketing",
					price: "+$800",
					period: "/month",
					description: "Property marketing and lead generation",
				},
				{
					name: "SaaS Marketing",
					price: "+$1,500",
					period: "/month",
					description: "B2B SaaS growth and retention strategies",
				},
			],
		},
	];

	return (
		<Section
			title="Additional Services & Specialists"
			description="Extend your plan with specialized services and industry expertise"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
				{additionalServices.map((category) => (
					<div key={category.category} className="space-y-6">
						<div className="text-center space-y-2">
							<h3 className="text-h3-mobile md:text-h2 font-bold text-dark-grey">
								{category.category}
							</h3>
							<p className="text-dark-grey">{category.description}</p>
						</div>

						<div className="space-y-4">
							{category.services.map((service) => (
								<Card key={service.name} className="p-6 bg-grey">
									<div className="flex justify-between items-start space-x-4">
										<div className="flex-grow space-y-2">
											<h4 className="font-bold text-dark-grey">
												{service.name}
											</h4>
											<p className="text-sm text-dark-grey">
												{service.description}
											</p>
										</div>
										<div className="text-right flex-shrink-0">
											<div className="text-xl font-bold text-dark-grey">
												{service.price}
											</div>
											<div className="text-xs text-dark-grey/70">
												{service.period}
											</div>
										</div>
									</div>
								</Card>
							))}
						</div>
					</div>
				))}
			</div>
		</Section>
	);
}

function FAQSection() {
	const faqs = [
		{
			question: "Can I change plans anytime?",
			answer:
				"Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle, and we'll prorate any differences.",
		},
		{
			question: "What's included in the setup process?",
			answer:
				"Every plan includes a comprehensive onboarding process: strategy session, account setups, initial optimizations, and team introductions. Most setups are completed within 2 weeks.",
		},
		{
			question: "How do you measure success?",
			answer:
				"We track KPIs specific to your business goals: website traffic, lead generation, conversion rates, ROAS, and revenue attribution. You'll receive detailed monthly reports with actionable insights.",
		},
		{
			question: "Do you work with international businesses?",
			answer:
				"Absolutely! We work with businesses worldwide and have experience with multi-region campaigns, international SEO, and cross-cultural marketing strategies.",
		},
		{
			question: "What if I'm not satisfied with the results?",
			answer:
				"We offer a 30-day money-back guarantee on all plans. If you're not seeing progress within the first month, we'll refund your investment and provide recommendations for moving forward.",
		},
		{
			question: "Can I add additional services later?",
			answer:
				"Yes! You can add any of our specialized services or industry-specific add-ons to your existing plan. We'll integrate them seamlessly with your current strategy.",
		},
	];

	return (
		<Section
			title="Frequently Asked Questions"
			description="Everything you need to know about our pricing and services"
		>
			<div className="max-w-4xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{faqs.map((faq) => (
						<div key={faq.question} className="space-y-3">
							<h4 className="font-bold text-dark-grey">{faq.question}</h4>
							<p className="text-sm text-dark-grey leading-relaxed">
								{faq.answer}
							</p>
						</div>
					))}
				</div>
				<div className="text-center mt-12">
					<p className="text-dark-grey mb-4">Still have questions?</p>
					<button
						type="button"
						className="bg-green text-dark-grey px-8 py-3 rounded-xl font-medium hover:bg-green/80 transition-colors"
					>
						Schedule a Free Consultation
					</button>
				</div>
			</div>
		</Section>
	);
}

function PricingPage() {
	return (
		<div className="space-y-24">
			<PricingHero />
			<PricingTiersSection />
			<AdditionalServicesSection />
			<FAQSection />
			<ContactUsSection />
		</div>
	);
}
