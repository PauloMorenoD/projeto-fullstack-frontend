import { Dispatch, SetStateAction } from "react";
import { IUserReturnedData } from "../userContext/interfaces";

export interface iContactsProviderProps {
    children: React.ReactNode;
}

export interface IContactsData {
  fullName: string;
  email: string;
  phone: string;
}
export interface IContactsDataPartial {
    fullName?: string;
    email?: string;
    phone?: string;
}
export interface IContactsReturnedData extends IContactsData {
  id:number
  registerDate:string
  userId:number
}

export interface iContactsProviderValues{
  contacts: IContactsReturnedData[]
  AllContacts: IContactsReturnedData[]
  openModal: boolean
  openModalEditUser: boolean
  openModalDeleteUser: boolean
  openModalEditContact: boolean
  openModalDeleteContact: boolean
  contactId: number
  setAllContacts: Dispatch<SetStateAction<IContactsReturnedData[]>>
  setContacts: Dispatch<SetStateAction<IContactsReturnedData[]>>
  createContact: (data: IContactsData) => Promise<void>
  editContact: (data: IContactsDataPartial) => Promise<void>
  deleteContact: (id:number) => Promise<void>
  setOpenModal: Dispatch<SetStateAction<boolean>>
  setOpenModalEditUser: Dispatch<SetStateAction<boolean>>
  setOpenModalEditContact: Dispatch<SetStateAction<boolean>>
  setOpenModalDeleteUser: Dispatch<SetStateAction<boolean>>
  setOpenModalDeleteContact: Dispatch<SetStateAction<boolean>>
  setContactId: Dispatch<SetStateAction<number>>


}