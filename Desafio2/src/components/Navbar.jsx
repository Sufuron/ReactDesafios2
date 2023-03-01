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
          Home
        </NavLink>
        <NavLink
          exact
          activeClassName="btn-outline-secondary active"
          className="btn btn-outline-secondary text-decoration-none text-white"
          to="/ImageApi"
        >
          Image
        </NavLink>
        <NavLink
          exact
          activeClassName="btn-outline-secondary active"
          className="btn btn-outline-secondary text-decoration-none text-white"
          to="/Contact"
        >
          Contact
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
