import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

export default function Home() {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Rezervační systém</h1>
                <p>Rezervujte si svůj bazén snadno a rychle.</p>
            </header>
        </div>
    )
}