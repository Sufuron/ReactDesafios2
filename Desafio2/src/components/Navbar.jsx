import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="text-center text-white p-3 rounded-bottom animate__animated animate__fadeInLeftBig">
      <ul>
        <NavLink
          exact
          activeClassName="btn-outline-secondary active"
          className="btn btn-outline-secondary text-decoration-none text-white"
          to="/"
        >
          Inicio
        </NavLink>
        <NavLink
          exact
          activeClassName="btn-outline-secondary active"
          className="btn btn-outline-secondary text-decoration-none text-white"
          to="/ImageApi"
        >
          Imagenes
        </NavLink>
        <NavLink
          exact
          activeClassName="btn-outline-secondary active"
          className="btn btn-outline-secondary text-decoration-none text-white"
          to="/Contact"
        >
          Contacto
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
