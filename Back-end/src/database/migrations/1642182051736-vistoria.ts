import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class vistoria1642182051736 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: "vistoria",
            columns: [{
                name: "idVistoria",
                type: "uuid",
                isPrimary: true
            },
            {
                name: "VeiculoPlaca",
                type: "Varchar",

                isNullable: false,
                length: "10"
            },
            {
                name: "id_user",
                type: "varchar",

                length: "15",

            },
            {
                name: "CondutorCpf",
                type: "varchar",
                length: "15",
                isNullable: false
            },
            {
                name:"Nome_condutor",
                type: "varchar",
                length: "50",
                isNullable:false


            },
            {
                name: "situacaoId",
                type: "uuid"
            },
            {
                name: "destinoId",
                type: "uuid"
            },
          
            {
                name: "created_at",
                type: "timestamp",

                default: "now()"
            }
            ],
            foreignKeys:
                [
                    {
                        name: "fk_veiculo_placa",
                        columnNames: ["VeiculoPlaca"],
                        referencedTableName: "Veiculo",
                        referencedColumnNames: ["Placa"]

                    },
                    {
                        name: "fk_user_id",
                        columnNames: ["id_user"],
                        referencedTableName: "User_",
                        referencedColumnNames: ["cpf_user"]
                    },

                    {
                        name: "fk_situacao_id",
                        columnNames: ["situacaoId"],
                        referencedTableName: "Situacao",
                        referencedColumnNames: ["id"]
                    },
                    {
                        name: "fk_destino_id",
                        columnNames: ["destinoId"],
                        referencedTableName: "Destino",
                        referencedColumnNames: ["id"]
                    },

                ]

        })
        )
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("vistoria");
    }

}
