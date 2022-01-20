import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class funcao1642614078085 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                    {
                        name:"funcao",
                        columns:[
                            {
                            name:"id_funcao",
                            type:"uuid",
                            isPrimary:true,
                            

                        },
                        {
                            name:"nome_funcao",
                            type:"varchar",
                            isNullable:false,
                            
                        }
                    
                    
                    ]


                    }


            )



        )



        
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('funcao');

    }

}
