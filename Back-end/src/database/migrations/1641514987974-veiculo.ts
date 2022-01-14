import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class veiculo1641514987974 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name:"Veiculo",
            columns:[{
                name:"Placa",
                type:"Varchar",
                length:"10",
                isPrimary:true
            },
            {
                name:"Prefixo",
                type:"varchar",
                isUnique:true,
                
                length:"20"
                },
            {
                name:"quilometragem",
                type:"Int",
                isNullable:false,
       

            },
            {
                name:"combustivel",
                type:"real",
                isNullable:false,
                default:"1/4"

            },
            {
                name:"ModeloId",
                type:"uuid",
                isNullable:false
               

            },
            
            {
                name:"OPMID",
                type:"uuid"},

            {
                name:"LocadoraId",
                type:"uuid",
                isNullable:false
            },


            {   
                name:"created_at",
                type:"timestamp",
                default:"now()"
            }
            ],
            foreignKeys:[
                {
                    name:"fk_modelo_id",
                    columnNames:["ModeloId"],
                    referencedTableName:"ModeloVeiculo",
                    referencedColumnNames:["idModelo"]
                },
                {
                    name:"fk_Opm_id",
                    columnNames:["OPMID"],
                    referencedTableName:"Opm",
                    referencedColumnNames:["idOpm"]
                },{
                    name:"fk_locadora_id",
                    columnNames:["LocadoraId"],
                    referencedTableName:"Locadora",
                    referencedColumnNames:["idLocadora"]
                }
            ]

        })

    )


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Veiculo")
    }

}
