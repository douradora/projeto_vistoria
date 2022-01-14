import { Entity,Column,CreateDateColumn,PrimaryColumn } from "typeorm";


@Entity("login")
export class login{

    @PrimaryColumn()
    CpfUser:string;

    @Column()
    nome:string;
    @Column()
    user: String
    @Column()
    Senha:String
   
    @CreateDateColumn()
    created_at:Date;



}