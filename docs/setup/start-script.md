---
title: Run using start script
sidebar_position: 1
---

# Run using start script in source code

:::info
Prerequisites: git, docker
:::

```sh
git clone https://github.com/lncapital/torq
cd torq/docker
./configure.sh && ./start.sh
```

The configure script creates a docker compose file and the start script docker-compose ups that file. You may need sudo on either of those commands if your user account does not have permission to create local files or run docker commands.
