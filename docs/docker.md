# Setup with Docker

The quickest way to run Torq is from a prebuilt docker image. This guide shows you how to set up and run Torq using Docker containers. You can also compile your own docker image following this guide.

### Run TimescaleDB container
::: note

If you already have a PostgreSQL database with TimescaleDB plugin you can skip to the next section (creating a database user)

:::

Change `<DBPassword>` to your prefered databse root password and start the Timescale DB container with this command:

```shell
docker run -d --name timescaledb -p 5432:5432 \
-v <AbsoluteDataPath>:/var/lib/postgresql/data \
-e POSTGRES_PASSWORD=<DBPassword> timescale/timescaledb:latest-pg14
```

### Create a database and user for Torq

Shell into the timescale container to run `psql`.

```shell
docker exec -it timescaledb bash
psql -U postgres
```

Inside the postgres interactive terminal run the following three SQL commands to create a database and user. Again change `<YourDbPassword>` to your prefered password for the `torq` database user.

```sql
CREATE DATABASE torq;
CREATE USER torq WITH ENCRYPTED PASSWORD '<YourDbPassword>';
GRANT ALL PRIVILEGES ON DATABASE torq TO torq;
```

After creating the database, exit psql and the TimescaleDB container by hitting `CTRL d` twice.

### Docker Run Torq

At present Torq only connects to a single LND node. To run Torq  provide the database password set above and a frontend password of your choice. Database name and user are configurable but both default to `torq`.

```shell
docker run -p 8080:8080 --rm  \
--add-host=host.docker.internal:host-gateway \
lncapital/torq \
--db.host host.docker.internal \
--db.password <YourDbPassword> \
--torq.password <ChooseYourFrontendPassword> \
start
```