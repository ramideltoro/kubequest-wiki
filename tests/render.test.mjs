import test from "node:test";
import assert from "node:assert/strict";
import { renderMarkdown, documentLink } from "../scripts/build.mjs";
test("Internal chapters and UML downloads stay under the GitHub Pages project path", () => {
  assert.equal(
    documentLink("Architecture.md#parts", "/kubequest-wiki"),
    "/kubequest-wiki/Architecture/#parts",
  );
  assert.equal(documentLink("Home.md", "/kubequest-wiki"), "/kubequest-wiki/");
  assert.equal(
    documentLink("diagrams/class.puml", "/kubequest-wiki"),
    "/kubequest-wiki/diagrams/class.puml",
  );
  assert.equal(
    documentLink("https://kubernetes.io/docs/", "/kubequest-wiki"),
    "https://kubernetes.io/docs/",
  );
});
test("Markdown cannot inject raw executable HTML and only local reviewed diagrams are accepted", () => {
  const html = renderMarkdown(
    "<script>alert(1)</script>\n\n[x](javascript:alert(1))",
    "/kubequest-wiki",
  );
  assert(!html.includes("<script>"));
  assert(!html.includes('href="javascript:'));
  assert.throws(() =>
    renderMarkdown("![Remote](https://example.com/x.svg)", "/kubequest-wiki"),
  );
  const safe = renderMarkdown(
    "![Class](diagrams/class.svg)",
    "/kubequest-wiki",
  );
  assert(safe.includes("/kubequest-wiki/diagrams/class.svg"));
  assert(safe.includes('alt="Class"'));
});
