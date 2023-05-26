
type iModalProps = {
    children: React.ReactNode
}

export const Modal = ({ children }: iModalProps) => {
    return (
        <section className="w-screen h-screen bg-[#12121280] fixed top-0 left-0 flex justify-center items-center z-10">
            <>
                {children}
            </>
        </section>
    );
}
