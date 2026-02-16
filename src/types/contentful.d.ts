import type { EntryFieldTypes, EntrySkeletonType } from "contentful";

export interface schoolType extends EntrySkeletonType {
	contentType: "school";
	fields: {
		preview: EntryFieldTypes.Object<ImageContent>;
		title: EntryFieldTypes.Text;
		description: EntryFieldTypes.Text;
		link: EntryFieldTypes.Text;
	};
}

export interface resourceType extends EntrySkeletonType {
	contentType: "resources";
	fields: {
		previewImage: EntryFieldTypes.Object<ImageContent>;
		title: EntryFieldTypes.Text;
		description: EntryFieldTypes.Text;
		linkToResource: EntryFieldTypes.Text;
	};
}

export interface community extends EntrySkeletonType {
	contentType: "community";
	fields: {
		previewImage: EntryFieldTypes.Object<ImageContent>;
		title: EntryFieldTypes.Text;
		communityLink: EntryFieldTypes.Text;
	};
}
export interface programType extends EntrySkeletonType {
	contentType: "program";
	fields: {
		previewImage: EntryFieldTypes.Object<ImageContent>;
		title: EntryFieldTypes.Text;
		description: EntryFieldTypes.Text;
		link: EntryFieldTypes.Text;
		category: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
		countDown: EntryFieldTypes.Date;
		buttonText: EntryFieldTypes.Text;
	};
}

export interface media extends EntrySkeletonType {
	contentType: "media";
	fields: {
		title: EntryFieldTypes.Text;
		youtubeCode: EntryFieldTypes.Text;
	};
}

export interface campaignPageType extends EntrySkeletonType {
	contentType: "campaignPage";
	fields: {
		title: EntryFieldTypes.Text;
		description: EntryFieldTypes.Text;
		timeAndDate: EntryFieldTypes.Date;
		backgroundImage: EntryFieldTypes.Object<ImageContent>;
		paymentLinkOne: EntryFieldTypes.Text;
		paymentLinkTwoDollar: EntryFieldTypes.Text;
		slug: EntryFieldTypes.Text;
		pageContent: EntryFieldTypes.RichText;
		textForLink1: EntryFieldTypes.Text;
		textForLink2: EntryFieldTypes.Text;
	};
}
export interface homePageType extends EntrySkeletonType {
	contentType: "homepage";
	fields: {
		heroTag: EntryFieldTypes.Text;
		heroTitle: EntryFieldTypes.Text;
		heroDescription: EntryFieldTypes.Text;
		heroButton: EntryFieldTypes.Text;
		heroButtonLink: EntryFieldTypes.Text;
		whoismoneywitHeader: EntryFieldTypes.Text;
		whoismoneywitSubHeader: EntryFieldTypes.Text;
		whoismoneywitFirstCardHeader: EntryFieldTypes.Text;
		whoismoneywitFirstCardDesc: EntryFieldTypes.Text;
		whoismoneywitSecondCardHeader: EntryFieldTypes.Text;
		whoismoneywitSecondCardDesc: EntryFieldTypes.Text;
		patnerTitle: EntryFieldTypes.Text;
		partnerDesc: EntryFieldTypes.Text;
		patnerButton: EntryFieldTypes.Text;
		partnerButtonLink: EntryFieldTypes.Text;
		
	};
}
export type ImageContent = {
	fields: {
		description: string;
		file: {
			contentType: string;
			url: string;
			fileName: string;
		};
	};
};
