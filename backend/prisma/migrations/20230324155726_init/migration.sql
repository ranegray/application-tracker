-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('GUEST', 'STANDARD');

-- CreateEnum
CREATE TYPE "UPDATE_STATUS" AS ENUM ('Saved', 'Applied', 'InterviewOffer', 'JobOffer', 'Rejected');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" "UserRole" NOT NULL DEFAULT 'STANDARD',
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "jobTitle" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "status" "UPDATE_STATUS" NOT NULL DEFAULT 'Saved',
    "contact" TEXT,
    "linkToApplication" TEXT,
    "dateApplied" TIMESTAMP(3),
    "resume" TEXT,
    "notes" TEXT,
    "belongsToId" TEXT NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_belongsToId_fkey" FOREIGN KEY ("belongsToId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
