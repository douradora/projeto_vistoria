import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class Modelo1641514896801 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name:"ModeloVeiculo",
            columns:[{
                name:"idModelo",
                type:"uuid",
                isPrimary:true
            },
            {
                name:"montadora",
                type:"varchar",
                isUnique:true,
                isNullable:false,
                length:"20"
                },
            {
                name:"modelo",
                type:"varchar",
                isNullable:false,
                length:"20"

            },
            {   
                name:"created_at",
                type:"timestamp",
                default:"now()"
            }
            ]

        })

    )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("ModeloVeiculo")
    }

}
