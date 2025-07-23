import { cn } from "@sglara/cn";
import {
	Children,
	type PropsWithChildren,
	type ReactElement,
	cloneElement,
	isValidElement,
	useState,
} from "react";

interface AccordionItemProps {
	index: number;
	title: string;
	description: string;
	isOpen?: boolean;
	onToggle?: () => void;
}

export function AccordionItem({
	index,
	title,
	description,
	isOpen,
	onToggle,
}: AccordionItemProps) {
	return (
		<div className="col-span-1 relative">
			<div className="absolute -inset-x-0.5 -inset-y-1.5 transform translate-y-1 bg-black rounded-4xl" />
			<div
				className={cn(
					"relative z-10 h-full rounded-[calc(var(--radius-4xl)-2px)] p-8",
					{
						"bg-grey": !isOpen,
						"bg-green": isOpen,
						"cursor-pointer": onToggle,
						"hover:bg-green/80": onToggle && !isOpen,
						"hover:bg-grey/80": onToggle && isOpen,
					},
				)}
			>
				<div
					className={cn({
						"divide-y divide-black": isOpen,
					})}
				>
					<button
						type="button"
						className="w-full text-left focus:outline-none flex justify-between items-center"
						onClick={onToggle}
					>
						<div className="flex items-center space-x-1">
							<span className="text-h1-mobile md:text-h1 font-medium leading-tight">
								{`0${index + 1}`}
							</span>
							<span
								className={cn(
									"text-h4-mobile md:text-h3 leading-tight !inline [box-decoration-break:clone] [-webkit-box-decoration-break:clone] rounded-md px-2",
								)}
							>
								{title}
							</span>
						</div>
						<div className="flex items-center justify-center w-8 h-8 bg-white rounded-full border border-black">
							<span className="text-3xl font-medium">{isOpen ? "−" : "+"}</span>
						</div>
					</button>
					<div
						className={cn(
							"overflow-hidden transition-all duration-300 ease-in-out",
							isOpen ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0",
						)}
					>
						<p className={cn("text-base")}>{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export function Accordion({ children }: PropsWithChildren) {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const handleToggle = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="space-y-8">
			{Children.map(children, (child, index) => {
				if (isValidElement(child)) {
					return cloneElement(child as ReactElement<typeof AccordionItem>, {
						// @ts-ignore
						isOpen: openIndex === index,
						onToggle: () => handleToggle(index),
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key: index,
					});
				}
				return child;
			})}
		</div>
	);
}
