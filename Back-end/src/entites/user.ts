import { Entity,Column,CreateDateColumn,PrimaryColumn } from "typeorm";


@Entity("User")
export class user{

    @PrimaryColumn()
    cpf_user:string;

    @Column()
    name:string;
    @Column()
    email: String
    @Column()
    password:String
   
    @CreateDateColumn()
    created_at:Date;



}