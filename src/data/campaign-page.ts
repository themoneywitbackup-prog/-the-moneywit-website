import { client } from "@/lib/contentful";
import type { campaignPageType } from "@/types/contentful";
import { defineCollection, z } from "astro:content";

export const campaignPage = defineCollection({
	async loader() {
		const res = await client.getEntries<campaignPageType>({
			content_type: "campaignPage",
			limit: 1000,
		});
		return res.items.map((data) => ({
			id: data.sys.id,
			title: data.fields.title,
			description: data.fields.description,
			timeAndDate: data.fields.timeAndDate,
			backgroundImage: data.fields.backgroundImage.fields.file.url,
			paymentLinkOne: data.fields.paymentLinkOne,
			paymentLinkTwoDollar: data.fields.paymentLinkTwoDollar,
			slug: data.fields.slug,
			pageContent: data.fields.pageContent,
			updatedAt: data.sys.updatedAt,
		}));
	},
  schema : z.object({
    
  }),
});
