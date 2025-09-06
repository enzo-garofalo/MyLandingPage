import NavBar from "../components/common/navbar"

export default function FormLayout({ children }: { children: React.ReactNode }) {
    return (
         <>
            <NavBar
                items={[
                    { label: "Home", href: "/" },
                ]}
                showContact={false}
                ctaLabel="Contato"
                onCtaClick={() => console.log("Clicou em Contato")}
            />
            <main>{ children }</main>
        </>
    )
}