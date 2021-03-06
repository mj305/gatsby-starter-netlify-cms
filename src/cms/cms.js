import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
// import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import CommercialPagePreview from './preview-templates/CommercialPagePreview'
import GateRepairPagePreview from './preview-templates/GateRepairPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import Jack8500wPagePreview from './preview-templates/Jack8500wPagePreview'
import CollectionPagePreview from './preview-templates/CollectionPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('commercial', CommercialPagePreview)
CMS.registerPreviewTemplate('gate-repair', GateRepairPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('jack-8500w', Jack8500wPagePreview)
CMS.registerPreviewTemplate('coachman', CollectionPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
