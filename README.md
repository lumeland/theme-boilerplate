# Lume Theme boilerplate

This is a boilerplate to create Lume themes

## Instructions

- Clone this repo or click the "Use this template" button on GitHub.
- Update dependencies with `deno task lume upgrade`.
- Change the files in the `src` folder.
- Edit the `plugins.ts` file to add more plugins to your theme.
- Edit the `mod.ts` file to configure the remote files.
- Edit the `_cms.ts` file if you want to configure Lume CMS.
- Edit the `LICENSE` file to set the author name and year.
- Edit the `CHANGELOG.md` file. You can use the
  [changelog](https://github.com/oscarotero/keep-a-changelog) library:
  - Run `deno task changelog --publish` to publish the current version.
  - Run `deno task changelog --create 0.2.0` to create the next version.
- Publish the theme on [deno.land/x](https://deno.land/x).
- If you create a theme, please
  [create a new issue and let me know!](https://github.com/lumeland/themes/issues).
