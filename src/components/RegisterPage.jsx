import React from "react";
import { useState } from "react";


const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setChangePassword] = useState("");

  // Manejador de cambios para el email
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Manejador de cambios para el password
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Manejador de cambios para el password
  const handleConfirmPasswordChange = (event) => {
    setChangePassword(event.target.value);
  };

  const handleSubmit = (event) => {
    if (email.length == 0) {
      alert("El email es requerido");
      event.preventDefault();
    } else if (password.length == 0) {
      alert("El password es requerido");
      event.preventDefault();
    } else if (password.length <= 5) {
      alert("el password debe tener al menos 6 caracteres");
      event.preventDefault();
    } else if (password != confirmPassword) {
      alert("los password no coinciden");
      event.preventDefault();
    } else {
      alert("Registro de usuario exitoso");
    }
  };

  return (
    <div className="row pt-5">
      <div className="col-md-6 offset-md-3">
        <form onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal">Register</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={handleEmailChange}
            />
            <label>Email address</label>
          </div>
          <div className="form-floating mt-4">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <label>Password</label>
          </div>
          <div className="form-floating mt-4">
            <input
              type="password"
              className="form-control"
              id="floatingConfirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <label>Confirm Password</label>
          </div>

          <button className="btn btn-primary w-100 py-2 mt-4" type="submit">
            Registrar Usuario
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
