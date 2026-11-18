import React, { useState } from 'react';
import Card from './Card';
import ButtonMsg from './ButtonMsg';

function App() {
  // Losowy kolor tła generowany raz przy uruchomieniu strony
  const [bgColor] = useState(() => {
    const colors = ['#f4f6f0', '#f9f6f0', '#f0f4f6', '#fcf4f0'];
    return colors[Math.floor(Math.random() * colors.length)];
  });

  // Tablica elementów (jeździectwo)
  const konieTablica = [
    ["Ujeżdżenie", "Elegancka dyscyplina jeździecka, w której liczy się harmonia i precyzja."],
    ["Skoki przez przeszkody", "Dynamiczna konkurencja wymagająca szybkości i zwinności pary koniur-jeździec."],
    ["WKKW", "Wszechstronny Konkurs Konia Wierzchowego – triathlon jeździecki."],
    ["Woltyż", "Gimnastyka akrobatyczna wykonywana na galopującym koniu."],
    ["Rajdy długodystansowe", "Próba wytrzymałości konia i jeźdźca na bardzo dużych dystansach."]
  ];

  // Tablica z ciekawostkami
  const ciekawostki = [
    "Fun fact: Konie potrafią spać zarówno na stojąco, jak i na leżąco!",
    "Konie mają największe oczy spośród wszystkich lądowych ssaków.",
    "Komunikacja z koniem opiera się w dużej mierze na mowie ciała i balansie ciała jeźdźca."
  ];

  const losowaCiekawostka = ciekawostki[Math.floor(Math.random() * ciekawostki.length)];

  // Stan wyszukiwania / filtrowania
  const [szukanyTekst, setSzukanyTekst] = useState("");

  // Filtrowanie elementów tablicy po tytule (.filter())
  const przefiltrowaneKonie = konieTablica.filter(item => 
    item[0].toLowerCase().includes(szukanyTekst.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: bgColor, minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        
        {/* Sekcja powitalna */}
        <header style={{ borderBottom: '2px solid #eee', paddingBottom: '15px', marginBottom: '20px' }}>
          <h1 style={{ color: '#2c3e50', margin: '0 0 10px 0' }}>Portal o Jeździectwie</h1>
          <p style={{ color: '#666', fontStyle: 'italic', margin: 0 }}>{losowaCiekawostka}</p>
        </header>

        {/* Komponent zapamiętywania użytkownika */}
        <div style={{ marginBottom: '25px', background: '#f9f9f9', padding: '15px', borderRadius: '6px' }}>
          <ButtonMsg />
        </div>

        {/* Sekcja wyszukiwania / filtrowania */}
        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Szukaj dyscypliny:</label>
          <input 
            type="text" 
            placeholder="Wpisz nazwę..." 
            value={szukanyTekst}
            onChange={(e) => setSzukanyTekst(e.target.value)}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>

        {/* Lista elementów przy użyciu komponentu Card */}
        <div>
          <h2 style={{ fontSize: '1.2rem', color: '#34495e', borderBottom: '1px solid #ddd', paddingBottom: '5px' }}>Dyscypliny jeździeckie</h2>
          {przefiltrowaneKonie.length > 0 ? (
            przefiltrowaneKonie.map((item, index) => (
              <Card key={index} tytul={item[0]} opis={item[1]} />
            ))
          ) : (
            <p style={{ color: '#888', fontStyle: 'italic' }}>Brak wyników wyszukiwania.</p>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;