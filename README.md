# KubeQuest Wiki

**[Read the hosted wiki](https://ramideltoro.github.io/kubequest-wiki/)** · [Learning portal](https://kubequest.ramideltoro.com) · [Application repository](https://github.com/ramideltoro/kubequest) · [Wiki publishing](https://github.com/ramideltoro/kubequest-wiki/actions)

This repository owns all KubeQuest documentation: fourteen authored chapters, sixteen UML diagrams covering all fourteen UML categories, original PlantUML sources, operational reference notes, and automatically generated current-release and release-history pages. GitHub Pages hosts the wiki independently of the home server.

## Authoring

Edit guides in `pages/`, diagrams in `diagrams/`, and navigation in `site.config.json`. The SVG/source manifest protects against stale diagrams. `reference/` preserves the original detailed pilot installation and validation records.

Use Node 22.22.1 or newer:

```sh
npm ci --ignore-scripts
npm test
npm run build
npx playwright install chromium
npm run test:browser
```

Build output is static HTML in `dist/`, with direct links for every chapter. No authentication, database, or client-side framework is required. `npm run docs:render` uses Java 21+ and a checksum-verified PlantUML jar; `JAVA_PATH` and `PLANTUML_JAR` can select existing tools.

## Always aligned with KubeQuest

Every successful application deployment or rollback exports its exact Git revision, learning objectives, mission requirements, registered routes and locked runtime dependency versions. A repository-scoped SSH deploy key pushes only the managed files: `generated/`, `pages/Current-release.md` and `pages/Release-history.md`. Authored guides are preserved. That push triggers this repository's verification and GitHub Pages deployment.

The application pipeline waits for this site's `release.json` to report the deployed application SHA. Wiki publishing failure makes the application release workflow fail visibly and can be retried. Application changes affecting behavior, curriculum, infrastructure, UI or workflows also require an updated `wiki-review.json` pointing to a commit with reviewed changes in this repository; CI enforces the review record. Dependency-only updates regenerate their reference automatically.

To change an authored guide, commit it here. For a related application change, put this wiki commit and a meaningful description in the application review record. Do not edit the generated current-release/history files by hand.

[CI/CD guide](pages/CI-CD.md) · [Operations](pages/Operations.md) · [UML library](pages/UML-diagrams.md)
