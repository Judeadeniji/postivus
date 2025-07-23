import { cn } from "@sglara/cn";
import { type ChangeEventHandler, useState } from "react";

export function CustomRadioButtons() {
	const [selectedGreeting, setSelectedGreeting] = useState("say-hi");

	const handleGreetingChange: ChangeEventHandler<HTMLInputElement> = (
		event,
	) => {
		setSelectedGreeting(event.target.value);
	};

	return (
		<div className="flex gap-x-8">
			<div className="flex items-center">
				<input
					type="radio"
					id="say-hi"
					name="greeting-type"
					value="say-hi"
					className="hidden"
					checked={selectedGreeting === "say-hi"}
					onChange={handleGreetingChange}
				/>
				<label
					htmlFor="say-hi"
					className="relative flex items-center cursor-pointer text-gray-700 text-lg"
				>
					<span className="w-6 h-6 rounded-full border mr-2 bg-white flex items-center justify-center transition-all duration-200 ease-in-out">
						<span
							className={cn(
								"w-3 h-3 rounded-full bg-transparent transition-all duration-200 ease-in-out",
								{
									"bg-green": selectedGreeting === "say-hi",
								},
							)}
						/>
					</span>
					Say Hi
				</label>
			</div>

			<div className="flex items-center">
				<input
					type="radio"
					id="get-a-quote"
					name="greeting-type"
					value="get-a-quote"
					className="hidden"
					checked={selectedGreeting === "get-a-quote"}
					onChange={handleGreetingChange}
				/>
				<label
					htmlFor="get-a-quote"
					className="relative flex items-center cursor-pointer text-gray-700 text-lg"
				>
					<span className="w-6 h-6 rounded-full border mr-2 bg-white flex items-center justify-center transition-all duration-200 ease-in-out">
						<span
							className={cn(
								"w-3 h-3 rounded-full bg-transparent transition-all duration-200 ease-in-out",
								{
									"bg-green": selectedGreeting === "get-a-quote",
								},
							)}
						/>
					</span>
					Get a Quote
				</label>
			</div>
		</div>
	);
}
