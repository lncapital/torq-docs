---
title: Run using docker compose
---

# Setup with Docker Compose

This guide shows you how to set up and run Torq using Docker Compose.

## Create a docker compose file

Create a file named docker-compose.yml and store it in a seperate directory. Add this to the file and fill inn password and username information as indicated by `<ThisNotation>` (also replace/delete `<` and `>`).

```yml
version: "3.7"
services:
  torq:
    # Consider specifying the exact version you want instead of "latest" (e.g. "0.4.5")
    image: "lncapital/torq:latest"
    restart: always
    depends_on:
      - "db"
    command:
      - --db.host
      - db
      - --db.password
      - <YourDBPassword> # Must match db password below
      - --torq.password
      - <YourUIPassword> # Set password here to connect to login to the web ui
      - start
    ports:
      - "8080:8080"
  db:
    image: "timescale/timescaledb:latest-pg14"
    environment:
      POSTGRES_PASSWORD: <YourDBPassword> # Must match db password set above
    volumes:
      - torq_db:/var/lib/postgresql/data
volumes:
  torq_db:
```

## Start Torq

Restart the containers by running `docker-compose down && docker-compose up -d`. You can now visit `https://localhost:8080`. Remember to visit the settings page to enter LND credentials.

:::caution Remember to upload your LND credentials!
Head Up! Torq will not subscribe to data from LND until you have uploaded the readme.macaroon and tls.cert file on the Settings page. You also need to spesify the ip and port to the GRPC (e.g. `0.0.0.0:10009`)
:::
