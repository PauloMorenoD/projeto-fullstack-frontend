import { Dispatch, SetStateAction } from "react";

export interface iUserProviderProps {
    children: React.ReactNode;
}

export interface IUserData {
  fullName: string;
  email: string;
  password: string;
  phone: string;
}
export interface IUserDataPartial {
  fullName?: string;
  email?: string;
  password?: string;
  phone?: string;
}

export interface IUserReturnedData extends IUserData {
  id:number
  registerDate:string
}

export interface iUserLoginData {
  email: string;
  password: string;
}

export interface iUserProviderValues{
  user: IUserReturnedData | undefined | null
  userId: number
  login: (data: iUserLoginData) => void
  registerUser: (data: IUserData) => void
  setUser: Dispatch<SetStateAction<IUserReturnedData | null | undefined>>
  editUser: (data: IUserDataPartial) => void
  deleteUser: () => void
  setUserId: Dispatch<SetStateAction<number>>

}