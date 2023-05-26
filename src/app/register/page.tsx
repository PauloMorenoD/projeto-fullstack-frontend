'use client'

import { Header } from "@/components/Header";
import { InputComponent } from "@/components/Input";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
import backImage from "../../assets/images/wallpaperflare.com_wallpaper.jpg"
import { useForm } from "react-hook-form";
import { userContext } from "@/context/userContext";
import { IUserData } from "@/context/userContext/interfaces";
import { UserRegisterSchema } from "./zodSchema";

export default function Register() {

  const [visible, setVisible] = useState<boolean>(false)

  const { register, handleSubmit, formState: { errors } } = useForm<IUserData>({
    resolver: zodResolver(UserRegisterSchema)
  })

  const { registerUser } = useContext(userContext)

  return (
    <>
      <Header>
        <Link href="/" className="border-spacing-1 border p-2 border-slate-600 rounded">ir para login</Link>
      </Header>
      <main className="bg-slate-900 w-screen  h-screen md:flex  md:height">

        <section className="md:w-full flex flex-col @md:w-[35%]  mx-auto justify-center">
          <form onSubmit={handleSubmit(registerUser)} className="flex flex-col w-full  pt-16 mx-auto justify-center md:max-w-[500px]">
            <div className="border rounded w-11/12 mx-auto flex flex-col gap-4 p-4 text-slate-600 h-full ">
              <h2 className="w-[85%] mx-auto mt-6 self-start text-slate-600 font-bold text-2xl md:max-w-[500px] flex items-center gap-1">Cadastro</h2>

              <InputComponent name="email" type="email" placeholder="Digite seu e-mail" labelContent="E-mail" register={register} />
              {errors.email?.message && <p className="text-xs w-[85%] mx-auto mt-[-8px] text-red-800">{errors.email?.message}</p>}

              <InputComponent name="fullName" type="text" placeholder="Digite seu nome completo" labelContent="Nome completo" register={register} />
              {errors.fullName?.message && <p className="text-xs w-[85%] mx-auto mt-[-8px] text-red-800">{errors.fullName?.message}</p>}

              <div className="relative">
                <InputComponent name="password" type={visible ? "text" : "password"} placeholder="Digite sua senha" labelContent="Senha" register={register} />
                {visible ? <AiFillEyeInvisible className="cursor-pointer absolute top-[57%] right-7 md:right-10" onClick={() => setVisible(!visible)} /> : <AiFillEye className="cursor-pointer absolute top-[57%] right-7 md:right-10" onClick={() => setVisible(!visible)} />}
              </div>
              {errors.password?.message && <p className="text-xs w-[85%] mx-auto mt-[-8px] text-red-800">{errors.password?.message}</p>}
              <InputComponent name="phone" type="text" placeholder="Digite seu telefone" labelContent="Telefone" register={register} />

              {errors.phone?.message && <p className="text-xs w-[85%] mx-auto mt-[-8px] text-red-800">{errors.phone?.message}</p>}
              <button className="border rounded border-slate-600 bg-slate-400 w-[85%] flex mx-auto mt-2 justify-center p-4 font-semibold">Cadastrar-se</button>
            </div>
          </form>
        </section>
        <section className="bg-center hidden md:w-full md:flex h-full">
          <Image src={backImage} alt="logo img" className="md:w-full h-full" />
        </section>
      </main>
    </>
  )
}
