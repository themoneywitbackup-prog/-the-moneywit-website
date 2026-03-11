import { client } from "@/lib/contentful";
import type {
	community,
	schoolType,
	resourceType,
	programType,
	media,
} from "@/types/contentful";
import { defineCollection, z } from "astro:content";

export const schoolCollection = defineCollection({
	async loader() {
		const res = await client.getEntries<schoolType>({
			content_type: "school",
			limit: 1000,
		});
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

export const resourceCollection = defineCollection({
	schema: z.object({
		previewImage: z.string(),
		title: z.string(),
		description: z.string(),
		linkToResource: z.string(),
		updatedAt: z.string(),
	}),
	async loader() {
		const res = await client.getEntries<resourceType>({
			content_type: "resources",
			limit: 1000,
		});
		return res.items.map((data) => ({
			id: data.sys.id,
			previewImage: data.fields.previewImage.fields.file.url,
			title: data.fields.title,
			description: data.fields.description,
			linkToResource: data.fields.linkToResource,
			updatedAt: data.sys.updatedAt,
		}));
	},
});

export const programCollection = defineCollection({
	schema: z.object({
		previewImage: z.string(),
		title: z.string(),
		description: z.string(),
		link: z.string(),
		category: z.array(z.string()),
		countDown: z.string(),
		updatedAt: z.string(),
		buttonText: z.string().optional(),
	}),
	async loader() {
		const res = await client.getEntries<programType>({
			content_type: "program",
			limit: 1000,
		});
		return res.items.map((data) => ({
			id: data.sys.id,
			previewImage: data.fields.previewImage.fields.file.url,
			title: data.fields.title,
			description: data.fields.description,
			link: data.fields.link,
			category: data.fields.category ?? [],
			countDown: data.fields.countDown,
			updatedAt: data.sys.updatedAt,
			buttonText: data.fields.buttonText,
		}));
	},
});

export const mediaCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		youtubeCode: z.string(),
		updatedAt: z.string(),
		placement: z.array(z.string()),
	}),
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
			placement: data.fields.placement ?? [],
		}));
	},
});
