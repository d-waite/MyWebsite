CREATE TABLE IF NOT EXISTS "user" (
	"id" serial NOT NULL,
	"first_name" varchar,
	"last_name" varchar,
	"email" varchar,
	"phone" varchar,
	"inquiry" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
