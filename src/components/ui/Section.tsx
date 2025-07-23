import { SectionHeader } from "./SectionHeader";

interface SectionProps {
	title: string;
	description: string;
	children: React.ReactNode;
}

export function Section({ title, description, children }: SectionProps) {
	return (
		<section className="px-4">
			<SectionHeader title={title} description={description} />
			{children}
		</section>
	);
}
