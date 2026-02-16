import { defineCollection, z } from 'astro:content'
import { client } from '@/lib/contentful'
import type { homePageType } from '@/types/contentful'

export const HomepageCollections = defineCollection({
  async loader() {
    const res = await client.getEntries<homePageType>({
      content_type: 'homepage',
      limit: 1000,
    })
    return res.items.map((data) => ({
      id: data.sys.id,
      heroTag: data.fields.heroTag,
      heroTitle: data.fields.heroTitle,
      heroDescription: data.fields.heroDescription,
      heroButton: data.fields.heroButton,
      heroButtonLink: data.fields.heroButtonLink,
      whoismoneywitHeader: data.fields.whoismoneywitHeader,
      whoismoneywitSubHeader: data.fields.whoismoneywitSubHeader,
      whoismoneywitFirstCardHeader: data.fields.whoismoneywitFirstCardHeader,
      whoismoneywitFirstCardDesc: data.fields.whoismoneywitFirstCardDesc,
      whoismoneywitSecondCardHeader: data.fields.whoismoneywitSecondCardHeader,
      whoismoneywitSecondCardDesc: data.fields.whoismoneywitSecondCardDesc,
      patnerTitle: data.fields.patnerTitle,
      partnerDesc: data.fields.partnerDesc,
      patnerButton: data.fields.patnerButton,
      partnerButtonLink: data.fields.partnerButtonLink,
      updatedAt: data.sys.updatedAt,
    }))
  },
  schema: z.object({
    heroTag: z.string(),
    heroTitle: z.string(),
    heroDescription: z.string(),
    heroButton: z.string(),
    whoismoneywitHeader: z.string(),
    whoismoneywitSubHeader: z.string(),
    whoismoneywitFirstCardHeader: z.string(),
    whoismoneywitFirstCardDesc: z.string(),
    whoismoneywitSecondCardHeader: z.string(),
    whoismoneywitSecondCardDesc: z.string(),
    patnerTitle: z.string(),
    partnerDesc: z.string(),
    patnerButton: z.string(),
    partnerButtonLink: z.string().url(),
    heroButtonLink: z.string().url(),
    updatedAt: z.string().datetime(),
  }),
})
