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
  - Added the required column `Dados_vistoria` to the `Vistoria` table without a default value. This is not possible if the table is not empty.

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
ALTER TABLE `user` MODIFY `created_at` DATETIME NOT NULL DEFAULT now();

-- AlterTable
ALTER TABLE `veiculo` MODIFY `created_at` DATETIME NOT NULL DEFAULT now();

-- AlterTable
ALTER TABLE `vistoria` ADD COLUMN `Dados_vistoria` JSON NOT NULL,
    ALTER COLUMN `Obs` DROP DEFAULT,
    MODIFY `created_at` DATETIME NOT NULL DEFAULT now();

-- AddForeignKey
ALTER TABLE `Vistoria` ADD CONSTRAINT `Vistoria_VeiculoPlaca_fkey` FOREIGN KEY (`VeiculoPlaca`) REFERENCES `Veiculo`(`Placa`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vistoria` ADD CONSTRAINT `Vistoria_destinoId_fkey` FOREIGN KEY (`destinoId`) REFERENCES `Destino`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vistoria` ADD CONSTRAINT `Vistoria_situacaoId_fkey` FOREIGN KEY (`situacaoId`) REFERENCES `Situacao`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
