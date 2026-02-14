import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useEffect } from "react";
import { fetchDX } from "@/lib/dev/fetch";
import { endpointNewsletter } from "@/lib/const";

const formPayload = z.object({
	email: z.email(),
});
const SubscribeNewsLetter = () => {
	const { handleSubmit, register } = useForm({
		resolver: zodResolver(formPayload),
		resetOptions: { keepDirtyValues: true, keepErrors: true },
	});

	useEffect(() => {}, []);
	const handleFormSubmit: SubmitHandler<z.infer<typeof formPayload>> = async (
		data,
	) => {
		const formData = new FormData();
		formData.append("email", data.email);
		formData.append("date", new Date().toString());

		const res = await fetchDX({
			url: endpointNewsletter,
			options: {
				method: "POST",
				body: formData,
			},
		});
	};
	return (
		<form
			onSubmit={handleSubmit(handleFormSubmit)}
			className="flex flex-col sm:flex-row gap-2 mt-2"
		>
			<input
				{...register("email", { required: true })}
				type="email"
				placeholder="Enter your email"
				className="bg-transparent border border-black/20 rounded-full py-3 px-6 placeholder:text-black/60 focus:outline-none focus:border-black flex-grow text-sm"
			/>
			<button
				type="submit"
				className="bg-black cursor-pointer text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 text-sm whitespace-nowrap"
			>
				Join Waitlist
			</button>
		</form>
	);
};

export default SubscribeNewsLetter;
