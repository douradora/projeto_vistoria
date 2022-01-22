-- CreateTable
CREATE TABLE "Destino" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "Descricao" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT now()
);

-- CreateTable
CREATE TABLE "Locadora" (
    "idLocadora" TEXT NOT NULL PRIMARY KEY,
    "NomeLocadora" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT now()
);

-- CreateTable
CREATE TABLE "ModeloVeiculo" (
    "idModelo" TEXT NOT NULL PRIMARY KEY,
    "montadora" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT now()
);

-- CreateTable
CREATE TABLE "Opm" (
    "idOpm" TEXT NOT NULL PRIMARY KEY,
    "NomeOpm" TEXT NOT NULL,
    "ComandoOpm" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT now()
);

-- CreateTable
CREATE TABLE "Situacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "Descricao" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT now()
);

-- CreateTable
CREATE TABLE "User" (
    "cpf_user" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT now()
);

-- CreateTable
CREATE TABLE "Veiculo" (
    "Placa" TEXT NOT NULL PRIMARY KEY,
    "Prefixo" TEXT NOT NULL,
    "quilometragem" INTEGER NOT NULL,
    "combustivel" REAL NOT NULL DEFAULT 1/4,
    "ModeloId" TEXT NOT NULL,
    "OPMID" TEXT NOT NULL,
    "LocadoraId" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT now(),
    CONSTRAINT "Veiculo_LocadoraId_fkey" FOREIGN KEY ("LocadoraId") REFERENCES "Locadora" ("idLocadora") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Veiculo_ModeloId_fkey" FOREIGN KEY ("ModeloId") REFERENCES "ModeloVeiculo" ("idModelo") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Veiculo_OPMID_fkey" FOREIGN KEY ("OPMID") REFERENCES "Opm" ("idOpm") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "funcao" (
    "id_funcao" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome_funcao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "vistoria" (
    "idVistoria" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "VeiculoPlaca" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "CondutorCpf" TEXT NOT NULL,
    "Nome_condutor" TEXT NOT NULL,
    "situacaoId" TEXT NOT NULL,
    "destinoId" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT now(),
    CONSTRAINT "vistoria_VeiculoPlaca_fkey" FOREIGN KEY ("VeiculoPlaca") REFERENCES "Veiculo" ("Placa") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "vistoria_destinoId_fkey" FOREIGN KEY ("destinoId") REFERENCES "Destino" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "vistoria_situacaoId_fkey" FOREIGN KEY ("situacaoId") REFERENCES "Situacao" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Destino_Descricao_key" ON "Destino"("Descricao");

-- CreateIndex
CREATE UNIQUE INDEX "Locadora_NomeLocadora_key" ON "Locadora"("NomeLocadora");

-- CreateIndex
CREATE UNIQUE INDEX "ModeloVeiculo_montadora_key" ON "ModeloVeiculo"("montadora");

-- CreateIndex
CREATE UNIQUE INDEX "Opm_NomeOpm_key" ON "Opm"("NomeOpm");

-- CreateIndex
CREATE UNIQUE INDEX "Situacao_Descricao_key" ON "Situacao"("Descricao");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Veiculo_Prefixo_key" ON "Veiculo"("Prefixo");
