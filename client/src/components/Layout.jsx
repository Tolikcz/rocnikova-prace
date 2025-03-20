import { useState } from "react"

const initialBazeny = [
    { id: "1", name: "1. dráha", obsazeno: false },
    { id: "2", name: "2. dráha", obsazeno: false },
    { id: "3", name: "3. dráha", obsazeno: false },
    { id: "4", name: "4. dráha", obsazeno: false },
    { id: "5", name: "5. dráha", obsazeno: false },
]

export default function Layout() {
    const [bazeny, setBazeny] = useState(initialBazeny)

    const handleClick = (id) => {
        setBazeny(bazeny.map(bazen => 
            bazen.id === id ? { ...bazen, obsazeno: true } : bazen
        ))
    }

    return (
        <div>
            <div style={{ display: "flex", gap: 1 }}>
                {bazeny.map(bazen => (
                    <div key={bazen.id} onClick={() => handleClick(bazen.id)} style={{ cursor: "pointer" }}>
                        <div style={{ padding: 50, backgroundColor: bazen.obsazeno ? "red" : "green" }}>
                            <p>{bazen.name}</p>
                            <p>{bazen.obsazeno ? "obsazeno" : "neobsazeno"}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


