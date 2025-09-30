import Footer from "../components/common/Footer"
import NavBar from "../components/common/navbar"

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar
                items={[
                    { label: "Home", href: "/" },
                    { label: "Stories", href: "/stories" },
                    { label: "Sobre", href: "/about" }
                ]}
                showContact={true}
                ctaLabel="Contato"
                onCtaClick={() => console.log("Clicou em Contato")}
            />
            <main>{ children }</main>
            <Footer />
        </>
    )
}