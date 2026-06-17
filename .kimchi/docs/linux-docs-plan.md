# Linux Documentation Plan

## Overview
Creating 23 MDX files for the `/Users/souravlobra/devops-blog/docs/linux/` directory.

## File List & Ordering
| File | Sidebar Position | Group |
|------|-----------------|-------|
| overview.mdx | 3 | 1 |
| fundamentals.mdx | 4 | 1 |
| filesystem.mdx | 5 | 1 |
| users-and-groups.mdx | 6 | 1 |
| permissions.mdx | 7 | 2 |
| systemd.mdx | 8 | 2 |
| processes.mdx | 9 | 2 |
| memory.mdx | 10 | 2 |
| cpu.mdx | 11 | 3 |
| storage.mdx | 12 | 3 |
| networking.mdx | 13 | 3 |
| ssh.mdx | 14 | 3 |
| logs.mdx | 15 | 4 |
| cron.mdx | 16 | 4 |
| shell.mdx | 17 | 4 |
| bash.mdx | 18 | 4 |
| performance.mdx | 19 | 5 |
| security.mdx | 20 | 5 |
| containers.mdx | 21 | 5 |
| monitoring.mdx | 22 | 5 |
| troubleshooting.mdx | 23 | 6 |
| commands-handbook.mdx | 24 | 6 |
| labs.mdx | 25 | 6 |

## Execution Plan
**6 batches, run 3 in parallel:**

### Batch 1 (Group 1 - Core Foundation)
- overview.mdx
- fundamentals.mdx
- filesystem.mdx
- users-and-groups.mdx

### Batch 2 (Group 2 - System Control)
- permissions.mdx
- systemd.mdx
- processes.mdx
- memory.mdx

### Batch 3 (Group 3 - Resources)
- cpu.mdx
- storage.mdx
- networking.mdx
- ssh.mdx

### Batch 4 (Group 4 - Automation)
- logs.mdx
- cron.mdx
- shell.mdx
- bash.mdx

### Batch 5 (Group 5 - Operations)
- performance.mdx
- security.mdx
- containers.mdx
- monitoring.mdx

### Batch 6 (Group 6 - Reference)
- troubleshooting.mdx
- commands-handbook.mdx
- labs.mdx

## Frontmatter Template
```yaml
---
sidebar_position: X
description: Brief description of the topic.
---
```

## Content Template (repeated for each file)
Each file MUST include all these sections:
1. Overview (2-3 paragraphs, production-focused)
2. When To Use (bullet list of scenarios)
3. When NOT To Use (bullet list)
4. Core Concepts (detailed with code examples)
5. Real Production Example (actual commands/configs/scripts)
6. CLI Examples (bash code blocks)
7. Common Commands (table format)
8. Monitoring (specific tools and commands)
9. Security (hardening practices)
10. Troubleshooting (real error messages and fixes)
11. Interview Questions (3-5 challenging questions)
12. Cheat Sheet (quick reference)
13. Related Topics (relative paths)

## Quality Rules
- Production-first, no fluff
- Real Linux commands with actual paths
- Code blocks syntax-highlighted (bash, ini, yaml, conf)
- No "coming soon" or placeholders
- Challenging interview questions for senior roles
- Real hardening practices, not generic advice

## Batch Delegation
- Batch 1 → Builder Agent 1 (150k tokens)
- Batch 2 → Builder Agent 2 (150k tokens)
- Batch 3 → Builder Agent 3 (150k tokens)
- (Then Batches 4-6 sequentially)