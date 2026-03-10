import { defineCollection, z } from 'astro:content'
import { client } from '@/lib/contentful'
import type {
  homePageType,
  whatWeDoPageType,
  schoolPageType,
  mediaPageType,
  communityPageType,
  faqPageType,
  individualPageType,
  corporatePageType,
  aboutPageType,
  customerTestimonialPageType,
  footerPageType,
} from '@/types/contentful'

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

export const whatWeDoPageCollections = defineCollection({
  async loader() {
    const res = await client.getEntries<whatWeDoPageType>({
      content_type: 'whatWeDoPage',
      limit: 1000,
    })
    return res.items.map((data) => ({
      id: data.sys.id,
      whatWeDoHeroTitle: data.fields.whatWeDoHeroTitle,
      whatWeDoHeroDesc: data.fields.whatWeDoHeroDesc,
      whatWeDoHeroButton: data.fields.whatWeDoHeroButton,
      whatWeDoButtonLink: data.fields.whatWeDoButtonLink,
      whatWeDoHeroImage: data.fields.whatWeDoHeroImage.fields.file.url,
      expressionHeader: data.fields.expressionHeader,
      expressionCardOneTitle: data.fields.expressionCardOneTitle,
      expressionCardOneDesc: data.fields.expressionCardOneDesc,
      expressionCardTwoTitle: data.fields.expressionCardTwoTitle,
      expressionCardTwoDesc: data.fields.expressionCardTwoDesc,
      expressionCardThreeTitle: data.fields.expressionCardThreeTitle,
      expressionCardThreeDesc: data.fields.expressionCardThreeDesc,
      brochureTitle: data.fields.brochureTitle,
      brochureDesc: data.fields.brochureDesc,
      brochureButtonText: data.fields.brochureButtonText,
      brochureButtonLink: data.fields.brochureButtonLink,
      impactHeader: data.fields.impactHeader,
      impactDesc: data.fields.impactDesc,
      updatedAt: data.sys.updatedAt,
    }))
  },
  schema: z.object({
    whatWeDoHeroTitle: z.string(),
    whatWeDoHeroDesc: z.string(),
    whatWeDoHeroButton: z.string(),
    whatWeDoHeroImage: z.string(),
    whatWeDoButtonLink: z.string().url(),
    expressionHeader: z.string(),
    expressionCardOneTitle: z.string(),
    expressionCardOneDesc: z.string(),
    expressionCardTwoTitle: z.string(),
    expressionCardTwoDesc: z.string(),
    expressionCardThreeTitle: z.string(),
    expressionCardThreeDesc: z.string(),
    brochureTitle: z.string(),
    brochureDesc: z.string(),
    brochureButtonText: z.string(),
    brochureButtonLink: z.string().url(),
    impactHeader: z.string(),
    impactDesc: z.string(),
    updatedAt: z.string().datetime(),
  }),
})
export const schoolPageCollections = defineCollection({
  async loader() {
    const res = await client.getEntries<schoolPageType>({
      content_type: 'schoolPage',
      limit: 1000,
    })
    return res.items.map((data) => ({
      id: data.sys.id,
      schoolHeroTitle: data.fields.schoolHeroTitle,
      schooHeroDesc: data.fields.schooHeroDesc,
      schoolHeroButtonText: data.fields.schoolHeroButtonText,
      schoolHeroButtonLink: data.fields.schoolHeroButtonLink,
      schoolTrackHeader: data.fields.schoolTrackHeader,
      schoolTrackDesc: data.fields.schoolTrackDesc,
      schoolBrochure: data.fields.schoolBrochure,
      schoolBrochureDesc: data.fields.schoolBrochureDesc,
      schoolBrochureButtonText: data.fields.schoolBrochureButtonText,
      schoolBrochureButtonLink: data.fields.schoolBrochureButtonLink,
      newsletterHeader: data.fields.newsletterHeader,
      newsletterDesc: data.fields.newsletterDesc,
      updatedAt: data.sys.updatedAt,
    }))
  },
  schema: z.object({
    schoolHeroTitle: z.string(),
    schooHeroDesc: z.string(),
    schoolHeroButtonText: z.string(),
    schoolHeroButtonLink: z.string().url(),
    schoolTrackHeader: z.string(),
    schoolTrackDesc: z.string(),
    schoolBrochure: z.string(),
    schoolBrochureDesc: z.string(),
    schoolBrochureButtonText: z.string(),
    schoolBrochureButtonLink: z.string().url(),
    newsletterHeader: z.string(),
    newsletterDesc: z.string(),
  }),
})
export const mediaPageCollections = defineCollection({
  async loader() {
    const res = await client.getEntries<mediaPageType>({
      content_type: 'mediaPage',
      limit: 1000,
    })
    return res.items.map((data) => ({
      id: data.sys.id,
      mediaHeroTitle: data.fields.mediaHeroTitle,
      mediaHeroDesc: data.fields.mediaHeroDesc,
      mediaHeroButtonText: data.fields.mediaHeroButtonText,
      mediaHeroButtonLink: data.fields.mediaHeroButtonLink,
      mediaMoneyWitShowHeader: data.fields.mediaMoneyWitShowHeader,
      mediaMoneyWitDesc: data.fields.mediaMoneyWitDesc,
      mediaAppleMoneyWitShowLink: data.fields.mediaAppleMoneyWitShowLink,
      mediaSpotifyMoneyWitShow: data.fields.mediaSpotifyMoneyWitShow,
      mediaAmazonMoneyWitShow: data.fields.mediaAmazonMoneyWitShow,
    }))
  },
  schema: z.object({
    mediaHeroTitle: z.string(),
    mediaHeroDesc: z.string(),
    mediaHeroButtonText: z.string(),
    mediaHeroButtonLink: z.string().url(),
    mediaMoneyWitShowHeader: z.string(),
    mediaMoneyWitDesc: z.string(),
    mediaAppleMoneyWitShowLink: z.string().url(),
    mediaSpotifyMoneyWitShow: z.string().url(),
    mediaAmazonMoneyWitShow: z.string().url(),
  }),
})
export const communityPageCollections = defineCollection({
  async loader() {
    const res = await client.getEntries<communityPageType>({
      content_type: 'communityPage',
      limit: 1000,
    })
    return res.items.map((data) => ({
      id: data.sys.id,
      communityHeroHeader: data.fields.communityHeroHeader,
      communityHeroDesc: data.fields.communityHeroDesc,
      communityHeroButtonText: data.fields.communityHeroButtonText,
      communityHeroButtonLink: data.fields.communityHeroButtonLink,
      communityOverviewHeader: data.fields.communityOverviewHeader,
      communityOverviewFirstDesc: data.fields.communityOverviewFirstDesc,
      communityOverviewSecDesc: data.fields.communityOverviewSecDesc,
      communityOverviewThirdDesc: data.fields.communityOverviewThirdDesc,
      familiarHeader: data.fields.familiarHeader,
      familiarCardOneText: data.fields.familiarCardOneText,
      familiarCardTwoText: data.fields.familiarCardTwoText,
      familiarCardThreeText: data.fields.familiarCardThreeText,
      familiarCardFourText: data.fields.familiarCardFourText,
      familiarCardFiveText: data.fields.familiarCardFiveText,
      familiarCardSixText: data.fields.familiarCardSixText,
      moneyWitFinancialHeader: data.fields.moneyWitFinancialHeader,
      moneyWitFinancialDesc: data.fields.moneyWitFinancialDesc,
      moneyWitFinancialButtonText: data.fields.moneyWitFinancialButtonText,
      moneyWitFinancialButtonLink: data.fields.moneyWitFinancialButtonLink,
      moneyWitFinancialStepOneTitle: data.fields.moneyWitFinancialStepOneTitle,
      moneyWitFinancialStepOneDesc: data.fields.moneyWitFinancialStepOneDesc,
      moneyWitFinancialStepTwoTitle: data.fields.moneyWitFinancialStepTwoTitle,
      moneyWitFinancialStepTwoDesc: data.fields.moneyWitFinancialStepTwoDesc,
      moneyWitFinancialStepThreeTitle: data.fields.moneyWitFinancialStepThreeTitle,
      moneyWitFinancialStepThreeDesc: data.fields.moneyWitFinancialStepThreeDesc,
      moneyWitFinancialStepFourTitile: data.fields.moneyWitFinancialStepFourTitile,
      moneyWitFinancialStepFourDesc: data.fields.moneyWitFinancialStepFourDesc,
      featureLiteLink: data.fields.featureLiteLink,
      featurePremiumLink: data.fields.featurePremiumLink,
      communityMembersButtonText: data.fields.communityMembersButtonText,
      communityMembersButtonLink: data.fields.communityMembersButtonLink,
    }))
  },
  schema: z.object({
    communityHeroHeader: z.string(),
    communityHeroDesc: z.string(),
    communityHeroButtonText: z.string(),
    communityHeroButtonLink: z.string().url(),
    communityOverviewHeader: z.string(),
    communityOverviewFirstDesc: z.string(),
    communityOverviewSecDesc: z.string(),
    communityOverviewThirdDesc: z.string(),
    familiarHeader: z.string(),
    familiarCardOneText: z.string(),
    familiarCardTwoText: z.string(),
    familiarCardThreeText: z.string(),
    familiarCardFourText: z.string(),
    familiarCardFiveText: z.string(),
    familiarCardSixText: z.string(),
    moneyWitFinancialHeader: z.string(),
    moneyWitFinancialDesc: z.string(),
    moneyWitFinancialButtonText: z.string(),
    moneyWitFinancialButtonLink: z.string().url(),
    moneyWitFinancialStepOneTitle: z.string(),
    moneyWitFinancialStepOneDesc: z.string(),
    moneyWitFinancialStepTwoTitle: z.string(),
    moneyWitFinancialStepTwoDesc: z.string(),
    moneyWitFinancialStepThreeTitle: z.string(),
    moneyWitFinancialStepThreeDesc: z.string(),
    moneyWitFinancialStepFourTitile: z.string(),
    moneyWitFinancialStepFourDesc: z.string(),
    featureLiteLink: z.string(),
    featurePremiumLink: z.string(),
    communityMembersButtonText: z.string(),
    communityMembersButtonLink: z.string(),
  }),
})

export const faqPageCollections = defineCollection({
  async loader() {
    const res = await client.getEntries<faqPageType>({
      content_type: 'faq',
      limit: 1000,
    })
    return res.items.map((data) => ({
      id: data.sys.id,
      questionOne: data.fields.questionOne,
      answerOne: data.fields.answerOne,
      questionTwo: data.fields.questionTwo,
      answerTwo: data.fields.answerTwo,
      questionThree: data.fields.questionThree,
      answerThree: data.fields.answerThree,
      questionFour: data.fields.questionFour,
      answerFour: data.fields.answerFour,
      questionFive: data.fields.questionFive,
      answerFive: data.fields.answerFive,
      questionSix: data.fields.questionSix,
      answerSix: data.fields.answerSix,
      faqButtonText: data.fields.faqButtonText,
      faqButtonLink: data.fields.faqButtonLink,
    }))
  },
  schema: z.object({
    questionOne: z.string(),
    answerOne: z.string(),
    questionTwo: z.string(),
    answerTwo: z.string(),
    questionThree: z.string(),
    answerThree: z.string(),
    questionFour: z.string(),
    answerFour: z.string(),
    questionFive: z.string(),
    answerFive: z.string(),
    questionSix: z.string(),
    answerSix: z.string(),
    faqButtonText: z.string(),
    faqButtonLink: z.string().url(),
  }),
})
export const individualPageCollections = defineCollection({
  async loader() {
    const res = await client.getEntries<individualPageType>({
      content_type: 'individual',
      limit: 1000,
    })
    return res.items.map((data) => ({
      id: data.sys.id,
      heroTitle: data.fields.heroTitle,
      heroButtonText: data.fields.heroButtonText,
      heroButtonLink: data.fields.heroButtonLink,
      trackRecordHeader: data.fields.trackRecordHeader,
      trackRecordDesc: data.fields.trackRecordDesc,
      headlineHeader: data.fields.headlineHeader,
      headlineDesc: data.fields.headlineDesc,
      headlineButtonText: data.fields.headlineButtonText,
      headlineButtonLink: data.fields.headlineButtonLink,
      generationalWealthHeader: data.fields.generationalWealthHeader,
      generationalWealthDesc: data.fields.generationalWealthDesc,
      generationalWealthSubHeader: data.fields.generationalWealthSubHeader,
      generationalWealthSubDesc: data.fields.generationalWealthSubDesc,
      generationalWealthLastDesc: data.fields.generationalWealthLastDesc,
    }))
  },
  schema: z.object({
    heroTitle: z.string(),
    heroButtonText: z.string(),
    heroButtonLink: z.string().url(),
    trackRecordHeader: z.string(),
    trackRecordDesc: z.string(),
    headlineHeader: z.string(),
    headlineDesc: z.string(),
    headlineButtonText: z.string(),
    headlineButtonLink: z.string().url(),
    generationalWealthHeader: z.string(),
    generationalWealthDesc: z.string(),
    generationalWealthSubHeader: z.string(),
    generationalWealthSubDesc: z.string(),
    generationalWealthLastDesc: z.string(),
  
  }),
})

export const corporatePageCollections = defineCollection({
  async loader() {
    const res = await client.getEntries<corporatePageType>({
      content_type: 'corporatePage',
      limit: 1000,
    })
    return res.items.map((data) => ({
      id: data.sys.id,
      heroTitle: data.fields.heroTitle,
      heroButtonText: data.fields.heroButtonText,
      heroButtonLink: data.fields.heroButtonLink,
      firstHeadlineTitile: data.fields.firstHeadlineTitile,
      firstHeadlineDesc: data.fields.firstHeadlineDesc,
      firstHeadlineButtonText: data.fields.firstHeadlineButtonText,
      firstHeadlineButtonLink: data.fields.firstHeadlineButtonLink,
      secondHeadlineTitle: data.fields.secondHeadlineTitle,
      secondHeadlineDesc: data.fields.secondHeadlineDesc,
      secondHeadlineButtonText: data.fields.secondHeadlineButtonText,
      secondHeadlineButtonLink: data.fields.secondHeadlineButtonLink,
      supportStaffTitle: data.fields.supportStaffTitle,
      supportStaffDesc: data.fields.supportStaffDesc,
      impactSpreadTitle: data.fields.impactSpreadTitle,
      impactSpreadDescOne: data.fields.impactSpreadDescOne,
      impactSpreadDescTwo: data.fields.impactSpreadDescTwo,
    }))
  },
  schema: z.object({
    heroTitle: z.string(),
    heroButtonText: z.string(),
    heroButtonLink: z.string().url(),
    firstHeadlineTitile: z.string(),
    firstHeadlineDesc: z.string(),
    firstHeadlineButtonText: z.string(),
    firstHeadlineButtonLink: z.string().url(),
    secondHeadlineTitle: z.string(),
    secondHeadlineDesc: z.string(),
    secondHeadlineButtonText: z.string(),
    secondHeadlineButtonLink: z.string().url(),
    supportStaffTitle: z.string(),
    supportStaffDesc: z.string(),
    impactSpreadTitle: z.string(),
    impactSpreadDescOne: z.string(),
    impactSpreadDescTwo: z.string(),
  }),
})
export const customerTestimonialPageCollections = defineCollection({
  async loader() {
    const res = await client.getEntries<customerTestimonialPageType>({
      content_type: 'customerTestimonial',
      limit: 1000,
    })
    return res.items.map((data) => ({
      id: data.sys.id,
      message: data.fields.message,
      name: data.fields.name,
     
    }))
  },
  schema: z.object({
    message: z.string(),
    name: z.string(),
    
  }),
})
export const aboutPageCollections = defineCollection({
  async loader() {
    const res = await client.getEntries<aboutPageType>({
      content_type: 'aboutPage',
      limit: 1000,
    })
    return res.items.map((data) => ({
      id: data.sys.id,
      smarterMoneyHeroText: data.fields.smarterMoneyHeroText,
      ourStory: data.fields.ourStory,
      ourPhilosophyTitle: data.fields.ourPhilosophyTitle,
      ourPhilosophyDesc: data.fields.ourPhilosophyDesc,
    }))
  },
  schema: z.object({
    smarterMoneyHeroText: z.string(),
    ourStory: z.string(),
    ourPhilosophyTitle: z.string(),
    ourPhilosophyDesc: z.string(),

  }),
})
export const footerPageCollections = defineCollection({
  async loader() {
    const res = await client.getEntries<footerPageType>({
      content_type: 'footer',
      limit: 1000,
    })
    return res.items.map((data) => ({
      id: data.sys.id,
      privacyPolicyLink: data.fields.privacyPolicyLink,
      termsOfServiceLink: data.fields.termsOfServiceLink,
      cookiesSettingsLink: data.fields.cookiesSettingsLink,
      
    }))
  },
  schema: z.object({
    privacyPolicyLink: z.string(),
    termsOfServiceLink: z.string(),
    cookiesSettingsLink: z.string(), 
  }),
})
