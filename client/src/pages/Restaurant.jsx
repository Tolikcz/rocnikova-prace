import React from 'react';
import '../styles/App.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const RestauracePage = ({ setCurrentPage }) => {
  return (
    <div>
      <NavBar setCurrentPage={setCurrentPage} />

      <main className="restaurant">
        <section>
          <h2>O naší restauraci</h2>
          <p>
            Naše restaurace nabízí výbornou kuchyni a příjemné prostředí pro
            všechny návštěvníky. Skvělé místo pro relaxaci po náročném dni.
          </p>
        </section>

        <section>
          <h2>Otevírací doba</h2>
          <p>Pondělí - Pátek: 10:00 - 22:00</p>
          <p>Sobota: 12:00 – 23:00</p>
          <p>Neděle: Zavřeno</p>
        </section>

        <section>
          <h2>Naše speciality</h2>
          <p>
            Vychutnejte si naše speciality jako grilovaná ryba, tradiční české
            pokrmy a čerstvé domácí dezerty.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RestauracePage;
