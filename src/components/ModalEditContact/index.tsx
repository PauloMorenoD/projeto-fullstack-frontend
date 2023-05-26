"use client"

import { useContext, useState } from "react"
import { useForm } from "react-hook-form";
import { contactsContext } from "@/context/contactsContext";
import { InputComponent } from "../Input";

    interface iHandleSubmitValues {
        fullName?: string;
        phone?: string;
        email?: string;
    }

export const ModalEditContact = () => {

    const { openModalEditContact, setOpenModalEditContact, editContact } = useContext(contactsContext)

    const { register, handleSubmit } = useForm<iHandleSubmitValues>({})

    return (
        <div className="bg-slate-800 w-10/12 max-w-[30rem] h-96 border border-slate-600 p-2 text-slate-500 rounded">
            <div className="flex justify-between px-4">
                <h2 className="font-semibold">Editar informações de um contato</h2>
                <button className="px-[0.4rem] py-[0.6]" onClick={() => setOpenModalEditContact(!openModalEditContact)}>x</button>
            </div>
            <form action="" onSubmit={handleSubmit(editContact)}  className="mt-4 w-full flex flex-col justify-center gap-4">
                    <InputComponent placeholder="digite um email" type="text" labelContent="E-mail" name="email" register={register} />
                    <InputComponent placeholder="digite o nome completo" type="text" labelContent="Nome completo" name="description" register={register} />
                    <InputComponent placeholder="digite um telefone" type="text" labelContent="Telefone" name="description" register={register} />
                <button type="submit" className="font-bold bg-slate-600 w-10/12 rounded mx-auto p-2" >editar contato</button>
            </form>
        </div>
    )
}
