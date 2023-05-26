import { z } from "zod";


export const UserLoginSchema = z.object({
    email: z.string().nonempty("é necessário passar um email").email("é necessário ser um email"),
    password: z.string().nonempty("é necessário passar uma senha"),
})