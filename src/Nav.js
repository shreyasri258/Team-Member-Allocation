import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg gradient-custom border border-dark text-primary">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item text-danger">
          <Link className="nav-link" to="/">
        <h3 >Home</h3>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/GroupedTeamMembers">
           <h3>Teams</h3> 
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
