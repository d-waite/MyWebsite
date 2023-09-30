import { sql } from "drizzle-orm";
import { serial, text, varchar, timestamp, pgTable } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
    id: serial("id"),
    firstName: varchar("first_name"),
    lastName: varchar("last_name"),
    email: varchar("email"),
    phone: varchar("phone"),
    inquiry: text("inquiry"),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").default(sql`now()`),
});