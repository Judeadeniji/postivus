import ArrowIcon2 from "@/assets/arrow-icon-2.svg";
import ArrowIcon from "@/assets/arrow-icon.svg";
import smmImage from "@/assets/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.png";
import seoImage from "@/assets/tokyo-magnifier-web-search-with-elements 2.png";
import contentImage from "@/assets/tokyo-many-browser-windows-with-different-information 1.png";
import ppcImage from "@/assets/tokyo-selecting-a-value-in-the-browser-window 1.png";
import emailImage from "@/assets/tokyo-sending-messages-from-one-place-to-another 1.png";
import analyticsImage from "@/assets/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.png";
import { Card } from "../ui/Card";
import { Section } from "../ui/Section";

export function ServicesSection() {
	return (
		<Section
			title="Services"
			description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
				<Card className="bg-grey">
					<div className="grid grid-cols-2 gap-x-4 md:gap-x-8">
						<div className="col-span-1 flex flex-col justify-between">
							<div>
								<h3 className="text-h4-mobile md:text-h3 leading-tight !inline [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-green rounded-md px-2">
									Search Engine Optimization
								</h3>
							</div>

							<div className="flex space-x-4 items-center">
								<img src={ArrowIcon} alt="Arrow Icon" />
								<p className="text-p-mobile md:text-p text-dark-grey">
									Learn more
								</p>
							</div>
						</div>
						<div className="col-span-1">
							<img
								src={seoImage}
								alt="Magnifier"
								className="w-full h-auto aspect-square"
							/>
						</div>
					</div>
				</Card>

				<Card className="bg-green">
					<div className="grid grid-cols-2 gap-x-4 md:gap-x-8">
						<div className="col-span-1 flex flex-col justify-between">
							<div>
								<h3 className="text-h4-mobile md:text-h3 leading-tight !inline [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-grey rounded-md px-2">
									Pay-Per-Click Advertising
								</h3>
							</div>

							<div className="flex space-x-4 items-center">
								<img src={ArrowIcon} alt="Arrow Icon" />
								<p className="text-p-mobile md:text-p text-dark-grey">
									Learn more
								</p>
							</div>
						</div>
						<div className="col-span-1">
							<img
								src={ppcImage}
								alt="Browser Window"
								className="w-full h-auto aspect-square"
							/>
						</div>
					</div>
				</Card>

				<Card className="bg-dark-grey">
					<div className="grid grid-cols-2 gap-x-4 md:gap-x-8">
						<div className="col-span-1 flex flex-col justify-between">
							<div>
								<h3 className="text-h4-mobile md:text-h3 leading-tight !inline [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-white rounded-md px-2">
									Social Media Marketing
								</h3>
							</div>

							<div className="flex space-x-4 items-center">
								<img src={ArrowIcon2} alt="Arrow Icon" />
								<p className="text-p-mobile md:text-p text-white">Learn more</p>
							</div>
						</div>
						<div className="col-span-1">
							<img
								src={smmImage}
								alt="Browser Window with Likes"
								className="w-full h-auto aspect-square"
							/>
						</div>
					</div>
				</Card>

				<Card className="bg-grey">
					<div className="grid grid-cols-2 gap-x-4 md:gap-x-8">
						<div className="col-span-1 flex flex-col justify-between">
							<div>
								<h3 className="text-h4-mobile md:text-h3 leading-tight !inline [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-green rounded-md px-2">
									Email Marketing
								</h3>
							</div>

							<div className="flex space-x-4 items-center">
								<img src={ArrowIcon} alt="Arrow Icon" />
								<p className="text-p-mobile md:text-p text-dark-grey">
									Learn more
								</p>
							</div>
						</div>
						<div className="col-span-1">
							<img
								src={emailImage}
								alt="Sending Messages"
								className="w-full h-auto aspect-square"
							/>
						</div>
					</div>
				</Card>

				<Card className="bg-green">
					<div className="grid grid-cols-2 gap-x-4 md:gap-x-8">
						<div className="col-span-1 flex flex-col justify-between">
							<div>
								<h3 className="text-h4-mobile md:text-h3 leading-tight !inline [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-grey rounded-md px-2">
									Content Creation
								</h3>
							</div>

							<div className="flex space-x-4 items-center">
								<img src={ArrowIcon} alt="Arrow Icon" />
								<p className="text-p-mobile md:text-p text-dark-grey">
									Learn more
								</p>
							</div>
						</div>
						<div className="col-span-1">
							<img
								src={contentImage}
								alt="Browser Windows with Information"
								className="w-full h-auto aspect-square"
							/>
						</div>
					</div>
				</Card>

				<Card className="bg-dark-grey">
					<div className="grid grid-cols-2 gap-x-4 md:gap-x-8">
						<div className="col-span-1 flex flex-col justify-between min-w-0">
							<div>
								<h3 className="text-h4-mobile md:text-h3 leading-tight !inline [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-white rounded-md px-2">
									Analytics and tracking
								</h3>
							</div>

							<div className="flex space-x-4 items-center">
								<img src={ArrowIcon2} alt="Arrow Icon" />
								<p className="text-p-mobile md:text-p text-white">Learn more</p>
							</div>
						</div>
						<div className="col-span-1">
							<img
								src={analyticsImage}
								alt="Analytics in Web Browsers"
								className="w-full h-auto aspect-square"
							/>
						</div>
					</div>
				</Card>
			</div>
		</Section>
	);
}
