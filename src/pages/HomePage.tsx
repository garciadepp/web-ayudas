import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { authRepository } from "../repositories/authRepository";

const personasDesaparecidas = [
  { id: 1, nombre: "Persona desaparecida 01", edad: 17, fecha: "12/08/2026", lugar: "Sucre", descripcion: "Registro de demostración. Información pendiente de verificación." },
  { id: 2, nombre: "Persona desaparecida 02", edad: 22, fecha: "09/08/2026", lugar: "La Paz", descripcion: "Registro de demostración. Información pendiente de verificación." },
  { id: 3, nombre: "Persona desaparecida 03", edad: 31, fecha: "05/08/2026", lugar: "Cochabamba", descripcion: "Registro de demostración. Información pendiente de verificación." },
  { id: 4, nombre: "Persona desaparecida 04", edad: 15, fecha: "02/08/2026", lugar: "Santa Cruz", descripcion: "Registro de demostración. Información pendiente de verificación." },
  { id: 5, nombre: "Persona desaparecida 05", edad: 27, fecha: "28/07/2026", lugar: "Tarija", descripcion: "Registro de demostración. Información pendiente de verificación." },
  { id: 6, nombre: "Persona desaparecida 06", edad: 40, fecha: "24/07/2026", lugar: "Oruro", descripcion: "Registro de demostración. Información pendiente de verificación." },
  { id: 7, nombre: "Persona desaparecida 07", edad: 19, fecha: "20/07/2026", lugar: "Potosí", descripcion: "Registro de demostración. Información pendiente de verificación." },
  { id: 8, nombre: "Persona desaparecida 08", edad: 34, fecha: "17/07/2026", lugar: "Beni", descripcion: "Registro de demostración. Información pendiente de verificación." },
  { id: 9, nombre: "Persona desaparecida 09", edad: 25, fecha: "13/07/2026", lugar: "Chuquisaca", descripcion: "Registro de demostración. Información pendiente de verificación." },
];

function HomePage() {
  const navigate = useNavigate();
  const user = authRepository.getCurrentUser();
  const [personaSeleccionada, setPersonaSeleccionada] = useState(personasDesaparecidas[0]);

  const handleLogout = () => {
    authRepository.logout();
    navigate("/login", { replace: true });
  };

  return (
    <main>
      <section className="home-header">
        <div>
          <p className="eyebrow">Web Ayudas</p>
          <h1>Personas desaparecidas</h1>
          <p className="home-description">
            Consulta los registros disponibles y selecciona una pestaña para ver su información.
          </p>
        </div>
        {user && <span className="user-badge">{user.name}</span>}
      </section>

      <section className="missing-people" aria-label="Personas desaparecidas">
        <div className="person-tabs" role="tablist" aria-label="Registros de personas desaparecidas">
          {personasDesaparecidas.map((persona) => (
            <button
              key={persona.id}
              type="button"
              role="tab"
              aria-selected={persona.id === personaSeleccionada.id}
              className={`person-tab ${persona.id === personaSeleccionada.id ? "person-tab--active" : ""}`}
              onClick={() => setPersonaSeleccionada(persona)}
            >
              <span className="person-tab__number">{String(persona.id).padStart(2, "0")}</span>
              <span>{persona.nombre}</span>
            </button>
          ))}
        </div>

        <article className="person-card" role="tabpanel">
          <div className="person-card__photo" aria-hidden="true">?</div>
          <div className="person-card__content">
            <span className="status-badge">DESAPARECIDA</span>
            <h2>{personaSeleccionada.nombre}</h2>
            <div className="person-details">
              <p><strong>Edad:</strong> {personaSeleccionada.edad} años</p>
              <p><strong>Fecha de desaparición:</strong> {personaSeleccionada.fecha}</p>
              <p><strong>Lugar:</strong> {personaSeleccionada.lugar}</p>
            </div>
            <p className="person-description">{personaSeleccionada.descripcion}</p>
          </div>
        </article>
      </section>

      {user && (
        <section className="session-section">
          <p><strong>Usuario:</strong> {user.name}</p>
          <p><strong>Carnet:</strong> {user.carnet}</p>
          <p><strong>Rol:</strong> {user.role}</p>
          <button className="logout-button" type="button" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </section>
      )}
    </main>
  );
}

export default HomePage;
