# Guided CKAD practice

[Open guided practice](https://kubequest.ramideltoro.com/ckad/curriculum)

Four public lessons supplement the existing 152 community exercises. Each follows concept, worked example, guided practice, independent challenge, verification, and an explained solution. Two optional hints precede the hidden solution. The estimated total is 105 minutes, adjustable to the learner. There is no timer, mock exam, automatic execution, or grading. Use a disposable practice environment; requirements and cleanup appear in each lesson.

## Scope and overlap review

The review compared both candidate repositories against all 152 tasks, 30 foundation/basic lessons, and eight original incident missions. Reusing a prerequisite is intentional; new challenges must teach a distinct skill.

| Added lesson | New objective | Existing coverage reused |
| --- | --- | --- |
| One base, two environments | Kustomize bases, overlays, image/replica transformations and rendered comparison | Deployment creation; Helm remains in its existing topic |
| Grant exactly the access needed | Namespaced Role/RoleBinding, impersonation and allowed/forbidden checks | ServiceAccounts; the existing security mission covers container privileges |
| Give a slow application time to start | Startup budget, delayed initialization and post-start liveness recovery | Readiness exercise and probe concepts in Basics |
| Turn cluster objects into a useful report | JSONPath list traversal, stable sorting, tab/newline formatting and exact report verification | Existing single-field JSONPath snippets; fixtures avoid re-teaching troubleshooting |

Excluded duplicate Pod creation, Secrets/ConfigMaps, Jobs/CronJobs, shared volumes, PV/PVC, rollouts/rollback, canaries, Helm, Services, Ingress and NetworkPolicy tasks. No candidate repository was bulk-imported. Multi-stage builds, API migration and additional deployment strategies were deferred from this focused batch. This selection is not complete CKAD exam coverage, and community questions are not represented as verified live-exam questions.

## Source provenance

- Kustomize and probe scenarios: [ChathurangaVKD/ckad-exam-prep](https://github.com/ChathurangaVKD/ckad-exam-prep/tree/7334227234d20855d4b0d700ef72ecbe9f9c68f9), revision `7334227234d20855d4b0d700ef72ecbe9f9c68f9`, MIT. Copyright (c) 2026 Dasun Chathuranga (ChathurangaVKD).
- RBAC and JSONPath scenarios: [jamesbuckett/ckad-questions](https://github.com/jamesbuckett/ckad-questions/tree/e12d8c4502aadcf4ef87599d036b4f202381708e), revision `e12d8c4502aadcf4ef87599d036b4f202381708e`, Apache-2.0.

The authored curriculum rewrites and extends selected ideas rather than mirroring entire questions. Each lesson records its precise source, author, license, modification summary and official Kubernetes reference. Full notices ship at `/licenses/ckad-exam-prep.txt` and `/licenses/ckad-questions.txt`. The upstream RBAC question's incorrect apps group for Pods is corrected to the core group; no old ServiceAccount token-secret workflow is imported. JSONPath uses deterministic ConfigMap fixtures rather than scheduler-dependent host IPs. The startup example deliberately delays and then breaks a marker-file process so learners can observe both phases.

## Routes, data and progress

`/ckad/curriculum` lists the four lessons in suggested order. `/ckad/curriculum/:id` renders a lesson or a not-found state. The CKAD catalog, exercise library, global search and My Progress link here. Previous/next navigation resets solution visibility and feedback for the next lesson.

`content/ckad-curriculum.json` holds the full lessons. `content/ckad-curriculum-index.json` holds small search metadata; tests check exact agreement. The full content and Markdown renderer load on demand. Raw HTML is disabled, and code blocks are keyboard-scrollable.

`kubequest-curriculum-v1` stores practiced/review status by stable lesson ID on the current browser. Progress is separate from community exercises, foundation/basic completion and private lab grades. The catalog shows practiced totals. Reset removes one lesson's entry. Unknown IDs, invalid states and malformed data are discarded. Storage failures display an error. No database, new server endpoint or authentication change is involved.

## Validation and maintenance

The content tests validate stable IDs, prerequisites, matching search index, pinned source links, license files, required learning sections, startup manifest structure and corrupt progress recovery. The browser suite checks all four lessons at desktop/mobile widths, WCAG accessibility, overflow, hints, hidden solutions, navigation, search and persisted/reset progress. Existing exercise and mission suites remain required.

The Kustomize example and independent solution are rendered with kubectl 1.35.0 and checked for the exact names, replicas and images. Cluster-dependent RBAC and probe commands are reviewed against official documentation but are not automatically run or graded by the site. UI/schema checks do not establish runtime success on every learner's cluster.

For future additions, compare learning objectives with existing exercises and missions before authoring. Link prerequisites rather than restating them. Preserve source licenses, pinned revisions and modification notes; review commands against supported Kubernetes APIs. Update both content/index files, tests, this overlap table and relevant UML before deployment.
