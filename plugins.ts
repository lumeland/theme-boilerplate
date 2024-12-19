import postcss from "lume/plugins/postcss.ts";
import basePath from "lume/plugins/base_path.ts";
import metas from "lume/plugins/metas.ts";
import sitemap from "lume/plugins/sitemap.ts";
import favicon from "lume/plugins/favicon.ts";
import { merge } from "lume/core/utils/object.ts";

import "lume/types.ts";

export interface Options {
}

export const defaults: Options = {};

/** Configure the site */
export default function (userOptions?: Options) {
  const options = merge(defaults, userOptions);

  return (site: Lume.Site) => {
    site.use(postcss())
      .use(basePath())
      .use(metas())
      .use(sitemap())
      .use(favicon({
        input: "uploads/favicon.svg",
      }))
      .copy("uploads");
  };
}
