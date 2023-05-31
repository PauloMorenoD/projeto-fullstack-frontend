"use client"

import { Header } from "@/components/Header"
import { userContext } from "@/context/userContext"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useContext, useEffect, useState } from "react"

import { IoIosContact } from "react-icons/io"
import { BsPencil, BsTrash } from "react-icons/bs"
import { contactsContext } from "@/context/contactsContext"
import { Modal } from "@/components/Modal"
import { ModalCreateContact } from "@/components/ModalCreateContact"
import { ModalEditUser } from "@/components/ModalUserEdit"
import { ModalDeleteUser } from "@/components/ModalDeleteUser"
import { ContactCard } from "@/components/ContactCard"
import { ModalEditContact } from "@/components/ModalEditContact"
import { api } from "@/services"
import { IContactsReturnedData } from "@/context/contactsContext/interfaces"

export default function Home() {

  const router = useRouter()
  const token = localStorage.getItem("@token")


  if (!token) return

  const { user, setUser } = useContext(userContext)
  const {
    openModal,
    setOpenModal,
    contacts,
    openModalEditUser,
    openModalDeleteUser,
    openModalEditContact,
    openModalDeleteContact,
    setOpenModalDeleteUser,
    setOpenModalEditUser,
    setContacts


  } = useContext(contactsContext)
  
  useEffect(() => {
    const getContacts = async () => {

      api.defaults.headers.authorization = `Bearer ${token}`

      const response = await api.get("/contacts")

      const data = response.data
      const id = localStorage.getItem("@userId")

      if (!id) return

      const userContacts = data.filter((elem: IContactsReturnedData) => elem.userId === +id)

      setContacts(userContacts)
    }

    getContacts()
  }, [token])

  if (!user) return

  const registerDate = new Date(user.registerDate).toLocaleString()

  const logout = () => {

    localStorage.clear()

    setUser(null)

    router.push("/")
  }




  return (
    <>
      <Header>
        <Link href="" className="border-spacing-1 border p-2 border-slate-600 rounded" onClick={() => logout()}>Logout</Link>
      </Header>
      <main className="bg-slate-900 height w-full h-full text-slate-600">
        <section className="border p-2 border-slate-600">
          <section className=" w-11/12 md:w-10/12 mx-auto ">
            <section className="flex items-center justify-between  ">
              <div className="flex">
                <IoIosContact className=" text-[5rem] md:ml-[-1rem]" />
                <div>
                  <h2 className="text-lg capitalize text-slate-500"><span className="text-slate-500 font-semibold">Nome : </span>{user.fullName}</h2>
                  <p className="text-sm "><span className="text-slate-500 font-semibold">Email : </span>{user.email}</p>
                  <p className="text-sm "><span className="text-slate-500 font-semibold">Telefone : </span> {user.phone}</p>
                  <p className="text-sm "><span className="text-slate-500 font-semibold">Data de registro : </span>{registerDate}</p>
                </div>
              </div>
              <div>
                <BsPencil onClick={() => setOpenModalEditUser(!openModalEditUser)} className="cursor-pointer" />
                <BsTrash className="mt-4 cursor-pointer" onClick={() => setOpenModalDeleteUser(!openModalDeleteContact)} />
              </div>
            </section>
          </section>
        </section>

        <section>
          <div className="flex justify-between mt-8 w-11/12 mx-auto md:w-10/12 ">
            <h1 className="text-3xl  ">Contatos</h1>
            <button className="flex border-2 p-2 border-slate-600 rounded cursor-pointer" onClick={() => setOpenModal(true)}>Criar contato +</button>
          </div>
          <div className="w-full ">
            {contacts?.length ? (
              <ul className="bg-slate-700 w-11/12 max-h-[35rem] overflow-x-scroll scrollbar-none md:w-10/12 mx-auto min-h-[20rem] mt-4 rounded p-4 flex flex-col gap-4">
                {contacts.map((elem) => (
                  <ContactCard key={elem.id + Math.random()} contact={elem} />
                ))}
              </ul >
            ) : (
              <div className="bg-slate-700 w-10/12 mx-auto  mt-4 rounded p-4 flex flex-col gap-4 font-bold text-xl text-white">você ainda não possui nenhum contato, registre para poder vizualizá-los</div>
            )}
          </div>
        </section>
      </main>

      {openModal &&
        <Modal>
          <ModalCreateContact />
        </Modal>
      }
      {openModalEditUser &&
        <Modal>
          <ModalEditUser />
        </Modal>
      }
      {openModalDeleteUser &&
        <Modal>
          <ModalDeleteUser />
        </Modal>
      }
      {openModalEditContact &&
        <Modal>
          <ModalEditContact />
        </Modal>
      }

    </>
  )
}
