import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Travel Entries</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/add">Add Entry</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/view">View Entries</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
