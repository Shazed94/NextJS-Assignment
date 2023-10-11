-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `post_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `post_category` DROP FOREIGN KEY `post_category_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `post_category` DROP FOREIGN KEY `post_category_postId_fkey`;

-- DropForeignKey
ALTER TABLE `post_comment` DROP FOREIGN KEY `post_comment_postId_fkey`;

-- DropForeignKey
ALTER TABLE `post_meta` DROP FOREIGN KEY `post_meta_postId_fkey`;

-- DropForeignKey
ALTER TABLE `post_tag` DROP FOREIGN KEY `post_tag_postId_fkey`;

-- DropForeignKey
ALTER TABLE `post_tag` DROP FOREIGN KEY `post_tag_tagId_fkey`;
