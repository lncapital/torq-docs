# Setup with Docker Compose (recommended)

The quickest way to run Torq is from a prebuilt docker image. This guide shows you how to set up and run Torq using Docker Compose. You can also compile your own docker image following this guide.

## Create a docker compose file

Create a file named docker-compose.yml and store it in a seperate directory. Add this to the file and fill inn password and username information as indicated by `<ThisNotation>` (also replace/delete `<` and `>`).

```yml
version: "3.7"
services:
  torq:
    # Consider specifying the exact version you want instead of "latest" (e.g. "0.4.1")
    image: "lncapital/torq:latest"
    restart: always
    depends_on:
      - "db"
    command:
      - --db.user
      - <YourDbUsername>
      - --db.password
      - <YourDbPassword>
      - --db.name
      - torq
      - --db.host
      - db
      - --db.port
      - "5432"
      - --torq.password
      - <YourFrontendPassword>
      - start
  db:
    image: "timescale/timescaledb:latest-pg14"
    restart: always
    environment:
      POSTGRES_PASSWORD: <YourPostgresDbRootPassword>
    ports:
      - "5432:5432"
```

## Create a database and user for Torq

### Start docker compose

Start the containers by running `docker-compose up -d`. Torq will not start correctly yet as the database is currently not configured.

### Create a database and user

Shell into the timescale container to run `psql`.

```sh
docker-compose exec db bash
psql -U postgres
```

Inside the postgres interactive terminal run the following three SQL commands to create a database and user. Again change `<DBPassword>` to your prefered password for the database user.

```postgresql
CREATE DATABASE torq;
CREATE USER torq WITH ENCRYPTED PASSWORD '<DBPassword>';
GRANT ALL PRIVILEGES ON DATABASE torq TO torq;
```

**After creating the database, exit psql and the TimescaleDB container by hitting `CTRL d` twice.**

## Start Torq

Restart the containers by running `docker-compose down && docker-compose up -d`. You can now visit `https://localhost:8080`. Remember to visit the settings page to enter LND credentials.

:::caution Remember to upload your LND credentials!
Head Up! Torq will not subscribe to data from LND until you have uploaded the readme.macaroon and tls.cert file on the Settings page. You also need to spesify the ip and port to the GRPC (e.g. `0.0.0.0:10009`)
:::
