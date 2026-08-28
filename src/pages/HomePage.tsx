import { Navigate, useNavigate } from "react-router-dom";
import { authRepository } from "../repositories/authRepository";

const personas = [
  { nombre: "Persona 1", edad: "17 años", fecha: "12/08/2026", lugar: "Sucre", foto: "/personas/persona1.jpg" },
  { nombre: "Persona 2", edad: "22 años", fecha: "09/08/2026", lugar: "La Paz", foto: "/personas/persona2.jpg" },
  { nombre: "Persona 3", edad: "31 años", fecha: "05/08/2026", lugar: "Cochabamba", foto: "/personas/persona3.jpg" },
  { nombre: "Persona 4", edad: "15 años", fecha: "02/08/2026", lugar: "Santa Cruz", foto: "/personas/persona4.jpg" },
  { nombre: "Persona 5", edad: "27 años", fecha: "28/07/2026", lugar: "Tarija", foto: "/personas/persona5.jpg" },
  { nombre: "Persona 6", edad: "40 años", fecha: "24/07/2026", lugar: "Oruro", foto: "/personas/persona6.jpg" },
  { nombre: "Persona 7", edad: "19 años", fecha: "20/07/2026", lugar: "Potosí", foto: "/personas/persona7.jpg" },
  { nombre: "Persona 8", edad: "34 años", fecha: "17/07/2026", lugar: "Beni", foto: "/personas/persona8.jpg" },
  { nombre: "Persona 9", edad: "25 años", fecha: "13/07/2026", lugar: "Chuquisaca", foto: "/personas/persona9.jpg" },
];

function HomePage() {
  const navigate = useNavigate();
  const user = authRepository.getCurrentUser();

  // Si no inició sesión, no puede acceder a las personas desaparecidas.
  if (!authRepository.isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    authRepository.logout();
    navigate("/login", { replace: true });
  };

  return (
    <main>
      <div className="home-title">
        <h1>Personas Desaparecidas</h1>
        <p>Registros disponibles para usuarios autorizados.</p>
      </div>

      <div className="personas-grid">
        {personas.map((persona, index) => (
          <article className="persona-card" key={index}>
            <div className="persona-foto">
              <img
                src={persona.foto}
                alt={`Foto de ${persona.nombre}`}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <span>FOTO</span>
            </div>

            <div className="persona-info">
              <h2>{persona.nombre}</h2>
              <p><strong>Edad:</strong> {persona.edad}</p>
              <p><strong>Fecha de desaparición:</strong> {persona.fecha}</p>
              <p><strong>Lugar:</strong> {persona.lugar}</p>
              <div className="persona-estado">DESAPARECIDA</div>
            </div>
          </article>
        ))}
      </div>

      {user && (
        <div className="session-section">
          <p><strong>Usuario:</strong> {user.name}</p>
          <p><strong>Carnet:</strong> {user.carnet}</p>
          <p><strong>Rol:</strong> {user.role}</p>
          <button className="logout-button" type="button" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      )}
    </main>
  );
}

export default HomePage;
