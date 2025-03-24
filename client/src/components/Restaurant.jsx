import { Link } from "react-router-dom"
import '../styles/Restaurant.css'

const bazeny = [
    { id: "1", name: "1. dráha", obsazeno: false },
    { id: "2", name: "2. dráha", obsazeno: true },
    { id: "3", name: "3. dráha", obsazeno: false },
    { id: "4", name: "4. dráha", obsazeno: false },
    { id: "5", name: "5. dráha", obsazeno: false },
]

export default function Layout() {
    return (
        <div>
            <div style={{ display: "flex", gap: 8 }}>
                {bazeny.map(bazen => (
                    <Link to={`/bazeny/${bazen.id}`} key={bazen.id}>
                        <div style={{ padding: 3, backgroundColor: bazen.obsazeno ? "green" : "red" }}>
                            <p>{bazen.name}</p>
                            <p>{bazen.obsazeno ? "obsazeno" : "neobsazeno"}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}