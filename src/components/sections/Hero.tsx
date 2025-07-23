import amazonLogo from "@/assets/amazon.svg";
import dribbleLogo from "@/assets/dribble.svg";
import hubspotLogo from "@/assets/hubspot.svg";
import nexflixLogo from "@/assets/netflix.svg";
import notionLogo from "@/assets/notion.svg";
import zoomLogo from "@/assets/zoom.svg";

function Companies() {
	return (
		<div className="flex items-center justify-between flex-wrap gap-4 mt-4">
			<div className="grayscale hover:grayscale-0 transition-all duration-300">
				<img src={amazonLogo} alt="Amazon Logo" className="h-8 w-auto" />
			</div>
			<div className="grayscale hover:grayscale-0 transition-all duration-300">
				<img src={dribbleLogo} alt="Dribble Logo" className="h-8 w-auto" />
			</div>
			<div className="grayscale hover:grayscale-0 transition-all duration-300">
				<img src={hubspotLogo} alt="HubSpot Logo" className="h-8 w-auto" />
			</div>
			<div className="grayscale hover:grayscale-0 transition-all duration-300">
				<img src={nexflixLogo} alt="Netflix Logo" className="h-8 w-auto" />
			</div>
			<div className="grayscale hover:grayscale-0 transition-all duration-300">
				<img src={notionLogo} alt="Notion Logo" className="h-8 w-auto" />
			</div>
			<div className="grayscale hover:grayscale-0 transition-all duration-300">
				<img src={zoomLogo} alt="Zoom Logo" className="h-8 w-auto" />
			</div>
		</div>
	);
}

export function Hero() {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 px-4">
			<div className="col-span-1">
				<div className="md:px-4 space-y-6 my-auto">
					<h1 className="text-left font-medium text-h1-mobile md:text-h1 leading-tight">
						Navigating the digital landscape for success
					</h1>

					<p className="text-p-mobile md:text-p">
						Our digital marketing agency helps businesses grow and succeed
						online through a range of services including SEO, PPC, social media
						marketing, and content creation.
					</p>

					<button
						type="button"
						className="py-4 px-8 bg-dark-grey text-white rounded-xl"
					>
						Book a consultation
					</button>
				</div>
			</div>
			<div className="col-span-1 px-4">
				<img
					className="w-full aspect-square"
					src="/mega.png"
					alt="loudspeaker"
				/>
			</div>
			<div className="col-span-1 md:col-span-2">
				<Companies />
			</div>
		</section>
	);
}
