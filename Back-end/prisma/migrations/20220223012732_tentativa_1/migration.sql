/*
  Warnings:

  - You are about to alter the column `created_at` on the `locadora` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `created_at` on the `modeloveiculo` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `created_at` on the `opm` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `created_at` on the `photos` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `created_at` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the column `ModeloId` on the `veiculo` table. All the data in the column will be lost.
  - You are about to alter the column `created_at` on the `veiculo` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the column `CondutorCpf` on the `vistoria` table. All the data in the column will be lost.
  - You are about to drop the column `Dados_vistoria` on the `vistoria` table. All the data in the column will be lost.
  - You are about to drop the column `Nome_condutor` on the `vistoria` table. All the data in the column will be lost.
  - You are about to drop the column `Obs` on the `vistoria` table. All the data in the column will be lost.
  - You are about to drop the column `VeiculoPlaca` on the `vistoria` table. All the data in the column will be lost.
  - You are about to alter the column `created_at` on the `vistoria` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Added the required column `modeloId` to the `Veiculo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `condutorCpf` to the `Vistoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dados_vistoria` to the `Vistoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_condutor` to the `Vistoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `obs` to the `Vistoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `veiculoPlaca` to the `Vistoria` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `veiculo` DROP FOREIGN KEY `Veiculo_ModeloId_fkey`;

-- DropForeignKey
ALTER TABLE `vistoria` DROP FOREIGN KEY `Vistoria_VeiculoPlaca_fkey`;

-- AlterTable
ALTER TABLE `locadora` MODIFY `created_at` DATETIME NOT NULL DEFAULT now();

-- AlterTable
ALTER TABLE `modeloveiculo` MODIFY `created_at` DATETIME NOT NULL DEFAULT now();

-- AlterTable
ALTER TABLE `opm` MODIFY `created_at` DATETIME NOT NULL DEFAULT now();

-- AlterTable
ALTER TABLE `photos` MODIFY `created_at` DATETIME NOT NULL DEFAULT now();

-- AlterTable
ALTER TABLE `user` MODIFY `created_at` DATETIME NOT NULL DEFAULT now();

-- AlterTable
ALTER TABLE `veiculo` DROP COLUMN `ModeloId`,
    ADD COLUMN `modeloId` INTEGER NOT NULL,
    MODIFY `created_at` DATETIME NOT NULL DEFAULT now();

-- AlterTable
ALTER TABLE `vistoria` DROP COLUMN `CondutorCpf`,
    DROP COLUMN `Dados_vistoria`,
    DROP COLUMN `Nome_condutor`,
    DROP COLUMN `Obs`,
    DROP COLUMN `VeiculoPlaca`,
    ADD COLUMN `condutorCpf` VARCHAR(191) NOT NULL,
    ADD COLUMN `dados_vistoria` JSON NOT NULL,
    ADD COLUMN `nome_condutor` VARCHAR(191) NOT NULL,
    ADD COLUMN `obs` VARCHAR(191) NOT NULL,
    ADD COLUMN `veiculoPlaca` VARCHAR(10) NOT NULL,
    MODIFY `created_at` DATETIME NOT NULL DEFAULT now();

-- AddForeignKey
ALTER TABLE `Veiculo` ADD CONSTRAINT `Veiculo_modeloId_fkey` FOREIGN KEY (`modeloId`) REFERENCES `ModeloVeiculo`(`idModelo`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vistoria` ADD CONSTRAINT `Vistoria_veiculoPlaca_fkey` FOREIGN KEY (`veiculoPlaca`) REFERENCES `Veiculo`(`placa`) ON DELETE CASCADE ON UPDATE CASCADE;
