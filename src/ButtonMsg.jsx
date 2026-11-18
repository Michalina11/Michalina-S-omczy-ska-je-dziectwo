import React, { useState, useEffect } from 'react';

function ButtonMsg() {
  const [imie, setImie] = useState("");

  // Sprawdzenie localStorage po załadowaniu strony
  useEffect(() => {
    const zapisaneImie = localStorage.getItem("nazwa_uzytkownika");
    if (zapisaneImie) {
      setImie(zapisaneImie);
    }
  }, []);

  const handlePrzedstawSie = () => {
    const wpisaneImie = prompt("Podaj swoje imię:");
    if (wpisaneImie) {
      localStorage.setItem("nazwa_uzytkownika", wpisaneImie);
      setImie(wpisaneImie);
    }
  };

  return (
    <div>
      {imie ? (
        <p style={{ margin: 0, fontWeight: 'bold', color: '#27ae60' }}>Witaj ponownie, {imie}!</p>
      ) : (
        <button 
          onClick={handlePrzedstawSie}
          style={{ background: '#3498db', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '4px', cursor: 'pointer' }}
        >
          Przedstaw się
        </button>
      )}
    </div>
  );
}

export default ButtonMsg;