CREATE TABLE "mockInterview" (
	"id" serial PRIMARY KEY NOT NULL,
	"jsonMockresp" text NOT NULL,
	"jobPosition" varchar(255) NOT NULL,
	"jobExperience" varchar(255) NOT NULL,
	"jobDesc" text NOT NULL,
	"createdBy" varchar(255) NOT NULL,
	"createdAt" varchar(255) NOT NULL,
	"mockId" varchar(255) NOT NULL
);
