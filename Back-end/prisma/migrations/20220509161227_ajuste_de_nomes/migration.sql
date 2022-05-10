/*
  Warnings:

  - The primary key for the `locadora` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `NomeLocadora` on the `locadora` table. All the data in the column will be lost.
  - You are about to drop the column `idLocadora` on the `locadora` table. All the data in the column will be lost.
  - You are about to alter the column `created_at` on the `locadora` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - The primary key for the `modeloveiculo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idModelo` on the `modeloveiculo` table. All the data in the column will be lost.
  - You are about to alter the column `created_at` on the `modeloveiculo` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - The primary key for the `opm` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ComandoOpm` on the `opm` table. All the data in the column will be lost.
  - You are about to drop the column `NomeOpm` on the `opm` table. All the data in the column will be lost.
  - You are about to drop the column `idOpm` on the `opm` table. All the data in the column will be lost.
  - You are about to alter the column `created_at` on the `opm` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - The primary key for the `photos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idPhotos` on the `photos` table. All the data in the column will be lost.
  - You are about to drop the column `urlPhotos` on the `photos` table. All the data in the column will be lost.
  - You are about to alter the column `created_at` on the `photos` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the column `adm` on the `user` table. All the data in the column will be lost.
  - You are about to alter the column `created_at` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the column `OPMID` on the `veiculo` table. All the data in the column will be lost.
  - You are about to drop the column `combustivel` on the `veiculo` table. All the data in the column will be lost.
  - You are about to drop the column `locadoraId` on the `veiculo` table. All the data in the column will be lost.
  - You are about to drop the column `modeloId` on the `veiculo` table. All the data in the column will be lost.
  - You are about to drop the column `quilometragem` on the `veiculo` table. All the data in the column will be lost.
  - You are about to alter the column `created_at` on the `veiculo` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - The primary key for the `vistoria` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `condutorCpf` on the `vistoria` table. All the data in the column will be lost.
  - You are about to drop the column `idPhotos` on the `vistoria` table. All the data in the column will be lost.
  - You are about to drop the column `idVistoria` on the `vistoria` table. All the data in the column will be lost.
  - You are about to drop the column `nome_condutor` on the `vistoria` table. All the data in the column will be lost.
  - You are about to drop the column `veiculoPlaca` on the `vistoria` table. All the data in the column will be lost.
  - You are about to alter the column `created_at` on the `vistoria` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - A unique constraint covering the columns `[nome_locadora]` on the table `Locadora` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nome_opm]` on the table `Opm` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nome_locadora` to the `Locadora` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comando_opm` to the `Opm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_opm` to the `Opm` table without a default value. This is not possible if the table is not empty.
  - The required column `id_photos` was added to the `Photos` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `url_photos` to the `Photos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locadora_id` to the `Veiculo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modelo_id` to the `Veiculo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `opm_id` to the `Veiculo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `combustivel` to the `Vistoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `condutor_cpf` to the `Vistoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `condutor_nome` to the `Vistoria` table without a default value. This is not possible if the table is not empty.
  - The required column `id_vistoria` was added to the `Vistoria` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `quilometragem` to the `Vistoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `veiculo_placa` to the `Vistoria` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `veiculo` DROP FOREIGN KEY `Veiculo_OPMID_fkey`;

-- DropForeignKey
ALTER TABLE `veiculo` DROP FOREIGN KEY `Veiculo_locadoraId_fkey`;

-- DropForeignKey
ALTER TABLE `veiculo` DROP FOREIGN KEY `Veiculo_modeloId_fkey`;

-- DropForeignKey
ALTER TABLE `vistoria` DROP FOREIGN KEY `Vistoria_veiculoPlaca_fkey`;

-- DropIndex
DROP INDEX `Locadora_NomeLocadora_key` ON `locadora`;

-- DropIndex
DROP INDEX `Opm_NomeOpm_key` ON `opm`;

-- AlterTable
ALTER TABLE `locadora` DROP PRIMARY KEY,
    DROP COLUMN `NomeLocadora`,
    DROP COLUMN `idLocadora`,
    ADD COLUMN `id_locadora` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `nome_locadora` VARCHAR(191) NOT NULL,
    MODIFY `created_at` DATETIME NOT NULL DEFAULT now(),
    ADD PRIMARY KEY (`id_locadora`);

-- AlterTable
ALTER TABLE `modeloveiculo` DROP PRIMARY KEY,
    DROP COLUMN `idModelo`,
    ADD COLUMN `id_modelo` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `created_at` DATETIME NOT NULL DEFAULT now(),
    ADD PRIMARY KEY (`id_modelo`);

-- AlterTable
ALTER TABLE `opm` DROP PRIMARY KEY,
    DROP COLUMN `ComandoOpm`,
    DROP COLUMN `NomeOpm`,
    DROP COLUMN `idOpm`,
    ADD COLUMN `comando_opm` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_opm` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `nome_opm` VARCHAR(191) NOT NULL,
    MODIFY `created_at` DATETIME NOT NULL DEFAULT now(),
    ADD PRIMARY KEY (`id_opm`);

-- AlterTable
ALTER TABLE `photos` DROP PRIMARY KEY,
    DROP COLUMN `idPhotos`,
    DROP COLUMN `urlPhotos`,
    ADD COLUMN `id_photos` VARCHAR(191) NOT NULL,
    ADD COLUMN `url_photos` VARCHAR(191) NOT NULL,
    MODIFY `created_at` DATETIME NOT NULL DEFAULT now(),
    ADD PRIMARY KEY (`id_photos`);

-- AlterTable
ALTER TABLE `user` DROP COLUMN `adm`,
    ADD COLUMN `is_adm` BOOLEAN NULL DEFAULT false,
    MODIFY `created_at` DATETIME NOT NULL DEFAULT now();

-- AlterTable
ALTER TABLE `veiculo` DROP COLUMN `OPMID`,
    DROP COLUMN `combustivel`,
    DROP COLUMN `locadoraId`,
    DROP COLUMN `modeloId`,
    DROP COLUMN `quilometragem`,
    ADD COLUMN `locadora_id` INTEGER NOT NULL,
    ADD COLUMN `modelo_id` INTEGER NOT NULL,
    ADD COLUMN `opm_id` INTEGER NOT NULL,
    MODIFY `created_at` DATETIME NOT NULL DEFAULT now();

-- AlterTable
ALTER TABLE `vistoria` DROP PRIMARY KEY,
    DROP COLUMN `condutorCpf`,
    DROP COLUMN `idPhotos`,
    DROP COLUMN `idVistoria`,
    DROP COLUMN `nome_condutor`,
    DROP COLUMN `veiculoPlaca`,
    ADD COLUMN `combustivel` DOUBLE NOT NULL,
    ADD COLUMN `condutor_cpf` VARCHAR(191) NOT NULL,
    ADD COLUMN `condutor_nome` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_photos_fk` VARCHAR(191) NULL,
    ADD COLUMN `id_vistoria` VARCHAR(191) NOT NULL,
    ADD COLUMN `quilometragem` INTEGER NOT NULL,
    ADD COLUMN `veiculo_placa` VARCHAR(10) NOT NULL,
    MODIFY `created_at` DATETIME NOT NULL DEFAULT now(),
    ADD PRIMARY KEY (`id_vistoria`);

-- CreateIndex
CREATE UNIQUE INDEX `Locadora_nome_locadora_key` ON `Locadora`(`nome_locadora`);

-- CreateIndex
CREATE UNIQUE INDEX `Opm_nome_opm_key` ON `Opm`(`nome_opm`);

-- AddForeignKey
ALTER TABLE `Veiculo` ADD CONSTRAINT `Veiculo_locadora_id_fkey` FOREIGN KEY (`locadora_id`) REFERENCES `Locadora`(`id_locadora`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Veiculo` ADD CONSTRAINT `Veiculo_modelo_id_fkey` FOREIGN KEY (`modelo_id`) REFERENCES `ModeloVeiculo`(`id_modelo`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Veiculo` ADD CONSTRAINT `Veiculo_opm_id_fkey` FOREIGN KEY (`opm_id`) REFERENCES `Opm`(`id_opm`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vistoria` ADD CONSTRAINT `Vistoria_veiculo_placa_fkey` FOREIGN KEY (`veiculo_placa`) REFERENCES `Veiculo`(`placa`) ON DELETE CASCADE ON UPDATE CASCADE;
