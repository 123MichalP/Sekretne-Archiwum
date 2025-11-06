import { Link } from "react-router-dom";
function Lore() {
  return (
    <div className="loreContainer">
      <div className="lorePaper">
        <h1 className="loreTitle">🗎 DZIENNIK</h1>
        <div className="loreText">
          <p>
            <span className="loreDate">21.10.2001</span><br />
            Zwykły deszczowy dzień. Jak zawsze w tym mieście.  
            Jednakże okazał się on bardzo szczególny...
          </p>

          <p>
            <span className="loreDate">21.10.2001</span><br />
            W archiwum znaleziono coś, co nigdy nie powinno ujrzeć światła dziennego...
          </p>

          <p>
            <span className="loreDate">21.10.2001</span><br />
            Twoim zadaniem jest odkryć, co tak naprawdę się wtedy wydarzyło.
          </p>
        </div>
        <Link to="/game" className="loreButton">Wejdź do archiwum...</Link>
      </div>
    </div>
  );
}

export default Lore;
