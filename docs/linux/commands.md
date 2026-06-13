---
sidebar_position: 1
description: Essential Linux commands every DevOps engineer should know.
---

# Essential Linux Commands

A curated list of commands used daily in DevOps, Cloud, and SRE roles.

## File & Directory Operations

```bash
# List files with details
ls -lah

# Find files by name
find /var/log -name "*.log" -mtime -7

# Search inside files
grep -r "error" /var/log/

# Disk usage by directory
du -sh /var/log/*

# Check disk space
df -h
```

## Process Management

```bash
# List running processes
ps aux

# Real-time process viewer
top

# Better top
htop

# Kill a process by PID
kill -9 <PID>

# Find process by port
lsof -i :8080
```

## Networking

```bash
# Check connectivity
ping google.com

# Check open ports
netstat -tulpn

# DNS lookup
nslookup google.com

# Scan ports
nmap -p 1-65535 localhost
```

## System Info

```bash
# OS version
cat /etc/os-release

# Kernel version
uname -r

# Memory usage
free -h

# Uptime
uptime
```

## Tips

- Use `man <command>` for detailed documentation
- Alias frequently used commands in `~/.bashrc` or `~/.zshrc`
- Learn `tmux` or `screen` for persistent remote sessions

Explore more in the **Networking** and **Scripting** sections.
