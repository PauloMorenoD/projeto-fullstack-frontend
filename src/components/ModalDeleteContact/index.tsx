"use client"

import { useContext } from "react"
import { contactsContext } from "@/context/contactsContext";

interface iModalDeleteContactProps{
    idContact:number
}

export const ModalDeleteContact = ({ idContact }:iModalDeleteContactProps) => {

    const { openModalDeleteContact, contactId, setOpenModalDeleteContact, deleteContact } = useContext(contactsContext)

    return (
        <div className="bg-slate-800 w-10/12 max-w-[30rem] h-96 border border-slate-600 p-2 text-slate-500 rounded">
            <div className="flex justify-between px-4">
                <h2 className="font-semibold">Deletar contato</h2>
                <button className="px-[0.4rem] py-[0.6]" onClick={() => setOpenModalDeleteContact(!openModalDeleteContact)}>x</button>
            </div>
            <div className="flex items-center justify-center h-full">
                <button className="p-8 self-center text-xl text-white bg-red-800 rounded" onClick={()=>deleteContact(idContact)}>deseja deletar esse contato ?</button>
            </div>
        </div>
    )
}