import { cn } from "@sglara/cn";
import { Card } from "../ui/Card";
import { Section } from "../ui/Section";

export function TeamsSection() {
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
