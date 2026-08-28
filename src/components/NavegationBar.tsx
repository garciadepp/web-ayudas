import { useLocation, useNavigate } from "react-router-dom";

import { authRepository } from "../repositories/authRepository";

function NavigationBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthenticated = authRepository.isAuthenticated();

  const handleLogout = () => {
    authRepository.logout();
    navigate("/login", { replace: true });
  };

  return (
    <header className="navigation-bar">
      <a className="navigation-bar__brand" href="/" aria-label="Ir al inicio">
        <img
          className="navigation-bar__logo"
          src="/favicon.svg"
          alt="Logo de personas desaparecidas"
        />
        <span className="navigation-bar__title">personas desaparecidas</span>
      </a>

      {isAuthenticated && location.pathname !== "/login" ? (
        <button
          className="navigation-bar__logout"
          type="button"
          onClick={handleLogout}
        >
          Cerrar sesión
        </button>
      ) : (
        <button
          className="navigation-bar__menu"
          type="button"
          aria-label="Abrir menú de navegación"
        >
          <span className="navigation-bar__menu-line" />
          <span className="navigation-bar__menu-line" />
          <span className="navigation-bar__menu-line" />
        </button>
      )}
    </header>
  );
}

export default NavigationBar;
