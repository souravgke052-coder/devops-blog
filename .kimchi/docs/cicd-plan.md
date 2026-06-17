# CI/CD Documentation Plan

## Overview
Create 11 MDX files for a world-class DevOps CI/CD documentation platform. Each file follows a consistent template with production-grade content.

## Files to Create

| # | File | sidebar_position | Focus Areas |
|---|------|------------------|-------------|
| 1 | `overview.mdx` | 1 | CI/CD fundamentals, pipeline stages, tooling landscape |
| 2 | `git.mdx` | 2 | Git workflows, branching strategies, hooks, commands |
| 3 | `github.mdx` | 3 | GitHub Actions YAML, runners, secrets, marketplace |
| 4 | `build.mdx` | 4 | Multi-stage builds, layer caching, Docker, Gradle, Maven |
| 5 | `test.mdx` | 5 | Unit, integration, E2E, SAST, DAST, container scanning |
| 6 | `artifact-management.mdx` | 6 | Artifact Registry, semantic versioning, image signing, SBOM |
| 7 | `deploy.mdx` | 7 | Rolling, blue-green, canary, multi-env, approval gates |
| 8 | `rollback.mdx` | 8 | Automated rollback, manual procedures, canary rollback |
| 9 | `blue-green.mdx` | 9 | Blue-green architecture, traffic switching, DNS cutover |
| 10 | `canary.mdx` | 10 | Canary analysis, metrics, traffic splitting, Argo Rollouts |
| 11 | `automation.mdx` | 11 | GitOps, event-driven automation, slack integration |

## Content Template (per file)

```markdown
# Title

## Overview
## When To Use
## When NOT To Use
## Core Concepts
## Real Production Example
## Configuration / Pipeline Examples (YAML for GitHub Actions, Cloud Build, etc.)
## Common Commands / Steps
## Monitoring
## Security
## Cost Optimization
## Troubleshooting
## Interview Questions
## Cheat Sheet
## Related Topics
```

## Quality Standards

### Real Git Commands
- `git rebase -i`, `git bisect`, `git worktree`, `git stash -p`
- Branch protection rules, required status checks
- Merge vs rebase workflows

### Real GitHub Actions YAML
- Composite actions, reusable workflows
- Environment protection rules, deployment environments
- Concurrency groups, job dependencies
- Matrix strategies, caching strategies

### Real Google Cloud Build YAML
- Build triggers, substitutions, service accounts
- Cloud Build configuration with steps

### Deployment Strategies
- Rolling: maxSurge, maxUnavailable
- Blue-green: traffic switch, DNS TTL, idle environment
- Canary: weight-based traffic split, metrics-based promotion

### Artifact Management
- Artifact Registry / GCR / ECR
- Semantic versioning (v1.2.3)
- Image signing with Cosign
- SBOM generation

### Security
- OIDC federation (no long-lived creds)
- Workload identity
- Secret management (Secret Manager, Vault)
- SAST/DAST integration
- Container vulnerability scanning

### Testing
- Unit tests (pytest, go test, jest)
- Integration tests
- E2E tests (Playwright, Cypress)
- Security scans (Trivy, Grype, SonarQube)

## Output Location
Base path: `/Users/souravlobra/devops-blog/docs/cicd/`

## Execution Strategy
- Single Builder agent to create all 11 files
- Content is well-defined and templated
- Task is content creation, not complex code architecture