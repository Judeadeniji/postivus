import contactIllustration from "@/assets/contact-illustration.png";
import { ContactForm } from "../ui/ContactForm";
import { CustomRadioButtons } from "../ui/CustomRadioButtons";
import { Section } from "../ui/Section";

export function ContactUsSection() {
	return (
		<Section
			title="Contact Us"
			description="Ready to take your digital marketing to the next level? Contact us today to discuss how we can help your business grow and succeed online."
		>
			<div className="bg-grey rounded-4xl grid grid-cols-1 md:grid-cols-2">
				<div className="col-span-1 pl-8 md:pl-24 flex flex-col justify-center">
					<form onSubmit={(e) => e.preventDefault()}>
						<CustomRadioButtons />
						<ContactForm />
					</form>
				</div>
				<div className="col-span-1 overflow-clip md:py-16">
					<img
						src={contactIllustration}
						alt="illustration"
						className="relative aspect-auto h-full -right-1/2"
					/>
				</div>
			</div>
		</Section>
	);
}
