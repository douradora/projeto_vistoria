import {Column, Entity} from "typeorm";

@Entity('Locadora')
export class locadora {
    @Column()
    idLocadora:string
    @Column()
    NomeLocadora:string
    @Column()
    created_at:Date
}
