# KubeQuest documentation

[Open the learning portal](https://kubequest.ramideltoro.com) · [Project Readme](https://kubequest.ramideltoro.com/readme) · [Source repository](https://github.com/ramideltoro/kubequest) · [GitHub Actions](https://github.com/ramideltoro/kubequest/actions)

KubeQuest teaches Kubernetes through visible consequences: try a change, observe what happens, and understand why. Ten beginner lessons follow **Little Notes**, one small example application. Eight original CKAD missions turn common application incidents into practice in a real disposable cluster.

Both beginner paths are public and need no installation, account, or terminal. Real labs, grading, private progress, and the local AI tutor are restricted to the authorized owner. Public visitors can still explore every mission brief and watch a captioned recording of its solution.

## Find your way

| Page | What it explains |
| --- | --- |
| [Architecture](Architecture.md) | Components, source packages, hosting, and trust boundaries |
| [Before Kubernetes](Before-Kubernetes.md) | Sixteen foundations chapters and their interactive teaching models |
| [Learning paths](Learning-paths.md) | Beginner flow, progress, and practice modes |
| [CKAD missions](Missions.md) | Eight incidents, validators, recordings, and coverage limits |
| [Authentication and security](Authentication-and-security.md) | Google sign-in, owner authorization, browser and VM boundaries |
| [Live labs](Live-labs.md) | VM creation, resets, expiration, reconnection, and cleanup |
| [API and data](API-and-data.md) | HTTP/WebSocket contracts and SQLite records |
| [Local tutor](Local-tutor.md) | Reviewed context, limits, isolation, and fallback |
| [CI/CD](CI-CD.md) | GitHub checks, release artifacts, deployment, and rollback |
| [Operations](Operations.md) | Installation, diagnostics, backups, recovery, and resource limits |
| [Content authoring](Content-authoring.md) | Adding lessons, missions, recordings, icons, and diagrams |
| [Design and accessibility](Design-and-accessibility.md) | Dark amber palette, official artwork, footer, keyboard and mobile behavior |
| [Validation](Validation.md) | Automated checks, live-cluster evidence, and remaining limits |
| [UML diagram library](UML-diagrams.md) | All 14 UML diagram categories, with 16 diagrams and editable source |

## Pilot scope

This is independent educational material, not official exam content or a complete CKAD simulator. The current lab uses Kubernetes **1.35.8+k3s1**. The CKAD minor version was checked against the official candidate information on **19 September 2026**; certification requirements can change. Review the [official CKAD page](https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/) before scheduling an exam.

The portal runs on the existing home AI server through Cloudflare Tunnel. There is no billing, public AI endpoint, or public cluster access. Availability depends on the server and its internet connection.

## Documentation ownership

The canonical Markdown, PlantUML sources, and rendered SVGs live in the [kubequest-wiki repository](https://github.com/ramideltoro/kubequest-wiki). GitHub Pages hosts this site independently of the home server. Edit authored guides here; the KubeQuest release pipeline only replaces the generated reference and release records. Every successful application release and rollback waits for this hosted wiki to report the matching application commit. Diagrams are documentation models, not live telemetry.

The [current release reference](Current-release.md) is generated from the deployed code: lesson objectives, mission requirements, registered routes, and locked runtime dependencies. [Release history](Release-history.md) records updates. Changes to application behavior or infrastructure also require an authored documentation review in CI.

## Visual learning

Explore the [45-diagram teaching library](Visual-learning.md), including clickable parts, failure comparisons, mobile connections, progress charts, and the curriculum-weight chart. Every lesson and mission has a topic-specific visual explanation.
