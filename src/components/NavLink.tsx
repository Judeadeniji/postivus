import { cn } from "@sglara/cn";
import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";

export function NavLink({
	className, children, ...props
}: ComponentProps<typeof Link> & { children: React.ReactNode; }) {
	return (
		<Link {...props}>
			{({ isActive }) => (
				<div
					className={cn("px-1 py-0.5 rounded-md hover:bg-green", {
						"bg-green text-dark-grey": isActive,
					}, className)}
				>
					{children}
				</div>
			)}
		</Link>
	);
}
