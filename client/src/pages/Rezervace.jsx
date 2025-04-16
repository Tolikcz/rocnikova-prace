import React from "react";
import "../styles/App.css";


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
    <div className="home-page">
       <header>
        <h1>Umístění bazénu</h1>
        <nav>
          <ul>
            <li><a href="#home" onClick={() => setCurrentPage('o nas')}>O nás</a></li>
            <li><a href="#home" onClick={() => setCurrentPage('rezervace')}>Rezervace dráhy</a></li>
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

export default Rezervace;
