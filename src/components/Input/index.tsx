import { IUserData } from "@/context/userContext/interfaces";
import { UseFormRegister } from "react-hook-form";

interface IInputProps {
    name: string;
    type: string;
    placeholder: string;
    labelContent: string;
    register: UseFormRegister<any>
}

export const InputComponent = ({ labelContent, placeholder, name, type, register }: IInputProps) => {
    return (
        <div className="flex flex-col text-slate-600 gap-1 w-[85%] mx-auto">
            <label htmlFor={name} className="font-bold text-sm">{labelContent}</label>
            <input type={type}  placeholder={placeholder} className="p-2 rounded " {...register(name)}/>
        </div>
    );
}
