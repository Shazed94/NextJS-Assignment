-- DropIndex
DROP INDEX `cart_userId_fkey` ON `cart`;

-- DropIndex
DROP INDEX `order_userId_fkey` ON `order`;

-- DropIndex
DROP INDEX `product_userId_fkey` ON `product`;

-- DropIndex
DROP INDEX `product_meta_productId_fkey` ON `product_meta`;

-- DropIndex
DROP INDEX `product_review_productId_fkey` ON `product_review`;

-- AlterTable
ALTER TABLE `cart` MODIFY `userId` BIGINT UNSIGNED NULL;

-- AlterTable
ALTER TABLE `product` ALTER COLUMN `startsAt` DROP DEFAULT,
    ALTER COLUMN `endsdAt` DROP DEFAULT;
