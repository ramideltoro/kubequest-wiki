# KubeQuest wiki maintenance

This repository is the canonical source for KubeQuest documentation and GitHub Pages hosting. Keep written explanations and UML diagrams accurate whenever the application changes.

- Authored Markdown belongs in pages/. Diagram source and rendered SVGs belong in diagrams/.
- Do not manually edit generated/, pages/Current-release.md, or pages/Release-history.md. The application release pipeline manages them from the deployed Git revision.
- For related application work, update affected authored pages/diagrams here, commit them, then update the application's wiki-review.json with this full wiki commit and a clear review summary. Do not merely change a timestamp to satisfy the gate.
- Run npm test and npm run build. Run npm run docs:render after editing PlantUML, then commit the regenerated manifest and SVGs. Browser checks are required for renderer/navigation/style changes.
- Preserve official artwork and licensing. Never put credentials, private cluster state, terminal recordings from real user sessions, or personal tokens in this repository.
- Keep the production portal link https://kubequest.ramideltoro.com and the wiki base path /kubequest-wiki/ correct.
