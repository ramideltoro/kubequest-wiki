# Visual learning throughout KubeQuest

Every beginner lesson and CKAD mission has a reviewed, interactive diagram explaining its own topic. Seven additional maps connect the learning paths and explain the portal, access boundaries, hosting, and privacy. The library contains 45 authored diagrams: 16 for Before Kubernetes, 14 for Kubernetes Basics, eight for missions, and seven shared overviews.

The diagrams are teaching illustrations. They do not report live cluster state. Real resource observations remain in the authenticated mission workspace, where they are explicitly labeled and updated from the cluster.

## What learners can do

Select a labeled part to read its role in plain English. Previous and Next controls visit the other parts. A comparison button reveals a relevant failure, recovery boundary, or distinction: a lost response, an unmatched Service selector, a blocked pipeline gate, or the difference between an image and a running container.

Connections have arrowheads and short labels. A blocked relationship uses a dashed line, a cross, and text; color is never the only explanation. Each diagram includes a text version of its relationships. On narrow screens, the parts become a readable grid followed by labeled connection rows, avoiding tiny text or sideways scrolling.

The original lesson prose, analogies, terminology, simulations, quizzes, and source links remain available. Diagrams supplement the explanations. They do not silently mark a lesson or exercise complete.

## Examples to explore

| Topic | Diagram explains | Open the portal |
| --- | --- | --- |
| Web requests | A request, saved data, and a response can fail at different points | [Follow a request](https://kubequest.ramideltoro.com/foundations/request-and-response) |
| DNS | A lookup supplies an address; web traffic then connects separately | [DNS and addresses](https://kubequest.ramideltoro.com/foundations/dns-and-addresses) |
| Git and delivery | A commit, a push, and a production deployment are separate steps | [Git history](https://kubequest.ramideltoro.com/foundations/git-history) |
| CI/CD | Tests and approval gate a verified artifact before deployment | [Delivery pipeline](https://kubequest.ramideltoro.com/foundations/cicd-pipelines) |
| Service routing | Matching labels and readiness connect the Service to Pods | [Find the app](https://kubequest.ramideltoro.com/basics/find-the-app) |
| Pod contents | Containers share a Pod network and explicitly mounted volumes | [Your first Pod](https://kubequest.ramideltoro.com/basics/first-pod) |
| Job output | Completion and durable output are separate requirements | [The missing report](https://kubequest.ramideltoro.com/ckad/report-that-disappeared) |
| NetworkPolicy | Policy enforcement is a permission boundary, not another proxy hop | [Open the right door](https://kubequest.ramideltoro.com/ckad/open-the-right-door) |

The [current release reference](Current-release.md) automatically lists the diagrams included in each deployed version. Historical releases without this library remain valid snapshots.

## Charts and interpretation

The progress page shows completion rings and one tile per lesson. Counts come from actual completed lesson IDs, scoped to the corresponding path. These are learning completion indicators, not exam-readiness scores.

The CKAD overview shows the five domain weights as a bar chart. The axis is labeled from zero to 25 percent. Its values describe the curriculum’s emphasis, not the proportion covered by the pilot. The adjacent coverage table continues to distinguish practiced objectives from outstanding work.

## Authored guidance and practice modes

Mission diagrams are public teaching content, alongside the recorded demonstrations. An active timed attempt hides them with the rest of the assistance until submission. An active independent attempt reveals them only after optional coaching is requested. They contain no credentials, private runtime state, or generated model claims.

## Implementation and artwork

- `content/visuals.ts` stores stable IDs, titles, summaries, four labeled parts, directed relationships, layout selection, and optional comparison states.
- `src/VisualStory.tsx` renders native buttons, decorative vector connections, explanatory text, keyboard controls, and text equivalents. It also renders completion and curriculum charts.
- `src/style.css` supplies the dark amber palette, responsive container layouts, visible focus, and reduced-motion behavior.
- Kubernetes parts use the existing official resource artwork, with original colors and proportions. Generic concepts use Lucide symbols. A box is not given a fake vendor logo.
- Asset provenance remains in `public/icons/sources.json`; tests verify that technology artwork used by this library matches its recorded source hashes.

![Component diagram showing the authored visual library and browser renderer](diagrams/component.svg)

## Adding or changing a diagram

Read the explanation first. Choose only the parts necessary to teach the relationship, label every connection with its actual meaning, and state any simplification in the description. An arrow can mean a request, a control relationship, containment, or a storage operation; name it so readers do not confuse these.

Add the entry under the exact lesson or mission ID. Provide a useful detail for each part and a comparison that teaches the topic rather than adding decoration. Keep the four-part layout legible; split an overly complex explanation into the existing experiment and the diagram instead of squeezing in tiny labels. Do not reuse an official resource icon for a different Kubernetes object.

Run the content/artwork tests, build, and browser checks. Inspect screenshots for a sequential flow, a branching relationship, and a narrow layout. Update the authored wiki and review record before releasing. The release pipeline exports the library inventory from the exact deployed commit and republishes the wiki.
