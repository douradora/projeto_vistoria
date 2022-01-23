-- CreateTable
CREATE TABLE `Destino` (
    `id` VARCHAR(191) NOT NULL,
    `Descricao` VARCHAR(191) NOT NULL,
    `created_at` DATETIME NOT NULL DEFAULT now(),

    UNIQUE INDEX `Destino_Descricao_key`(`Descricao`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Locadora` (
    `idLocadora` VARCHAR(191) NOT NULL,
    `NomeLocadora` VARCHAR(191) NOT NULL,
    `created_at` DATETIME NOT NULL DEFAULT now(),

    UNIQUE INDEX `Locadora_NomeLocadora_key`(`NomeLocadora`),
    PRIMARY KEY (`idLocadora`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ModeloVeiculo` (
    `idModelo` VARCHAR(191) NOT NULL,
    `montadora` VARCHAR(191) NOT NULL,
    `modelo` VARCHAR(191) NOT NULL,
    `created_at` DATETIME NOT NULL DEFAULT now(),

    UNIQUE INDEX `ModeloVeiculo_montadora_key`(`montadora`),
    PRIMARY KEY (`idModelo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Opm` (
    `idOpm` VARCHAR(191) NOT NULL,
    `NomeOpm` VARCHAR(191) NOT NULL,
    `ComandoOpm` VARCHAR(191) NOT NULL,
    `created_at` DATETIME NOT NULL DEFAULT now(),

    UNIQUE INDEX `Opm_NomeOpm_key`(`NomeOpm`),
    PRIMARY KEY (`idOpm`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Situacao` (
    `id` VARCHAR(191) NOT NULL,
    `Descricao` VARCHAR(191) NOT NULL,
    `created_at` DATETIME NOT NULL DEFAULT now(),

    UNIQUE INDEX `Situacao_Descricao_key`(`Descricao`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `cpf_user` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `created_at` DATETIME NOT NULL DEFAULT now(),

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`cpf_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Veiculo` (
    `Placa` VARCHAR(191) NOT NULL,
    `Prefixo` VARCHAR(191) NOT NULL,
    `quilometragem` INTEGER NOT NULL,
    `combustivel` DOUBLE NOT NULL,
    `ModeloId` VARCHAR(191) NOT NULL,
    `OPMID` VARCHAR(191) NOT NULL,
    `LocadoraId` VARCHAR(191) NOT NULL,
    `created_at` DATETIME NOT NULL DEFAULT now(),

    UNIQUE INDEX `Veiculo_Prefixo_key`(`Prefixo`),
    PRIMARY KEY (`Placa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funcao` (
    `id_funcao` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_funcao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_funcao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vistoria` (
    `idVistoria` INTEGER NOT NULL AUTO_INCREMENT,
    `VeiculoPlaca` VARCHAR(191) NOT NULL,
    `id_user` VARCHAR(191) NOT NULL,
    `CondutorCpf` VARCHAR(191) NOT NULL,
    `Nome_condutor` VARCHAR(191) NOT NULL,
    `situacaoId` VARCHAR(191) NOT NULL,
    `destinoId` VARCHAR(191) NOT NULL,
    `created_at` DATETIME NOT NULL DEFAULT now(),

    PRIMARY KEY (`idVistoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Veiculo` ADD CONSTRAINT `Veiculo_LocadoraId_fkey` FOREIGN KEY (`LocadoraId`) REFERENCES `Locadora`(`idLocadora`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Veiculo` ADD CONSTRAINT `Veiculo_ModeloId_fkey` FOREIGN KEY (`ModeloId`) REFERENCES `ModeloVeiculo`(`idModelo`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Veiculo` ADD CONSTRAINT `Veiculo_OPMID_fkey` FOREIGN KEY (`OPMID`) REFERENCES `Opm`(`idOpm`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vistoria` ADD CONSTRAINT `vistoria_VeiculoPlaca_fkey` FOREIGN KEY (`VeiculoPlaca`) REFERENCES `Veiculo`(`Placa`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vistoria` ADD CONSTRAINT `vistoria_destinoId_fkey` FOREIGN KEY (`destinoId`) REFERENCES `Destino`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vistoria` ADD CONSTRAINT `vistoria_situacaoId_fkey` FOREIGN KEY (`situacaoId`) REFERENCES `Situacao`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
