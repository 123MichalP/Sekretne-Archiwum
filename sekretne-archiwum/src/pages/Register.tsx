import { Link } from "react-router-dom";
import { useState } from "react";
function Login() {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
      <>
        <div className="loginCard">
          <h1>Rejestracja</h1>
          <form className="loginForm">
          <label htmlFor="login">Login</label>
          <input id="login" type="text" placeholder="Wpisz login" />

          <label htmlFor="password">Hasło</label>
          <div className="passwordWrapper">
          <input
              type={showPassword ? "text" : "password"}
              placeholder="Wpisz hasło"
            />
            <button
              type="button"
              className="showPassword"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? "Ukryj" : "Pokaż"}
            </button>
          </div>

          <div className="loginOptions">
            <label>
              <input type="checkbox" /> Zapamiętaj mnie
            </label>
            <Link to="#" className="forgot">Zapomniałeś hasła?</Link>
          </div>
          <button type="submit" className="loginButton">Zarejestruj się</button>
          <Link to="/lore" className="secondaryBtn">
            Przejdź do archiwum (bez logowania)
          </Link>
          
          </form>
          <p className="registerText">
            Masz już konto? <Link to="/">Zaloguj się!</Link>
          </p>
        </div>
      </>
    );
  }
  
  export default Login;
