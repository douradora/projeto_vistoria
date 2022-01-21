import {Column, Entity} from "typeorm";

@Entity('veiculo')
export class veiculo {
    @Column()
    Placa:string
    @Column()
    Prefixo:string
    @Column()
    quilometragem:string
    @Column()
    combustivel:string
    @Column()
    ModeloId:string
    @Column()
    OPMID:string
    @Column()
    LocadoraId:string
    @Column()
    created_at:string


}
