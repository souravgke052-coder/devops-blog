---
sidebar_position: 2
description: Bash scripting essentials for DevOps automation.
---

# Shell Scripting

Automate repetitive tasks with Bash. These patterns are essential for DevOps engineers.

## Variables & Conditionals

```bash
#!/bin/bash
set -euo pipefail

ENV="${1:-dev}"

if [[ "$ENV" == "prod" ]]; then
  echo "Deploying to production"
else
  echo "Deploying to $ENV"
fi
```

## Loops & Functions

```bash
for svc in api web worker; do
  echo "Checking $svc..."
  systemctl is-active "$svc" || echo "$svc is down"
done

health_check() {
  curl -sf "http://localhost:8080/health" > /dev/null
}
```

## Working with JSON & YAML

```bash
# Parse JSON with jq
curl -s https://api.github.com/users/souravlobra | jq '.login, .id'

# Edit YAML inline
yq eval '.spec.replicas = 3' -i deployment.yaml
```

## Tips

- Always start scripts with `set -euo pipefail`
- Quote variables to prevent word splitting
- Use `shellcheck` to lint your scripts
- Log with timestamps using `echo "[$(date)] ..."`
