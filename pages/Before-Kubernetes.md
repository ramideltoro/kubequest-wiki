# Before Kubernetes

[Open the learning path](https://kubequest.ramideltoro.com/foundations)

This public path assumes ordinary computer skills and no software engineering background. It follows Little Notes, the same example application used in Kubernetes Basics. Learners can begin here, skip familiar chapters, or return when a term is unfamiliar. No account, terminal, downloads, real server, or AI coach is required.

## The sixteen chapters

| Chapter | What the learner does |
| --- | --- |
| What is an application? | Match frontend, backend, and database jobs |
| Follow a request | Step through the request path and distinguish app and database failures |
| Speak HTTP | Choose GET/POST, inspect 200/201/404/503 responses, compare HTTP and HTTPS |
| Find a server by name | Repair a DNS address and test the request again |
| Choose the right door | Match a destination port to a listener and inspect firewall behavior |
| What runs on a server? | Distinguish files from a process and supply its runtime |
| Make your first deployment | Provide code, runtime, and configuration; recover from a failed release |
| Keep a history with Git | Edit, commit, merge, push, and revert while watching local, remote, and production states |
| Check it before shipping | See why a build alone does not prove a feature works |
| Build a delivery pipeline | Stop on a failing test, approve a tested artifact, and recover a failed health check |
| Same app, different settings | Match staging to its database and restart to load settings |
| Keep the notes when the app stops | Compare memory, persistent storage, backup, deletion, and restore |
| Package once, run it again | Build, publish, pull, and run an image |
| Share the traffic | Compare capacity, healthy copies, and readiness-aware routing |
| Find clues before changing things | Inspect status, logs, and metrics; reject a superficial repair |
| Why Kubernetes exists | Connect the route and database, break a copy, and observe automatic replacement |

## Learning design

Each chapter follows a problem, several short explanations, a labeled interactive model, a “why” explanation, a limited analogy, a small glossary, an optional example, and an understanding check. Failure messages explain the missing prerequisite or wrong assumption. Correct checks and some interaction unlock completion; learners are not forced to use a terminal or complete external courses.

The course distinguishes related ideas that are easy to mix up: files versus running processes; DNS versus reachability; firewall permission versus a listener; Git commits versus deployment; readiness versus running; persistence versus backup; and Kubernetes reconciliation versus repairing application code.

Browser models deliberately simplify real systems. The Git exercise is a linear conflict-free example. DNS cache timing is explained but not reproduced. The load-balancer capacity units are illustrative, not performance measurements. The namespace exercise's production guard is an explicit teaching rule, not an inherent property of namespaces. Real environments still require authorization, data protection, monitoring, and reviewed changes.

## Where it leads

The next path, [Kubernetes Basics](https://kubequest.ramideltoro.com/basics), now has fourteen lessons. It introduces Pods, Deployments, Services, storage, updates, namespaces and labels, resource budgets, Jobs, and evidence-led troubleshooting. CKAD missions follow after those concepts become familiar.

Each path and lesson includes suggested courses or guides from primary providers. Sources include MDN Web Docs, GitHub Skills, the Git project, Docker, Cloudflare Learning Center, the Kubernetes project, and The Linux Foundation. Cards distinguish courses from books and explainers, and state when an external account, installation, or payment may be needed. Course metadata is reviewed rather than copied from promotional claims.

## Implementation and authoring

Foundation content lives in `content/foundations.ts`; both beginner paths use the `Lesson` shape. `activity` selects a reviewed browser exercise in `src/Playgrounds.tsx`. Existing Kubernetes exercises remain in `src/simulations.tsx`. `content/resources.ts` owns reviewed learning links; `src/Resources.tsx` renders them for catalogs, lessons, and eligible mission pages. Resource links are hidden with other assistance during active timed missions.

Stable IDs share the existing `kubequest-progress` browser storage key. Catalogs and progress summaries filter IDs by their own path, so older Kubernetes progress remains intact and does not inflate foundation completion. The private progress API accepts IDs from both collections. The footer search indexes both paths and missions. Release automation exports the two collections separately so the wiki links to the correct routes.
