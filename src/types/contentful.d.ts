import type { EntryFieldTypes, EntrySkeletonType } from 'contentful'

export interface schoolType extends EntrySkeletonType {
  contentType: 'school'
  fields: {
    preview: EntryFieldTypes.Object<ImageContent>
    title: EntryFieldTypes.Text
    description: EntryFieldTypes.Text
    link: EntryFieldTypes.Text
  }
}

export interface resourceType extends EntrySkeletonType {
  contentType: 'resources'
  fields: {
    previewImage: EntryFieldTypes.Object<ImageContent>
    title: EntryFieldTypes.Text
    description: EntryFieldTypes.Text
    linkToResource: EntryFieldTypes.Text
  }
}

export interface community extends EntrySkeletonType {
  contentType: 'community'
  fields: {
    previewImage: EntryFieldTypes.Object<ImageContent>
    title: EntryFieldTypes.Text
    communityLink: EntryFieldTypes.Text
  }
}
export interface programType extends EntrySkeletonType {
  contentType: 'program'
  fields: {
    previewImage: EntryFieldTypes.Object<ImageContent>
    title: EntryFieldTypes.Text
    description: EntryFieldTypes.Text
    link: EntryFieldTypes.Text
    category: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
    countDown: EntryFieldTypes.Date
    buttonText: EntryFieldTypes.Text
  }
}

export interface media extends EntrySkeletonType {
  contentType: 'media'
  fields: {
    title: EntryFieldTypes.Text
    youtubeCode: EntryFieldTypes.Text
  }
}

export interface campaignPageType extends EntrySkeletonType {
  contentType: 'campaignPage'
  fields: {
    title: EntryFieldTypes.Text
    description: EntryFieldTypes.Text
    timeAndDate: EntryFieldTypes.Date
    backgroundImage: EntryFieldTypes.Object<ImageContent>
    paymentLinkOne: EntryFieldTypes.Text
    paymentLinkTwoDollar: EntryFieldTypes.Text
    slug: EntryFieldTypes.Text
    pageContent: EntryFieldTypes.RichText
    textForLink1: EntryFieldTypes.Text
    textForLink2: EntryFieldTypes.Text
  }
}
export interface homePageType extends EntrySkeletonType {
  contentType: 'homepage'
  fields: {
    heroTag: EntryFieldTypes.Text
    heroTitle: EntryFieldTypes.Text
    heroDescription: EntryFieldTypes.Text
    heroButton: EntryFieldTypes.Text
    heroButtonLink: EntryFieldTypes.Text
    whoismoneywitHeader: EntryFieldTypes.Text
    whoismoneywitSubHeader: EntryFieldTypes.Text
    whoismoneywitFirstCardHeader: EntryFieldTypes.Text
    whoismoneywitFirstCardDesc: EntryFieldTypes.Text
    whoismoneywitSecondCardHeader: EntryFieldTypes.Text
    whoismoneywitSecondCardDesc: EntryFieldTypes.Text
    patnerTitle: EntryFieldTypes.Text
    partnerDesc: EntryFieldTypes.Text
    patnerButton: EntryFieldTypes.Text
    partnerButtonLink: EntryFieldTypes.Text
  }
}
export interface whatWeDoPageType extends EntrySkeletonType {
  contentType: 'whatWeDoPage'
  fields: {
    whatWeDoHeroTitle: EntryFieldTypes.Text
    whatWeDoHeroDesc: EntryFieldTypes.Text
    whatWeDoHeroButton: EntryFieldTypes.Text
    whatWeDoButtonLink: EntryFieldTypes.Text
    whatWeDoHeroImage: EntryFieldTypes.Object<ImageContent>
    expressionHeader: EntryFieldTypes.Text
    expressionCardOneTitle: EntryFieldTypes.Text
    expressionCardOneDesc: EntryFieldTypes.Text
    expressionCardTwoTitle: EntryFieldTypes.Text
    expressionCardTwoDesc: EntryFieldTypes.Text
    expressionCardThreeTitle: EntryFieldTypes.Text
    expressionCardThreeDesc: EntryFieldTypes.Text
    brochureTitle: EntryFieldTypes.Text
    brochureDesc: EntryFieldTypes.Text
    brochureButtonText: EntryFieldTypes.Text
    brochureButtonLink: EntryFieldTypes.Text
    impactHeader: EntryFieldTypes.Text
    impactDesc: EntryFieldTypes.Text
  }
}
export interface schoolPageType extends EntrySkeletonType {
  contentType: 'schoolPage'
  fields: {
    schoolHeroTitle: EntryFieldTypes.Text
    schooHeroDesc: EntryFieldTypes.Text
    schoolHeroButtonText: EntryFieldTypes.Text
    schoolHeroButtonLink: EntryFieldTypes.Text
    schoolTrackHeader: EntryFieldTypes.Text
    schoolTrackDesc: EntryFieldTypes.Text
    schoolBrochure: EntryFieldTypes.Text
    schoolBrochureDesc: EntryFieldTypes.Text
    schoolBrochureButtonText: EntryFieldTypes.Text
    schoolBrochureButtonLink: EntryFieldTypes.Text
    newsletterHeader: EntryFieldTypes.Text
    newsletterDesc: EntryFieldTypes.Text
  }
}
export interface mediaPageType extends EntrySkeletonType {
  contentType: 'mediaPage'
  fields: {
    mediaHeroTitle: EntryFieldTypes.Text
    mediaHeroDesc: EntryFieldTypes.Text
    mediaHeroButtonText: EntryFieldTypes.Text
    mediaHeroButtonLink: EntryFieldTypes.Text
    mediaMoneyWitShowHeader: EntryFieldTypes.Text
    mediaMoneyWitDesc: EntryFieldTypes.Text
    mediaAppleMoneyWitShowLink: EntryFieldTypes.Text
    mediaSpotifyMoneyWitShow: EntryFieldTypes.Text
    mediaAmazonMoneyWitShow: EntryFieldTypes.Text
  }
}
export interface communityPageType extends EntrySkeletonType {
  contentType: 'communityPage'
  fields: {
    communityHeroHeader: EntryFieldTypes.Text
    communityHeroDesc: EntryFieldTypes.Text
    communityHeroButtonText: EntryFieldTypes.Text
    communityHeroButtonLink: EntryFieldTypes.Text
    communityOverviewHeader: EntryFieldTypes.Text
    communityOverviewFirstDesc: EntryFieldTypes.Text
    communityOverviewSecDesc: EntryFieldTypes.Text
    communityOverviewThirdDesc: EntryFieldTypes.Text
    familiarHeader: EntryFieldTypes.Text
    familiarCardOneText: EntryFieldTypes.Text
    familiarCardTwoText: EntryFieldTypes.Text
    familiarCardThreeText: EntryFieldTypes.Text
    familiarCardFourText: EntryFieldTypes.Text
    familiarCardFiveText: EntryFieldTypes.Text
    familiarCardSixText: EntryFieldTypes.Text
    moneyWitFinancialHeader: EntryFieldTypes.Text
    moneyWitFinancialDesc: EntryFieldTypes.Text
    moneyWitFinancialButtonText: EntryFieldTypes.Text
    moneyWitFinancialButtonLink: EntryFieldTypes.Text
    moneyWitFinancialStepOneTitle: EntryFieldTypes.Text
    moneyWitFinancialStepOneDesc: EntryFieldTypes.Text
    moneyWitFinancialStepTwoTitle: EntryFieldTypes.Text
    moneyWitFinancialStepTwoDesc: EntryFieldTypes.Text
    moneyWitFinancialStepThreeTitle: EntryFieldTypes.Text
    moneyWitFinancialStepThreeDesc: EntryFieldTypes.Text
    moneyWitFinancialStepFourTitile: EntryFieldTypes.Text
    moneyWitFinancialStepFourDesc: EntryFieldTypes.Text
    featureLiteLink: EntryFieldTypes.Text
    featurePremiumLink: EntryFieldTypes.Text
    communityMembersButtonText: EntryFieldTypes.Text
    communityMembersButtonLink: EntryFieldTypes.Text


  }
}
export interface faqPageType extends EntrySkeletonType {
  contentType: 'faq'
  fields: {
    questionOne: EntryFieldTypes.Text
    answerOne: EntryFieldTypes.Text
    questionTwo: EntryFieldTypes.Text
    answerTwo: EntryFieldTypes.Text
    questionThree: EntryFieldTypes.Text
    answerThree: EntryFieldTypes.Text
    questionFour: EntryFieldTypes.Text
    answerFour: EntryFieldTypes.Text
    questionFive: EntryFieldTypes.Text
    answerFive: EntryFieldTypes.Text
    questionSix: EntryFieldTypes.Texty
    answerSix: EntryFieldTypes.Text
    faqButtonText: EntryFieldTypes.Text
   faqButtonLink: EntryFieldTypes.Text
  
   
  }
}
export interface individualPageType extends EntrySkeletonType {
  contentType: 'individual'
  fields: {
    heroTitle: EntryFieldTypes.Text
    heroButtonText: EntryFieldTypes.Text
    heroButtonLink: EntryFieldTypes.Text
    trackRecordHeader: EntryFieldTypes.Text
    trackRecordDesc: EntryFieldTypes.Text
    headlineHeader: EntryFieldTypes.Text
    headlineDesc: EntryFieldTypes.Text
    headlineButtonText: EntryFieldTypes.Text
    headlineButtonLink: EntryFieldTypes.Text
    generationalWealthHeader: EntryFieldTypes.Text
   generationalWealthDesc: EntryFieldTypes.Text
   generationalWealthSubHeader: EntryFieldTypes.Text
   generationalWealthSubDesc: EntryFieldTypes.Text
   generationalWealthLastDesc: EntryFieldTypes.Text
    
  }
}
export interface corporatePageType extends EntrySkeletonType {
  contentType: 'corporatePage'
  fields: {
    heroTitle: EntryFieldTypes.Text
    heroButtonText: EntryFieldTypes.Text
    heroButtonLink: EntryFieldTypes.Text
    firstHeadlineTitile: EntryFieldTypes.Text
    firstHeadlineDesc: EntryFieldTypes.Text
    firstHeadlineButtonText: EntryFieldTypes.Text
    firstHeadlineButtonLink: EntryFieldTypes.Text
    secondHeadlineTitle: EntryFieldTypes.Text
    secondHeadlineDesc: EntryFieldTypes.Text
    secondHeadlineButtonText: EntryFieldTypes.Text
    secondHeadlineButtonLink: EntryFieldTypes.Text
    supportStaffTitle: EntryFieldTypes.Text
    supportStaffDesc: EntryFieldTypes.Text
    impactSpreadTitle: EntryFieldTypes.Text
    impactSpreadDescOne: EntryFieldTypes.Text
    impactSpreadDescTwo: EntryFieldTypes.Text
    
  }
}
export interface aboutPageType extends EntrySkeletonType {
  contentType: 'aboutPage'
  fields: {
    smarterMoneyHeroText: EntryFieldTypes.Text
    ourStory: EntryFieldTypes.Text
    ourPhilosophyTitle: EntryFieldTypes.Text
    ourPhilosophyDesc: EntryFieldTypes.Text
   
    
  }
}
export interface customerTestimonialPageType extends EntrySkeletonType {
  contentType: 'customerTestimonial'
  fields: {
    message: EntryFieldTypes.Text
    name: EntryFieldTypes.Text  
  }
}
export type ImageContent = {
  fields: {
    description: string
    file: {
      contentType: string
      url: string
      fileName: string
    }
  }
}
