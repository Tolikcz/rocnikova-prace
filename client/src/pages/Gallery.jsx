import React from 'react'
import '../styles/Gallery.css'

export default function Gallery() {
    const images = [
    ]

    return (
        <div className="gallery-container">
            <h1>Galerie bazénů</h1>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div className="gallery-item" key={index}>
                        <img src={image.src} alt={image.alt} className="gallery-image" />
                    </div>
                ))}
            </div>
        </div>
    )
}