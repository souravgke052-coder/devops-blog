---
sidebar_position: 1
description: Core networking concepts for DevOps and cloud engineers.
---

# Networking Fundamentals

Understanding networking is critical for cloud infrastructure and troubleshooting.

## OSI Model

| Layer | Example |
|-------|---------|
| 7. Application | HTTP, DNS |
| 4. Transport | TCP, UDP |
| 3. Network | IP, Routing |
| 2. Data Link | MAC, ARP |
| 1. Physical | Cables, NICs |

## Key Concepts

- **CIDR**: Classless Inter-Domain Routing for IP ranges (e.g., `10.0.0.0/24`)
- **NAT**: Network Address Translation (private to public IPs)
- **DNS**: Resolves names to IPs
- **Load Balancing**: Distributes traffic across servers
- **Firewall**: Controls traffic based on rules

## Common Ports

| Port | Service |
|------|---------|
| 22 | SSH |
| 53 | DNS |
| 80 | HTTP |
| 443 | HTTPS |
| 3306 | MySQL |
| 5432 | PostgreSQL |
| 8080 | HTTP Alternate |

## Tools

```bash
# Check IP info
ip addr

# Trace route
tracert google.com    # Windows
traceroute google.com # Linux/Mac

# Test port connectivity
nc -zv google.com 443
telnet google.com 443

# Capture packets (requires root)
sudo tcpdump -i eth0 port 80
```

Continue to **Troubleshooting** for real-world debugging workflows.
