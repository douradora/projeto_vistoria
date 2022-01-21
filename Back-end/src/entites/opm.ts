import {Column, Entity} from "typeorm";

@Entity('Opm')
export class opm {
    @Column()
    idOpm:string
    @Column()
    NomeOpm:string
    @Column()
    ComandoOpm:string

    @Column()
    created_at:Date

}
