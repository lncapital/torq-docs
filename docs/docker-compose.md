# Setup with Docker Compose (recommended)

The quickest way to run Torq is from a prebuilt docker image. This guide shows you how to set up and run Torq using Docker Compose. You can also compile your own docker image following this guide.

## Create a database and user for Torq

### Start TimescaleDB
:::note
If you already have a PostgreSQL database with TimescaleDB plugin you can skip to the next section (creating a database user)
:::

Change `<DBPassword>` to your prefered databse root password and start the Timescale DB container with this command:

```sh
docker run -d --name timescaledb -p 5432:5432 \
-v <AbsoluteDataPath>:/var/lib/postgresql/data \
-e POSTGRES_PASSWORD=<DBPassword> timescale/timescaledb:latest-pg14
```

### Create a database and user

Shell into the timescale container to run `psql`.

```sh
docker exec -it timescaledb bash
psql -U postgres
```

Inside the postgres interactive terminal run the following three SQL commands to create a database and user. Again change `<DBPassword>` to your prefered password for the database user.

```postgresql
CREATE DATABASE torq;
CREATE USER torq WITH ENCRYPTED PASSWORD '<DBPassword>';
GRANT ALL PRIVILEGES ON DATABASE torq TO torq;
```

**After creating the database, exit psql and the TimescaleDB container by hitting `CTRL d` twice.**

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

## Start Torq

Start Torq by running `docker-compose- up -d`. You can now visit `https://localhost:8080`. Remember to visit the settings page to enter LND credentials.

:::caution Remember to upload your LND credentials!
Head Up! Torq will not subscribe to data from LND until you have uploaded the readme.macaroon and tls.cert file on the Settings page. You also need to spesify the ip and port to the GRPC (e.g. `0.0.0.0:10009`)
:::


