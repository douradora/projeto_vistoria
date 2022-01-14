import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class vistoriador1642181997789 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
              new Table({
            name:"vistoriador",
            columns:[
            {
                name:"idUser",
                type:"Varchar",
                isUnique:true,
                isNullable:false,
                isPrimary:true,
                length:"15"
               
                },
                {
                    name:"Matricula",
                    type:"varchar",
                    isNullable:false,
                    isUnique:true,
                    length:"20",
                    
                    },
                    {
                        name:"funcao",
                        type:"varchar",
                        length:"30"
                        },
                    {   
                name:"created_at",
                type:"timestamp",
                default:"now()"
            }
            ],foreignKeys:[
                {
                    name:"fk_idUser",
                    columnNames:["idUser"],
                    referencedTableName:"login",
                    referencedColumnNames:["CpfUser"]
                },



            ]

        })

        )
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("vistoriador")
    }

}
