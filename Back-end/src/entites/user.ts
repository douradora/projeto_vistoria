import { Entity,Column,CreateDateColumn,PrimaryColumn } from "typeorm";


@Entity("User")
export class user{

    @PrimaryColumn()
    cpf_user:string;

    @Column()
    name:string;
    @Column()
    email: string
    @Column()
    password:string
   
    @CreateDateColumn()
    created_at:Date;



}