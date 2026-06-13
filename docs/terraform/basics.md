---
sidebar_position: 1
description: Get started with Terraform — syntax, state, providers, and your first deployment.
---

# Terraform Basics

Terraform is an Infrastructure as Code (IaC) tool that lets you define cloud resources using declarative code.

## Key Concepts

| Term | Meaning |
|------|---------|
| Provider | Cloud or service API (e.g., Google Cloud, AWS) |
| Resource | Infrastructure component to create |
| State | Tracks real-world resources in a `.tfstate` file |
| Module | Reusable package of Terraform code |
| Plan | Preview of changes before applying |

## First Configuration

```hcl
terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

resource "google_compute_instance" "vm" {
  name         = "devops-vm"
  machine_type = "e2-micro"
  zone         = "us-central1-a"

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-11"
    }
  }

  network_interface {
    network = "default"
    access_config {}
  }
}
```

## Workflow

```bash
# Initialize providers and modules
terraform init

# Preview changes
terraform plan

# Apply changes
terraform apply

# Destroy resources
terraform destroy
```

## Variables

```hcl
variable "project_id" {
  description = "GCP Project ID"
  type        = string
}

variable "region" {
  description = "GCP Region"
  type        = string
  default     = "us-central1"
}
```

Pass values via:
- `-var="project_id=my-project"`
- `terraform.tfvars` file
- Environment variables (`TF_VAR_project_id`)

## Tips

- Always use **remote state** for team collaboration
- Use ** workspaces** or separate state files for environments
- Run `terraform fmt` before committing code
- Version pin both providers and modules

Dive deeper in the **Modules** section for reusable design patterns.
