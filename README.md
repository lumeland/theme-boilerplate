# Lume Theme boilerplate

This is a boilerplate to create Lume themes

## Instructions

- Clone this repo or click the "Use this template" button on GitHub.
- Update dependencies with `deno task lume upgrade`.
- Add or modify the files of the theme in the `src` folder.
- Edit the `plugins.ts` file to add more plugins to your theme.
- Edit the `_cms.ts` file to configure Lume CMS.
- Enter in the `test` folder and run `deno task serve` to test the theme.
- Edit the `LICENSE` file to set the author name and year.
- Edit the `CHANGELOG.md` file. You can use the
  [changelog](https://github.com/oscarotero/keep-a-changelog) library:
  - Run `deno task changelog --publish` to publish the current version.
  - Run `deno task changelog --create 0.2.0` to create the next version.
- Publish the theme on GitHub, add a tag so it can be consumed from JsDelivr.
  - Example: `https://cdn.jsdelivr.net/gh/user/repo@tag/`
- To include the theme in [lume.land/themes](https://lume.land/themes/),
  [create a new issue here](https://github.com/lumeland/themes/issues).
