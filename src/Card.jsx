import React from 'react';

function Card({ tytul, opis }) {
  return (
    <div style={{ border: '1px solid #e0e0e0', borderRadius: '6px', padding: '15px', margin: '10px 0', backgroundColor: '#fff' }}>
      <h3 style={{ margin: '0 0 8px 0', color: '#2980b9' }}>{tytul}</h3>
      <p style={{ margin: 0, color: '#555' }}>{opis}</p>
    </div>
  );
}

export default Card;