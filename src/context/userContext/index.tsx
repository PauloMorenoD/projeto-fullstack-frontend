"use client"

import { createContext, useEffect, useState } from "react";
import { IUserData, IUserDataPartial, IUserReturnedData, iUserLoginData, iUserProviderProps, iUserProviderValues } from "./interfaces";
import { api } from "@/services";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


export const userContext = createContext({} as iUserProviderValues)

export const UserProvider = ({ children }: iUserProviderProps) => {

    const router = useRouter()

    const [user, setUser] = useState<IUserReturnedData | null>()
    const [userId, setUserId] = useState<number>(0)

    const token = localStorage.getItem("@token")
    
        useEffect(() => {
            const getUser = async () => {
                const userId = localStorage.getItem("@userId")
    
                if (!userId) return
    
                const response = await api.get("/users/" + userId )
    
                const data = response.data
        
                setUser(data)
            }
            getUser()
        }, []) 



    const login = async (data: iUserLoginData) => {

        try {
            const response = await api.post("/login", data)

            const token = response.data

            localStorage.setItem("@token", token.token)
            localStorage.setItem("@userId", token.userId)


            const userResponse = await api.get("/users/" + token.userId)

            const userData = userResponse.data

            setUser(userData)

            toast.success("login realizado com sucesso!")
            router.push("/home")

        } catch (error) {
            toast.error("ops, algo deu errado!")
        }
    }

    const registerUser = async (data: IUserData) => {

        try {
            await api.post("/users", data)

            toast.success("usuário registrado com sucesso!")

            router.push("/")

        } catch (error) {
            toast.error("ops, algo deu errado!")
        }
    }

    const editUser = async (data: IUserDataPartial) => {

        const id = localStorage.getItem("@userId")

        if (!id) return
        try {

            api.defaults.headers.authorization = `Bearer ${token}`
            const response = await api.patch("/users/" + id, data)


            const userData = response.data

            setUser(userData)
        } catch (error) {
            console.log(error)
        } 
    }


    const deleteUser = async () => {
        const id = localStorage.getItem("@userId")
        if (!id) return
        try {

            api.defaults.headers.authorization = `Bearer ${token}`
            await api.delete("/users/" + id)
            localStorage.clear()
            router.push("/")

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <userContext.Provider value={{
            user,
            userId,
            login,
            registerUser,
            setUser,
            editUser,
            deleteUser,
            setUserId
        }}>
            {children}
        </userContext.Provider>
    )

}