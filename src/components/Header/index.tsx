import { AiOutlinePhone } from "react-icons/ai"
interface iHeaderProps {
  children: React.ReactNode
}


export const Header = ({ children }: iHeaderProps) => {
  return (
    <header className="w-full border-b-[1px] bg-slate-900">
        <div className="w-11/12 mx-auto text-slate-600 flex items-center justify-between h-20 md:w-10/12">
            <h2 className="text-2xl font-semibold text-slate-600 flex items-center gap-1">Contacts <AiOutlinePhone/></h2>
          {children}
        </div>
    </header>
  );
}
