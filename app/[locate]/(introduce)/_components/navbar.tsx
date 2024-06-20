import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const Navbar = () => {

    return (
        <div className="fixed top-0 w-full h-12 border-b flex items-center">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full h-full justify-between">
                <div className="flex pl-3 pr-4 justify-center items-center h-full">
                    <Logo />
                    <div className="ml-3 flex justify-between items-center">
                        <div role="button">Category</div>
                        <div role="button">Udemy Business</div>
                        <div role="button">Teach on Udemy</div>
                    </div>
                </div>
                <div className="pr-3 w-full md:w-auto md:block flex items-center gap-4 justify-end">
                    <Button size={"sm"} variant={"ghost"} asChild className="text-[11px] font-normal">
                        <Link href={"/"}>Log in</Link>
                    </Button>
                    <Button size={"sm"} variant={"outline"} asChild className="text-[11px] font-normal">
                        <Link href={"/"}>Sign up</Link>
                    </Button>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}