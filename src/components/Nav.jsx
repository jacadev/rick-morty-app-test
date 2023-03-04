import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch, setSearch }) => (
  <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <NavLink
          to="/"
          className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
        >
          <svg
            className="bi me-2"
            width="40"
            height="32"
            role="img"
            aria-label="Bootstrap"
          ></svg>
        </NavLink>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <NavLink to="/" className="nav-link px-2 text-secondary">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link px-2 text-white">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/cards" className="nav-link px-2 text-white">
              Cards
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="nav-link px-2 text-white">
              Login
            </NavLink>
          </li>          
        </ul>
        <SearchBar onSearch={onSearch} setSearch={setSearch} />
      </div>
    </div>
  </header>
);

export default Nav;
