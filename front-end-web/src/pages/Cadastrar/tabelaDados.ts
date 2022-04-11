import { IOptions } from "../../componetes/radioInput"
import { IbuttonList } from "../../componetes/SideBar"


export  const situacao:IOptions[] = [
                                            {id:1,label:"Avaria"},
                                            {id:2,label:"Sinistro"},
                                            {id:3,label:"recebimento-nova"},
                                            {id:4,label:"recebimento-usada"},
                                            {id:5,label:"Entrega-nova"},
                                            {id:6,label:"Entrega-usada"},
                                            {id:7,label:"Devoluçao(mais de 2 anos)"},
                                            {id:8,label:"Emprestada"},
                                            
                                                                    ]

//tabela da navbar de cadastro
export const navButton:IbuttonList[]=[
    {nome:"Dados iniciais",path:"dadosVeiculo"},
    {nome:"situacao",path:"infor"},
    {nome:"Observaçoes",path:"obs"},
    {nome:"Dados do Veiculo",path:"dadosVistoria"},
    {nome:"Fotos",path:"fotos"},
    {nome:"Condutor",path:"condutor"},




]                                                                    