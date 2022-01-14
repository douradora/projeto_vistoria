import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class opm1641514969778 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name:"Opm",
            columns:[{
                name:"idOpm",
                type:"uuid",
                isPrimary:true
            },
            {
                name:"NomeOpm",
                type:"varchar",
                isUnique:true,
                isNullable:false,
                length:"20"
                },
            {
                name:"ComandoOpm",
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
