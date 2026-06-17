# DevOps Documentation Platform — Transformation Plan

## Goal
Transform the existing Docusaurus 3 blog into a complete world-class DevOps documentation platform covering Linux, Networking, Google Cloud, Kubernetes, Terraform, CI/CD, Containers, SRE, Architecture, Troubleshooting, Interview Prep, and Labs.

## Technology Foundation (No Changes)
- **Framework:** Docusaurus 3.10.1 with preset-classic
- **Theme:** Stock Docusaurus classic (Infima), green/teal branding preserved
- **Search:** @easyops-cn/docusaurus-search-local (already configured)
- **Build:** Static site → GitHub Pages
- **Language:** JavaScript + MDX/Markdown

## Architecture Overview

```
docs/
├── intro.mdx                          # Platform overview
├── getting-started.md                 # Getting started guide
├── linux/
│   ├── _category_.json
│   ├── overview.md
│   ├── fundamentals.md
│   ├── filesystem.md
│   ├── users-and-groups.md
│   ├── permissions.md
│   ├── systemd.md
│   ├── processes.md
│   ├── memory.md
│   ├── cpu.md
│   ├── storage.md
│   ├── networking.md
│   ├── ssh.md
│   ├── logs.md
│   ├── cron.md
│   ├── shell.md
│   ├── bash.md
│   ├── performance.md
│   ├── security.md
│   ├── containers.md
│   ├── monitoring.md
│   ├── troubleshooting.md
│   ├── commands-handbook.md
│   └── labs.md
├── networking/
│   ├── _category_.json
│   ├── overview.md
│   ├── osi-model.md
│   ├── tcp-ip.md
│   ├── tcp.md
│   ├── udp.md
│   ├── dns.md
│   ├── http.md
│   ├── https.md
│   ├── tls.md
│   ├── ssl.md
│   ├── load-balancing.md
│   ├── nat.md
│   ├── vpn.md
│   ├── cdn.md
│   ├── proxy.md
│   ├── reverse-proxy.md
│   ├── vpc.md
│   ├── subnets.md
│   ├── cidr.md
│   ├── routing.md
│   ├── firewall.md
│   ├── packet-flow.md
│   ├── observability.md
│   ├── debugging.md
│   └── labs.md
├── gcp/
│   ├── _category_.json
│   ├── overview.md
│   ├── foundation/
│   │   ├── _category_.json
│   │   ├── iam.md
│   │   ├── organization.md
│   │   ├── projects.md
│   │   ├── billing.md
│   │   ├── folders.md
│   │   └── resource-hierarchy.md
│   ├── network/
│   │   ├── _category_.json
│   │   ├── vpc.md
│   │   ├── subnets.md
│   │   ├── firewall.md
│   │   ├── routes.md
│   │   ├── load-balancer.md
│   │   ├── cloud-dns.md
│   │   ├── cloud-cdn.md
│   │   ├── cloud-nat.md
│   │   └── interconnect.md
│   ├── compute/
│   │   ├── _category_.json
│   │   ├── compute-engine.md
│   │   ├── managed-instance-groups.md
│   │   ├── cloud-run.md
│   │   ├── gke.md
│   │   ├── app-engine.md
│   │   └── cloud-functions.md
│   ├── storage/
│   │   ├── _category_.json
│   │   ├── cloud-storage.md
│   │   ├── persistent-disk.md
│   │   └── filestore.md
│   ├── database/
│   │   ├── _category_.json
│   │   ├── cloud-sql.md
│   │   ├── firestore.md
│   │   ├── spanner.md
│   │   ├── bigquery.md
│   │   └── memorystore.md
│   ├── events/
│   │   ├── _category_.json
│   │   ├── pub-sub.md
│   │   ├── eventarc.md
│   │   └── workflows.md
│   ├── devops/
│   │   ├── _category_.json
│   │   ├── artifact-registry.md
│   │   ├── cloud-build.md
│   │   ├── deployment-pipelines.md
│   │   └── secret-manager.md
│   ├── observability/
│   │   ├── _category_.json
│   │   ├── monitoring.md
│   │   ├── logging.md
│   │   ├── trace.md
│   │   ├── profiler.md
│   │   └── error-reporting.md
│   └── security/
│       ├── _category_.json
│       ├── cloud-armor.md
│       ├── kms.md
│       ├── iap.md
│       └── security-command-center.md
├── kubernetes/
│   ├── _category_.json
│   ├── overview.md
│   ├── architecture.md
│   ├── pods.md
│   ├── replicasets.md
│   ├── deployments.md
│   ├── services.md
│   ├── ingress.md
│   ├── volumes.md
│   ├── storage-classes.md
│   ├── configmaps.md
│   ├── secrets.md
│   ├── statefulsets.md
│   ├── daemonsets.md
│   ├── jobs.md
│   ├── autoscaling.md
│   ├── rbac.md
│   ├── security.md
│   ├── networking.md
│   ├── observability.md
│   ├── production-operations.md
│   ├── debugging.md
│   └── gke.md
├── terraform/
│   ├── _category_.json
│   ├── overview.md
│   ├── state.md
│   ├── providers.md
│   ├── resources.md
│   ├── variables.md
│   ├── modules.md
│   ├── backend.md
│   ├── remote-state.md
│   ├── workspaces.md
│   ├── lifecycle.md
│   ├── secrets.md
│   ├── testing.md
│   ├── cicd.md
│   └── gcp-automation.md
├── cicd/
│   ├── _category_.json
│   ├── overview.md
│   ├── git.md
│   ├── github.md
│   ├── build.md
│   ├── test.md
│   ├── artifact-management.md
│   ├── deploy.md
│   ├── rollback.md
│   ├── blue-green.md
│   ├── canary.md
│   └── automation.md
├── containers/
│   ├── _category_.json
│   ├── overview.md
│   ├── docker.md
│   ├── dockerfile.md
│   ├── docker-compose.md
│   ├── container-runtime.md
│   ├── image-security.md
│   ├── registry.md
│   └── troubleshooting.md
├── sre/
│   ├── _category_.json
│   ├── overview.md
│   ├── sli.md
│   ├── slo.md
│   ├── sla.md
│   ├── error-budget.md
│   ├── monitoring.md
│   ├── alerting.md
│   ├── incident-management.md
│   ├── postmortem.md
│   ├── reliability.md
│   └── capacity-planning.md
├── architecture/
│   ├── _category_.json
│   ├── overview.md
│   ├── design-patterns.md
│   ├── microservices.md
│   ├── serverless.md
│   ├── event-driven.md
│   ├── multi-region.md
│   ├── disaster-recovery.md
│   ├── cost-architecture.md
│   └── security-architecture.md
├── troubleshooting/
│   ├── _category_.json
│   ├── overview.md
│   ├── methodology.md
│   ├── linux-troubleshooting.md
│   ├── network-troubleshooting.md
│   ├── gcp-troubleshooting.md
│   ├── kubernetes-troubleshooting.md
│   ├── terraform-troubleshooting.md
│   ├── cicd-troubleshooting.md
│   └── common-issues.md
├── interview-prep/
│   ├── _category_.json
│   ├── overview.md
│   ├── linux-questions.md
│   ├── networking-questions.md
│   ├── gcp-questions.md
│   ├── kubernetes-questions.md
│   ├── terraform-questions.md
│   ├── cicd-questions.md
│   ├── sre-questions.md
│   ├── architecture-questions.md
│   ├── scenario-questions.md
│   └── cheat-sheets.md
├── labs/
│   ├── _category_.json
│   ├── overview.md
│   ├── linux-labs.md
│   ├── networking-labs.md
│   ├── gcp-labs.md
│   ├── kubernetes-labs.md
│   ├── terraform-labs.md
│   ├── cicd-labs.md
│   └── sre-labs.md
└── learning-paths/
    ├── _category_.json
    ├── overview.md
    ├── beginner.md
    ├── intermediate.md
    ├── advanced.md
    └── role-based.md
```

## Page Template Standard

Every service/technology page must include these sections:

```markdown
# Page Title

## Overview
## When To Use
## When NOT To Use
## Architecture Diagram
## Core Concepts
## Real Production Example
## CLI Examples
## Terraform Example
## Common Commands
## Monitoring
## Security
## Cost Optimization
## Troubleshooting
## Interview Questions
## Cheat Sheet
## Labs
## Related Services
```

## Navigation Update

Update `docusaurus.config.js` navbar to:
- Home → `/`
- Learning Paths → `/docs/category/learning-paths`
- Linux → `/docs/category/linux`
- Networking → `/docs/category/networking`
- Google Cloud → `/docs/category/google-cloud`
- Kubernetes → `/docs/category/kubernetes`
- Terraform → `/docs/category/terraform`
- CI/CD → `/docs/category/cicd`
- Containers → `/docs/category/containers`
- SRE → `/docs/category/sre`
- Architecture → `/docs/category/architecture`
- Troubleshooting → `/docs/category/troubleshooting`
- Interview Prep → `/docs/category/interview-prep`
- Labs → `/docs/category/labs`
- Blog → `/blog`

Note: Docusaurus auto-generates category pages from `_category_.json`.

## Sidebar Strategy

Keep `sidebar.js` but update to generate sidebars from the docs folder structure using the Docusaurus autogenerated sidebar feature. This eliminates manual maintenance as content grows.

```javascript
const sidebars = {
  tutorialSidebar: [
    {
      type: 'autogenerated',
      dirName: '.',
    },
  ],
};
```

But to preserve the top-level ordering and keep certain sections expanded/collapsed, we may keep a hybrid approach with autogenerated categories nested under explicit top-level items.

## Site Features (Docusaurus Native)

| Feature | Status | How |
|---------|--------|-----|
| Auto Sidebar | Native | `autogenerated` or `_category_.json` |
| Service Explorer | Custom | Component to list all services per category |
| Global Search | Already exists | `@easyops-cn/docusaurus-search-local` |
| Cross Linking | Native | Docusaurus `[]()` links between docs |
| Reading Time | Native | `showReadingTime: true` in config |
| Code Copy | Native | Docusaurus code blocks have copy button |
| Service Comparison | Custom | MDX tables in dedicated pages |
| Breadcrumbs | Native | Docusaurus breadcrumb plugin |
| Learning Progress | Custom | LocalStorage-based progress tracking component |
| Dark Mode | Already exists | `respectPrefersColorScheme: true` |
| Diagrams | Custom | Mermaid support via `@docusaurus/theme-mermaid` or embed placeholder comments for future diagrams |

## Content Quality Standards

1. **Production-first**: Every example must be production-relevant
2. **Practical**: Include real commands, configs, and Terraform code
3. **Engineer-focused**: Assume intermediate knowledge, skip "what is cloud"
4. **Beginner → Advanced**: Start with fundamentals, progress to deep topics
5. **Deep but structured**: Use clear headings, avoid wall-of-text
6. **No fluff**: Every paragraph must add value
7. **No repeated explanations**: Link to other pages instead of repeating

## Implementation Chunks

### Chunk 1: Infrastructure & Configuration
- Update `docusaurus.config.js` (nav, reading time, breadcrumbs, mermaid)
- Update `sidebars.js` (autogenerated with custom ordering)
- Update `src/pages/index.js` (reflect platform nature)
- Create all `_category_.json` files for the complete hierarchy

### Chunk 2: Linux Documentation
- 19 pages from fundamentals to labs

### Chunk 3: Networking Documentation
- 21 pages from OSI model to labs

### Chunk 4: Google Cloud Documentation
- 30+ pages across 8 sub-categories (foundation, network, compute, storage, database, events, devops, observability, security)

### Chunk 5: Kubernetes Documentation
- 20 pages from architecture to GKE

### Chunk 6: Terraform & CI/CD Documentation
- 14 Terraform pages + 11 CI/CD pages

### Chunk 7: Containers, SRE, Architecture
- 9 Container pages + 11 SRE pages + 9 Architecture pages

### Chunk 8: Troubleshooting, Interview Prep, Labs, Learning Paths
- 9 Troubleshooting pages + 11 Interview Prep pages + 8 Lab pages + 5 Learning Path pages

## Verification Strategy

After each chunk:
1. Run `npm run build` to verify Docusaurus compiles
2. Fix any broken links or frontmatter errors
3. Check sidebar navigation renders correctly
