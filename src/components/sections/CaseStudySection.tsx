import ArrowIcon from "@/assets/arrow-icon.svg";
import { Section } from "../ui/Section";

export function CaseStudySection() {
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
