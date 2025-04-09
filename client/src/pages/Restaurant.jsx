import React from 'react'; 
import '../styles/App.css';

const RestaurantPage = ({ setCurrentPage }) => {
  return (
    <div>
      <header>
      <div class="loading"></div>
        <h1>Restaurace</h1>
        <nav>
          <ul>
            <li><a href="#home" onClick={() => setCurrentPage('home')}>Domů</a></li>
            <li><a href="#gallery" onClick={() => setCurrentPage('gallery')}>Galerie</a></li>
            <li><a href="#locations" onClick={() => setCurrentPage('locations')}>Lokace</a></li>
            <li><a href="#restaurant" onClick={() => setCurrentPage('restaurant')}>Restaurace</a></li>
          </ul>
        </nav>
      </header>
      
      <main className='restaurant'>
        <section>
          <h2>O naší restauraci</h2>
          <p>Naše restaurace nabízí výbornou kuchyni a příjemné prostředí pro všechny návštěvníky. Skvělé místo pro relaxaci po náročném dni.</p>
        </section>

        <section>
          <h2>Otevírací doba</h2>
          <ul>
            <p>Pondělí - Pátek: 10:00 - 22:00</p>
            <p>Sobota: 12:00 - 23:00</p>
            <p>Neděle: Zavřeno</p>
          </ul>
        </section>
        <section>
          <h2>Naše speciality</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos fugit animi, ullam alias quis eaque aut ipsum veniam sit deserunt excepturi commodi molestiae placeat. Ducimus adipisci omnis ex repellendus saepe!</p>
          <p>Vychutnejte si naše speciality jako jsou: Grilovaná ryba, Tradiční české pokrmy a čerstvé domácí dezerty.</p>
          
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos fugit animi, ullam alias quis eaque aut ipsum veniam sit deserunt excepturi commodi molestiae placeat. Ducimus adipisci omnis ex repellendus saepe!</p>
          <p>Vychutnejte si naše speciality jako jsou: Grilovaná ryba, Tradiční české pokrmy a čerstvé domácí dezerty.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facere perferendis praesentium reprehenderit, expedita, consectetur consequuntur sed quasi sapiente est cumque provident. Iste suscipit officiis dicta quasi ullam a placeat.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facere perferendis praesentium reprehenderit, expedita, consectetur consequuntur sed quasi sapiente est cumque provident. Iste suscipit officiis dicta quasi ullam a placeat.</p>
        
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

export default RestaurantPage;
