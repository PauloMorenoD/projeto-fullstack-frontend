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
}

export const ModalDeleteUser = () => {

    const { openModalDeleteUser, setOpenModalDeleteUser, contacts } = useContext(contactsContext)
    const { deleteUser } = useContext(userContext)

    return (
        <div className="bg-slate-800 w-10/12 max-w-[30rem] h-96 border border-slate-600 p-2 text-slate-500 rounded">
            <div className="flex justify-between px-4">
                <h2 className="font-semibold">Deletar usuário</h2>
                <button className="px-[0.4rem] py-[0.6]" onClick={() => setOpenModalDeleteUser(!openModalDeleteUser)}>x</button>
            </div>
            <div className="flex items-center justify-center h-full">
                <button className="p-8 self-center text-xl text-white bg-red-800 rounded" onClick={() => {deleteUser(), setOpenModalDeleteUser(!openModalDeleteUser)}}>Deseja deletar este usuário ? {contacts.length ? "primeiro delete todos os contatos": ''}</button>
            </div>
        </div>
    )
}