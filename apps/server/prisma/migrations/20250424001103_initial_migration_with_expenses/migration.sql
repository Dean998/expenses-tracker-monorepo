-- CreateTable
CREATE TABLE "Expense" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "date" TEXT NOT NULL,
    "category" TEXT,

    CONSTRAINT "Expense_pkey" PRIMARY KEY ("id")
);
