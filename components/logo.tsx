import Image from "next/image"
import Link from "next/link"


export const Logo = () => {
    return (
        <Link href={"/"}>
            <div className="hidden md:flex gap-x-2 items-center justify-center">
                <Image src={"/udemy.svg"} alt="Logo" width={18} height={24} priority />
                <p
                    className="text-sm font-semibold"
                >
                    Udemy
                </p>
            </div>
        </Link>
    )
}