# Current release reference

This page is generated from the exact KubeQuest commit deployed to the server. It updates automatically after releases and rollbacks. Authored explanations remain in the other chapters.

- **Application commit:** [0ea0171](https://github.com/ramideltoro/kubequest/commit/0ea0171c61a02c929f38482c1f49d3d5337471da)
- **Commit date:** 2026-09-19T10:22:33-04:00
- **Change:** Keep the timeout test connection alive on Node 22
- **Portal:** [Open KubeQuest](https://kubequest.ramideltoro.com)
- **Release pipeline:** [GitHub Actions](https://github.com/ramideltoro/kubequest/actions/runs/35448544233)

## Before Kubernetes

| Chapter | Minutes | Learning objectives |
| --- | --- | --- |
| [What is an application?](https://kubequest.ramideltoro.com/foundations/what-is-an-app) | 5 | Recognize the visible page, the behind-the-scenes logic, and saved data.; Explain why one application can need several programs. |
| [Follow a request](https://kubequest.ramideltoro.com/foundations/request-and-response) | 6 | Follow a request and its response.; Tell an unreachable server from an application error. |
| [Speak HTTP](https://kubequest.ramideltoro.com/foundations/http-and-https) | 7 | Read a simple HTTP request and response status.; Understand what HTTPS protects and what it cannot guarantee. |
| [Find a server by name](https://kubequest.ramideltoro.com/foundations/dns-and-addresses) | 6 | Tell a name from an IP address.; Explain why changing DNS does not start an application. |
| [Choose the right door](https://kubequest.ramideltoro.com/foundations/network-ports) | 7 | Explain why an address also needs a port.; Distinguish a firewall rule from a listening application. |
| [What runs on a server?](https://kubequest.ramideltoro.com/foundations/server-processes) | 6 | Distinguish files, processes, CPU, and memory.; Understand the operating system and a safe service account. |
| [Make your first deployment](https://kubequest.ramideltoro.com/foundations/deploy-an-app) | 7 | Describe deployment as more than uploading files.; Check an app after starting it and restore a working version. |
| [Keep a history with Git](https://kubequest.ramideltoro.com/foundations/git-history) | 8 | Explain a repository, commit, branch, and merge.; Distinguish saving locally from publishing or deploying. |
| [Check it before shipping](https://kubequest.ramideltoro.com/foundations/build-and-test) | 6 | Explain what a build produces and what a test checks.; Recognize that passing tests are evidence, not a guarantee. |
| [Build a delivery pipeline](https://kubequest.ramideltoro.com/foundations/cicd-pipelines) | 8 | Read the stages of a CI/CD pipeline.; Distinguish continuous delivery from automatic deployment. |
| [Same app, different settings](https://kubequest.ramideltoro.com/foundations/config-and-environments) | 6 | Separate code, configuration, and secrets.; Explain why development, staging, and production need different settings. |
| [Keep the notes when the app stops](https://kubequest.ramideltoro.com/foundations/storage-and-backups) | 7 | Distinguish temporary memory from persistent storage.; Explain why persistence is not the same as a backup. |
| [Package once, run it again](https://kubequest.ramideltoro.com/foundations/container-packages) | 7 | Distinguish an image, a container, and a registry.; Understand what still needs to be supplied outside the package. |
| [Share the traffic](https://kubequest.ramideltoro.com/foundations/traffic-and-copies) | 7 | Explain a load balancer and a health check.; Recognize the limits of adding more app copies. |
| [Find clues before changing things](https://kubequest.ramideltoro.com/foundations/read-the-signals) | 7 | Distinguish logs from metrics and traces.; Use a symptom, a hypothesis, a small change, and a check. |
| [Why Kubernetes exists](https://kubequest.ramideltoro.com/foundations/why-orchestration) | 8 | Connect delivery, runtime, networking, storage, and recovery.; Choose when orchestration helps and when a simpler deployment is enough. |

## Kubernetes Basics

| Lesson | Minutes | Learning objectives |
| --- | --- | --- |
| [Where does an app live?](https://kubequest.ramideltoro.com/basics/apps-and-servers) | 6 | Tell the difference between a browser and a server.; Follow a request from a visitor to an application. |
| [Pack an app into a container](https://kubequest.ramideltoro.com/basics/containers) | 7 | Distinguish an image from a running container.; Understand what containers package—and what they do not. |
| [Why do we need Kubernetes?](https://kubequest.ramideltoro.com/basics/why-kubernetes) | 7 | Explain desired state and reconciliation.; Recognize when Kubernetes adds unnecessary complexity. |
| [Meet the cluster](https://kubequest.ramideltoro.com/basics/meet-the-cluster) | 7 | Identify nodes and the control plane.; Explain scheduling without assuming every node has room. |
| [Your first Pod](https://kubequest.ramideltoro.com/basics/first-pod) | 6 | Understand the relationship between Pods and containers.; Distinguish restarting a container from replacing a Pod. |
| [Keep the app running](https://kubequest.ramideltoro.com/basics/keep-it-running) | 8 | Connect Deployments, replicas, and Pods.; Observe recovery and the gap before a replacement is ready. |
| [Help visitors find the app](https://kubequest.ramideltoro.com/basics/find-the-app) | 8 | Understand Services and label selectors.; Separate internal service access from public access. |
| [Settings, secrets, and saved notes](https://kubequest.ramideltoro.com/basics/settings-and-storage) | 9 | Choose ConfigMaps, Secrets, and persistent storage for different needs.; Avoid confusing encoding with encryption. |
| [Update without the surprise outage](https://kubequest.ramideltoro.com/basics/safe-updates) | 8 | Explain rolling updates and readiness.; Understand what rollback does and does not restore. |
| [Your first Kubernetes story](https://kubequest.ramideltoro.com/basics/bring-it-together) | 10 | Connect the core concepts without memorizing commands.; Identify a sensible next step toward real Kubernetes practice. |
| [Give everything a clear home](https://kubequest.ramideltoro.com/basics/namespaces-and-labels) | 6 | Use a namespace to narrow your view.; Explain the difference between grouping resources and protecting them. |
| [Leave enough room to run](https://kubequest.ramideltoro.com/basics/resource-budgets) | 8 | Distinguish resource requests from limits.; Tell a placement problem from a memory-limit problem. |
| [Some work should finish](https://kubequest.ramideltoro.com/basics/jobs-that-finish) | 6 | Choose a Job for work with a completion point.; Understand retries and scheduled work without assuming exactly-once execution. |
| [Read the clues, then make a change](https://kubequest.ramideltoro.com/basics/observe-and-debug) | 7 | Use status, events, logs, and a real request together.; Reject a superficial fix that only hides the warning. |

## Practice missions

| Mission | Domain | Minutes | Requirements |
| --- | --- | --- | --- |
| [The case of the missing endpoints](https://kubequest.ramideltoro.com/ckad/lost-in-routing) | Services & Networking | 12 | Keep two healthy notes replicas with app=little-notes.; Make the notes Service select those Pods.; Keep Service port 80 targeting the application on port 80.; Verify that HTTP requests through the Service succeed. |
| [Running is not ready](https://kubequest.ramideltoro.com/ckad/running-not-ready) | Observability & Maintenance | 15 | Make both replicas Ready.; Use an HTTP readiness probe on / and port 80.; Add a liveness probe on / and port 80.; Verify the Service responds successfully. |
| [The missing piece of configuration](https://kubequest.ramideltoro.com/ckad/configuration-drift) | Configuration & Security | 15 | Reference the provided ConfigMap key for GREETING.; Reference the provided Secret key for DB\_PASSWORD.; Restore two ready replicas.; Confirm the app serves the configured greeting. |
| [Rescue a stalled release](https://kubequest.ramideltoro.com/ckad/release-rescue) | Application Deployment | 18 | Use the available nginx:1.27-alpine image.; Keep two ready replicas.; Set RollingUpdate with maxUnavailable 0 and maxSurge 1.; Verify successful HTTP traffic. |
| [A broken handoff](https://kubequest.ramideltoro.com/ckad/handoff-between-containers) | Application Design & Build | 18 | Keep an init container that writes the welcome page.; Mount the shared emptyDir at /work in the init container.; Mount that same volume at /usr/share/nginx/html in the web container.; Serve WELCOME\_TO\_LITTLE\_NOTES through the Service. |
| [The report that disappeared](https://kubequest.ramideltoro.com/ckad/report-that-disappeared) | Application Design & Build | 20 | Use the existing Bound reports PersistentVolumeClaim.; Make daily-report mount reports at /data.; Complete the Job successfully.; Read DAILY\_REPORT from report-reader after the Job completes. |
| [A smaller set of privileges](https://kubequest.ramideltoro.com/ckad/least-privilege) | Configuration & Security | 20 | Run UID 1000 with runAsNonRoot and allowPrivilegeEscalation false.; Drop ALL capabilities and disable automountServiceAccountToken.; Set positive CPU/memory requests and limits with requests ≤ limits.; Keep one ready replica and verify UID 1000 in the running container. |
| [Open the right door](https://kubequest.ramideltoro.com/ckad/open-the-right-door) | Services & Networking | 22 | Select app=little-notes with an ingress NetworkPolicy.; Allow the frontend probe, while the intruder request times out.; Route host notes.quest.test to notes:80 using Ingress.; Verify both permitted Service traffic and the Ingress response. |

## Registered routes

Extracted from the TypeScript route declarations. Private requests still require the owner session and applicable Origin/session checks described in the security chapter. “Public / OAuth transaction” does not bypass OAuth validation.

| Method | Route | Access | Transport |
| --- | --- | --- | --- |
| GET | `/healthz` | Public / OAuth transaction | HTTP |
| GET | `/api/me` | Public / OAuth transaction | HTTP |
| GET | `/api/private/session` | Owner only | HTTP |
| POST | `/api/private/session/start` | Owner only | HTTP |
| POST | `/api/private/session/stop` | Owner only | HTTP |
| POST | `/api/private/session/reset` | Owner only | HTTP |
| POST | `/api/private/session/keepalive` | Owner only | HTTP |
| POST | `/api/private/apply` | Owner only | HTTP |
| POST | `/api/private/grade` | Owner only | HTTP |
| GET | `/api/private/progress` | Owner only | HTTP |
| POST | `/api/private/progress` | Owner only | HTTP |
| POST | `/api/private/tutor` | Owner only | HTTP |
| GET | `/api/private/resources` | Owner only | WebSocket upgrade |
| GET | `/api/private/terminal` | Owner only | WebSocket upgrade |
| GET | `/wiki` | Public / OAuth transaction | HTTP |
| GET | `/wiki/*` | Public / OAuth transaction | HTTP |
| GET | `/wiki-assets/*` | Public / OAuth transaction | HTTP |
| GET | `/auth/google` | Public / OAuth transaction | HTTP |
| GET | `/auth/google/callback` | Public / OAuth transaction | HTTP |
| POST | `/auth/logout` | Public / OAuth transaction | HTTP |

## Locked runtime dependencies

These are the versions in the deployed application lockfile, not a list of latest available packages.

| Package | Locked version | Declared range |
| --- | --- | --- |
| @codemirror/lang-yaml | 6.1.3 | ^6.1.2 |
| @codemirror/language | 6.12.4 | ^6.12.4 |
| @codemirror/view | 6.43.12 | ^6.38.0 |
| @fastify/cookie | 11.1.2 | ^11.0.2 |
| @fastify/static | 10.1.4 | ^10.1.4 |
| @fastify/websocket | 11.3.1 | ^11.2.0 |
| @lezer/highlight | 1.2.3 | ^1.2.3 |
| @xterm/addon-fit | 0.10.0 | ^0.10.0 |
| @xterm/xterm | 5.5.0 | ^5.5.0 |
| codemirror | 6.0.2 | ^6.0.2 |
| fastify | 5.12.5 | ^5.6.0 |
| jose | 6.2.12 | ^6.1.0 |
| lucide-react | 0.468.0 | ^0.468.0 |
| react | 19.3.0 | ^19.2.0 |
| react-dom | 19.3.0 | ^19.2.0 |
| react-router-dom | 7.18.4 | ^7.9.0 |
| ssh2 | 1.17.0 | ^1.17.0 |
| tsx | 4.23.13 | ^4.20.0 |
| yaml | 2.9.1 | ^2.8.0 |
