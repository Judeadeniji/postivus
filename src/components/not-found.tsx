import ArrowIcon from "@/assets/arrow-icon.svg";
import { Card } from "@/components/ui";
import { Link } from "@tanstack/react-router";

export function NotFound() {
	const darkHumorMessages = [
		"This page is as missing as your competitors' SEO strategy.",
		"404: Page not found. Unlike your business goals, which we can definitely find.",
		"This URL is deader than print advertising.",
		"Looks like this page ghosted us harder than your last marketing agency.",
		"Error 404: Page missing. Your ROI doesn't have to be.",
		"This page vanished faster than organic reach on social media.",
	];

	const randomMessage = darkHumorMessages[Math.floor(Math.random() * darkHumorMessages.length)];

	const helpfulLinks = [
		{ name: "Home", path: "/", icon: "🏠" },
		{ name: "Services", path: "/services", icon: "🚀" },
		{ name: "About Us", path: "/about", icon: "👥" },
		{ name: "Pricing", path: "/pricing", icon: "💰" },
		{ name: "Use Cases", path: "/use-cases", icon: "📊" },
		{ name: "Blog", path: "/blog", icon: "📝" },
	];

	return (
		<div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
			{/* Background Elements */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-20 left-10 w-32 h-32 bg-green rounded-full" />
				<div className="absolute top-40 right-20 w-24 h-24 bg-dark-grey rounded-full" />
				<div className="absolute bottom-20 left-1/4 w-40 h-40 bg-green rounded-full" />
				<div className="absolute bottom-10 right-10 w-28 h-28 bg-dark-grey rounded-full" />
			</div>

			<div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
				{/* Main 404 Section */}
				<div className="space-y-8">
					{/* Animated 404 */}
					<div className="relative">
						<h1 className="text-9xl md:text-[12rem] font-black text-dark-grey/10 select-none">
							404
						</h1>
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="text-6xl md:text-8xl animate-bounce">
								💀
							</div>
						</div>
					</div>

					{/* Dark Humor Message */}
					<div className="space-y-4">
						<h2 className="text-3xl md:text-4xl font-bold text-dark-grey">
							Oops! Page Not Found
						</h2>
						<p className="text-lg md:text-xl text-dark-grey/80 leading-relaxed">
							{randomMessage}
						</p>
					</div>

					{/* Fun Statistics */}
					<Card className="bg-dark-grey p-8">
						<div className="space-y-4">
							<h3 className="text-xl font-bold text-white">
								404 Error Statistics (That Actually Matter)
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
								<div>
									<div className="text-2xl font-bold text-green">42%</div>
									<div className="text-sm text-grey">
										Of users leave after a 404 error
									</div>
								</div>
								<div>
									<div className="text-2xl font-bold text-green">0%</div>
									<div className="text-sm text-grey">
										Chance this was intentional
									</div>
								</div>
								<div>
									<div className="text-2xl font-bold text-green">100%</div>
									<div className="text-sm text-grey">
										Certainty we can fix your marketing
									</div>
								</div>
							</div>
						</div>
					</Card>
				</div>

				{/* Navigation Options */}
				<div className="space-y-8">
					<div>
						<h3 className="text-2xl font-bold text-dark-grey mb-6">
							Lost? Let's Get You Back on Track
						</h3>
						<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
							{helpfulLinks.map((link) => (
								<Link
									key={link.path}
									to={link.path}
									className="group"
								>
									<Card className="bg-grey hover:bg-green transition-all duration-300 p-6 cursor-pointer hover:scale-105">
										<div className="space-y-2 text-center">
											<div className="text-3xl group-hover:scale-110 transition-transform">
												{link.icon}
											</div>
											<div className="font-medium text-dark-grey group-hover:text-white transition-colors">
												{link.name}
											</div>
										</div>
									</Card>
								</Link>
							))}
						</div>
					</div>

					{/* CTA Section */}
					<div className="space-y-6">
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
							<Link to="/">
								<button
									type="button"
									className="bg-green text-dark-grey px-8 py-4 rounded-xl font-bold text-lg hover:bg-green/90 hover:scale-105 transition-all duration-300 flex items-center space-x-3 group"
								>
									<span>Take Me Home</span>
									<img 
										src={ArrowIcon} 
										alt="Arrow" 
										className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
									/>
								</button>
							</Link>
							<Link to="/services">
								<button
									type="button"
									className="border-2 border-dark-grey text-dark-grey px-8 py-4 rounded-xl font-bold text-lg hover:bg-dark-grey hover:text-white transition-all duration-300"
								>
									Explore Our Services
								</button>
							</Link>
						</div>

						{/* Contact Option */}
						<Card className="bg-green p-6">
							<div className="space-y-4 text-center">
								<h4 className="text-xl font-bold text-dark-grey">
									Still Can't Find What You're Looking For?
								</h4>
								<p className="text-dark-grey">
									Unlike this page, our team is always available to help. 
									Let's talk about your marketing needs instead.
								</p>
								<button
									type="button"
									className="bg-dark-grey text-white px-6 py-3 rounded-xl font-medium hover:bg-dark-grey/80 transition-colors"
								>
									Get Free Consultation
								</button>
							</div>
						</Card>
					</div>
				</div>

				{/* Fun Facts */}
				<div className="pt-8 border-t border-grey">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-dark-grey/70">
						<div>
							<p className="font-medium mb-2">💡 Did You Know?</p>
							<p>
								The HTTP 404 error was named after room 404 at CERN, where the World Wide Web was born. 
								Unlike this page, we make sure your website visitors never get lost.
							</p>
						</div>
						<div>
							<p className="font-medium mb-2">🎯 Marketing Tip:</p>
							<p>
								Custom 404 pages can reduce bounce rates by up to 50%. 
								Speaking of which, want us to audit your website's user experience?
							</p>
						</div>
					</div>
				</div>

				{/* Easter Egg */}
				<div className="text-xs text-dark-grey/40">
					<p>
						Error ID: MARKETING_GENIUS_NOT_FOUND_BUT_WE_ARE_HERE_TO_HELP
					</p>
				</div>
			</div>
		</div>
	);
}
