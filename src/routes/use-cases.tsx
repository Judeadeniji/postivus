import ArrowIcon2 from "@/assets/arrow-icon-2.svg";
import ArrowIcon from "@/assets/arrow-icon.svg";
import { CaseStudySection } from "@/components/sections";
import { Card, Section } from "@/components/ui";
import { cn } from "@sglara/cn";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/use-cases")({
	component: UseCasesPage,
});

function UseCasesHero() {
	return (
		<section className="px-4 mt-8">
			<div className="text-center space-y-6">
				<h1 className="text-h1-mobile md:text-h1 font-medium leading-tight">
					Real Success Stories
				</h1>
				<p className="text-p-mobile md:text-p text-dark-grey max-w-4xl mx-auto">
					Discover how businesses across industries have transformed their digital
					presence and achieved remarkable growth with our proven strategies.
				</p>
			</div>
		</section>
	);
}

function IndustryUseCasesSection() {
	const industries = [
		{
			industry: "E-commerce",
			icon: "🛒",
			client: "Fashion Forward",
			challenge:
				"Low conversion rates and high cart abandonment were limiting growth despite good traffic.",
			solution: [
				"Conversion rate optimization",
				"Retargeting campaigns",
				"Email cart recovery sequences",
				"User experience improvements",
			],
			results: {
				metric1: "45%",
				label1: "Increase in conversions",
				metric2: "30%",
				label2: "Reduction in cart abandonment",
				metric3: "$2.1M",
				label3: "Additional revenue in 12 months",
			},
			bgColor: "bg-green",
		},
		{
			industry: "SaaS Technology",
			icon: "💻",
			client: "CloudSync Pro",
			challenge:
				"Struggling to generate qualified leads and convert free trial users to paid customers.",
			solution: [
				"Content marketing strategy",
				"Lead nurturing automation",
				"Trial optimization",
				"Product demo campaigns",
			],
			results: {
				metric1: "300%",
				label1: "Increase in qualified leads",
				metric2: "65%",
				label2: "Trial-to-paid conversion rate",
				metric3: "180%",
				label3: "Growth in MRR",
			},
			bgColor: "bg-grey",
		},
		{
			industry: "Healthcare",
			icon: "🏥",
			client: "Wellness Center Plus",
			challenge:
				"Limited online visibility and difficulty reaching patients in their local area.",
			solution: [
				"Local SEO optimization",
				"Google My Business management",
				"Healthcare content marketing",
				"Patient review management",
			],
			results: {
				metric1: "250%",
				label1: "Increase in online appointments",
				metric2: "400%",
				label2: "Growth in local search visibility",
				metric3: "85%",
				label3: "Increase in new patients",
			},
			bgColor: "bg-dark-grey",
		},
		{
			industry: "Real Estate",
			icon: "🏠",
			client: "Prime Properties",
			challenge:
				"Competing in a saturated market with limited brand recognition and lead generation.",
			solution: [
				"Targeted social media advertising",
				"Virtual tour marketing",
				"Local market content",
				"Lead qualification systems",
			],
			results: {
				metric1: "175%",
				label1: "Increase in property inquiries",
				metric2: "320%",
				label2: "Growth in social engagement",
				metric3: "50%",
				label3: "Faster average sale time",
			},
			bgColor: "bg-green",
		},
		{
			industry: "Restaurant & Food",
			icon: "🍽️",
			client: "Artisan Bistro",
			challenge:
				"Declining foot traffic and need to build online ordering and delivery presence.",
			solution: [
				"Local SEO and Google Maps optimization",
				"Social media food photography",
				"Online ordering system integration",
				"Customer loyalty programs",
			],
			results: {
				metric1: "90%",
				label1: "Increase in online orders",
				metric2: "200%",
				label2: "Growth in social media followers",
				metric3: "35%",
				label3: "Increase in repeat customers",
			},
			bgColor: "bg-grey",
		},
		{
			industry: "Financial Services",
			icon: "💰",
			client: "SecureInvest",
			challenge:
				"Building trust and credibility while navigating strict compliance requirements.",
			solution: [
				"Educational content marketing",
				"Compliance-friendly social media",
				"Thought leadership campaigns",
				"Client testimonial programs",
			],
			results: {
				metric1: "220%",
				label1: "Increase in consultation requests",
				metric2: "150%",
				label2: "Growth in website authority",
				metric3: "40%",
				label3: "Improvement in client retention",
			},
			bgColor: "bg-dark-grey",
		},
	];

	return (
		<Section
			title="Industry Success Stories"
			description="See how our tailored approaches deliver results across different industries"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
				{industries.map((useCase) => (
					<Card
						key={useCase.industry}
						className={cn(useCase.bgColor, "p-8 h-full")}
					>
						<div className="space-y-6 h-full flex flex-col">
							{/* Header */}
							<div className="flex items-center space-x-4">
								<div className="text-4xl">{useCase.icon}</div>
								<div>
									<h3
										className={cn(
											"text-h3-mobile md:text-h2 font-medium leading-tight",
											useCase.bgColor === "bg-dark-grey"
												? "text-white"
												: "text-dark-grey",
										)}
									>
										{useCase.industry}
									</h3>
									<p
										className={cn(
											"text-sm font-medium",
											useCase.bgColor === "bg-dark-grey"
												? "text-green"
												: "text-dark-grey",
										)}
									>
										Client: {useCase.client}
									</p>
								</div>
							</div>

							{/* Challenge */}
							<div className="space-y-2">
								<h4
									className={cn(
										"text-h4-mobile font-medium",
										useCase.bgColor === "bg-dark-grey"
											? "text-green"
											: "text-dark-grey",
									)}
								>
									Challenge:
								</h4>
								<p
									className={cn(
										"text-sm",
										useCase.bgColor === "bg-dark-grey"
											? "text-grey"
											: "text-dark-grey",
									)}
								>
									{useCase.challenge}
								</p>
							</div>

							{/* Solution */}
							<div className="space-y-2 flex-grow">
								<h4
									className={cn(
										"text-h4-mobile font-medium",
										useCase.bgColor === "bg-dark-grey"
											? "text-green"
											: "text-dark-grey",
									)}
								>
									Our Solution:
								</h4>
								<ul className="space-y-1">
									{useCase.solution.map((item) => (
										<li key={item} className="flex items-start space-x-2">
											<div
												className={cn(
													"w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0",
													useCase.bgColor === "bg-dark-grey"
														? "bg-green"
														: "bg-dark-grey",
												)}
											/>
											<span
												className={cn(
													"text-sm",
													useCase.bgColor === "bg-dark-grey"
														? "text-grey"
														: "text-dark-grey",
												)}
											>
												{item}
											</span>
										</li>
									))}
								</ul>
							</div>

							{/* Results */}
							<div className="space-y-4">
								<h4
									className={cn(
										"text-h4-mobile font-medium",
										useCase.bgColor === "bg-dark-grey"
											? "text-green"
											: "text-dark-grey",
									)}
								>
									Results Achieved:
								</h4>
								<div className="grid grid-cols-3 gap-4">
									<div className="text-center">
										<div
											className={cn(
												"text-xl font-bold",
												useCase.bgColor === "bg-dark-grey"
													? "text-green"
													: "text-dark-grey",
											)}
										>
											{useCase.results.metric1}
										</div>
										<div
											className={cn(
												"text-xs",
												useCase.bgColor === "bg-dark-grey"
													? "text-grey"
													: "text-dark-grey",
											)}
										>
											{useCase.results.label1}
										</div>
									</div>
									<div className="text-center">
										<div
											className={cn(
												"text-xl font-bold",
												useCase.bgColor === "bg-dark-grey"
													? "text-green"
													: "text-dark-grey",
											)}
										>
											{useCase.results.metric2}
										</div>
										<div
											className={cn(
												"text-xs",
												useCase.bgColor === "bg-dark-grey"
													? "text-grey"
													: "text-dark-grey",
											)}
										>
											{useCase.results.label2}
										</div>
									</div>
									<div className="text-center">
										<div
											className={cn(
												"text-xl font-bold",
												useCase.bgColor === "bg-dark-grey"
													? "text-green"
													: "text-dark-grey",
											)}
										>
											{useCase.results.metric3}
										</div>
										<div
											className={cn(
												"text-xs",
												useCase.bgColor === "bg-dark-grey"
													? "text-grey"
													: "text-dark-grey",
											)}
										>
											{useCase.results.label3}
										</div>
									</div>
								</div>
							</div>

							{/* CTA */}
							<button
								type="button"
								className={cn(
									"flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-xl font-medium transition-all duration-200",
									useCase.bgColor === "bg-dark-grey"
										? "bg-green text-dark-grey hover:bg-green/80"
										: "bg-dark-grey text-white hover:bg-dark-grey/80",
								)}
							>
								<span>View Full Case Study</span>
								<img
									src={
										useCase.bgColor === "bg-dark-grey" ? ArrowIcon : ArrowIcon2
									}
									alt="Arrow"
									className="w-4 h-4"
								/>
							</button>
						</div>
					</Card>
				))}
			</div>
		</Section>
	);
}

function BusinessSizeUseCasesSection() {
	const businessTypes = [
		{
			type: "Startup",
			subtitle: "0-10 employees",
			description: "Building brand awareness from scratch",
			challenges: [
				"Limited budget and resources",
				"No existing digital presence",
				"Need for rapid growth",
				"Building credibility",
			],
			services: [
				"Brand development & positioning",
				"Social media presence building",
				"Content marketing foundation",
				"Basic SEO & website optimization",
			],
			timeline: "3-6 months",
			investment: "$2,000-5,000/month",
			successStory: {
				client: "TechStart Innovation",
				result: "Achieved 10x website traffic and secured $2M Series A funding",
			},
			bgColor: "bg-green",
		},
		{
			type: "Small Business",
			subtitle: "10-50 employees",
			description: "Scaling digital presence for growth",
			challenges: [
				"Competing with larger companies",
				"Limited marketing expertise",
				"Need for measurable ROI",
				"Local market penetration",
			],
			services: [
				"Comprehensive SEO strategy",
				"PPC campaign management",
				"Local marketing optimization",
				"Email marketing automation",
			],
			timeline: "6-12 months",
			investment: "$5,000-12,000/month",
			successStory: {
				client: "Local Home Services Co.",
				result: "300% increase in leads and expanded to 3 new markets",
			},
			bgColor: "bg-grey",
		},
		{
			type: "Enterprise",
			subtitle: "500+ employees",
			description: "Optimizing complex digital ecosystems",
			challenges: [
				"Multiple stakeholders & departments",
				"Complex customer journeys",
				"Brand consistency across channels",
				"Advanced analytics needs",
			],
			services: [
				"Enterprise SEO & technical audits",
				"Multi-channel campaign orchestration",
				"Advanced analytics & attribution",
				"Marketing automation platforms",
			],
			timeline: "12+ months",
			investment: "$25,000+/month",
			successStory: {
				client: "Fortune 500 Manufacturing",
				result: "$50M increase in annual revenue from digital channels",
			},
			bgColor: "bg-dark-grey",
		},
	];

	return (
		<Section
			title="Solutions by Business Size"
			description="Tailored strategies that scale with your business, from startup to enterprise"
		>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{businessTypes.map((business) => (
					<Card
						key={business.type}
						className={cn(business.bgColor, "p-8 h-full")}
					>
						<div className="space-y-6 h-full flex flex-col">
							<div className="text-center space-y-2">
								<h3
									className={cn(
										"text-h3-mobile md:text-h2 font-bold",
										business.bgColor === "bg-dark-grey"
											? "text-white"
											: "text-dark-grey",
									)}
								>
									{business.type}
								</h3>
								<p
									className={cn(
										"text-sm font-medium",
										business.bgColor === "bg-dark-grey"
											? "text-green"
											: "text-dark-grey",
									)}
								>
									{business.subtitle}
								</p>
								<p
									className={cn(
										"text-sm",
										business.bgColor === "bg-dark-grey"
											? "text-grey"
											: "text-dark-grey",
									)}
								>
									{business.description}
								</p>
							</div>

							<div className="space-y-4 flex-grow">
								<div>
									<h4
										className={cn(
											"text-sm font-medium mb-2",
											business.bgColor === "bg-dark-grey"
												? "text-green"
												: "text-dark-grey",
										)}
									>
										Common Challenges:
									</h4>
									<ul className="space-y-1">
										{business.challenges.map((challenge) => (
											<li
												key={challenge}
												className={cn(
													"text-xs flex items-start space-x-2",
													business.bgColor === "bg-dark-grey"
														? "text-grey"
														: "text-dark-grey",
												)}
											>
												<span className="text-red-500">•</span>
												<span>{challenge}</span>
											</li>
										))}
									</ul>
								</div>

								<div>
									<h4
										className={cn(
											"text-sm font-medium mb-2",
											business.bgColor === "bg-dark-grey"
												? "text-green"
												: "text-dark-grey",
										)}
									>
										Our Services:
									</h4>
									<ul className="space-y-1">
										{business.services.map((service) => (
											<li
												key={service}
												className={cn(
													"text-xs flex items-start space-x-2",
													business.bgColor === "bg-dark-grey"
														? "text-grey"
														: "text-dark-grey",
												)}
											>
												<span className="text-green-500">✓</span>
												<span>{service}</span>
											</li>
										))}
									</ul>
								</div>
							</div>

							<div className="space-y-4">
								<div className="grid grid-cols-2 gap-4 text-center">
									<div>
										<div
											className={cn(
												"text-sm font-bold",
												business.bgColor === "bg-dark-grey"
													? "text-green"
													: "text-dark-grey",
											)}
										>
											{business.timeline}
										</div>
										<div
											className={cn(
												"text-xs",
												business.bgColor === "bg-dark-grey"
													? "text-grey"
													: "text-dark-grey",
											)}
										>
											Typical Timeline
										</div>
									</div>
									<div>
										<div
											className={cn(
												"text-sm font-bold",
												business.bgColor === "bg-dark-grey"
													? "text-green"
													: "text-dark-grey",
											)}
										>
											{business.investment}
										</div>
										<div
											className={cn(
												"text-xs",
												business.bgColor === "bg-dark-grey"
													? "text-grey"
													: "text-dark-grey",
											)}
										>
											Investment Range
										</div>
									</div>
								</div>

								<div
									className={cn(
										"p-3 rounded-lg",
										business.bgColor === "bg-dark-grey"
											? "bg-green/10"
											: "bg-dark-grey/10",
									)}
								>
									<p
										className={cn(
											"text-xs font-medium mb-1",
											business.bgColor === "bg-dark-grey"
												? "text-green"
												: "text-dark-grey",
										)}
									>
										Success Story: {business.successStory.client}
									</p>
									<p
										className={cn(
											"text-xs",
											business.bgColor === "bg-dark-grey"
												? "text-grey"
												: "text-dark-grey",
										)}
									>
										{business.successStory.result}
									</p>
								</div>
							</div>
						</div>
					</Card>
				))}
			</div>
		</Section>
	);
}

function ServiceSpecificUseCasesSection() {
	const serviceUseCases = [
		{
			service: "SEO Transformation",
			icon: "🔍",
			scenario: "Local Restaurant Chain Expansion",
			before: {
				ranking: "Page 3-5 for key terms",
				traffic: "2,500 monthly visitors",
				leads: "50 inquiries/month",
			},
			after: {
				ranking: "Top 3 for 80% of key terms",
				traffic: "15,000 monthly visitors",
				leads: "300 inquiries/month",
			},
			timeframe: "8 months",
			bgColor: "bg-green",
		},
		{
			service: "PPC Optimization",
			icon: "💰",
			scenario: "E-commerce Product Launch",
			before: {
				roas: "2.1x return on ad spend",
				cpa: "$45 cost per acquisition",
				conversions: "120 monthly sales",
			},
			after: {
				roas: "4.8x return on ad spend",
				cpa: "$18 cost per acquisition",
				conversions: "450 monthly sales",
			},
			timeframe: "3 months",
			bgColor: "bg-grey",
		},
		{
			service: "Social Media Growth",
			icon: "📱",
			scenario: "B2B Software Company",
			before: {
				followers: "1,200 total followers",
				engagement: "0.8% engagement rate",
				leads: "15 social leads/month",
			},
			after: {
				followers: "8,500 total followers",
				engagement: "4.2% engagement rate",
				leads: "85 social leads/month",
			},
			timeframe: "6 months",
			bgColor: "bg-dark-grey",
		},
	];

	return (
		<Section
			title="Service-Specific Transformations"
			description="Deep dive into how specific services drive measurable business improvements"
		>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{serviceUseCases.map((useCase) => (
					<Card
						key={useCase.service}
						className={cn(useCase.bgColor, "p-6 h-full")}
					>
						<div className="space-y-6 h-full flex flex-col">
							<div className="text-center space-y-2">
								<div className="text-3xl">{useCase.icon}</div>
								<h3
									className={cn(
										"text-h4-mobile md:text-h3 font-bold",
										useCase.bgColor === "bg-dark-grey"
											? "text-white"
											: "text-dark-grey",
									)}
								>
									{useCase.service}
								</h3>
								<p
									className={cn(
										"text-sm",
										useCase.bgColor === "bg-dark-grey"
											? "text-green"
											: "text-dark-grey",
									)}
								>
									{useCase.scenario}
								</p>
							</div>

							<div className="space-y-4 flex-grow">
								<div>
									<h4
										className={cn(
											"text-sm font-medium mb-2",
											useCase.bgColor === "bg-dark-grey"
												? "text-green"
												: "text-dark-grey",
										)}
									>
										Before Our Help:
									</h4>
									<div className="space-y-1">
										{Object.entries(useCase.before).map(([key, value]) => (
											<p
												key={key}
												className={cn(
													"text-xs",
													useCase.bgColor === "bg-dark-grey"
														? "text-grey"
														: "text-dark-grey",
												)}
											>
												• {value}
											</p>
										))}
									</div>
								</div>

								<div>
									<h4
										className={cn(
											"text-sm font-medium mb-2",
											useCase.bgColor === "bg-dark-grey"
												? "text-green"
												: "text-dark-grey",
										)}
									>
										After Implementation:
									</h4>
									<div className="space-y-1">
										{Object.entries(useCase.after).map(([key, value]) => (
											<p
												key={key}
												className={cn(
													"text-xs font-medium",
													useCase.bgColor === "bg-dark-grey"
														? "text-white"
														: "text-dark-grey",
												)}
											>
												✓ {value}
											</p>
										))}
									</div>
								</div>
							</div>

							<div className="text-center">
								<div
									className={cn(
										"inline-block px-3 py-1 rounded-full text-xs font-medium",
										useCase.bgColor === "bg-dark-grey"
											? "bg-green text-dark-grey"
											: "bg-dark-grey text-white",
									)}
								>
									Achieved in {useCase.timeframe}
								</div>
							</div>
						</div>
					</Card>
				))}
			</div>
		</Section>
	);
}

function UseCasesPage() {
	return (
		<div className="space-y-24">
			<UseCasesHero />
			<IndustryUseCasesSection />
			<BusinessSizeUseCasesSection />
			<ServiceSpecificUseCasesSection />
			<CaseStudySection />
		</div>
	);
}
