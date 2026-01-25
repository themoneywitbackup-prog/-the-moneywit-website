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

export interface resourceType {
	contentType: "resources";
	fields: {
		previewImage: EntryFieldTypes.Object<ImageContent>;
		title: EntryFieldTypes.Text;
		description: EntryFieldTypes.Text;
		linkToResource: EntryFieldTypes.Text;
	};
}

export interface programType {
	contentType: "program";
	fields: {
		previewImage: EntryFieldTypes.Object<ImageContent>;
		title: EntryFieldTypes.Text;
		description: EntryFieldTypes.Text;
		link: EntryFieldTypes.Text;
		category: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
		countDown: EntryFieldTypes.Date;
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
