import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";


@Entity("ModeloVeiculo")
export class user {

    @PrimaryColumn()
    idModelo: string;

    @Column()
    montadora: string;

    @Column()
    modelo: string

    @CreateDateColumn()
    created_at: Date;



}