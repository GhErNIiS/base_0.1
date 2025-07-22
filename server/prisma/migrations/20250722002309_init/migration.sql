-- CreateTable
CREATE TABLE "Equipment" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "total" INTEGER NOT NULL,

    CONSTRAINT "Equipment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InWork" (
    "id" SERIAL NOT NULL,
    "equipmentId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InWork_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InRent" (
    "id" SERIAL NOT NULL,
    "equipmentId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "client" TEXT,
    "rentedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InRent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InWork" ADD CONSTRAINT "InWork_equipmentId_fkey" FOREIGN KEY ("equipmentId") REFERENCES "Equipment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InRent" ADD CONSTRAINT "InRent_equipmentId_fkey" FOREIGN KEY ("equipmentId") REFERENCES "Equipment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
