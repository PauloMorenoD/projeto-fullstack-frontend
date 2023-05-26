"use client"

import { Header } from "@/components/Header";
import { InputComponent } from "@/components/Input";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
import backImage from "../assets/images/wallpaperflare.com_wallpaper.jpg"
import { useForm } from "react-hook-form";
import { iUserLoginData } from "@/context/userContext/interfaces";
import { userContext } from "@/context/userContext";
import { zodResolver } from "@hookform/resolvers/zod"
import { UserLoginSchema } from "./zodSchema";



export default function Home() {


  const [visible, setVisible] = useState<boolean>(false)

  const { register, handleSubmit, formState:{ errors } } = useForm<iUserLoginData>({
    resolver: zodResolver(UserLoginSchema)
  })

  const { login } = useContext(userContext)

  return (
    <>
      <Header>
        <Link href="/register" className="border-spacing-1 border p-2 border-slate-600 rounded">ir para cadastro</Link>
      </Header>
      <main className="bg-slate-900 w-full height md:flex">
        <section className="bg-center hidden md:w-full md:block h-full">
          <Image src={backImage} alt="logo img" className="md:w-full h-full " />
        </section>
        <section className="md:w-full flex flex-col @md:w-[35%] mx-auto justify-center">
          <form onSubmit={handleSubmit(login)} className="flex flex-col w-full mx-auto pt-16 justify-center md:max-w-[500px]">

            <div className="border rounded w-11/12 mx-auto flex flex-col gap-4 p-4 text-slate-600 ">
              <h2 className="w-[85%] mx-auto self-start text-slate-600 font-bold text-2xl md:max-w-[500px] flex items-center gap-1">Login</h2>
              <InputComponent name="email" type="email" placeholder="Digite seu e-mail" labelContent="E-mail"  register={register}/>
              {errors.email?.message && <p className="text-xs w-[85%] mx-auto mt-[-8px] text-red-800">{errors.email?.message}</p>}
              <div className="relative">
 
                <InputComponent  name="password" type={visible ? "text" : "password"} placeholder="Digite sua senha" labelContent="Senha"  register={register}/>
                {visible ? <AiFillEyeInvisible className="cursor-pointer absolute top-[57%] right-7 md:right-10" onClick={() => setVisible(!visible)} /> : <AiFillEye className="cursor-pointer absolute top-[57%]  right-7 md:right-10" onClick={() => setVisible(!visible)} />}
              </div>
              {errors.password?.message && <p className="text-xs w-[85%] mx-auto mt-[-8px] text-red-800">{errors.password?.message}</p>}
              <p className="text-center text-sm">Não possui cadastro ?<Link href="/register" className="text-sm text-slate-400 cursor-pointer"> Cadastre-se aqui</Link></p>
              <button className="border rounded border-slate-600 bg-slate-400 w-[85%] flex mx-auto justify-center p-4 font-semibold">Fazer login</button>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}
