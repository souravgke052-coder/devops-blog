---
sidebar_position: 1
description: Navigate the platform — structure, prerequisites, and how to use this site.
---

# Getting Started

## Platform Structure

This platform is organized by engineering domain, not by difficulty level. Each section is self-contained — you can read Kubernetes networking before Linux basics if your problem demands it.

### Navigation

Use the top navigation bar to jump between categories:
- **Home** — returns to this homepage
- **Learning Paths** — structured learning journeys from fundamentals to advanced topics
- **Linux** through **Labs** — individual topic categories with deep-dive content
- **Blog** — engineering articles, case studies, and thought leadership

### Content Organization

Topics progress from infrastructure fundamentals through platform layers. The suggested reading order for building a foundation:

1. **Linux** — Shell scripting, process management, system administration for production servers
2. **Networking** — Load balancing, DNS architecture, firewall rules, and connectivity troubleshooting
3. **Google Cloud** — GCP service selection, IAM strategy, multi-project patterns, and cost optimization
4. **Kubernetes** — GKE cluster operations, workload scheduling, autoscaling, and production debugging
5. **Terraform** — Module design, state management, CI/CD integration, and team governance
6. **CI/CD** — Pipeline design, GitHub Actions workflows, build automation, and deployment strategies
7. **Containers** — Docker fundamentals, container networking, image optimization, and security
8. **SRE** — SLIs, SLOs, error budgets, monitoring, alerting, and incident response
9. **Architecture** — System design patterns and cloud-native architectural decisions

## How to Use This Platform

**For practitioners** in a given domain: jump straight to the section covering your current problem. Articles are designed to be referenced independently.

**For learners** building a foundation: follow the natural progression listed above. Each section builds on knowledge from the previous ones.

**For interview preparation**: visit the Interview Prep section for real questions, scenario-based challenges, and structured answers.

**For hands-on practice**: visit the Labs section for exercises with real infrastructure scenarios.

## Prerequisites

- **For running the site locally**: Node.js 20 or higher. Clone the repository, run `npm install`, then `npm run start` to serve locally at `http://localhost:3000`.
- **For reading**: Basic familiarity with cloud concepts (VMs, networking, containers). Articles do not explain what a virtual machine is.

## Contribute and Feedback

Found an error, outdated information, or a gap in coverage? Open an issue or start a discussion on [GitHub](https://github.com/souravlobra/devops-blog/discussions). Contributions that improve production accuracy over prose polish are prioritized.