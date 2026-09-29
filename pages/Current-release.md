# Current release reference

This page is generated from the exact KubeQuest commit deployed to the server. It updates automatically after releases and rollbacks. Authored explanations remain in the other chapters.

- **Application commit:** [6dd08c0](https://github.com/ramideltoro/kubequest/commit/6dd08c075d0482e86456583351d5c7fbd9497093)
- **Commit date:** 2026-09-28T21:31:58-04:00
- **Change:** Match lab source attribution to mission sidebar theme (#11)
- **Portal:** [Open KubeQuest](https://kubequest.ramideltoro.com)
- **Release pipeline:** [GitHub Actions](https://github.com/ramideltoro/kubequest/actions/runs/36508352716)

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

## Community exercise library

152 public exercise missions with signed-in graded labs; browser practice notes remain self-reported. [Library guide](Exercise-library.md). Imported source revision: `d7b9a5c28b2ff2d8a8fab5524569956f21aaa1b4`.

| Topic | Exercises |
| --- | ---: |
| [Core concepts](https://kubequest.ramideltoro.com/ckad/exercises?topic=core-concepts) | 18 |
| [Multi-container Pods](https://kubequest.ramideltoro.com/ckad/exercises?topic=multi-container-pods) | 2 |
| [Pod design](https://kubequest.ramideltoro.com/ckad/exercises?topic=pod-design) | 52 |
| [Configuration](https://kubequest.ramideltoro.com/ckad/exercises?topic=configuration) | 30 |
| [Observability](https://kubequest.ramideltoro.com/ckad/exercises?topic=observability) | 8 |
| [Services and networking](https://kubequest.ramideltoro.com/ckad/exercises?topic=services-networking) | 10 |
| [State persistence](https://kubequest.ramideltoro.com/ckad/exercises?topic=state-persistence) | 6 |
| [Helm](https://kubequest.ramideltoro.com/ckad/exercises?topic=helm) | 10 |
| [Custom resources](https://kubequest.ramideltoro.com/ckad/exercises?topic=custom-resources) | 4 |
| [Container images (Podman)](https://kubequest.ramideltoro.com/ckad/exercises?topic=container-images) | 12 |

## Exercise and guided labs

Public situations, diagrams, solutions and captioned walkthroughs. Running a disposable lab requires authorized sign-in.

| Lab | Topic | Objectives |
| --- | --- | --- |
| [A home for the first Pod](https://kubequest.ramideltoro.com/ckad/exercises/core-concepts-9fe4b7befc3e) | Core concepts | nginx uses the provided nginx image; The Pod is Ready |
| [Declare the namespaced Pod](https://kubequest.ramideltoro.com/ckad/exercises/core-concepts-46382324b97f) | Core concepts | nginx uses the provided nginx image; The Pod is Ready |
| [Read a container’s environment](https://kubequest.ramideltoro.com/ckad/exercises/core-concepts-30a3e4723da4) | Core concepts | The env process completed; The saved evidence contains the requested result |
| [Declare an environment inspection](https://kubequest.ramideltoro.com/ckad/exercises/core-concepts-498eb2350d82) | Core concepts | The env process completed; The saved evidence contains the requested result |
| [Preview a namespace](https://kubequest.ramideltoro.com/ckad/exercises/core-concepts-6859cb9f987c) | Core concepts | namespace.yaml declares myns; myns was not created |
| [Budget before admission](https://kubequest.ramideltoro.com/ckad/exercises/core-concepts-b5617fdaea63) | Core concepts | The quota file contains all three limits; The quota is not active |
| [Look beyond the current namespace](https://kubequest.ramideltoro.com/ckad/exercises/core-concepts-fb1d8a1a19d6) | Core concepts | The saved evidence contains the requested result; The saved evidence contains the requested result |
| [Declare a web port](https://kubequest.ramideltoro.com/ckad/exercises/core-concepts-c0a84a627e7f) | Core concepts | Port 80 is declared; The Pod is Ready |
| [Change the running image](https://kubequest.ramideltoro.com/ckad/exercises/core-concepts-64c97433112f) | Core concepts | The requested image is in the spec; The running container reports the new image |
| [Reach a Pod by IP](https://kubequest.ramideltoro.com/ckad/exercises/core-concepts-f44e364f1cfd) | Core concepts | The client completed its request; The saved evidence contains the requested result |
| [Inspect the desired object](https://kubequest.ramideltoro.com/ckad/exercises/core-concepts-4513a7a2b0d9) | Core concepts | pod.yaml contains the real Pod identity |
| [Explain a waiting workload](https://kubequest.ramideltoro.com/ckad/exercises/core-concepts-89c8c63d629c) | Core concepts | The saved evidence contains the requested result; The saved evidence contains the requested result |
| [Read application output](https://kubequest.ramideltoro.com/ckad/exercises/core-concepts-e5a88a4a02dc) | Core concepts | The saved evidence contains the requested result |
| [Recover the previous logs](https://kubequest.ramideltoro.com/ckad/exercises/core-concepts-6c4359ff0c03) | Core concepts | The saved evidence contains the requested result |
| [Open a shell in the container](https://kubequest.ramideltoro.com/ckad/exercises/core-concepts-7b9d88de80a8) | Core concepts | The saved evidence contains the requested result; The saved evidence contains the requested result |
| [Finish a one-shot Pod](https://kubequest.ramideltoro.com/ckad/exercises/core-concepts-c7716ab3c79b) | Core concepts | The Pod succeeded; The saved evidence contains the requested result |
| [Run a disposable command](https://kubequest.ramideltoro.com/ckad/exercises/core-concepts-a3e184ead16d) | Core concepts | The saved evidence contains the requested result; The temporary Pod is gone |
| [Inject a container variable](https://kubequest.ramideltoro.com/ckad/exercises/core-concepts-314d16e6bd4e) | Core concepts | var1 is declared correctly; The saved evidence contains the requested result |
| [Choose the right container](https://kubequest.ramideltoro.com/ckad/exercises/multi-container-pods-b17c25b2c8e7) | Multi-container Pods | Both containers are defined; The second container can execute commands; The saved evidence contains the requested result |
| [Publish the init container’s page](https://kubequest.ramideltoro.com/ckad/exercises/multi-container-pods-189ad413452d) | Multi-container Pods | An init container and emptyDir are configured; The shared page is served |
| [Label the web fleet](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-37f7507a9fa2) | Pod design | Three named Pods carry app=v1; All fleet labels match |
| [Inspect the fleet labels](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-bdfa22153e9c) | Pod design | The saved evidence contains the requested result; The saved evidence contains the requested result |
| [Relabel one replica](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-595fd3f0a021) | Pod design | nginx2 is v2; The other Pods stay v1 |
| [Make labels a report column](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-15652f1dd3e8) | Pod design | The saved evidence contains the requested result; The saved evidence contains the requested result |
| [Select the new version](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-6d1e95383349) | Pod design | The saved evidence contains the requested result; The saved evidence contains the requested result |
| [Combine inclusion and exclusion](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-f3509c39a308) | Pod design | The saved evidence contains the requested result; The saved evidence contains the requested result |
| [Label a set of versions](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-57be32fa1342) | Pod design | All three Pods are in tier web |
| [Record ownership](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-2b45f7cefe0b) | Pod design | The selected Pod has an owner; The unselected Pod is unchanged |
| [Remove a stale label](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-507ce0884753) | Pod design | All three app labels are removed |
| [Describe the fleet](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-90b5a5ea06c7) | Pod design | All descriptions are present |
| [Read an annotation](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-68e60bafef59) | Pod design | The saved evidence contains the requested result |
| [Clear the annotation](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-5964954756c7) | Pod design | The annotation is absent |
| [Clean up the fleet](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-04b4dee77490) | Pod design | nginx1 is deleted; nginx2 is deleted; nginx3 is deleted |
| [Schedule by a node label](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-3f78ce59b4e5) | Pod design | The selector is configured; The Pod is Ready |
| [Choose the node directly](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-0ccd9d47b8f9) | Pod design | The Pod is bound to the practice node; The Pod is Ready |
| [Tolerate the scheduling boundary](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-acbf8c02347c) | Pod design | The Pod tolerates the taint; The node retains the taint; The Pod is Ready |
| [Combine selection with permission](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-248c76a858eb) | Pod design | The target selector is present; The target taint is tolerated; The Pod is Ready |
| [Declare the application Deployment](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-973f33289f82) | Pod design | The requested image is configured; The desired replicas are available |
| [Read the Deployment manifest](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-42f3676ecebd) | Pod design | The saved evidence contains the requested result |
| [Inspect the owned ReplicaSet](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-dac437fcac74) | Pod design | The saved evidence contains the requested result |
| [Inspect a managed Pod](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-a922504e884b) | Pod design | The saved evidence contains the requested result |
| [Wait for a release](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-7b48343af726) | Pod design | The saved evidence contains the requested result |
| [Release the next image](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-985f76e6e2f9) | Pod design | The requested image is configured; The desired replicas are available |
| [Read the release history](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-16ee42834b04) | Pod design | The saved evidence contains the requested result; The saved evidence contains the requested result |
| [Undo the last release](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-19963b26c7e8) | Pod design | The requested image is configured; The desired replicas are available |
| [Introduce a broken release](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-9feccab0a17e) | Pod design | The requested image is configured |
| [Diagnose the stalled rollout](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-5f9c9acd7a6a) | Pod design | The saved evidence contains the requested result; The saved evidence contains the requested result |
| [Return to a chosen revision](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-d34f2c9fd53f) | Pod design | The requested image is configured; The desired replicas are available |
| [Inspect one historical template](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-f2f6f368987e) | Pod design | The saved evidence contains the requested result |
| [Scale the application](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-7e6e4d7574a7) | Pod design | The desired replicas are available |
| [Define autoscaling bounds](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-f4c92bdbb014) | Pod design | The HPA targets nginx with the requested bounds; The target utilization is 80 percent |
| [Pause release reconciliation](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-232feff34a3e) | Pod design | The rollout is paused |
| [Change a paused template](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-b83f4b5782a6) | Pod design | The requested image is configured; The rollout stays paused; Running Pods retain the old image |
| [Resume the queued release](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-375f2201d654) | Pod design | The requested image is configured; The desired replicas are available; The rollout is resumed |
| [Remove the scaling workload](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-bcb93c95624c) | Pod design | The Deployment is removed; The HPA is removed |
| [Share traffic with a canary](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-5756e6dd2543) | Pod design | Stable has three replicas; Canary has one replica; The Service selects both versions |
| [Calculate with a Job](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-17e67c060d89) | Pod design | The pi Job completed; The result begins with pi |
| [Collect the completed result](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-4a8595435c50) | Pod design | The saved evidence contains the requested result |
| [Run a staged task](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-8342e4408766) | Pod design | The hello Job completed |
| [Follow the worker logs](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-4ac9e50b3065) | Pod design | The saved evidence contains the requested result; The saved evidence contains the requested result |
| [Inspect work and its output](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-daa19a08679d) | Pod design | The saved evidence contains the requested result; The saved evidence contains the requested result |
| [Remove completed work](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-d1ea21d3e064) | Pod design | The Job is removed |
| [Repeat the Job sequentially](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-422b71cc3116) | Pod design | The completion and parallelism policy matches; Five runs succeeded |
| [Run completions in parallel](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-30965b7fb4fe) | Pod design | The completion and parallelism policy matches; Five runs succeeded |
| [Bound a Job’s running time](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-3c827507142a) | Pod design | The deadline is configured; The Job stopped at its deadline |
| [Schedule a recurring task](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-b9a8beee7468) | Pod design | The minute schedule is configured; The task command is defined |
| [Keep the scheduled output](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-326c7efa4cb4) | Pod design | The saved evidence contains the requested result; The CronJob is removed |
| [Inspect a scheduled run](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-ff45a0c70050) | Pod design | The saved evidence contains the requested result; The CronJob is removed |
| [Limit a missed start](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-0a4a1211a3b1) | Pod design | The scheduling deadline is 17 seconds |
| [Limit each scheduled run](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-e3c31cdd1946) | Pod design | Each Job has a 12-second active deadline |
| [Retain a small run history](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-f0fb2d09de1f) | Pod design | The history limits are set |
| [Run the schedule on demand](https://kubequest.ramideltoro.com/ckad/exercises/pod-design-7ebc6a86cb1f) | Pod design | The manual Job completed; The output matches the schedule |
| [Store two configuration values](https://kubequest.ramideltoro.com/ckad/exercises/configuration-c27d125de6f8) | Configuration | Both values are stored |
| [Inspect configuration data](https://kubequest.ramideltoro.com/ckad/exercises/configuration-b318ed070cdc) | Configuration | The saved evidence contains the requested result; The saved evidence contains the requested result |
| [Load a configuration file](https://kubequest.ramideltoro.com/ckad/exercises/configuration-6bb39c927302) | Configuration | The resulting data has the expected shape |
| [Load environment-style settings](https://kubequest.ramideltoro.com/ckad/exercises/configuration-0b3877bf80d8) | Configuration | The resulting data has the expected shape |
| [Choose the ConfigMap key](https://kubequest.ramideltoro.com/ckad/exercises/configuration-552fe2c83f71) | Configuration | The resulting data has the expected shape |
| [Map one configuration key](https://kubequest.ramideltoro.com/ckad/exercises/configuration-c167ab2b2c47) | Configuration | The reference points to options/var5; The application receives val5 |
| [Import a group of settings](https://kubequest.ramideltoro.com/ckad/exercises/configuration-0716914d43a8) | Configuration | The Pod imports anotherone; Both values reach the container |
| [Mount settings as files](https://kubequest.ramideltoro.com/ckad/exercises/configuration-1f0362c12877) | Configuration | The mounted files have the supplied values |
| [Specify a process identity](https://kubequest.ramideltoro.com/ckad/exercises/configuration-18ba5b39bc81) | Configuration | The manifest has the requested security context; The manifest was not applied |
| [Declare Linux capabilities](https://kubequest.ramideltoro.com/ckad/exercises/configuration-30413a9484f7) | Configuration | The manifest has the requested security context; The manifest was not applied |
| [Reserve and limit resources](https://kubequest.ramideltoro.com/ckad/exercises/configuration-80be07de3cde) | Configuration | CPU requests and limits are set; Memory requests and limits are set |
| [Set namespace admission bounds](https://kubequest.ramideltoro.com/ckad/exercises/configuration-82621d7ef845) | Configuration | The Pod memory bounds are set |
| [Inspect namespace policy](https://kubequest.ramideltoro.com/ckad/exercises/configuration-23863970ab48) | Configuration | The saved evidence contains the requested result; The saved evidence contains the requested result |
| [Fit within the allowed range](https://kubequest.ramideltoro.com/ckad/exercises/configuration-b2ff37e4abbf) | Configuration | The memory request is 250Mi; The Pod is Ready |
| [Budget the namespace](https://kubequest.ramideltoro.com/ckad/exercises/configuration-240625f4e44a) | Configuration | Requests fit the specified quota; Limits fit the specified quota |
| [Explain an admission rejection](https://kubequest.ramideltoro.com/ckad/exercises/configuration-d318edcc44b9) | Configuration | The saved evidence contains the requested result; The over-budget Pod was not admitted |
| [Admit a workload within quota](https://kubequest.ramideltoro.com/ckad/exercises/configuration-93c607239c96) | Configuration | The declared resources match the budget; The Pod is Ready |
| [Create a practice Secret](https://kubequest.ramideltoro.com/ckad/exercises/configuration-facb0bc27a56) | Configuration | The Secret contains the practice password |
| [Create a Secret from a file](https://kubequest.ramideltoro.com/ckad/exercises/configuration-800020510cb6) | Configuration | The file is stored under username |
| [Decode the practice value](https://kubequest.ramideltoro.com/ckad/exercises/configuration-cbda172d940d) | Configuration | The saved evidence contains the requested result |
| [Mount a Secret file](https://kubequest.ramideltoro.com/ckad/exercises/configuration-76840b9115ac) | Configuration | The mounted file exposes the practice value |
| [Switch Secret consumption style](https://kubequest.ramideltoro.com/ckad/exercises/configuration-5c1870eb99ab) | Configuration | The env reference is present; USERNAME contains the practice value |
| [Scope a Secret to its consumer](https://kubequest.ramideltoro.com/ckad/exercises/configuration-efc409e4f8dd) | Configuration | The namespaced key is present |
| [Deliver a Secret to the process](https://kubequest.ramideltoro.com/ckad/exercises/configuration-29300ee8ebe5) | Configuration | The Pod references the Secret; The saved evidence contains the requested result |
| [Declare an SSH-auth Secret](https://kubequest.ramideltoro.com/ckad/exercises/configuration-8f029585a7e8) | Configuration | Type and key are correct |
| [Mount a typed Secret](https://kubequest.ramideltoro.com/ckad/exercises/configuration-48e7cab49f7c) | Configuration | The mount is read-only; The saved evidence contains the requested result |
| [Inventory workload identities](https://kubequest.ramideltoro.com/ckad/exercises/configuration-3bc403c2d6b6) | Configuration | The saved evidence contains the requested result; The saved evidence contains the requested result |
| [Create a workload identity](https://kubequest.ramideltoro.com/ckad/exercises/configuration-b6a5c8dfd561) | Configuration | myuser exists |
| [Assign the workload identity](https://kubequest.ramideltoro.com/ckad/exercises/configuration-5829be3df80e) | Configuration | nginx uses myuser; The Pod is Ready |
| [Request a short-lived API token](https://kubequest.ramideltoro.com/ckad/exercises/configuration-b1bad0cd91e1) | Configuration | A JWT-shaped token was saved; The token belongs to myuser |
| [Declare a liveness check](https://kubequest.ramideltoro.com/ckad/exercises/observability-dfe4918a2044) | Observability | The exec probe is configured; The probe timing matches; The Pod is Ready |
| [Tune probe timing](https://kubequest.ramideltoro.com/ckad/exercises/observability-80cd6dcef6bc) | Observability | The exec probe is configured; The probe timing matches; The Pod is Ready |
| [Gate traffic on HTTP readiness](https://kubequest.ramideltoro.com/ckad/exercises/observability-533bdca201e2) | Observability | The HTTP readiness endpoint is correct; The Pod is Ready |
| [Find failing health checks](https://kubequest.ramideltoro.com/ckad/exercises/observability-cc9dcedee601) | Observability | The saved evidence contains the requested result |
| [Read a changing log stream](https://kubequest.ramideltoro.com/ckad/exercises/observability-e3ecade1e2ea) | Observability | The saved evidence contains the requested result; The saved evidence contains the requested result |
| [Investigate a missing path](https://kubequest.ramideltoro.com/ckad/exercises/observability-bd666beda2cb) | Observability | The saved evidence contains the requested result; The failed Pod is removed |
| [Investigate a missing executable](https://kubequest.ramideltoro.com/ckad/exercises/observability-e9b29e7f92d6) | Observability | The saved evidence contains the requested result; The failed Pod is removed |
| [Read node resource usage](https://kubequest.ramideltoro.com/ckad/exercises/observability-81c0ce5fbdb0) | Observability | The saved evidence contains the requested result; The saved evidence contains the requested result |
| [Expose the web Pod](https://kubequest.ramideltoro.com/ckad/exercises/services-networking-7cd99a0ac81c) | Services and networking | The Service has the correct selector; The Service returns an HTTP response |
| [Inspect Service endpoints](https://kubequest.ramideltoro.com/ckad/exercises/services-networking-a9071e9af8b1) | Services and networking | The saved evidence contains the requested result; The saved evidence contains the requested result |
| [Request the Service IP](https://kubequest.ramideltoro.com/ckad/exercises/services-networking-bda0945b807f) | Services and networking | The saved evidence contains the requested result; The client request completed |
| [Reach a NodePort](https://kubequest.ramideltoro.com/ckad/exercises/services-networking-3c8f38af34c6) | Services and networking | The Service has a NodePort; The saved evidence contains the requested result |
| [Prepare a hostname service](https://kubequest.ramideltoro.com/ckad/exercises/services-networking-dbfc0999ebba) | Services and networking | Three replicas are available; The image and port are configured; No Service has been created |
| [Contact each replica directly](https://kubequest.ramideltoro.com/ckad/exercises/services-networking-7b4bb0108f61) | Services and networking | The saved evidence contains the requested result; Each running Pod appears in the report |
| [Map the application port](https://kubequest.ramideltoro.com/ckad/exercises/services-networking-4bf5b692c64c) | Services and networking | The port mapping is correct; The Service returns an HTTP response |
| [Sample traffic across replicas](https://kubequest.ramideltoro.com/ckad/exercises/services-networking-e847f2f1491a) | Services and networking | The saved evidence contains the requested result; More than one replica answered |
| [Restrict ingress to approved clients](https://kubequest.ramideltoro.com/ckad/exercises/services-networking-a3056a84e7d8) | Services and networking | The approved client can connect; The unapproved client is blocked |
| [Route an HTTP path](https://kubequest.ramideltoro.com/ckad/exercises/services-networking-220b10897573) | Services and networking | The rule points at nginx; The controller routes the request |
| [Share a file within one Pod](https://kubequest.ramideltoro.com/ckad/exercises/state-persistence-f14ded9c4d31) | State persistence | An emptyDir backs the shared mount; The first container reads the written file |
| [Offer a static volume](https://kubequest.ramideltoro.com/ckad/exercises/state-persistence-62c5b08b6401) | State persistence | The PV has the expected capacity and class; Both access modes are declared |
| [Bind a storage claim](https://kubequest.ramideltoro.com/ckad/exercises/state-persistence-6e4927ffaf92) | State persistence | The claim bound to myvolume; The requested capacity is 4Gi |
| [Write through the claim](https://kubequest.ramideltoro.com/ckad/exercises/state-persistence-9b5571617d59) | State persistence | The Pod mounts mypvc; The file was copied to the mounted volume |
| [Read the persisted file elsewhere](https://kubequest.ramideltoro.com/ckad/exercises/state-persistence-557b44434396) | State persistence | The reader references the same claim; The saved evidence contains the requested result |
| [Copy a file out of the container](https://kubequest.ramideltoro.com/ckad/exercises/state-persistence-d11d90dc5f93) | State persistence | The copied file matches the container |
| [Scaffold a Helm chart](https://kubequest.ramideltoro.com/ckad/exercises/helm-e2c42ac9f9fa) | Helm | The chart has metadata and templates |
| [Install a chart with values](https://kubequest.ramideltoro.com/ckad/exercises/helm-f0e0d766e5cc) | Helm | Two web replicas are available; Helm reports the release deployed |
| [Find pending releases](https://kubequest.ramideltoro.com/ckad/exercises/helm-549a8e435eba) | Helm | The saved evidence contains the requested result; The saved evidence contains the requested result |
| [Uninstall the release](https://kubequest.ramideltoro.com/ckad/exercises/helm-49c8f3a48a65) | Helm | The Deployment is gone; The release is absent |
| [Layer values for an upgrade](https://kubequest.ramideltoro.com/ckad/exercises/helm-1577f597a0bd) | Helm | The override produces three available replicas; Helm stores the merged replica value |
| [Manage a chart repository](https://kubequest.ramideltoro.com/ckad/exercises/helm-f6b7be3f958c) | Helm | The local repository is registered; The saved evidence contains the requested result |
| [Download without installing](https://kubequest.ramideltoro.com/ckad/exercises/helm-bbba15a6304b) | Helm | The downloaded chart is valid; No Deployment was installed |
| [Add a repository by name](https://kubequest.ramideltoro.com/ckad/exercises/helm-f92cbe0a5a34) | Helm | catalog points to the supplied repository |
| [Inspect chart defaults](https://kubequest.ramideltoro.com/ckad/exercises/helm-94840f9d566c) | Helm | The saved evidence contains the requested result; The saved evidence contains the requested result |
| [Override replicas during install](https://kubequest.ramideltoro.com/ckad/exercises/helm-0b7d0c5d4101) | Helm | Five replicas are available |
| [Describe a custom API](https://kubequest.ramideltoro.com/ckad/exercises/custom-resources-b854e760ce17) | Custom resources | The manifest defines the required names and schema; The CRD is not installed yet |
| [Register the custom API](https://kubequest.ramideltoro.com/ckad/exercises/custom-resources-6e678c4dd728) | Custom resources | The CRD is established |
| [Create an instance of the custom type](https://kubequest.ramideltoro.com/ckad/exercises/custom-resources-62a9622546dd) | Custom resources | The custom object has the supplied fields |
| [Discover the resource aliases](https://kubequest.ramideltoro.com/ckad/exercises/custom-resources-48e4ec121f3f) | Custom resources | The saved evidence contains the requested result |
| [Package a custom homepage](https://kubequest.ramideltoro.com/ckad/exercises/container-images-d43ab80e8740) | Container images (Podman) | The Dockerfile declares httpd and the custom page |
| [Build and inspect image layers](https://kubequest.ramideltoro.com/ckad/exercises/container-images-1f9d206bd6b7) | Container images (Podman) | The image exists; The saved evidence contains the requested result |
| [Run and test the image](https://kubequest.ramideltoro.com/ckad/exercises/container-images-52068ec01497) | Container images (Podman) | test is running; The saved evidence contains the requested result |
| [Inspect the container’s page](https://kubequest.ramideltoro.com/ckad/exercises/container-images-ac5001169e7a) | Container images (Podman) | The saved evidence contains the requested result |
| [Publish to the lab registry](https://kubequest.ramideltoro.com/ckad/exercises/container-images-1f8a476cb71a) | Container images (Podman) | The registry exposes the pushed manifest |
| [Create without starting](https://kubequest.ramideltoro.com/ckad/exercises/container-images-e3eb6e9b9907) | Container images (Podman) | parked exists but is not running |
| [Export a container filesystem](https://kubequest.ramideltoro.com/ckad/exercises/container-images-a8392159fb28) | Container images (Podman) | The archive contains the container filesystem |
| [Pull the published image into Kubernetes](https://kubequest.ramideltoro.com/ckad/exercises/container-images-6e1079117d58) | Container images (Podman) | The Pod is Ready; The Pod serves the built page |
| [Log in to the private fixture](https://kubequest.ramideltoro.com/ckad/exercises/container-images-43b95a3170bf) | Container images (Podman) | The auth file names the registry |
| [Make image-pull credentials](https://kubequest.ramideltoro.com/ckad/exercises/container-images-b4f392c395d5) | Container images (Podman) | The file-based Secret has the correct type; The CLI Secret targets the local registry |
| [Use a private registry Secret](https://kubequest.ramideltoro.com/ckad/exercises/container-images-0442ba5ba29b) | Container images (Podman) | The Pod references the pull Secret; The Pod is Ready |
| [Clean the container workspace](https://kubequest.ramideltoro.com/ckad/exercises/container-images-5dbe478b1ac2) | Container images (Podman) | No Podman containers remain; No Podman images remain; The Kubernetes Pod is removed |
| [One base, two environments](https://kubequest.ramideltoro.com/ckad/curriculum/kustomize-overlays) | Application deployment | Staging renders the requested deployment; The base remains one replica |
| [Grant exactly the access needed](https://kubequest.ramideltoro.com/ckad/curriculum/rbac-boundaries) | Environment, configuration and security | The identity can watch Pods; The identity cannot delete Pods; Secrets and other namespaces stay inaccessible |
| [Give a slow application time to start](https://kubequest.ramideltoro.com/ckad/curriculum/startup-probe-budget) | Observability and maintenance | The startup budget is configured; The liveness check remains intact; A restart occurred and readiness recovered |
| [Turn cluster objects into a useful report](https://kubequest.ramideltoro.com/ckad/curriculum/jsonpath-reports) | Observability and maintenance | The report has the exact rows and separators |

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
| [A safe path from change to release](https://kubequest.ramideltoro.com/foundations/cicd-pipelines) | Push a change; CI checks; Verified artifact; Deploy and check | 3 | Hold at a gate |
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
| react-markdown | 10.1.0 | ^10.1.0 |
| react-router-dom | 7.18.4 | ^7.9.0 |
| remark-gfm | 4.0.1 | ^4.0.1 |
| ssh2 | 1.17.0 | ^1.17.0 |
| tsx | 4.23.13 | ^4.20.0 |
| yaml | 2.9.1 | ^2.8.0 |
