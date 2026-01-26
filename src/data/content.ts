import { client } from "@/lib/contentful";
import type { community, schoolType } from "@/types/school";
import { defineCollection, z } from "astro:content";

export const schoolCollection = defineCollection({
	async loader() {
		const res = await client.getEntries<schoolType>({
			content_type: "school",
			limit: 1000,
		});
		console.log(res.items, { depth: null });
		return res.items.map((data) => ({
			id: data.sys.id,
			preview: data.fields.preview.fields.file.url,
			title: data.fields.title,
			description: data.fields.description,
			link: data.fields.link,
			updatedAt: data.sys.updatedAt,
		}));
	},

	schema: z.object({
		preview: z.string(),
		title: z.string(),
		description: z.string(),
		link: z.string(),
		updatedAt: z.string(),
	}),
});

export const communityCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		previewImage: z.string(),
		communityLink: z.string(),
	}),
	async loader() {
		const res = await client.getEntries<community>({
			content_type: "community",
			limit: 1000,
		});
		return res.items.map((data) => ({
			...data.fields,
			id: data.sys.id,
			updatedAt: data.sys.updatedAt,
			previewImage: data.fields.previewImage.fields.file.url,
		}));
	},
});
