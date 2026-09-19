# Optional local AI coach

The coach uses the existing Ollama `qwen2.5:7b` model on the home server. It is available only to the authorized owner in a ready, non-timed lab. Public learning does not depend on it. Grading never uses model output.

![Communication diagram: authorization, compact evidence, streamed inference, cancellation and fallback](diagrams/communication.svg)

## What the learner sees

The **Talk it through** panel offers question starters, a question field, an elapsed-time indicator, a streamed answer, and a **Stop answer** button. The browser receives progress immediately and displays words as the model produces them. A reviewed first hint is available in a separate panel at any time assistance is allowed. Fallback answers are labeled **Reviewed explanation**; a busy model is not presented as an AI answer.

The original implementation buffered the entire answer and retained the model for only two minutes. That made a working but cold model look unresponsive. The new path streams output, limits response length, keeps the model loaded for 15 minutes after use, and reports failure instead of leaving an indefinite spinner. A first request can still take longer, and other local AI workloads can affect speed.

## Context and resource limits

`server/coach.ts` owns inference and the single-request lock. It selects reviewed mission content and a compact resource summary. The summary includes at most twelve objects and 1,800 characters: resource kind, bounded name, phase, readiness, replicas, waiting reason, and restart count. Arbitrary labels, annotations, YAML, environment variables, Secret contents, and terminal output are excluded. The evidence lookup has a four-second deadline; if it fails, the coach works from authored guidance and states that observations are unavailable.

Questions contain 1–1,500 characters. The request uses a 4,096-token context, at most 220 output tokens, four threads, temperature 0.2, and a 15-minute keep-alive. The prompt asks for plain English, a short explanation, and one read-only diagnostic step. These are guidance constraints, not a claim that model text is always correct.

One inference runs at a time. The total model operation is bounded by a 65-second timeout; the browser has a 75-second connection guard. A Stop action, disconnected browser, lab reset/stop, or application shutdown aborts the associated request. Cancellation releases the inference slot. No global Ollama configuration or other AI service is changed.

## HTTP contract

`POST /api/private/tutor` requires the normal owner cookie, matching Origin, current `sessionId`, and eligible mode. The browser sends `{sessionId, question, stream: true}` and receives newline-delimited JSON with `application/x-ndjson` content type:

```json
{"type":"status","message":"Checking the lab…"}
{"type":"token","text":"Check the Service selector."}
{"type":"done","answer":"Check the Service selector.","fallback":false,"elapsedMs":12000,"firstTokenMs":4000}
```

Progress heartbeats occur every five seconds. Responses are marked `no-store, no-transform`; proxy buffering is disabled where supported. A request without `stream: true` retains a final JSON response for existing integrations. Authentication and invalid-input errors still use normal HTTP error statuses before a stream starts.

On model failure, timeout, malformed output, or an incomplete response, the final event replaces partial AI text with the authored first hint and explanation. It includes `fallback: true` and a human-readable reason. The UI never treats partial text as a completed answer.

## Authority and privacy

The model has no tools, command execution, YAML application, session management, or grading authority. Resource names and questions are untrusted data. Model text is rendered as text, never HTML. Questions and answers are not persisted. Logs contain only outcome and timing fields, without question text, answers, credentials, or lab objects.

Use `journalctl -u kubequest` to inspect records with `component: "coach"`. Compare `firstTokenMs`, `elapsedMs`, and `outcome` before changing model settings. Check `ollama ps` and host memory when the response is slow. A service restart can affect an active lab; use the normal idle-aware deployment process.

## Validation

Automated tests cover evidence sanitization, streamed tokens before completion, failed and incomplete responses, single-request concurrency, cancellation, timeouts, missing evidence, HTTP authorization, and empty questions. Browser contract checks verify rendered responses and Stop behavior using explicitly mocked inference. Real-model measurements and private API qualification are separate from those mock tests. Timing measurements are observations of the home server, not latency guarantees.

The [19 September 2026 live qualification](Validation.md#published-release-check-19-september-2026) verified real answers, early progress through Cloudflare, and cancellation followed by a successful new question. The first answer completed in 34.1 seconds including model startup; the following answer completed in 7.7 seconds. A cold model can still need time before the first words appear, while the progress indicator and reviewed guidance remain available.
