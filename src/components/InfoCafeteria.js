// InfoCafeteria.js

import React from 'react';

function InfoCafeteria({ volverAlMenu }) {
  return (
    <section className="info-section" style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Información del Establecimiento</h2>

      <iframe
        title="Ubicación de la cafetería"
        src="https://www.google.com/maps?q=Poza%20Rica%201361%2C%2018%20de%20Marzo%2C%20Guadalajara%2C%20Jalisco%2C%20México&z=17&output=embed"
        width="100%"
        height="300"
        style={{ border: 0, borderRadius: '10px', marginTop: '15px' }}
        allowFullScreen
        loading="lazy"
      ></iframe>

      <div style={{ marginTop: '20px' }}>
        <h3>Horario de Atención</h3>
        <p>Lunes a Viernes: 8:00 AM - 8:00 PM</p>
        <p>Sábado y Domingo: 9:00 AM - 6:00 PM</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Síguenos en redes sociales</h3>
        <div className="social-icons" style={{ fontSize: '1.5rem' }}>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: '15px', textDecoration: 'none' }}
          >
            👍 Facebook
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: '15px', textDecoration: 'none' }}
          >
            📸 Instagram
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            🐦 Twitter
          </a>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <button
          onClick={volverAlMenu}
          style={{
            padding: '10px 20px',
            backgroundColor: '#6b4f4f',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Volver al Menú
        </button>
      </div>
    </section>
  );
}

export default InfoCafeteria;

