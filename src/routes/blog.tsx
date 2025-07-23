import ArrowIcon2 from "@/assets/arrow-icon-2.svg";
import ArrowIcon from "@/assets/arrow-icon.svg";
import { Card } from "@/components/ui";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
	component: BlogPage,
});

function BlogHero() {
	return (
		<section className="px-4 py-8 md:py-16 mt-8 bg-grey rounded-2xl">
			<div className="text-center space-y-6">
				<div className="inline-block px-4 py-2 bg-green/10 rounded-full">
					<span className="text-sm font-medium text-dark-grey">
						📝 Digital Marketing Insights
					</span>
				</div>
				<h1 className="text-h1-mobile md:text-h1 font-medium leading-tight max-w-4xl mx-auto">
					Stay Ahead with{" "}
					<span className="text-green">Expert Insights</span>
				</h1>
				<p className="text-p-mobile md:text-p text-dark-grey max-w-3xl mx-auto">
					Discover the latest digital marketing strategies, industry trends, and
					actionable tips from our team of experts. Learn how to grow your
					business in the digital age.
				</p>
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
					<div className="flex items-center space-x-2 text-sm text-dark-grey">
						<div className="w-4 h-4 bg-green rounded-full flex items-center justify-center">
							<span className="text-xs text-white">📈</span>
						</div>
						<span>Weekly insights</span>
					</div>
					<div className="flex items-center space-x-2 text-sm text-dark-grey">
						<div className="w-4 h-4 bg-green rounded-full flex items-center justify-center">
							<span className="text-xs text-white">🎯</span>
						</div>
						<span>Actionable strategies</span>
					</div>
					<div className="flex items-center space-x-2 text-sm text-dark-grey">
						<div className="w-4 h-4 bg-green rounded-full flex items-center justify-center">
							<span className="text-xs text-white">💡</span>
						</div>
						<span>Industry trends</span>
					</div>
				</div>
			</div>
		</section>
	);
}

function FeaturedPost() {
	const featuredPost = {
		title: "The Complete Guide to AI-Powered Marketing Automation in 2025",
		excerpt: "Discover how artificial intelligence is revolutionizing marketing automation and learn practical strategies to implement AI tools that drive real results for your business.",
		author: "Sarah Chen",
		authorRole: "Head of Strategy",
		publishDate: "January 15, 2025",
		readTime: "12 min read",
		category: "Marketing Automation",
		tags: ["AI", "Automation", "Strategy", "2025 Trends"],
		image: "/src/assets/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.png",
	};

	return (
		<section className="px-4">
			<div className="text-center mb-12">
				<h2 className="text-h2-mobile md:text-h1 font-medium text-dark-grey mb-4">
					Featured Article
				</h2>
				<p className="text-dark-grey max-w-2xl mx-auto">
					Our most comprehensive guide to leveraging AI in your marketing strategy
				</p>
			</div>

			<Card className="bg-dark-grey p-8 md:p-12">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<div className="flex items-center space-x-4">
							<span className="bg-green text-dark-grey px-3 py-1 rounded-full text-sm font-medium">
								{featuredPost.category}
							</span>
							<span className="text-grey text-sm">{featuredPost.readTime}</span>
						</div>

						<h3 className="text-h2-mobile md:text-h1 font-bold text-white leading-tight">
							{featuredPost.title}
						</h3>

						<p className="text-grey text-lg leading-relaxed">
							{featuredPost.excerpt}
						</p>

						<div className="flex flex-wrap gap-2">
							{featuredPost.tags.map((tag) => (
								<span
									key={tag}
									className="bg-grey/20 text-grey px-3 py-1 rounded-full text-xs"
								>
									#{tag}
								</span>
							))}
						</div>

						<div className="flex items-center justify-between pt-4">
							<div className="flex items-center space-x-3">
								<div className="w-10 h-10 bg-green rounded-full flex items-center justify-center">
									<span className="text-dark-grey font-bold text-sm">
										{featuredPost.author.split(" ").map(n => n[0]).join("")}
									</span>
								</div>
								<div>
									<div className="text-white font-medium">
										{featuredPost.author}
									</div>
									<div className="text-grey text-sm">
										{featuredPost.authorRole}
									</div>
								</div>
							</div>
							<div className="text-grey text-sm">{featuredPost.publishDate}</div>
						</div>

						<button
							type="button"
							className="bg-green text-dark-grey px-8 py-4 rounded-xl font-medium hover:bg-green/80 transition-colors flex items-center space-x-2"
						>
							<span>Read Full Article</span>
							<img src={ArrowIcon} alt="Arrow" className="w-4 h-4" />
						</button>
					</div>

					<div className="relative">
						<div className="aspect-[4/3] bg-green/10 rounded-2xl overflow-hidden">
							<img
								src={featuredPost.image}
								alt={featuredPost.title}
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="absolute inset-0 bg-gradient-to-t from-dark-grey/50 to-transparent rounded-2xl" />
					</div>
				</div>
			</Card>
		</section>
	);
}

function BlogContent() {
	const blogPosts = [
		{
			id: 1,
			title: "5 SEO Trends That Will Dominate 2025",
			excerpt: "Stay ahead of the curve with these emerging SEO strategies that are reshaping search rankings.",
			author: "Marcus Rodriguez",
			publishDate: "January 12, 2025",
			readTime: "8 min read",
			category: "SEO",
			image: "/src/assets/tokyo-magnifier-web-search-with-elements 2.png",
		},
		{
			id: 2,
			title: "Converting Social Media Followers into Paying Customers",
			excerpt: "Learn proven strategies to turn your social media engagement into measurable business revenue.",
			author: "Emily Watson",
			publishDate: "January 10, 2025",
			readTime: "6 min read",
			category: "Social Media",
			image: "/src/assets/tokyo-sending-messages-from-one-place-to-another 1.png",
		},
		{
			id: 3,
			title: "The ROI of Video Marketing: What the Data Really Shows",
			excerpt: "Comprehensive analysis of video marketing performance across different industries and platforms.",
			author: "David Park",
			publishDate: "January 8, 2025",
			readTime: "10 min read",
			category: "Video Marketing",
			image: "/src/assets/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.png",
		},
		{
			id: 4,
			title: "Email Marketing Automation: Beyond the Basics",
			excerpt: "Advanced email automation strategies that drive engagement and increase customer lifetime value.",
			author: "Sarah Chen",
			publishDate: "January 5, 2025",
			readTime: "7 min read",
			category: "Email Marketing",
			image: "/src/assets/tokyo-selecting-a-value-in-the-browser-window 1.png",
		},
		{
			id: 5,
			title: "Local SEO for Multi-Location Businesses",
			excerpt: "Master the complexities of ranking multiple business locations in local search results.",
			author: "Marcus Rodriguez",
			publishDate: "January 3, 2025",
			readTime: "9 min read",
			category: "Local SEO",
			image: "/src/assets/tokyo-many-browser-windows-with-different-information 1.png",
		},
		{
			id: 6,
			title: "PPC Campaign Optimization: Data-Driven Strategies",
			excerpt: "Use advanced analytics and testing methodologies to maximize your paid advertising ROI.",
			author: "Lisa Thompson",
			publishDate: "December 30, 2024",
			readTime: "11 min read",
			category: "PPC",
			image: "/src/assets/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.png",
		},
	];

	const categories = [
		{ name: "All Posts", count: 24 },
		{ name: "SEO", count: 8 },
		{ name: "Social Media", count: 6 },
		{ name: "PPC", count: 5 },
		{ name: "Email Marketing", count: 3 },
		{ name: "Video Marketing", count: 2 },
	];

	const recentPosts = [
		{
			title: "Quick Wins for E-commerce SEO",
			publishDate: "January 11, 2025",
		},
		{
			title: "Instagram Reels vs TikTok: Which Platform Wins?",
			publishDate: "January 9, 2025",
		},
		{
			title: "Google Analytics 4: Essential Reports for Marketers",
			publishDate: "January 7, 2025",
		},
		{
			title: "Building Brand Authority Through Content",
			publishDate: "January 4, 2025",
		},
	];

	return (
		<section className="px-4">
			<div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
				{/* Main Content */}
				<div className="lg:col-span-3">
					<div className="flex items-center justify-between mb-8">
						<h2 className="text-h2-mobile md:text-h1 font-medium text-dark-grey">
							Latest Articles
						</h2>
						<select className="border border-grey rounded-lg px-4 py-2 text-dark-grey bg-white">
							<option>Sort by Date</option>
							<option>Most Popular</option>
							<option>Most Commented</option>
						</select>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{blogPosts.map((post) => (
							<Card key={post.id} className="bg-white overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
								<div className="aspect-[16/10] overflow-hidden">
									<img
										src={post.image}
										alt={post.title}
										className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
									/>
								</div>
								<div className="p-6 space-y-4">
									<div className="flex items-center justify-between">
										<span className="bg-green/10 text-green px-3 py-1 rounded-full text-sm font-medium">
											{post.category}
										</span>
										<span className="text-dark-grey/70 text-sm">
											{post.readTime}
										</span>
									</div>

									<h3 className="text-h4-mobile md:text-h3 font-bold text-dark-grey leading-tight group-hover:text-green transition-colors">
										{post.title}
									</h3>

									<p className="text-dark-grey/80 text-sm leading-relaxed">
										{post.excerpt}
									</p>

									<div className="flex items-center justify-between pt-2">
										<div className="text-dark-grey/70 text-sm">
											By {post.author}
										</div>
										<div className="text-dark-grey/70 text-sm">
											{post.publishDate}
										</div>
									</div>
								</div>
							</Card>
						))}
					</div>

					{/* Load More */}
					<div className="text-center mt-12">
						<button
							type="button"
							className="bg-dark-grey text-white px-8 py-4 rounded-xl font-medium hover:bg-dark-grey/80 transition-colors flex items-center space-x-2 mx-auto"
						>
							<span>Load More Articles</span>
							<img src={ArrowIcon2} alt="Arrow" className="w-4 h-4" />
						</button>
					</div>
				</div>

				{/* Sidebar */}
				<div className="lg:col-span-1 space-y-8">
					{/* Categories */}
					<Card className="bg-grey p-6">
						<h3 className="text-h4-mobile font-bold text-dark-grey mb-4">
							Categories
						</h3>
						<div className="space-y-2">
							{categories.map((category) => (
								<button
									key={category.name}
									type="button"
									className="w-full flex items-center justify-between text-left py-2 px-3 rounded-lg hover:bg-white/50 transition-colors"
								>
									<span className="text-dark-grey">{category.name}</span>
									<span className="text-dark-grey/70 text-sm">
										({category.count})
									</span>
								</button>
							))}
						</div>
					</Card>

					{/* Recent Posts */}
					<Card className="bg-grey p-6">
						<h3 className="text-h4-mobile font-bold text-dark-grey mb-4">
							Recent Posts
						</h3>
						<div className="space-y-4">
							{recentPosts.map((post) => (
								<div
									key={post.title}
									className="cursor-pointer group hover:bg-white/50 p-3 rounded-lg transition-colors"
								>
									<h4 className="text-sm font-medium text-dark-grey group-hover:text-green transition-colors mb-1">
										{post.title}
									</h4>
									<p className="text-xs text-dark-grey/70">
										{post.publishDate}
									</p>
								</div>
							))}
						</div>
					</Card>

					{/* Newsletter Signup */}
					<Card className="bg-dark-grey p-6">
						<h3 className="text-h4-mobile font-bold text-white mb-2">
							Stay Updated
						</h3>
						<p className="text-grey text-sm mb-4">
							Get weekly insights delivered to your inbox
						</p>
						<div className="space-y-3">
							<input
								type="email"
								placeholder="Your email address"
								className="w-full px-4 py-3 rounded-lg border border-grey/30 bg-white/10 text-white placeholder-grey/70 focus:outline-none focus:ring-2 focus:ring-green"
							/>
							<button
								type="button"
								className="w-full bg-green text-dark-grey py-3 rounded-lg font-medium hover:bg-green/80 transition-colors"
							>
								Subscribe
							</button>
						</div>
						<p className="text-grey/70 text-xs mt-3">
							No spam, unsubscribe anytime
						</p>
					</Card>

					{/* Popular Tags */}
					<Card className="bg-grey p-6">
						<h3 className="text-h4-mobile font-bold text-dark-grey mb-4">
							Popular Tags
						</h3>
						<div className="flex flex-wrap gap-2">
							{["SEO", "Content Marketing", "PPC", "Social Media", "Analytics", "Email", "Video", "AI", "Automation", "Local SEO"].map((tag) => (
								<button
									key={tag}
									type="button"
									className="bg-white/50 text-dark-grey px-3 py-1 rounded-full text-xs hover:bg-green hover:text-white transition-colors"
								>
									#{tag}
								</button>
							))}
						</div>
					</Card>
				</div>
			</div>
		</section>
	);
}

function BlogPage() {
	return (
		<div className="space-y-24">
			<BlogHero />
			<FeaturedPost />
			<BlogContent />
		</div>
	);
}
