---
sidebar_position: 1
description: Core GCP concepts including IAM, billing, resource hierarchy, and basic gcloud setup.
---

# GCP Foundation

Getting started with Google Cloud Platform requires understanding its resource model, IAM hierarchy, and the `gcloud` CLI.

## Resource Hierarchy

```
Organization
  └── Folders
       └── Projects
            └── Resources (VMs, Buckets, etc.)
```

Everything in GCP lives inside a **Project**. Use folders to group projects by team or environment.

## IAM Basics

| Role Type | Use Case |
|-----------|----------|
| Primitive (Owner/Editor/Viewer) | Broad access, legacy |
| Predefined (e.g., `roles/compute.instanceAdmin`) | Specific service access |
| Custom | Fine-grained control |

Grant access via **Policy** → binds a member to a role on a resource.

## gcloud Setup

```bash
# Authenticate
gcloud auth login

# Set project
gcloud config set project <PROJECT_ID>

# Set default region/zone
gcloud config set compute/region us-central1
gcloud config set compute/zone us-central1-a

# List active configurations
gcloud config configurations list
```

## Billing

- Link a billing account to every project
- Use budgets and alerts to avoid surprise charges
- Export billing data to BigQuery for analysis

## Common Mistakes

- Hardcoding project IDs in scripts — use environment variables
- Using Owner role unnecessarily — apply least privilege
- Forgetting to clean up test resources — set up lifecycle policies

## Next Steps

- Learn **GKE** for managed Kubernetes
- Explore **Cloud Storage** for object storage
- Study **VPC Networking** for network design
