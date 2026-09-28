# Community exercise library

[Open the library](https://kubequest.ramideltoro.com/ckad/exercises) · [Original CKAD-exercises project](https://github.com/dgkanatsios/CKAD-exercises)

The public library adds 152 self-guided exercises and their solutions to CKAD Practice. Visitors can search question text, context and solutions, filter by topic or practice status, reveal a solution, and move through a topic in source order. The CKAD catalog, footer search, Readme and My Progress link to the library. No sign-in is needed.

| Topic | Exercises |
| --- | ---: |
| Core concepts | 18 |
| Multi-container Pods | 2 |
| Pod design | 52 |
| Configuration | 30 |
| Observability | 8 |
| Services and networking | 10 |
| State persistence | 6 |
| Helm | 10 |
| Custom resources | 4 |
| Container images (Podman) | 12 |

## Practice behavior

Use a disposable environment of your own. These reference tasks do not provision the owner-only VM, execute commands, call the tutor, or award authored grades. Some tasks need Helm, Podman, a registry or cluster-admin permissions. Follow source order because tasks can reuse resources created earlier. The existing eight graded missions and their access controls remain separate.

Solutions are hidden until the visitor selects **Reveal solution**. Each exercise links to the exact source file and line at the imported commit. Topic notes retain documentation breadcrumbs and supporting information. Upstream commands, versions and repository assumptions are preserved, so learners may need to adapt older examples. The source's historical topic percentages do not appear as current exam weights. The library does not claim complete exam coverage or provide an official mock exam.

An experienced learner can use the expandable preparation guide's 20–30 hour estimate, with a suggested 25-hour split between assessment, review, drills and timed practice. This is an adjustable planning estimate, not a certification requirement.

## Local progress and routes

`/ckad/exercises` is the catalog. Query parameters `q`, `topic` and `status` preserve filters in shareable URLs. `/ckad/exercises/:id` is a task; unknown IDs display an exercise-not-found page.

The separate `kubequest-exercises-v1` localStorage record maps exercise IDs to `practiced` or `review`. An absent entry means not started. The buttons toggle the selected status, and practiced/review are mutually exclusive. My Progress shows the practiced count and links to the review list. This is self-reported practice, never an exam score or a lab result. Reloads and same-origin tabs restore updates; clearing browser storage clears this history. If storage is blocked, the page reports that saving failed rather than claiming success. Malformed records, unknown IDs and invalid statuses are ignored. No new private API, database table or authentication capability is introduced.

## Provenance and maintenance

The initial snapshot is commit `d7b9a5c28b2ff2d8a8fab5524569956f21aaa1b4`, imported on 2026-09-27, from `dgkanatsios/CKAD-exercises`. Copyright (c) 2018 Dimitris-Ilias Gkanatsios. The complete MIT license is stored with the source and published at [the license URL](https://kubequest.ramideltoro.com/licenses/ckad-exercises.txt); visible attribution names the author and contributors.

The application keeps unmodified Markdown under `content/ckad-upstream/` and provenance in `source.json`. `scripts/import-ckad-exercises.mjs` produces `content/ckad-exercises.json` and the smaller `content/ckad-index.json`. It recognizes headings outside fenced code, preserves code blocks and documentation context, extracts collapsible solutions, removes presentation wrappers and tracking pixels, and rejects missing solutions or duplicate IDs. Exercise IDs combine topic and a hash of the original question title. Reordering tasks does not reset history; a changed title deliberately creates a new ID. Review renamed questions before an update if progress migration is needed.

To update, choose and review an upstream commit; copy all ten topic files, README and license; update provenance; run `npm run exercises:import`; review the generated diff and all changed commands. The importer does not silently refresh over the network. Do not relabel historical curriculum percentages as current exam weights. Update these docs and `wiki-review.json` before application deployment.

Markdown renders through `react-markdown` and `remark-gfm` with raw HTML disabled; no raw-HTML execution plugin is installed. Solutions and their renderer are loaded with the exercise route rather than the initial page bundle. The global search uses the smaller index. The snapshot remains local, so exercise reading does not depend on GitHub availability.

## Verification

`npm test` checks regeneration freshness, all 152 source locations, topic counts, license preservation, fenced-code parsing and corrupt progress recovery. `scripts/exercise-checks.mjs`, included in `npm run test:browser`, opens every task and solution, checks every solution for mobile overflow, and audits the library plus one solution per topic for WCAG violations at desktop/mobile sizes. It also verifies filtering, empty/unknown states, solution disclosure, reload persistence and My Progress integration. These checks validate content delivery and UI behavior; they do not claim every historical upstream command has been executed against Kubernetes.
