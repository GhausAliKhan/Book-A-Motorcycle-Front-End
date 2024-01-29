import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => (
  <div id="navbar">
    <NavLink to="/" className="navlink">Home</NavLink>
    <NavLink to="/reservations" className="navlink">Reservations</NavLink>
  </div>
);

export default Navbar;
