import React from 'react';
import '../styles/App.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const CenikPage = ({ setCurrentPage }) => (
  <div>
    <NavBar setCurrentPage={setCurrentPage} />

    <main className="pricing-section">
      <h2></h2>
      <h2>Ceník služeb</h2>

      <div className="zone">
        <h3 className="zone-title zone-1">Zóna 1 | Plavecký bazén</h3>
        <table className="pricing-table">
          <thead>
            <tr>
              <th>Časový interval</th>
              <th>bez omezení</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Typ vstupného</td>
              <td>Základní / MB karta</td>
            </tr>
            <tr>
              <td>Děti do 110 cm</td>
              <td>30 Kč</td>
            </tr>
            <tr>
              <td>Děti nad 110 cm,…</td>
              <td>79 Kč / 59 Kč</td>
            </tr>
            <tr>
              <td>Základní vstupné</td>
              <td>107 Kč / 80 Kč</td>
            </tr>
            <tr>
              <td>Rodinné vstupné</td>
              <td>–</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="zone">
        <h3 className="zone-title zone-2">Zóna 2 | Rekreační + Plavecký bazén</h3>
        <table className="pricing-table">
          <thead>
            <tr>
              <th>Časový interval</th>
              <th>1 h + 10 min</th>
              <th>2 h + 10 min</th>
              <th>4 h + 10 min</th>
              <th>celý den</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Typ vstupného</td>
              <td>Základní / MB karta</td>
              <td>Základní / MB karta</td>
              <td>Základní / MB karta</td>
              <td>Základní / MB karta</td>
            </tr>
            <tr>
              <td>Děti do 110 cm</td>
              <td>30 Kč</td>
              <td>30 Kč</td>
              <td>30 Kč</td>
              <td>30 Kč</td>
            </tr>
            <tr>
              <td>Děti nad 110 cm,…</td>
              <td>111 Kč / 83 Kč</td>
              <td>155 Kč / 116 Kč</td>
              <td>199 Kč / 150 Kč</td>
              <td>293 Kč / 222 Kč</td>
            </tr>
            <tr>
              <td>Základní vstupné</td>
              <td>133 Kč / 100 Kč</td>
              <td>188 Kč / 142 Kč</td>
              <td>249 Kč / 187 Kč</td>
              <td>443 Kč / 332 Kč</td>
            </tr>
            <tr>
              <td>Rodinné vstupné</td>
              <td>448 Kč / 366 Kč</td>
              <td>620 Kč / 465 Kč</td>
              <td>798 Kč / 598 Kč</td>
              <td>1097 Kč / 823 Kč</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="zone">
        <h3 className="zone-title zone-3">Zóna 3 | Wellness</h3>
        <table className="pricing-table">
          <thead>
            <tr>
              <th>Časový interval</th>
              <th>1 h</th>
              <th>1,5 h</th>
              <th>2 h</th>
              <th>3 h</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Typ vstupného</td>
              <td>Základní / MB karta</td>
              <td>Základní / MB karta</td>
              <td>Základní / MB karta</td>
              <td>Základní / MB karta</td>
            </tr>
            <tr>
              <td>Děti do 110 cm</td>
              <td>90 Kč / 65 Kč</td>
              <td>110 Kč / 80 Kč</td>
              <td>130 Kč / 100 Kč</td>
              <td>175 Kč / 130 Kč</td>
            </tr>
            <tr>
              <td>Děti nad 110 cm,…</td>
              <td>144 Kč / 109 Kč</td>
              <td>177 Kč / 133 Kč</td>
              <td>233 Kč / 175 Kč</td>
              <td>310 Kč / 233 Kč</td>
            </tr>
            <tr>
              <td>Základní vstupné</td>
              <td>222 Kč / 166 Kč</td>
              <td>266 Kč / 199 Kč</td>
              <td>332 Kč / 249 Kč</td>
              <td>465 Kč / 349 Kč</td>
            </tr>
            <tr>
              <td>Rodinné vstupné</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="zone">
        <h3 className="zone-title zone-4">Zóna 4 | ALL-IN (wellness, rekreační bazén, plavecký bazén)</h3>
        <table className="pricing-table">
          <thead>
            <tr>
              <th>Časový interval</th>
              <th>1 h + 10 min</th>
              <th>2 h + 10 min</th>
              <th>4 h + 10 min</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Typ vstupného</td>
              <td>Základní / MB karta</td>
              <td>Základní / MB karta</td>
              <td>Základní / MB karta</td>
            </tr>
            <tr>
              <td>Děti do 110 cm</td>
              <td>90 Kč / 65 Kč</td>
              <td>110 Kč / 80 Kč</td>
              <td>175 Kč / 130 Kč</td>
            </tr>
            <tr>
              <td>Děti nad 110 cm,…</td>
              <td>205 Kč / 154 Kč</td>
              <td>249 Kč / 187 Kč</td>
              <td>404 Kč / 304 Kč</td>
            </tr>
            <tr>
              <td>Základní vstupné</td>
              <td>271 Kč / 204 Kč</td>
              <td>355 Kč / 266 Kč</td>
              <td>591 Kč / 443 Kč</td>
            </tr>
            <tr>
              <td>Rodinné vstupné</td>
              <td>909 Kč / 681 Kč</td>
              <td>1108 Kč / 831 Kč</td>
              <td>1773 Kč / 1330 Kč</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1>Výhodné nabídky</h1>
      <NavBar setCurrentPage={setCurrentPage} />
      <section id="pricing" className="pricing-section">
  <div className="pricing-cards">
    <div className="card">
      <img src="/images/galerie/bazen2.jpeg" alt="Plavecký bazén" />
      <h3>Plavecký bazén</h3>
      <p>60 Kč / hod</p>
    </div>
    
    <div className="card">
      <img src='/images/galerie/masaze.jpg' alt="" />
      <h3>Wellnes</h3>
      <p>40 Kč / hod</p>
      
    </div>
    
  </div>
  
</section>
    </main>

    <Footer />
  </div>
);

export default CenikPage;