import CardRegisterContainer from "./styles";

import Button from "../Button";
import Input from "../input";
import api from "../../services/api"

import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useState } from "react";
import {toast} from "react-toastify"


const CardRegister = () => {

const [account,setAccount] = useState("buyer")
 
const schema = yup.object().shape({
    name:yup.string().required("Nome e um campo obrigatorio"),
    email:yup.string().required("email e um campo obrigatorio").email(),
    cpf:yup.string().required("CPF e um campo obrigatorio"),
    cell_phone:yup.string().required("Celular e um campo obrigatorio"),
    birthday:yup.string().required("Data de Nascimento e um campo obrigatorio"),
    description:yup.string().required("Descricao e um campo obrigatorio"),
    cep:yup.string().required("CEP e um campo obrigatorio"),
    state:yup.string().required("Estado e um campo obrigatorio"),
    city:yup.string().required("Cidade e um campo obrigatorio"),
    street:yup.string().required("Rua e um campo obrigatorio"),
    number:yup.number().required("Numero e um campo obrigatorio"),
    complement:yup.string(),
    type:yup.string(),
    password:yup.string().required("Senha e um campo obrigatorio"),
    confirm_password:yup.string().oneOf([yup.ref("password")], "As senhas devem coincidir").required("Senha e um campo obrigatorio"),
})

const {register,
    handleSubmit,
     formState:{errors},
   } = useForm({
    resolver:yupResolver(schema),
})

const onSubmitFunction = async (data) => {
    const newData = {...data, type:account}
    delete newData.confirm_password

    const response =  await api.get(`${Number(data.cep)}/json/`).catch((err) => { toast.error("Este cep é inválido. Tente novamente.")})
    
    console.log(response.data)
    console.log(newData)
}
const onErrors = (er) => {
        console.log(er)
}


    return (
        
        <CardRegisterContainer  onSubmit={handleSubmit(onSubmitFunction,onErrors)}>
            <h2 >Cadastro</h2>
            <p>Informações pessoais</p>
            <Input register={register} errored = {errors.name} name="name" inputOrNot={true} className="div-input" width={"315px"} height={"48px"} label={"Nome"} placeholder = {"Ex: Samuel Leão"}>
            </Input>
            <Input register={register} errored = {errors.email} name="email" inputOrNot={true} className="div-input" width={"315px"} height={"48px"} label={"Email"} placeholder = {"Ex samuel@kenzie.com"}></Input>
            <Input register={register} errored = {errors.cpf} name="cpf" inputOrNot={true} className="div-input" width={"315px"} height={"48px"} label={"CPF"} placeholder = {"000.000.000-00"}></Input>
            <Input register={register} errored = {errors.cell_phone} name="cell_phone" inputOrNot={true} className="div-input" width={"315px"} height={"48px"} label={"Celular"} placeholder = {"(DDD) 90000-0000"}></Input>
            <Input register={register} errored = {errors.birthday} name="birthday" inputOrNot={true} className="div-input" width={"315px"} height={"48px"} label={"Data de Nascimento"} placeholder = {"00/00/00"}></Input>
            <Input register={register} errored = {errors.description} name="description" inputOrNot={false} className="div-input" width={"315px"} height={"80px"} label={"Descrição"} placeholder = {"Digitar Descrição"}></Input>
        
        <div className="register-down-size">
        <p>Informações de endereço</p>
        <Input register={register} errored = {errors.name} name="cep" inputOrNot={true} className="div-input" width={"315px"} height={"48px"} label={"CEP"} placeholder = {"Ex: 00000.000"}></Input>
       
        <div className="div-endereco-row">
        <Input register={register} errored = {errors.state} name="state" inputOrNot={true} className="div-input" width={"152px"} height={"48px"} label={"Estado"} placeholder = {"Digitar Estado"}></Input>
        <Input register={register} errored = {errors.city} name="city" inputOrNot={true} className="div-input" width={"152px"} height={"48px"} label={"Cidade"} placeholder = {"Digitar Cidade"}></Input>
        </div>

        <Input register={register} errored = {errors.street} name="street" inputOrNot={true} className="div-input" width={"315px"} height={"48px"} label={"Rua"} placeholder = {"Digitar Rua"}></Input>


        <div className="div-endereco-row">
        <Input register={register} errored = {errors.number} name="number" inputOrNot={true} className="div-input" width={"152px"} height={"48px"} label={"Numero"} placeholder = {"Digitar Estado"}></Input>
        <Input register={register}  name="complement" inputOrNot={true} className="div-input" width={"152px"} height={"48px"} label={"Complemento"} placeholder = {"Digitar Cidade"}></Input>
        </div>
        
        <p>Tipo de conta</p>

        <div className="div-endereco-row">

                <Button onClick={()=> setAccount("buyer")} className="btn-comprador" bgColor={"var(--brand-1)"} borderColor={"var(--brand-1)"} fontColor={"var(--white-fixed)"} type={"button"} width={"140px"} height={"48px"}>Comprador</Button>
                <Button onClick={()=> setAccount("seller")} bgColor={"var(--grey-4)"} borderColor={"var(--grey-4)"} fontColor={"var(--grey-0)"} type={"button"} width={"140px"} height={"48px"}>Vendedor</Button>
           
        </div> 

        <Input register={register} errored = {errors.password} name="password" type="password" inputOrNot={true} className="div-input" width={"315px"} height={"48px"} label={"Senha"} placeholder = {"Ex: Samuel Leão"}></Input>
        <Input register={register} errored = {errors.confirm_password} name="confirm_password" type="password" inputOrNot={true} className="div-input" width={"315px"} height={"48px"} label={"Confirmar senha"} placeholder = {"Ex: Samuel Leão"}></Input>



        
        <Button className="btn-finalizar" bgColor={"var(--brand-1)"} borderColor={"var(--brand-1)"} fontColor={"var(--white-fixed)"} type="submit" width={"315px"} height={"48px"}>Finalizar Cadastro</Button>
        </div>
        

        
        </CardRegisterContainer>
        
    )
}

export default CardRegister