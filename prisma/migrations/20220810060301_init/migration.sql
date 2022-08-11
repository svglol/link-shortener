-- CreateTable
CREATE TABLE "Link" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "url" TEXT NOT NULL,
    "uuid" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Link_id_key" ON "Link"("id");
