/*
  Warnings:

  - Made the column `middleName` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `middleName` VARCHAR(50) NOT NULL;
