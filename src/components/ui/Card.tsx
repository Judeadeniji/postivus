import { cn } from "@sglara/cn";
import type { ComponentProps } from "react";

export function Card({ className, ...props }: ComponentProps<"div">) {
	return (
		<div className="col-span-1 relative" {...props}>
			<div className="absolute -inset-x-0.5 -inset-y-1.5 transform translate-y-1 bg-black rounded-4xl" />
			<div
				className={cn(
					"relative z-10 w-full h-full rounded-[calc(var(--radius-4xl)-2px)] p-8 md:p-12",
					className,
				)}
			>
				{props.children}
			</div>
		</div>
	);
}
