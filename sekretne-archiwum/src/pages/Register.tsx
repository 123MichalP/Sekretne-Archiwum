import { Link } from "react-router-dom";
import { useState } from "react";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requestBody = { username, password };
    console.log("Request body:", requestBody);

    try {
      const response = await fetch("http://localhost:5002/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        const loginResponse = await fetch(
          "http://localhost:5002/api/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
          }
        );

        if (loginResponse.ok) {
          const data = await loginResponse.json();
          localStorage.setItem("token", data.token);
          console.log("Login successful, token:", data.token);
          window.location.href = "/lore";
        } else {
          console.error("Login failed:", loginResponse.statusText);
        }
      } else {
        console.error("Registration failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during registration or login:", error);
    }
  };

  return (
    <>
      <div className="loginCard">
        <h1>Rejestracja</h1>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label htmlFor="login">Login</label>
          <input
            id="login"
            type="text"
            placeholder="Wpisz login"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Hasło</label>
          <div className="passwordWrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Wpisz hasło"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <Link to="#" className="forgot">
              Zapomniałeś hasła?
            </Link>
          </div>
          <button type="submit" className="loginButton">
            Zarejestruj się
          </button>
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
