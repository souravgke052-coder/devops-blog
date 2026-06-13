---
sidebar_position: 2
description: Kubernetes Deployments, Services, and scaling strategies.
---

# Deployments & Services

Deploy applications reliably on Kubernetes using Deployments and Services.

## Deployment with Rolling Update

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
        - name: app
          image: myapp:v1.0
          ports:
            - containerPort: 8080
          readinessProbe:
            httpGet:
              path: /health
              port: 8080
```

## Service Types

| Type | Use Case |
|------|----------|
| ClusterIP | Internal traffic only |
| NodePort | Expose on each node's IP |
| LoadBalancer | Cloud provider LB |
| ExternalName | DNS alias |

## Horizontal Pod Autoscaler

```bash
kubectl autoscale deployment web-app --min=2 --max=10 --cpu-percent=70
```

## Tips

- Use readiness probes before sending traffic
- Set resource requests and limits
- Enable PDBs (Pod Disruption Budgets) for uptime
