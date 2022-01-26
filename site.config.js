module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '0942315264b146edb5178d85526123cd',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: '62afb492-4552-46e2-a01d-78d41ba73f51',

  // basic site info (required)
  name: 'GDSC MCE Blogs',
  domain: 'gdsc-mce-blogs.vercel.app',
  author: 'GDSC MCE',

  // open graph metadata (optional)
  description: 'Google Developer Student Club MCE is a community for the students interested in Google developer technologies. Students from any course with an interest in growing as a developer are welcome. By joining a GDSC MCE, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.',
  socialImageTitle: 'GDSC MCE',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: 'gdsc_mce',
  github: 'GDSC-MCE',
  linkedin: 'company/gdsc-mce',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
}
