import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class locadora1641514976532 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name:"Locadora",
            columns:[{
                name:"idLocadora",
                type:"uuid",
                isPrimary:true
            },
            {
                name:"NomeLocadora",
                type:"varchar",
                isUnique:true,
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
