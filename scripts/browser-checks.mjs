import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import fs from "node:fs";
import assert from "node:assert/strict";
import { serve } from "./serve.mjs";
const server = await serve(),
  origin =
    process.env.ORIGIN ||
    `http://127.0.0.1:${server.address().port}/kubequest-wiki`;
const browser = await chromium.launch(
    process.env.BROWSER_PATH
      ? { executablePath: process.env.BROWSER_PATH }
      : {},
  ),
  context = await browser.newContext(),
  page = await context.newPage();
const config = JSON.parse(fs.readFileSync("site.config.json", "utf8"));
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
try {
  for (const [id] of config.chapters) {
    const response = await page.goto(
      origin + "/" + (id === "Home" ? "" : id + "/"),
    );
    assert.equal(response.status(), 200);
    assert.equal(await page.locator("article h1").count(), 1);
    for (const src of await page
      .locator("article img")
      .evaluateAll((images) => images.map((i) => i.getAttribute("src")))) {
      const image = await page.request.get(new URL(src, origin).href);
      assert.equal(image.status(), 200, src);
      assert(image.headers()["content-type"].includes("image/svg+xml"));
    }
  }
  for (const width of [390, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const id of [
      "Home",
      "Architecture",
      "UML-diagrams",
      "Current-release",
    ]) {
      await page.goto(origin + "/" + (id === "Home" ? "" : id + "/"));
      assert.equal(
        await page.evaluate(
          () => document.documentElement.scrollWidth > innerWidth + 1,
        ),
        false,
        `Overflow ${id} ${width}`,
      );
      const result = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      assert.deepEqual(
        result.violations.map((v) => ({
          id: v.id,
          nodes: v.nodes.map((n) => n.target),
        })),
        [],
        `Accessibility ${id} ${width}`,
      );
    }
  }
  await page.goto(origin + "/");
  await page.getByLabel("Find a chapter").fill("UML");
  assert.equal(await page.locator(".chapters a:visible").count(), 1);
  await page.getByLabel("Find a chapter").press("Escape");
  assert.equal(
    await page.locator(".chapters a:visible").count(),
    config.chapters.length,
  );
  fs.mkdirSync("test-results", { recursive: true });
  await page.screenshot({
    path: "test-results/wiki-desktop.png",
    fullPage: true,
  });
  await page.setViewportSize({ width: 390, height: 950 });
  await page.screenshot({
    path: "test-results/wiki-mobile.png",
    fullPage: true,
  });
  assert.deepEqual(errors, []);
  console.log(
    `PASS ${config.chapters.length} direct chapter URLs, all diagrams, 12 responsive/accessibility checks and chapter search.`,
  );
} finally {
  await browser.close();
  await new Promise((resolve) => server.close(resolve));
}
