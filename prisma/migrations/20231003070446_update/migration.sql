/*
  Warnings:

  - A unique constraint covering the columns `[product_id]` on the table `invoices_products` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `invoices_products_product_id_key` ON `invoices_products`(`product_id`);
