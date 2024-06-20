import Image from "next/image"
import Link from "next/link"


export const Logo = () => {
    return (
        <Link href={"/"} className="h-full">
            <div className="flex gap-x-2 items-center justify-center h-full">
                <div className="w-8 max-md:border-r h-full">
                    <Image src={"/udemy.svg"} alt="Logo" width={18} height={24} priority />
                </div>
                <p
                    className="text-sm font-semibold hidden md:block"
                >
                    Udemy
                </p>
            </div>
        </Link>
    )
}