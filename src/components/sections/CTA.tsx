import CTAImage from "@/assets/cta-img.png";

export function CTA() {
	return (
		<section className="mx-4 bg-grey grid grid-cols-1 md:grid-cols-3 gap-x-12 px-8 md:px-12 py-6 rounded-4xl">
			<div className="flex flex-col justify-center space-y-6 text-left col-span-1 md:col-span-2">
				<h2 className="text-h2-mobile md:text-h2 font-medium leading-tight">
					Let's make things happen
				</h2>
				<p className="text-p-mobile md:text-p text-dark-grey max-w-xl">
					Contact us today to learn more about how our digital marketing
					services can help your business grow and succeed online.
				</p>
				<button
					type="button"
					className="py-3 px-6 bg-dark-grey text-white rounded-xl w-54 hover:underline"
				>
					Get your free proposal
				</button>
			</div>

			<div className="col-span-1 relative hidden md:flex items-center justify-center">
				<img
					src={CTAImage}
					alt="Contact Us"
					className="w-full md:max-w-md h-auto"
				/>
			</div>
		</section>
	);
}
