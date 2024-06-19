import { Footer } from "./_components/footer"
import { Navbar } from "./_components/navbar"


const IntroduceLayout = ({ children } : { children: React.ReactNode }) => {
    
    return (
        <div className="h-full w-full">
            <Navbar />
            <main className="h-full pt-32 pb-20 bg-slate-100">{children}</main>
            <Footer />
        </div>
    )
}

export default IntroduceLayout