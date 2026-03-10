import { client } from '@/lib/contentful'
import type { campaignPageType } from '@/types/contentful'
import { defineCollection, z } from 'astro:content'

export const campaignPage = defineCollection({
  async loader() {
    const res = await client.getEntries<campaignPageType>({
      content_type: 'campaignPage',
      limit: 1000,
    })
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
      textForLink1: data.fields.textForLink1,
      textForLink2: data.fields.textForLink2,
      
     
    }))
  },
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    timeAndDate: z.string(),
    backgroundImage: z.string(),
    paymentLinkOne: z.string().url(),
    paymentLinkTwoDollar: z.string().url(),
    textForLink1: z.string(),
    textForLink2: z.string(),
    
    
    slug: z.string(),
    pageContent: z.any(),
    updatedAt: z.string().datetime(),
  }),
})
