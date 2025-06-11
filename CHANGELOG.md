<!-- deno-fmt-ignore-file -->

# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this
project adheres to [Semantic Versioning](http://semver.org/).

## [0.2.0] - 2025-06-11

Migrated to Lume 3

### Added
- [minifyHTML](https://lume.land/plugins/minify_html/) plugin for optimization and a better [DebugBar](https://lume.land/docs/core/debugbar/) experience on the dev server
- [checkUrls](https://lume.land/plugins/check_urls/) plugin because [nobody likes dead links](https://lume.land/blog/posts/lume-2-4-0-maruja-mallo/#new-plugin%3A-check_urls)
- `site.add("style.css")` to make LightningCSS [load file explicitly](https://lume.land/blog/posts/lume-3/#plugins-no-longer-load-files-automatically)
- `lume/jsx-runtime` for [SSX](https://github.com/oscarotero/ssx) support
- `lume/lint.ts` [plugin-order](https://lume.land/docs/advanced/migrate-to-lume3/#plugins-order) hinting

### Changed
- Bumped Lume to [v3.0.2](https://github.com/lumeland/lume/releases/tag/v3.0.2)
- Bumped lume/cms to [v0.11.5](https://github.com/lumeland/cms/releases/tag/v0.11.5)
- Bumped changelog to [v2.6.2](https://github.com/oscarotero/keep-a-changelog/releases/tag/v2.6.2)

[0.2.0]: https://github.com/lumeland/theme-boilerplate/releases/tag/v0.2.0

## [0.1.0] - 2025-04-18
First version

[0.1.0]: https://github.com/lumeland/theme-boilerplate/releases/tag/v0.1.0
