-- DropForeignKey
ALTER TABLE `cart` DROP FOREIGN KEY `cart_userId_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `order_userId_fkey`;

-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `product_userId_fkey`;

-- DropForeignKey
ALTER TABLE `product_meta` DROP FOREIGN KEY `product_meta_productId_fkey`;

-- DropForeignKey
ALTER TABLE `product_review` DROP FOREIGN KEY `product_review_productId_fkey`;

-- AlterTable
ALTER TABLE `product` ALTER COLUMN `startsAt` DROP DEFAULT,
    ALTER COLUMN `endsdAt` DROP DEFAULT;
