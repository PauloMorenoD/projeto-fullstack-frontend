import { z } from "zod"

export const UserRegisterSchema = z.object({
    fullName: z.string().nonempty("O campo de nome completo não pode ser vazio"),
    email: z.string().email("é necessário ser um email").nonempty("O campo de email não pode ser vazio"),
    password: z.string().nonempty("O campo de senha não pode ser vazio"),
    phone: z.string().nonempty("O campo de telefone não pode ser vazio")
})