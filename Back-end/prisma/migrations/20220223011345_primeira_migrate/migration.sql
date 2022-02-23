-- CreateTable
CREATE TABLE `Locadora` (
    `idLocadora` INTEGER NOT NULL AUTO_INCREMENT,
    `NomeLocadora` VARCHAR(191) NOT NULL,
    `created_at` DATETIME NOT NULL DEFAULT now(),

    UNIQUE INDEX `Locadora_NomeLocadora_key`(`NomeLocadora`),
    PRIMARY KEY (`idLocadora`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ModeloVeiculo` (
    `idModelo` INTEGER NOT NULL AUTO_INCREMENT,
    `montadora` VARCHAR(191) NOT NULL,
    `modelo` VARCHAR(191) NOT NULL,
    `created_at` DATETIME NOT NULL DEFAULT now(),

    UNIQUE INDEX `ModeloVeiculo_modelo_key`(`modelo`),
    PRIMARY KEY (`idModelo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Opm` (
    `idOpm` INTEGER NOT NULL AUTO_INCREMENT,
    `NomeOpm` VARCHAR(191) NOT NULL,
    `ComandoOpm` VARCHAR(191) NOT NULL,
    `created_at` DATETIME NOT NULL DEFAULT now(),

    UNIQUE INDEX `Opm_NomeOpm_key`(`NomeOpm`),
    PRIMARY KEY (`idOpm`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `cpf_user` VARCHAR(15) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `adm` BOOLEAN NULL DEFAULT false,
    `funcao` INTEGER NULL,
    `created_at` DATETIME NOT NULL DEFAULT now(),

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`cpf_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Veiculo` (
    `placa` VARCHAR(10) NOT NULL,
    `prefixo` VARCHAR(10) NOT NULL,
    `quilometragem` INTEGER NOT NULL,
    `combustivel` DOUBLE NOT NULL,
    `ModeloId` INTEGER NOT NULL,
    `OPMID` INTEGER NOT NULL,
    `locadoraId` INTEGER NOT NULL,
    `created_at` DATETIME NOT NULL DEFAULT now(),

    UNIQUE INDEX `Veiculo_prefixo_key`(`prefixo`),
    PRIMARY KEY (`placa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Funcao` (
    `id_funcao` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_funcao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_funcao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Photos` (
    `idPhotos` VARCHAR(191) NOT NULL,
    `urlPhotos` VARCHAR(191) NOT NULL,
    `created_at` DATETIME NOT NULL DEFAULT now(),

    PRIMARY KEY (`idPhotos`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vistoria` (
    `idVistoria` VARCHAR(191) NOT NULL,
    `VeiculoPlaca` VARCHAR(10) NOT NULL,
    `id_user` VARCHAR(13) NOT NULL,
    `CondutorCpf` VARCHAR(191) NOT NULL,
    `Nome_condutor` VARCHAR(191) NOT NULL,
    `situacao` CHAR(2) NOT NULL,
    `destinoId` VARCHAR(191) NOT NULL,
    `tipo_veiculo` VARCHAR(10) NOT NULL,
    `Dados_vistoria` JSON NOT NULL,
    `Obs` VARCHAR(191) NOT NULL,
    `created_at` DATETIME NOT NULL DEFAULT now(),

    PRIMARY KEY (`idVistoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_funcao_fkey` FOREIGN KEY (`funcao`) REFERENCES `Funcao`(`id_funcao`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Veiculo` ADD CONSTRAINT `Veiculo_locadoraId_fkey` FOREIGN KEY (`locadoraId`) REFERENCES `Locadora`(`idLocadora`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Veiculo` ADD CONSTRAINT `Veiculo_ModeloId_fkey` FOREIGN KEY (`ModeloId`) REFERENCES `ModeloVeiculo`(`idModelo`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Veiculo` ADD CONSTRAINT `Veiculo_OPMID_fkey` FOREIGN KEY (`OPMID`) REFERENCES `Opm`(`idOpm`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Photos` ADD CONSTRAINT `Photos_idPhotos_fkey` FOREIGN KEY (`idPhotos`) REFERENCES `Vistoria`(`idVistoria`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vistoria` ADD CONSTRAINT `Vistoria_VeiculoPlaca_fkey` FOREIGN KEY (`VeiculoPlaca`) REFERENCES `Veiculo`(`placa`) ON DELETE CASCADE ON UPDATE CASCADE;
