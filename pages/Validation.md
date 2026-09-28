# Validation and release evidence

KubeQuest is a pilot. Test results describe the implementation and environment actually exercised; they are not a claim of complete CKAD coverage, universal accessibility, or production-scale throughput.

## Per-commit CI

The [GitHub workflow](https://github.com/ramideltoro/kubequest/actions) runs locked dependency installation, a high/critical vulnerability gate, unit/security/lifecycle/archive checks, documentation integrity checks, TypeScript/Vite build, and anonymous browser verification. The browser suite completes all thirty beginner lessons and confirms restoration of saved progress. It also checks responsive layout, automated WCAG rules and footer interactions. Screenshots are retained as workflow artifacts.

Deployment checks the exact local release SHA, Google configuration and lab-template availability, then verifies the public hostname and rejects anonymous private-API access. These are delivery checks; they do not replace mission-level behavioral qualification.

## Foundations and coach checks

The expanded suite exercises all twenty new lesson activities, including failed pipeline gates, wrong addresses/ports, missing runtimes, local versus remote Git history, staging mismatches, persistence and restore, healthy traffic routing, namespace scoping, memory placement/limits, task completion and evidence-led repairs. Browser checks include the coach response and Stop contract with explicit mock responses; backend tests use real HTTP with a mocked model to verify early streaming and authorization. Model failure, incomplete output, timeout, concurrency and cancellation are tested separately. Live local-model/API measurements are performed on the home server without making the coach public.

### Published release check — 19 September 2026

Release `0ea0171c61a02c929f38482c1f49d3d5337471da` passed the [application CI and deployment workflow](https://github.com/ramideltoro/kubequest/actions/runs/35448544233), including 23 application tests. Its [wiki synchronization and publication](https://github.com/ramideltoro/kubequest-wiki/actions/runs/35448660298) also passed. The deployed public portal passed all thirty lesson completions with restored progress, 36 responsive/accessibility route checks, twenty new interactive lesson exercises, and nine additional interactive layouts.

The real coach was tested through the public Cloudflare hostname using authorized requests and a temporary guided lab. These measurements include the public connection and real model inference:

| Request | First progress message | First answer text | Complete answer |
| --- | --- | --- | --- |
| First request, including model startup | 28 ms | 26.3 seconds | 34.1 seconds |
| Following request with the model loaded | 59 ms | 1.9 seconds | 7.7 seconds |

Both requests completed with model answers rather than fallback text. Cancelling a third stream released the inference slot, and the next question received a complete model answer. The temporary lab was then stopped; no attempts were graded. All six checked application, AI, tunnel, and observability services remained active. After cleanup the host reported approximately 6.7 GiB used and 52 GiB available, with no swap usage. These are single-run observations, not latency or capacity guarantees.

## Visual learning verification

The visual-library suite covers all 38 lesson/mission diagrams plus seven overview routes at both 390 and 1440 pixels (90 route/layout checks). It explores all parts by keyboard, changes comparison states, reads relationship text, checks image loading and label clipping, and audits representative flows with axe. It verifies progress-chart counts and uses explicit UI mocks to confirm diagrams stay hidden in active timed attempts and require a coaching request in independent mode. Official technology symbols are checked against their recorded source hashes. These UI checks do not replace live-cluster qualification.

## Real lab qualification

The initial deployment exercised every mission in a separate disposable VM. The broken initial state failed complete validation; each authored solution passed all four checks; an incomplete repair failed; and a valid alternative passed.

| Scenario | Initial passing checks | After repair | Alternative verified |
| --- | --- | --- | --- |
| Service routing | 2/4 | 4/4 | Named target port resolving to port 80 |
| Probes/debugging | 0/4 | 4/4 | Named HTTP probe ports |
| Configuration/Secrets | 0/4 | 4/4 | Explicit key references |
| Rollout recovery | 0/4 | 4/4 | Qualified image and zero-percent unavailable |
| Multi-container handoff | 0/4 | 4/4 | Alternative shared-volume name |
| Jobs/storage | 2/4 | 4/4 | Alternative PVC volume/mount names |
| Workload security/resources | 0/4 | 4/4 | Pod-level non-root identity and equivalent units |
| NetworkPolicy/Ingress | 1/4 | 4/4 | Additive policies split by allowed source |

Behavior checks include real HTTP, allowed/denied client traffic, persistent report content read by another Pod, and running process UID. Superficial repairs such as deleting probes or opening all ingress are rejected. The eight public walkthroughs were produced from actual successful exercise output.

## Security and lifecycle

Automated coverage includes exact verified-owner identity, wrong/expired sessions, unauthorized direct APIs and WebSockets, origin validation, callback state/PKCE, stale IDs, timed assistance denial, automatic timed submission, startup cleanup, idle expiry and activity renewal. Deployment archive checks reject traversal, absolute paths, symlinks, unexpected files and oversized content.

Initial production verification exercised terminal command execution, resource-stream reconnect, apply, grade, progress, reset, stop and restart cleanup. Isolation checks failed connections from the VM to host application/observability ports, LAN, metadata and public internet. Google sign-in was completed with the authorized account through the registered KubeQuest callback.

## Resource observations

During initial qualification alongside existing services, a local tutor response took approximately 29 seconds including model load. A 60-second sample observed about 4.8 GiB for Qwen, 2 GiB for the VM, and roughly 8.5 GiB total host usage with more than 50 GiB available. Existing AI and observability services stayed active. This short sample is not a sustained-load benchmark.

An online database backup was restored to a separate file, its integrity check passed, and record counts matched. Daily backups keep fourteen local snapshots. Physical host loss requires separate private recovery handling.

## When to repeat expensive checks

Theme, footer and documentation updates use the normal CI/browser gate. Changes to VM construction, networking, auth, controller logic, setup manifests or graders require focused integration checks and, where affected, the complete live mission suite during an idle maintenance window. Keep sensitive maintenance tokens and real runtime evidence out of public artifacts.

## Community exercise library

The application suite verifies import freshness, 152 source-linked tasks, 156 executable mission mappings (including four guided additions), source notices, shell syntax, safe progress parsing and public recording integrity. Browser checks visit all 156 converted mission pages at desktop/mobile widths, verify their media, objectives and diagrams, audit representative pages across topics plus every guided addition, and exercise filters, saved progress and unknown routes.

The real-guest runner requires each initial state to fail at least one check, executes the authored solution as student, and records final behavioral checks. Only successful runs can produce videos. `scripts/verify-exercise-recordings.mjs` requires all 156 recordings, exact agreement with the displayed solutions and objectives, and all four public media files. `content/exercise-recordings.json` stores solution and media hashes; CI detects stale or missing walkthroughs.

Template qualification also uses fresh network-isolated VMs through the actual `Lab` controller. `tests/live-exercise-labs.ts` covers selected new setup/tooling boundaries, while the original eight-mission suite checks regressions, accepted alternatives and host/LAN/internet isolation. See [the library guide](Exercise-library.md).

## Focused guided practice

The [guided curriculum](Guided-practice.md) adds four distinct practice objectives: Kustomize overlays, namespaced RBAC boundaries, startup-probe troubleshooting and JSONPath reporting. It links existing prerequisites instead of duplicating the 152 tasks. The guide documents the overlap audit, pinned MIT/Apache sources, separate local progress, learning sequence and validation limits.
