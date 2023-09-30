import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import * as schema from '../../schema';
export { user } from '../../schema';
import postgres from 'postgres';

const connectionString = `${process.env.POSTGRES_URL}?sslmode=require`;
if (!connectionString) {
    throw new Error('POSTGRES_URL environment variable must be set');
}

// for query purposes
const queryClient = postgres(connectionString);
export const db = drizzle(queryClient, { schema });