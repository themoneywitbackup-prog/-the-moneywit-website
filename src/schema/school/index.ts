import { z } from "astro:schema";

export const schoolProps = z.object({
	imageUrl: z.string(),
	title: z.string(),
	description: z.string(),
	link: z.string().url(),
});
