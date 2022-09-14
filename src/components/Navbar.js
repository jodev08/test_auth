import React from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.css";

export default function Navbar() {
  return (
    //navigation
    <nav className="navigation">
      <Link to="/">authentification</Link>

      <div className="button">
        <button>s'inscrire</button>

        <button>s'identifier</button>

        <button>Déconnexion</button>
      </div>
    </nav>
  );
}
