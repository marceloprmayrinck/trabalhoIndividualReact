import { useState, useEffect } from "react";
import "./App.css";
import styles from "./style.module.css";

function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tentativaLogin, setTentativaLogin] = useState(false);

  const clickButton = () => {
    if (tentativaLogin) {
      setTentativaLogin(false);
    } else {
      setTentativaLogin(true);
    }
  };

  useEffect(() => {
    console.log("Tentativa de Login");
    console.log("Email:", email);
    console.log("Senha:", senha);
  }, [tentativaLogin]);

  return (
    <>
      <div className={styles.content}>
        <div className="login-container">
          <img className="logo" src="/logo.png"></img>
          <p className="login-aviso">Log in with your account</p>
          <div className="login-email">
            <input
              className="login-input"
              name="email"
              type="text"
              placeholder="Email adress"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="login-senha">
            <input
              className="login-input"
              name="password"
              type="password"
              placeholder="Password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            ></input>
          </div>
          <input
            className="login-button"
            type="submit"
            value="Login"
            onClick={clickButton}
          ></input>
          <a className="google-button" href="">
            <img src="/google.png" />
            <span>Sign in with Google</span>
          </a>
          <div className="login-register">
            <p>Don't have an account?</p>
          </div>
          <a className="register-button">Register</a>
          <p className="info-register">
            All accounts are valid across FIFA Kit Creator, FM Kit Creator and
            PES Master.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
