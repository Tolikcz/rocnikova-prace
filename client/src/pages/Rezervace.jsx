import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const RezervacePage = ({ setCurrentPage }) => {
  const [existing, setExisting] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedLane, setSelectedLane] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (!date) return;
    fetch(`http://localhost:4000/reservations?date=${date}`)
      .then(res => res.json())
      .then(data => setExisting(data))
      .catch(console.error);
  }, [date]);

  const handleTimeClick = (time, lane) => {
    setSelectedTime(time);
    setSelectedLane(lane);
    setShowForm(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:4000/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date, time: selectedTime, lane: selectedLane, name, email })
    })
      .then(res => res.json())
      .then(newReservation => {
        setExisting(prev => [...prev, newReservation]);
        setShowForm(false);
        setName("");
        setEmail("");
      })
      .catch(console.error);
  };

  return (
    <div>
      <NavBar setCurrentPage={setCurrentPage} />
      <main>
        <section id="rezervace">
          <h2>Rezervace dráhy</h2>
          <div className="reservation-table-container">
            <table className="reservation-table">
              <thead>
                <tr>
                  <th>Čas</th>
                  {[1, 2, 3, 4, 5].map(l => <th key={l}>Dráha {l}</th>)}
                </tr>
              </thead>
              <tbody>
                {[10, 11, 12, 13, 14, 15].map(hour => (
                  <tr key={hour}>
                    <td>{hour}:00</td>
                    {[1, 2, 3, 4, 5].map(lane => {
                      const timeStr = `${hour}:00`;
                      const taken = existing.some(
                        r => r.date === date && r.time === timeStr && r.lane === lane
                      );
                      return (
                        <td key={lane}>
                          <button
                            className={`time-button${taken ? " taken" : ""}`}
                            disabled={taken}
                            onClick={() => handleTimeClick(timeStr, lane)}
                          >
                            {timeStr}
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="note">* Šedivé označené časy jsou již obsazené.</p>

          {showForm && (
            <div className="overlay">
              <div className="reservation-popup">
                <div className="reservation-form-container">
                  <form onSubmit={handleSubmit} className="reservation-form">
                    <h3>
                      Rezervace na {selectedTime} (dráha {selectedLane})
                    </h3>
                    <label>Jméno:</label>
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      required
                    />
                    <label>Email:</label>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                    <label>Datum:</label>
                    <input
                      type="date"
                      value={date}
                      onChange={e => setDate(e.target.value)}
                      required
                    />
                    <label>Čas a dráha:</label>
                    <input
                      type="text"
                      value={`${selectedTime} (dráha ${selectedLane})`}
                      readOnly
                    />
                    <div className="form-buttons">
                      <button type="button" onClick={() => setShowForm(false)}>
                        Zrušit
                      </button>
                      <button type="submit">Potvrdit rezervaci</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RezervacePage;
