import { fallbackLng, languages } from "@/app/i18n/settings"
import { Footer } from "./_components/footer"
import { Navbar } from "./_components/navbar"
import { useTranslation } from "@/app/i18n"


export default async function IntroduceLayout({ children, params: { locate } } : { 
    children: React.ReactNode,
    params: {
        locate: string
    }
}) {
    if (languages.indexOf(locate) < 0) locate = fallbackLng
    const { t } = await useTranslation(locate)
    
    return (
        <div className="h-full w-full">
            <Navbar />
            <main className="h-full pt-32 pb-20 bg-slate-100">{children}</main>
            <Footer />
        </div>
    )
}
