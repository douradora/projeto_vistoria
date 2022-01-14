import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class situacao1641515007352 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name:"Situacao",
            columns:[{
                name:"id",
                type:"uuid",
                isPrimary:true
            },
            {
                name:"Descricao",
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
        await queryRunner.dropTable("Situacao")
    }
    

}
