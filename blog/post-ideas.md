# Blog Post Ideas

{/* truncate */}

## Incident Postmortems

### GKE Node Pool Failure: How We Lost 3 Hours to a Misconfigured Autoscaler
A node pool rollout triggered a cascade of pod evictions during peak traffic. Walk through the timeline, the initial misdiagnosis (it looked like an application bug), and the config change that fixed it.

### Cloud Run Cold Start Outage: When Concurrency Limits Aren't What You Think
A deployment during high-traffic hours exposed cold start latencies 10x worse than expected. The root cause: misunderstanding how Cloud Run allocates container instances under concurrent load. Details on the fix and revised concurrency settings.

### Terraform State Corruption: Lessons from a Production State Lock Failure
An automated pipeline left state locked after a network interruption mid-apply. What we tried first, what made it worse, and the manual state surgery that finally recovered the infrastructure without a full recreation.

---

## Cloud Run Deep Dives

### Deploying Cloud Run Services with Terraform: A Production-Grade Module
Why the official Google provider examples fall short for real teams. A module that handles service accounts, VPC connector routing, and revision tagging with zero-downtime deploys.

### Cloud Run Concurrency: What the Docs Don't Tell You
The difference between `--concurrency` and the container instance limit. How to calculate realistic concurrency values from request patterns and avoid the "all instances busy" errors under burst traffic.

### Connecting Cloud Run to Cloud SQL Without Exposing Credentials
Private Service Connect, VPC access connectors, and the Secret Manager pattern that keeps database credentials out of environment variables entirely.

---

## Pub/Sub

### Pub/Sub Ordering Keys: When to Use Them and When Not To
Ordering keys guarantee processing order within a region but add latency and cost. Real-world guidance on when ordering matters (spoiler: less often than you think) and how to structure messages for parallel processing when it doesn't.

### Setting Up Dead Letter Queues Without Losing Messages in Transit
A misconfigured DLQ setup can silently drop messages during deployment. Walk through the subscription retry policy, dead letter topic configuration, and the Cloud Function that republishes corrected messages.

### Exactly-Once Delivery in Pub/Sub: What It Actually Means
Exactly-once suppresses duplicates at the subscriber level, but it doesn't prevent application-level double processing. The idempotency patterns required to make it work end-to-end.

---

## Kubernetes Debugging

### Debugging CrashLoopBackOff: A Systematic Checklist
The diagnosis path from `kubectl describe` to container logs to security policy enforcement. What to check at each layer and the common root causes that get overlooked (liveness probes timing out before the app is ready is the #1 offender).

### OOMKilled in GKE: Finding the Real Memory Limit
kubectl top and Prometheus metrics don't always match what Kubernetes thinks is the limit. The kernel oom killer, cgroup memory soft limits, and how to tune GKE node memory allocation to avoid premature evictions.

### DNS Resolution Failures in Kubernetes: CoreDNS, kube-dns, and the resolv.conf Trap
Pod DNS resolution slowing to a crawl after scaling events. The interaction between kubelet's resolv.conf generation and CoreDNS's forwarding cache, and why increasing replica count isn't the fix.

---

## CI/CD

### GitHub Actions + GCP Workload Identity: Secure CI Without Static Keys
Why long-lived service account keys are a compliance risk. A step-by-step implementation of Workload Identity Federation for GitHub Actions, including the IAM bindings and the token caching that keeps builds fast.

### Running Terraform Plan and Apply in GitHub Actions Without Destroying Production
The pull request workflow that makes Terraform changes safe: plan generation in CI, formatted output comments on PRs, required reviewers for apply stages, and the environment restriction that prevents direct main-branch applies.

---

## Cost Optimization

### Rightsizing GKE Nodes: Moving from Over-Provisioned to Efficient
A node pool was running at 40% CPU average but pods were still being evicted. The analysis that revealed memory was the real constraint, and the migration from n1-standard to e2-custom machine types that cut costs 35%.

### Cloud Storage Lifecycle Policies: Avoiding the Lifecycle Rule Pitfalls
Lifecycle transitions failing silently because of versioning conflicts or custom time conditions. The bucket configuration that actually works for log archival, and the Storage Insights Report that surfaces what you didn't know you were paying for.

### BigQuery Slot Management: On-Demand vs. Flat-Rate Decision Framework
When flat-rate commitment is worth it and when on-demand pricing wins. A spreadsheet model for calculating break-even based on query volume, and how to run a controlled experiment before committing.

---

## GCP Interview Preparation

### GCP Architecture Case Study: Designing a Multi-Region API with 99.9% SLA
Walk through a real interview-style design: regional vs. multi-region buckets, Cloud Run placement, load balancer geographic routing, and the tradeoffs between consistency and availability at global scale.

### IAM Scenario Questions: When to Use Roles, Workload Identity, or Service Accounts
Common IAM interview traps: when a predefined role has too many permissions, why service account keys are a red flag, and how to design least-privilege access for a CI/CD pipeline accessing multiple projects.

### GCP Pricing Deep Dive: Calculating Total Cost for a Production Workload
The interview questions that trip up candidates who only know on-demand pricing: committed use discounts, sustained use discounts, preemptible VM savings, and the hidden costs in egress and inter-region traffic.