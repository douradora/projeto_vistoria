import {Column, Entity} from "typeorm";

@Entity('situacao')
export class situacao {

    @Column()
    id:string
    @Column()
    nome:string
    @Column()
    created_at:Date

}
