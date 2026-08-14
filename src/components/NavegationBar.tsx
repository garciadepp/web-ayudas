function NavigationBar() {
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

      <button
        className="navigation-bar__menu"
        type="button"
        aria-label="Abrir menú de navegación"
      >
        <span className="navigation-bar__menu-line" />
        <span className="navigation-bar__menu-line" />
        <span className="navigation-bar__menu-line" />
      </button>
    </header>
  );
}

export default NavigationBar;