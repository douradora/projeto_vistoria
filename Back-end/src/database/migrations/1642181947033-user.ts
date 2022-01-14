import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class user1642181947033 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name:"login",
            columns:[{
                name:"CpfUser",
                type:"varchar",
                isPrimary:true,
                length:"15"

            },
            {
                name:"nome",
                type:"varchar",
                isUnique:false,
                isNullable:false,
                length:"50"
                },
                {   
                    name:"user",
                    type:"varchar",
                    isNullable:false,
                    isUnique:true



                },
                {
                    name:"Senha",
                    type:"Varchar",
                    isNullable:false,
                    
                    isUnique:false,
                    length:"100",
                    
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
        await queryRunner.dropTable("login")
    }

}
