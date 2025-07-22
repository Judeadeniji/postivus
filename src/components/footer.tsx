import FacebookIcon from "@/assets/facebook.png";
import LinkedInIcon from "@/assets/linkedin.png";
import TwitterIcon from "@/assets/twitter.png";
import { NavLink } from "./NavLink";

export function Footer() {
	return (
		<footer className="bg-dark-grey rounded-t-4xl p-4 md:p-8 mt-8 md:mt-12 text-white space-y-4 md:space-y-8">
			<div className="container mx-auto text-center">
				<div className="p-4 md:px-8 flex justify-between items-center">
					<figure role="img">
						<img
							src="/logo.png"
							alt="postivus logo"
							className="h-4 md:h-6 w-auto"
						/>
					</figure>
					<nav className="hidden md:flex flex-row items-center space-x-6">
						<NavLink className="hover:text-dark-grey" to="/about">
							About Us
						</NavLink>
						<NavLink className="hover:text-dark-grey" to="/services">
							Services
						</NavLink>
						<NavLink className="hover:text-dark-grey" to="/use-cases">
							Use Cases
						</NavLink>
						<NavLink className="hover:text-dark-grey" to="/pricing">
							Pricing
						</NavLink>
						<NavLink className="hover:text-dark-grey" to="/blog">
							Blog
						</NavLink>
					</nav>

					<div className="flex items-center space-x-4">
						<div className="h-8 w-8">
							<img
								src={FacebookIcon}
								alt="Facebook"
								className="h-full w-full"
							/>
						</div>
						<div className="h-8 w-8">
							<img src={TwitterIcon} alt="Twitter" className="h-full w-full" />
						</div>
						<div className="h-8 w-8">
							<img
								src={LinkedInIcon}
								alt="LinkedIn"
								className="h-full w-full"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-32">
				<div className="col-span-1">
					<div className="space-y-4">
						<div>
							<p className="inline text-base bg-green text-dark-grey p-1 rounded-md">
								Contact Us:
							</p>
						</div>

						<p className="text-sm">Email: info@positivus.com</p>
						<p className="text-sm">Phone: 555-567-8901</p>
						<p className="text-sm">
							Address: 1234 Main St Moonstone City, Stardust State 12345
						</p>
					</div>
				</div>
				<div className="col-span-2">
					<div className="bg-zinc-700/80 rounded-md p-4 h-full flex items-center justify-center md:max-w-lg md:ml-auto">
						<div className="flex items-center space-x-4">
							<input
								type="email"
								placeholder="Subscribe to our newsletter"
								className="p-2 rounded-md bg-white text-dark-grey placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green w-full md:w-64"
							/>
							<button
								type="button"
								className="bg-green text-dark-grey px-4 py-2 rounded-md hover:bg-green/80 transition-colors"
							>
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="text-left text-sm pt-8 border-t">
				<p className="text-gray-400 space-x-2">
					<span>
						&copy; {new Date().getFullYear()} Positivus. All rights reserved.
					</span>
					<span className="text-gray-400">
						Designed with <span className="text-red-500">♥</span> by{" "}
						<a
							href="https://feranmi-v3.netlify.app/"
							className="text-green hover:underline"
						>
							Oluwaferanmi
						</a>
					</span>
				</p>
			</div>
		</footer>
	);
}
