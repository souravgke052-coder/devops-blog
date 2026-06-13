---
sidebar_position: 2
description: Practical network troubleshooting commands and workflows.
---

# Network Troubleshooting

A step-by-step approach to diagnosing network issues in cloud and on-prem environments.

## Checklist

1. **Is the service running?**
   ```bash
   systemctl status nginx
   ss -tlnp | grep :80
   ```

2. **Can you reach the host?**
   ```bash
   ping <host>
   ```

3. **Is the port open?**
   ```bash
   nc -zv <host> <port>
   nmap -p <port> <host>
   ```

4. **Check DNS resolution**
   ```bash
   nslookup <host>
   dig <host>
   ```

5. **Inspect traffic**
   ```bash
   # Check active connections
   ss -s

   # Trace packets
   traceroute <host>
   mtr <host>
   ```

6. **Check firewall rules**
   ```bash
   sudo iptables -L -n -v
   ```

## Common Issues

| Symptom | Likely Cause |
|---------|--------------|
| Connection refused | Service not listening on port |
| Connection timeout | Firewall blocking or host unreachable |
| DNS resolution failure | DNS misconfiguration |
| Slow throughput | Bandwidth limit or MTU issues |
| Intermittent drops | Network congestion or faulty hardware |

## Cloud-Specific Tips

- Verify **Security Groups / Firewall Rules** (cloud-level)
- Check **VPC Routes** and **NAT Gateways**
- Ensure **subnets** allow egress/ingress for your traffic
- Use **Cloud Monitoring / Flow Logs** for packet-level visibility
