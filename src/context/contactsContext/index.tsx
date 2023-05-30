"use client"

import { createContext, useEffect, useState } from "react";
import { IContactsData, IContactsDataPartial, iContactsProviderProps, iContactsProviderValues, IContactsReturnedData } from "./interfaces";
import { api } from "@/services";


export const contactsContext = createContext({} as iContactsProviderValues)

export const ContactsProvider = ({ children }: iContactsProviderProps) => {
    
    const [contacts, setContacts] = useState<IContactsReturnedData[]>([])
    const [AllContacts, setAllContacts] = useState<IContactsReturnedData[]>([])
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [openModalEditUser, setOpenModalEditUser] = useState<boolean>(false)
    const [openModalDeleteUser, setOpenModalDeleteUser] = useState<boolean>(false)
    const [openModalEditContact, setOpenModalEditContact] = useState<boolean>(false)
    const [openModalDeleteContact, setOpenModalDeleteContact] = useState<boolean>(false)
    const [contactId, setContactId] = useState<number>(0)
    
    
    const getAllContacts = async () => {
        const token = localStorage.getItem("@token")
        
        
        
        api.defaults.headers.authorization = `Bearer ${token}`

        const response = await api.get("/contacts")

        const data = response.data

        return data
    }

    const createContact = async (data: IContactsData) => {
        const token = localStorage.getItem("@token")

        try {
            const id = localStorage.getItem("@userId")

            if (!id) return

            api.defaults.headers.authorization = `Bearer ${token}`
            await api.post("/contacts", data)

            setContacts((await getAllContacts()).filter((elem: IContactsReturnedData) => elem.userId === +id))
            setOpenModal(!openModal)
        } catch (error) {
            console.log(error)
        }

    }
    const editContact = async (data: IContactsDataPartial) => {
        const token = localStorage.getItem("@token")

        try {
            const id = localStorage.getItem("@userId")

            if (!id) return

            api.defaults.headers.authorization = `Bearer ${token}`

            await api.patch("/contacts/" + contactId, data)

            setContacts((await getAllContacts()).filter((elem: IContactsReturnedData) => elem.userId === +id))

        } catch (error) {
            console.log(error)
        }
    }
    const deleteContact = async (id: number) => {
        const token = localStorage.getItem("@token")

        try {
            api.defaults.headers.authorization = `Bearer ${token}`

            const idUser = localStorage.getItem("@userId")

            if (!idUser) return

            await api.delete("/contacts/" + id)

            setContacts((await getAllContacts()).filter((elem: IContactsReturnedData) => elem.userId === +idUser))

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <contactsContext.Provider value={{
            contacts,
            contactId,
            AllContacts,
            openModal,
            openModalEditUser,
            openModalDeleteUser,
            openModalEditContact,
            openModalDeleteContact,
            setAllContacts,
            setContacts,
            createContact,
            editContact,
            deleteContact,
            setOpenModal,
            setOpenModalEditUser,
            setOpenModalEditContact,
            setOpenModalDeleteUser,
            setOpenModalDeleteContact,
            setContactId
        }}>
            {children}
        </contactsContext.Provider>
    )

}