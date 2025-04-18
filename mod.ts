import plugins, { Options } from "./plugins.ts";

import "lume/types.ts";

export type { Options } from "./plugins.ts";

export default function (options: Partial<Options> = {}) {
  return (site: Lume.Site) => {
    // Configure the site
    site.use(plugins(options));

    // Add remote files
    const files = [
      "_includes/css/reset.css",
      "_includes/layouts/base.vto",
      "uploads/favicon.svg",
      "_data.yml",
      "404.md",
      "index.vto",
      "style.css",
    ];

    for (const file of files) {
      console.log(file, import.meta.resolve(`./src/${file}`));
      site.remoteFile(file, import.meta.resolve(`./src/${file}`));
    }
  };
}
