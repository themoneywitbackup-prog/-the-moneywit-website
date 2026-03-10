import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS, type Document } from '@contentful/rich-text-types'

export function generateHTMLString(Document: Document) {
  const htmlString = documentToHtmlString(Document, {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: ({
        data: {
          target: { fields },
        },
      }) => {
        const myField = fields

        if (myField.file.contentType === 'image/png') {
          return `<img src="${myField.file.url}" height="${fields.file.details.image.height}" width="${fields.file.details.image.width}" alt="${fields.description}"/>`
        }
        if (myField.file.contentType === 'video/mp4') {
          return `<video width="100%" height="400" controls src="${myField.file.url}"></video>`
        }
        return `<p> ${myField.file.contentType}</p>`
      },
      [BLOCKS.EMBEDDED_ENTRY]: ({ nodeType, data }) => {
        if (data.target.sys.contentType.sys.id === 'youtube') {
          const iframe = data.target.fields.iframe
          return `${iframe}`
        }
        if (data.target.sys.contentType.sys.id === 'pageTextContent') {
          const pageName = data.target.fields.pageName
          const content = data.target.fields.content

          return `
					<div class="pageTextContent">
					<div class="pageTextContent__container">
					${generateHTMLString(content)}
					</div>
					</div>
					`
        }

        if (data.target.sys.contentType.sys.id === 'pageForn') {
          const pageName = data.target.fields.pageTitle
          const content = data.target.fields.formIframe

          return `${content}`
        }
        if (data.target.sys.contentType.sys.id === 'testBanner') {
          const title = data.target.fields.title
          const content = data.target.fields.content

          return `
       <div class="testBanner">
      ${generateHTMLString(content)}
        </div>`
        }

        if (data.target.sys.contentType.sys.id === 'imaginePage') {
          const pageTitle = data.target.fields.pageTitle
          const content = data.target.fields.content
          const subText = data.target.fields.subText

          return `
  <section class="imaginePage">
    <div class="imaginePage__container">
      <h2 class="imaginePage__title">
        ${pageTitle}
      </h2>
      <div class="imaginePage__list">
        ${generateHTMLString(content)}
      </div>
      <p class="imaginePage__subText">
        ${subText}
      </p>
    </div>
  </section>
  `
        }
        if (data.target.sys.contentType.sys.id === 'forYouPage') {
          const forYouPageTitle = data.target.fields.forYouPageTitle
          const content = data.target.fields.content

          return `
  <section class="forYouPage"> 
    <div class="forYouPage__container">
      <h2 class="forYouPage__title">${forYouPageTitle}</h2> 
      <div class="forYouPage__list-wrapper">
        <div class="forYouPage__list">
          ${generateHTMLString(content)}
        </div>
      </div>
    </div>
  </section>`
        }
        if (data.target.sys.contentType.sys.id === 'clarityPage') {
          const heading = data.target.fields.heading
          const content = data.target.fields.content
          const image = data.target.fields.image

          const imageUrl = image?.fields?.file?.url
          const alt = image?.fields?.description || ''

          return `
    <section class="clarityPage"> 
      <div class="clarityPage__container"> 
        <div class="clarityPage__image">
          <img src="https:${imageUrl}" alt="${alt}"/>
        </div>
        
        <div class="clarityPage__content-wrapper">
          <h1 class="clarityPage__heading">${heading}</h1>
          <div class="clarityPage__list"> 
            ${generateHTMLString(content)}
          </div>
        </div>
      </div>
    </section>`
        }
        return '<p>Embedded Entry</p>'
      },
    },
  })
  return htmlString
}
