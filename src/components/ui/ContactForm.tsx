export function ContactForm() {
	return (
		<div className="max-w-md mt-8">
			{/* Name Input */}
			<div className="mb-6">
				<label
					htmlFor="name"
					className="block text-dark-grey font-medium mb-2"
				>
					Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Name"
					className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
				/>
			</div>

			{/* Email Input */}
			<div className="mb-6">
				<label
					htmlFor="email"
					className="block text-dark-grey font-medium mb-2"
				>
					Email*
				</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Email"
					required
					className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
				/>
			</div>

			{/* Message Textarea */}
			<div className="mb-8">
				<label
					htmlFor="message"
					className="block text-dark-grey font-medium mb-2"
				>
					Message*
				</label>
				<textarea
					id="message"
					name="message"
					placeholder="Message"
					rows={4}
					required
					className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition duration-200 ease-in-out"
				/>
			</div>

			<button
				type="submit"
				className="w-full bg-dark-grey text-white py-3 rounded-lg font-semibold hover:bg-dark-grey/80 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 transition duration-200 ease-in-out"
			>
				Send Message
			</button>
		</div>
	);
}
