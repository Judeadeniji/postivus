import {
	CTA,
	CaseStudySection,
	ContactUsSection,
	Hero,
	ServicesSection,
	TeamsSection,
	WorkingProcessSection,
} from "@/components/sections";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

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
