import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS, type Document } from "@contentful/rich-text-types";

export function generateHTMLString(Document: Document) {
	const htmlString = documentToHtmlString(Document, {
		renderNode: {
			[BLOCKS.EMBEDDED_ASSET]: ({
				data: {
					target: { fields },
				},
			}) => {
				const myField = fields;

				if (myField.file.contentType === "image/png") {
					return `<img src="${myField.file.url}" height="${fields.file.details.image.height}" width="${fields.file.details.image.width}" alt="${fields.description}"/>`;
				}
				if (myField.file.contentType === "video/mp4") {
					return `<video width="100%" height="400" controls src="${myField.file.url}"></video>`;
				}
				return `<p> ${myField.file.contentType}</p>`;
			},
			[BLOCKS.EMBEDDED_ENTRY]: ({ nodeType, data }) => {
				if (data.target.sys.contentType.sys.id === "youtube") {
					const iframe = data.target.fields.iframe;
					return `${iframe}`;
				}
				if (data.target.sys.contentType.sys.id === "pageTextContent") {
					const pageName = data.target.fields.pageName;
					const content = data.target.fields.content;

					return `
					<div class="pageTextContent">
					<div class="pageTextContent__container">
					${generateHTMLString(content)}
					</div>
					</div>
					`;
				}

				if (data.target.sys.contentType.sys.id === "pageForn") {
					const pageName = data.target.fields.pageTitle;
					const content = data.target.fields.formIframe;

					return `${content}`;
				}
				return "<p>Embedded Entry</p>";
			},
		},
	});
	return htmlString;
}
