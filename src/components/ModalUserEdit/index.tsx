"use client"

import { useContext } from "react"
import { useForm } from "react-hook-form";
import { contactsContext } from "@/context/contactsContext";
import { InputComponent } from "../Input";
import { userContext } from "@/context/userContext";

interface iHandleSubmitValues {
    fullName?: string;
    phone?: string;
    email?: string;
    password?: string;
}

export const ModalEditUser = () => {

    const { openModalEditUser, setOpenModalEditUser } = useContext(contactsContext)
    const { editUser } = useContext(userContext)

    const { register, handleSubmit } = useForm<iHandleSubmitValues>({})

    return (
        <div className="bg-slate-800 w-10/12 max-w-[30rem] h-[27rem] border border-slate-600 p-2 text-slate-500 rounded">
            <div className="flex justify-between px-4">
                <h2 className="font-semibold">Editar informações do usuário</h2>
                <button className="px-[0.4rem] py-[0.6]" onClick={() => setOpenModalEditUser(!openModalEditUser)}>x</button>
            </div>
            <form action="" onSubmit={handleSubmit(editUser)} className="mt-4 w-full flex flex-col justify-center gap-4">
                <InputComponent placeholder="digite um email" type="text" labelContent="E-mail" name="email" register={register} />
                <InputComponent placeholder="digite o nome completo" type="text" labelContent="Nome completo" name="fullName" register={register} />
                <InputComponent placeholder="digite um telefone" type="text" labelContent="Telefone" name="phone" register={register} />
                <InputComponent placeholder="digite uma nova senha" type="text" labelContent="Senha" name="password" register={register} />
                <button className="font-bold bg-slate-600 w-10/12 rounded mx-auto p-2">Editar usuário</button>
            </form>
        </div>
    )
}