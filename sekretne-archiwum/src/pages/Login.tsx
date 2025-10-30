import { Link } from "react-router-dom";
function Login() {
    return (
      <>
          <h1>Logowanie</h1>
          <Link to="/register">Nie masz konta? zarejestruj się</Link>
          <Link to="/lore">Zaloguj się</Link>
      </>
    );
  }
  
  export default Login;
  