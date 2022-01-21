import {Column, Entity} from "typeorm";

@Entity('Destino')
export class destino {

    @Column()
    id:String

    @Column()
    descricao:String

    @Column()
    created_at:Date


}
