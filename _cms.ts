import CMS from "lume/cms/mod.ts";

const cms = CMS();

cms.document({
  name: "Site settings",
  description: "Default settings for the site",
  store: "src:_data.yml",
  fields: [
    "lang: text",
    {
      name: "metas",
      type: "object",
      fields: [
        "site: text",
        "twitter: text",
        "fediverse: text",
        "icon: file",
        "lang: hidden",
        "generator: checkbox",
      ],
    },
  ],
});

cms.document({
  name: "Homepage",
  description: "Main page of the site",
  store: "src:index.vto",
  fields: [
    "layout: hidden",
    "title: text",
    "content: code",
  ],
});

cms.upload("uploads: Uploaded files", "src:uploads");

export default cms;
