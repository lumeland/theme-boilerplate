import basePath from "@lumeland/plugin-base-path";
import lumeCms from "@lumeland/plugin-cms";
import cms from "./cms.ts";

export interface Options {}

export default function (options?: Options) {
  return (site: Lume.Site) => {
    site.use(basePath());
    site.use(lumeCms({ cms }));

    // Add remote files
    site.remote("/", import.meta.resolve("./src"), ["_includes/**"]);
  };
}

export const setup: Lume.Archetype = function* () {
  yield {
    url: import.meta.resolve("./src"),
    files: ["_data/*", "files/*"],
  };
};
