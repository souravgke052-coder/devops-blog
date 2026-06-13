---
sidebar_position: 1
description: Kubernetes basics for DevOps — architecture, core objects, and first commands.
---

# Kubernetes Intro

Kubernetes (K8s) is the industry standard for container orchestration. This guide covers the absolute basics.

## Architecture

```
Control Plane
├── API Server
├── etcd (cluster state)
├── Scheduler
├── Controller Manager
└── Cloud Controller Manager

Worker Nodes
├── kubelet
├── kube-proxy
└── Container Runtime (containerd, etc.)
```

## Core Objects

| Object | Purpose |
|--------|---------|
| Pod | Smallest deployable unit |
| Deployment | Manages replica sets |
| Service | Exposes pods internally/externally |
| ConfigMap | Non-sensitive configuration |
| Secret | Sensitive data (base64 encoded) |
| Ingress | HTTP/HTTPS routing |

## First Commands

```bash
# Check cluster info
kubectl cluster-info

# List nodes
kubectl get nodes

# List pods
kubectl get pods -A

# Create a deployment
kubectl create deployment nginx --image=nginx

# Expose deployment
kubectl expose deployment nginx --port=80 --type=LoadBalancer

# Describe a resource
kubectl describe pod <pod-name>

# View logs
kubectl logs <pod-name>
```

## Sample Deployment YAML

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
        - name: nginx
          image: nginx:latest
          ports:
            - containerPort: 80
```

## Tips

- Use `kubectl explain <resource>` to learn YAML fields
- Set up `kubeconfig` contexts for multiple clusters
- Use `k9s` for a terminal UI to manage clusters

Continue to **Deployments** for rolling updates, health checks, and autoscaling.
