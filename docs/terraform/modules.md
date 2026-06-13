---
sidebar_position: 2
description: Building reusable Terraform modules with inputs, outputs, and versioning.
---

# Terraform Modules

Modules help you organize and reuse Terraform code across projects.

## Module Structure

```
modules/vpc/
  main.tf
  variables.tf
  outputs.tf
  README.md
```

## Example Module

```hcl
# modules/vpc/main.tf
resource "google_compute_network" "vpc" {
  name                    = var.name
  auto_create_subnetworks = false
}

resource "google_compute_subnetwork" "subnet" {
  for_each = var.subnets

  name          = each.key
  ip_cidr_range = each.value.cidr
  region        = each.value.region
  network       = google_compute_network.vpc.id
}
```

## Using a Module

```hcl
module "vpc" {
  source = "../modules/vpc"

  name = "prod-vpc"
  subnets = {
    "subnet-a" = { cidr = "10.0.1.0/24", region = "us-central1" }
    "subnet-b" = { cidr = "10.0.2.0/24", region = "us-east1" }
  }
}
```

## Versioning

Use git tags or Terraform Registry for versioning.

```hcl
module "vpc" {
  source  = "github.com/souravlobra/tf-modules//vpc?ref=v1.0.0"
}
```

## Tips

- Keep modules focused on one thing
- Use semantic versioning
- Document inputs and outputs in README
