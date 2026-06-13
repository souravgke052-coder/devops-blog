---
sidebar_position: 2
description: Google Kubernetes Engine (GKE) basics — cluster creation, node pools, and workloads.
---

# GKE

Google Kubernetes Engine (GKE) is GCP's managed Kubernetes service.

## Creating a Cluster

```bash
gcloud container clusters create dev-cluster \
  --zone us-central1-a \
  --num-nodes 3 \
  --machine-type e2-medium
```

## Node Pools

```bash
gcloud container node-pools create spot-pool \
  --cluster dev-cluster \
  --zone us-central1-a \
  --num-nodes 1 \
  --spot \
  --machine-type e2-medium
```

## Connecting kubectl

```bash
gcloud container clusters get-credentials dev-cluster --zone us-central1-a
kubectl get nodes
```

## Autopilot Mode

Use Autopilot for fully managed node provisioning.

```bash
gcloud container clusters create auto-cluster --enable-autopilot --region us-central1
```

## Best Practices

- Enable Workload Identity instead of static service account keys
- Use Binary Authorization for supply chain security
- Enable cluster autoscaling for cost efficiency
