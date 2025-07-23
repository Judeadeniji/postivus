interface SectionHeaderProps {
	title: string;
	description: string;
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
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
