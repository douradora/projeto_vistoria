import {Column, Entity} from "typeorm";

@Entity('vistoria')
export class vistoria {
    @Column()
    idVistoria:string
    @Column()
    VeiculoPlaca:string
    @Column()
    id_user:string
    @Column()
    CondutorCpf:string
    @Column()
    Nome_condutor:string
    @Column() 
    situacaoid:string
    @Column()
    destinoid:string
    @Column()
    created_at:Date

}
