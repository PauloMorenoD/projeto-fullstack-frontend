import { IContactsReturnedData } from "@/context/contactsContext/interfaces";
import { IoIosContact } from "react-icons/io"
import { BsPencil, BsTrash } from "react-icons/bs"
import { Dispatch, SetStateAction, useContext } from "react";
import { contactsContext } from "@/context/contactsContext";

interface IContactCardProps {
  contact: IContactsReturnedData
}

export const ContactCard = ({ contact }: IContactCardProps) => {

  const {
    openModalEditContact,
    openModalDeleteContact,
    setOpenModalEditContact,
    setOpenModalDeleteContact,
    setContactId,
    deleteContact

  } = useContext(contactsContext)

  const registerDate = new Date(contact.registerDate).toLocaleString()

  return (
    <li className="bg-slate-800 text-gray-700 flex p-4 rounded items-center justify-between border-2 border-slate-500">
      <div className="flex items-center">
        <IoIosContact className="w-20 h-20 " />
        <div>
          <p className="text-sm text-slate-600"><span className="text-slate-00 font-semibold">Email : </span>{contact.email}</p>
          <p className="text-sm text-slate-600"><span className="text-slate-500 font-semibold">Nome : </span>{contact.fullName}</p>
          <p className="text-sm text-slate-600"><span className="text-slate-500 font-semibold">Telefone : </span>{contact.phone}</p>
          <p className="text-sm text-slate-600"><span className="text-slate-500 font-semibold">Data de registro : </span>{registerDate}</p>
        </div>
      </div>
      <div >
        <BsPencil onClick={() => {setOpenModalEditContact(!openModalEditContact), setContactId(contact.id)}} className="cursor-pointer" />
        <BsTrash className="mt-4 cursor-pointer" onClick={() => {setOpenModalDeleteContact(!openModalDeleteContact), deleteContact(contact.id)}} />
      </div>
    </li>
  );
}
