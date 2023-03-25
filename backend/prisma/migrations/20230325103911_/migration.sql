/*
  Warnings:

  - A unique constraint covering the columns `[id,belongsToId]` on the table `Application` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Application_id_belongsToId_key" ON "Application"("id", "belongsToId");
