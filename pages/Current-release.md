# Current release reference

This page is generated from the exact KubeQuest commit deployed to the server. It updates automatically after releases and rollbacks. Authored explanations remain in the other chapters.

- **Application commit:** [bfe8c3c](https://github.com/ramideltoro/kubequest/commit/bfe8c3c26f33c875c87e851ab84bd3197cae1f2c)
- **Commit date:** 2026-09-19T12:40:33-04:00
- **Change:** Add interactive visual explanations throughout the learning portal
- **Portal:** [Open KubeQuest](https://kubequest.ramideltoro.com)
- **Release pipeline:** [GitHub Actions](https://github.com/ramideltoro/kubequest/actions/runs/35455754948)

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

## Visual learning library

Reviewed teaching diagrams; these do not report live cluster state. See the [visual learning guide](Visual-learning.md) for interaction, accessibility, and authoring details.

| Diagram | Parts | Connections | Comparison |
| --- | --- | --- | --- |
| [One app. Three different jobs.](https://kubequest.ramideltoro.com/foundations/what-is-an-app) | Browser; Application; Database; Updated page | 3 | One server can do both |
| [A request makes a round trip](https://kubequest.ramideltoro.com/foundations/request-and-response) | Browser; Application; Database; Response | 4 | Lose the reply |
| [Read a web conversation](https://kubequest.ramideltoro.com/foundations/http-and-https) | GET /notes; HTTPS connection; Application; 200 + notes | 3 | An unknown path |
| [A name points to an address](https://kubequest.ramideltoro.com/foundations/dns-and-addresses) | Browser; DNS resolver; IP address; Server | 3 | Point to the wrong address |
| [The address gets you to the computer](https://kubequest.ramideltoro.com/foundations/network-ports) | Browser; Network rule; Server; Listening app | 3 | Block the connection |
| [Files become a running process](https://kubequest.ramideltoro.com/foundations/server-processes) | Application files; Runtime; Process; Browser | 3 | Stop the process |
| [From your files to a working service](https://kubequest.ramideltoro.com/foundations/deploy-an-app) | Release; Server setup; Start the app; Health check | 3 | A release fails its check |
| [A commit is not a deployment](https://kubequest.ramideltoro.com/foundations/git-history) | Working files; Local commits; Shared repository; Production | 3 | Keep a change local |
| [Check first. Package second.](https://kubequest.ramideltoro.com/foundations/build-and-test) | Source code; Tests; Build artifact; Deployment | 3 | Fail a test |
| [A safe path from change to release](https://kubequest.ramideltoro.com/foundations/cicd-pipelines) | Push a change; CI checks; Approved artifact; Deploy and check | 3 | Hold at a gate |
| [Same program. Different settings.](https://kubequest.ramideltoro.com/foundations/config-and-environments) | App image; Configuration; Test database; Production data | 3 | Inspect the environment |
| [Surviving a restart is not a backup](https://kubequest.ramideltoro.com/foundations/storage-and-backups) | Memory; Saved data; Backup; Restored data | 3 | Restart the app |
| [Build once. Run the package.](https://kubequest.ramideltoro.com/foundations/container-packages) | Code + recipe; Container image; Image registry; Running container | 3 | Image versus container |
| [One front door, several workers](https://kubequest.ramideltoro.com/foundations/traffic-and-copies) | Browser; Traffic router; App copy A; App copy B | 3 | One copy is not ready |
| [Turn a symptom into a small investigation](https://kubequest.ramideltoro.com/foundations/read-the-signals) | Symptom; Status + metrics; Logs + events; Small fix + check | 3 | A green process can still fail |
| [Who keeps checking all these moving parts?](https://kubequest.ramideltoro.com/foundations/why-orchestration) | Your request; Control plane; Worker nodes; Observed state | 4 | What it cannot fix |
| [Your screen is the start of the journey](https://kubequest.ramideltoro.com/basics/apps-and-servers) | Browser; Network; Server; Application | 3 | Disconnect the client |
| [An image is a recipe for running copies](https://kubequest.ramideltoro.com/basics/containers) | App + dependencies; Image; Container A; Container B | 3 | Replace a copy |
| [Ask, observe, compare, correct](https://kubequest.ramideltoro.com/basics/why-kubernetes) | Desired: 3; Controller; Observed: 2; Replacement | 4 | No room for the replacement |
| [Coordination above. Work on the nodes.](https://kubequest.ramideltoro.com/basics/meet-the-cluster) | Workload request; Control plane; Node A; Node B | 3 | A Pod must wait |
| [A Pod groups things that run together](https://kubequest.ramideltoro.com/basics/first-pod) | Node; Pod; App container; Shared volume | 3 | Delete a standalone Pod |
| [A Deployment keeps the requested copies](https://kubequest.ramideltoro.com/basics/keep-it-running) | Desired replicas; Deployment; Pod A; Pod B | 3 | One Pod disappears |
| [Labels connect a stable name to changing Pods](https://kubequest.ramideltoro.com/basics/find-the-app) | Browser; Service; Pod A; Pod B | 3 | The selector no longer matches |
| [Three things the image should not own](https://kubequest.ramideltoro.com/basics/settings-and-storage) | ConfigMap; Pod; Secret; Storage claim | 3 | Replace the Pod |
| [Let the new copy prove it is ready](https://kubequest.ramideltoro.com/basics/safe-updates) | Old version; New version; Readiness check; Service | 3 | New version is not ready |
| [Two paths: managing Pods and reaching them](https://kubequest.ramideltoro.com/basics/bring-it-together) | Deployment; Service; Pod A; Pod B | 4 | Lose one copy |
| [Names tell you where. Labels help you select.](https://kubequest.ramideltoro.com/basics/namespaces-and-labels) | Namespace: test; Service: notes; test / notes; production / notes | 2 | Same label, another namespace |
| [Placement and runtime use different rules](https://kubequest.ramideltoro.com/basics/resource-budgets) | Resource request; Node capacity; Running Pod; Resource limit | 3 | Too large to place |
| [Some work has a finish line](https://kubequest.ramideltoro.com/basics/jobs-that-finish) | CronJob; Job; Task Pod; Storage claim | 3 | Complete is not backed up |
| [Follow the evidence to a fix](https://kubequest.ramideltoro.com/basics/observe-and-debug) | Pod status; Events + logs; Focused change; Real request | 3 | Still failing after a restart |
| [Trace the missing connection](https://kubequest.ramideltoro.com/ckad/lost-in-routing) | Probe client; Service; notes Pod A; notes Pod B | 3 | Broken starting state |
| [A running process is only one piece](https://kubequest.ramideltoro.com/ckad/running-not-ready) | Kubelet; Web Pod; Readiness; Liveness | 3 | Broken starting state |
| [Names and keys must line up](https://kubequest.ramideltoro.com/ckad/configuration-drift) | ConfigMap; New container; Secret; Ready app | 3 | Broken starting state |
| [A rollout needs both a valid image and capacity](https://kubequest.ramideltoro.com/ckad/release-rescue) | Deployment; Old replicas; New image; New replicas | 3 | Broken starting state |
| [One Pod, a file passed between two containers](https://kubequest.ramideltoro.com/ckad/handoff-between-containers) | Init container; Shared emptyDir; Web container; Service | 3 | Broken starting state |
| [The writer and reader need the same storage](https://kubequest.ramideltoro.com/ckad/report-that-disappeared) | Daily report Job; Report writer; Storage claim; Report reader | 3 | Broken starting state |
| [Several small boundaries protect one workload](https://kubequest.ramideltoro.com/ckad/least-privilege) | Non-root identity; Worker; Fewer privileges; Bounded access | 3 | Check all the boundaries |
| [Routing and permission are separate checks](https://kubequest.ramideltoro.com/ckad/open-the-right-door) | Ingress rule; Service; NetworkPolicy; Notes Pods | 3 | Broken starting state |
| [The world underneath Kubernetes](https://kubequest.ramideltoro.com/foundations) | Browser; Web + networks; Apps + data; Software delivery | 3 | Overview |
| [Four pieces you will learn to connect](https://kubequest.ramideltoro.com/basics) | Container image; Pod; Deployment; Service | 3 | Overview |
| [Practice the whole incident, not just the command](https://kubequest.ramideltoro.com/ckad) | Observe; Explain; Repair; Verify | 3 | Overview |
| [From your first request to a real cluster](https://kubequest.ramideltoro.com/) | Understand the web; Package the app; Coordinate copies; Solve an incident | 3 | Overview |
| [Learn openly. Practice privately.](https://kubequest.ramideltoro.com/signin) | Public learning; Google sign-in; Server authorization; Disposable lab | 2 | Overview |
| [How KubeQuest reaches your browser](https://kubequest.ramideltoro.com/readme) | Browser; Cloudflare Tunnel; KubeQuest server; Lab VM | 3 | Overview |
| [Different data has different homes](https://kubequest.ramideltoro.com/about#privacy) | Browser; Browser storage; Private progress; Local coach | 3 | Overview |

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
