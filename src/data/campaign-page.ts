import { client } from "@/lib/contentful";
import type { media } from "@/types/contentful";
import { defineCollection } from "astro:content";

export const campaignPage = defineCollection({
	async loader() {
		const res = await client.getEntries<media>({
			content_type: "media",
			limit: 1000,
		});
		return res.items.map((data) => ({
			id: data.sys.id,
			title: data.fields.title,
			youtubeCode: data.fields.youtubeCode,
			updatedAt: data.sys.updatedAt,
		}));
	},
});
