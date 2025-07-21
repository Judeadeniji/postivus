import { cn } from "@sglara/cn";
import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";

function NavLink({
	className,
	children,
	...props
}: ComponentProps<typeof Link> & { children: React.ReactNode }) {
	return (
		<Link {...props}>
			{({ isActive }) => (
				<div
					className={cn("px-1 py-0.5 rounded-md hover:bg-green", {
						"bg-green": isActive,
					})}
				>
					{children}
				</div>
			)}
		</Link>
	);
}

export default function Header() {
	return (
		<header className="p-4 md:px-8 flex justify-between items-center">
			<figure role="img">
				<img
					src="/logo-default.png"
					alt="postivus logo"
					className="h-4 md:h-6 w-auto"
				/>
			</figure>
			<nav className="flex flex-row items-center space-x-6">
				<NavLink to="/">About Us</NavLink>
				<NavLink to="/services">Services</NavLink>
				<NavLink to="/use-cases">Use Cases</NavLink>
				<NavLink to="/pricing">Pricing</NavLink>
				<NavLink to="/blog">Blog</NavLink>

        <button type="button" className="border-1 border-black px-5 py-3 rounded-xl">Request a quote</button>
			</nav>
		</header>
	);
}
