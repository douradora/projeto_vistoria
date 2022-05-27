import { IOptions } from "./componetes/radioInput"
import { IbuttonList } from "./general/SideBar"

    //opçoes de  sinistros
export const situacao: IOptions[] = [
    { id: "avaria", label: "Avaria" },
    { id:"sinistro" , label: "Sinistro" },
    { id: "recebimento-nova", label: "recebimento-nova" },
    { id: "recebimento-usada", label: "recebimento-usada" },
    { id: "entrega-nova", label: "Entrega-nova" },
    { id: "entrega-usada", label: "Entrega-usada" },
    { id: "devoluçao(mais de 2 anos)", label: "Devoluçao(mais de 2 anos)" },
    { id: "emprestada", label: "Emprestada" },

]

//tabela da navbar de cadastro
export const navButton: IbuttonList[] = [
    { nome: "Dados iniciais", path: "dadosVeiculo" },
    { nome: "situacao", path: "infor" },
    { nome: "Observaçoes", path: "obs" },
    { nome: "Dados do Veiculo", path: "dadosVistoria" },
    { nome: "Fotos", path: "fotos" },
    { nome: "Condutor", path: "condutor" },
    {nome:"Envio",path:"envio"}




]

//botoes da sidebar pricipal
export const buttonSidebar: IbuttonList[] = [
    { nome: "Home", className: "botao", path: "/" },
    { nome: "Vistorias", className: "botao", path: "vistorias" },
    { nome: "Cadastrar", className: "botao", path: "cadastrar" }];
