import { Accordion, AccordionItem } from "../ui/Accordion";
import { Section } from "../ui/Section";

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

export function WorkingProcessSection() {
	return (
		<Section
			title="Our Working Process"
			description="We follow a structured approach to ensure the success of our digital marketing campaigns. Our process includes:"
		>
			<Accordion>
				{processSteps.map((step, index) => (
					<AccordionItem
						index={index}
						key={step.title}
						title={step.title}
						description={step.description}
					/>
				))}
			</Accordion>
		</Section>
	);
}
