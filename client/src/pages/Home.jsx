import React, { useState } from "react";
import "../styles/App.css";

const Home = ({ setCurrentPage }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Rezervace potvrzena pro ${name} na ${date} v ${selectedTime}`);
    setShowForm(false);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div>
       <header>
        <h1>Umístění bazénu</h1>
        <nav>
          <ul>
            <li><a href="#home" onClick={() => setCurrentPage('o nas')}>O nás</a></li>
            <li><a href="#rezervace" onClick={() => setCurrentPage('rezervace')}>Rezervace dráhy</a></li>
            <li><a href="#gallery" onClick={() => setCurrentPage('galerie')}>Galerie</a></li>
            <li><a href="#locations" onClick={() => setCurrentPage('lokace')}>Lokace</a></li>
            <li><a href="#restaurant" onClick={() => setCurrentPage('restaurace')}>Restaurace</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home">
          <h2>Rezervace dráhy</h2>
          {showForm && (
            <div className="overlay">
              <div className="reservation-form-container">
                <button className="close-button" onClick={handleCloseForm}>
                  X
                </button>
                <form onSubmit={handleSubmit} className="reservation-form">
                  <h3>Rezervace na {selectedTime}</h3>
                  <div>
                    <label>Jméno:</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label>Email:</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label>Datum:</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label>Čas:</label>
                    <input type="time" value={selectedTime} readOnly />
                  </div>
                  <div className="form-buttons">
                    <button type="submit">Rezervovat</button>
                    <button type="button" onClick={handleCloseForm}>
                      Zrušit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </section>

        <section id="about">
          <h2>Užijte si relaxaci, pohyb i zábavu na jednom místě</h2>
          <p>
            Vítáme vás na oficiálních stránkách našeho bazénu  ideálního místa
            pro odpočinek, sport i rodinné chvíle. Nabízíme moderní zázemí,
            příjemné prostředí a profesionální přístup. Ať už si chcete
            zaplavat, uvolnit se ve vířivce, nebo si užít den s dětmi, u nás si
            každý najde to své.
          </p>
          <h3>Co u nás najdete?</h3>
          <ul>
            <li>Plavecký bazén  vhodný pro kondiční plavání i rekreační návštěvy</li>
            <li>Dětský bazének  bezpečné brouzdaliště pro ty nejmenší</li>
            <li>Vířivka a relax zóna  ideální místo k odpočinku</li>
            <li>Parní sauna a finská sauna  pro milovníky saunování</li>
            <li>Plavecké kurzy a aquafitness  pravidelné lekce pro děti i dospělé</li>
          </ul>
          <h3>Otevírací doba</h3>
          <p>
            Pondělí Pátek:  6:00  21:00<br />
            Sobota  Neděle: 8:00  20:00<br />
            (Sledujte prosím náš rozpis hodin pro veřejnost a kurzy)
          </p>
          <h3>Ceník</h3>
          <p>
            Nabízíme výhodné vstupné pro jednotlivce, rodiny i skupiny.<br />
            Děti do 6 let zdarma.<br />
            <a href="#pricing">Zobrazit celý ceník</a>
          </p>
          <h3>Služby navíc</h3>
          <ul>
            <li>Občerstvení a kavárna přímo u bazénu</li>
            <li>Možnost pronájmu plaveckých drah</li>
            <li>Dárkové poukazy</li>
            <li>Wi-Fi zdarma</li>
          </ul>
          <h3>Najdete nás</h3>
          <p>
            📍 [Adresa bazénu]<br />
            🅿️ Parkování zdarma<br />
            🚆 Snadná dostupnost MHD
          </p>
          <p>
            Těšíme se na vaši návštěvu! Přijďte si odpočinout, zasportovat nebo
            si jen užít vodní radovánky. Váš komfort a spokojenost jsou pro nás
            na prvním místě.
          </p>
        </section>
      </main>
      <footer>
        <div className="Left">
          <h3>Kontakt</h3>
          <p>
            <strong>Adresa:</strong> Ulice 123, Město
          </p>
          <p>
            <strong>Telefon:</strong> +420 123 456 789
          </p>
          <p>
            <strong>Email:</strong> info@bazennarezervace.cz
          </p>
        </div>
        <div className="social-links">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./client/public/images/footer/2023_Facebook_icon.svg.png"
              alt="Facebook"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./client/public/images/footer/Instagram_logo_2022.svg.png"
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./client/public/images/footer/R.png" alt="TikTok" />
          </a>
        </div>
        <div className="newsletter">
          <h3>Odebírejte novinky </h3>
          <form>
            <input type="email" placeholder="Váš email" required />
            <button type="submit">Odeslat</button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Home;
