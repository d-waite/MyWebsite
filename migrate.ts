const { drizzle } = require("drizzle-orm/postgres-js");
const { migrate } = require("drizzle-orm/postgres-js/migrator");
const postgres = require("postgres");

const connectionString = process.env.POSTGRES_URL;
if (!connectionString) throw new Error("Missing POSTGRES_URL env var");

const sql = postgres(connectionString, { max: 1 })
const db = drizzle(sql);

async function main() {
    await migrate(db, { migrationsFolder: "drizzle" });
}

main()