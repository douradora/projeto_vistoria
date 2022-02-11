/*
  Warnings:

  - You are about to alter the column `created_at` on the `destino` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `created_at` on the `locadora` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `created_at` on the `modeloveiculo` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `created_at` on the `opm` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `created_at` on the `situacao` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `created_at` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `created_at` on the `veiculo` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `created_at` on the `vistoria` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `destino` MODIFY `created_at` DATETIME NOT NULL DEFAULT now();

-- AlterTable
ALTER TABLE `locadora` MODIFY `created_at` DATETIME NOT NULL DEFAULT now();

-- AlterTable
ALTER TABLE `modeloveiculo` MODIFY `created_at` DATETIME NOT NULL DEFAULT now();

-- AlterTable
ALTER TABLE `opm` MODIFY `created_at` DATETIME NOT NULL DEFAULT now();

-- AlterTable
ALTER TABLE `situacao` MODIFY `created_at` DATETIME NOT NULL DEFAULT now();

-- AlterTable
ALTER TABLE `user` MODIFY `funcao` INTEGER NULL,
    MODIFY `created_at` DATETIME NOT NULL DEFAULT now();

-- AlterTable
ALTER TABLE `veiculo` MODIFY `created_at` DATETIME NOT NULL DEFAULT now();

-- AlterTable
ALTER TABLE `vistoria` MODIFY `created_at` DATETIME NOT NULL DEFAULT now();
