# Exercise missions and labs

[Open the library](https://kubequest.ramideltoro.com/ckad/exercises)

All 152 imported CKAD exercises now use the same mission format as the eight original incident missions. The four guided curriculum additions use it too, giving 156 converted practice labs and 164 labs in total. Each converted exercise keeps its stable URL and source attribution, and adds a short title, subtitle, situation, objectives, interactive relationship diagram, comparison view, graded lab and captioned solution recording with transcript.

## Public reading and private practice

Mission pages, diagrams, solution videos, captions and transcripts are public. Running a lab still requires the authorized Google identity; anonymous APIs and terminal/resource WebSockets remain closed. A visitor can study a walkthrough without signing in, while signed-in practice uses the existing terminal, YAML editor, live resource view, hints, tutor and guided/independent/timed modes.

The original ten topic groups and 152 stable exercise IDs remain intact. Search and topic/status filters continue to work. The library shows the authored mission title and subtitle rather than using a long upstream instruction as its headline. Original wording is available through each mission's pinned source link. The separate four-lesson curriculum retains its existing routes.

## Independent starting states

Every converted exercise has its own setup script. A task that previously depended on earlier exercises now receives the required Pods, Deployments, files, credentials or release history automatically. Learners do not have to complete earlier tasks to make a lab runnable. Namespace and workspace requirements are shown on the mission page. Files requested by a task belong in `/home/student` inside the disposable VM.

Some historical tasks were adapted for reliable execution:

- Outdated external chart repositories are replaced with a bundled web chart and local Helm repository. Repository management, values inspection, install and upgrade skills remain the objective.
- Podman uses preloaded images and local HTTP/authenticated TLS registry fixtures. Only artificial practice credentials are used.
- Environment-specific node names are discovered from the actual single-node guest.
- Tasks that originally deleted their result immediately keep resources until grading when necessary; stopping the lab removes the environment.
- Inspection tasks save requested evidence to a file so the checker can evaluate the result.
- Short demonstration delays are documented in the situation where they replace longer waits.

A lab can legitimately expect failure: a quota rejection, a nonexistent image or a deadline-exceeded Job. The situation explicitly states the intended outcome. Initial state must not pass every check; the recorded solution must satisfy every check.

## Lab runtime and checks

`content/exercise-missions.json` holds public mission descriptions and diagrams; `content/exercise-mission-index.json` is the smaller navigation/search index. `server/exercise-labs.json` holds setup and check commands. Authored recipe modules under `scripts/lab-recipes/` generate these files through `npm run labs:build`. CI verifies generated files are current and that every source exercise and guided lesson has exactly one definition.

`content/mission-catalog.ts` combines the eight original missions with the converted labs for backend validation and mission rendering. The original incident catalog remains compact; converted labs are found through the exercise library and guided curriculum. Existing private attempt history records stable exercise IDs, and My Progress resolves their titles.

The backend prepares the scenario only after the VM and Kubernetes are ready. Converted scenarios require the expanded template fixture marker. Checks execute trusted authored commands against live cluster state, workload behavior or requested workspace files. Command failures yield failed checks rather than success. Learner terminal text and tutor output cannot directly award a passing result.

Live resource snapshots include the original workload resources plus configuration objects, ServiceAccounts, Roles/bindings, quotas, LimitRanges, CronJobs and HPAs. Only selected metadata/status is returned; Secret values are not included. Teaching diagrams remain labeled illustrations, distinct from observed live resources.

## Videos and evidence

Public MP4, WebVTT, poster images and text transcripts live under `/demos/<stable-id>.*`. Recordings are condensed replays of commands and output captured in the dedicated disposable QA VM. The renderer accepts only completed runs whose checks all pass. It includes the task-specific explanation and links a full transcript when video frames excerpt output. Real production credentials and infrastructure state must never appear in these artifacts. `scripts/verify-exercise-recordings.mjs` checks the complete set and writes solution/media hashes to `content/exercise-recordings.json`; CI rejects stale or missing assets.

Use `scripts/exercise-live-check.mjs` only with the dedicated `exercise-qa` VM. It rejects the production lab directory. The runner resets practice state, checks that the starting scenario is incomplete, runs the authored solution as the student and captures final checks. Its cleanup operates solely inside that dedicated guest. Qualification artifacts must match the final authored solution before rendering.

## Progress and provenance

`kubequest-exercises-v1` and `kubequest-curriculum-v1` remain separate device-local practiced/review records. They survive the conversion because IDs do not change. These self-reported records are displayed separately from signed-in lab grades stored by the server. Resetting a practice record does not delete private attempts.

The original 152 tasks come from MIT-licensed `dgkanatsios/CKAD-exercises`, revision `d7b9a5c28b2ff2d8a8fab5524569956f21aaa1b4`. The unmodified snapshot remains in `content/ckad-upstream/`. Converted mission pages link the original question and retain the full MIT notice at `/licenses/ckad-exercises.txt`. The four additional lessons preserve their pinned MIT/Apache-2.0 source references, licenses and modification notes described in [Guided practice](Guided-practice.md).

## Validation

Content checks cover complete source-to-lab mapping, unique IDs, generated-file freshness, source/license links, complete diagrams and shell syntax. Backend tests verify that command errors cannot produce passing exercise checks. Browser checks visit all 156 converted pages at desktop/mobile widths, verify public media and transcripts, inspect objectives and diagrams, exercise local progress and filters, and audit representative pages across topics plus every guided lesson for accessibility. Real-cluster qualification and the original eight-mission suite are required when the expanded VM template or execution engine changes.
