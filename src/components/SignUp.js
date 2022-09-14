//modale s inscrire

import React from "react";
import "../components/SignUp.css";

export default function SignUp() {
  return (
    <>
      <div className="global">
        <h5>s'inscrire</h5>
      </div>

      <form>
        <label htmlFor="signUpEmail">Adresse e-mail</label>
        <input
          name="email"
          required
          type="email"
          className="form-control"
          id="signUpEmail"
        />

        <label htmlFor="signUpPwd">Mot de passe</label>
        <input
          name="pwd"
          required
          type="password"
          className="form-control"
          id="signUpPwd"
        />

        <label htmlFor="repeatPwd">Répéter le mot de passe</label>
        <input
          name="pwd"
          required
          type="password"
          className="form-control"
          id="repeatPwd"
        />
        <p>Validation</p>
        <button>Envoyer</button>
      </form>
    </>
  );
}
