import { Link } from "react-router-dom";
function Lore() {
  return (
    <div className="loreContainer">
      <div className="lorePaper">
        <h1 className="loreTitle">🗎 DZIENNIK</h1>
        <div className="loreText">
          <p>
            <span className="loreDate">19.04.1998 — 22:17</span>
            <br />
            Dziś spotkałem starca. Wyglądał na kogoś, kto od tygodni nie spał.
            Mówił coś o organizacji, która „chowa prawdę w archiwach”. Zanim
            zdążyłem zadać pytanie, wcisnął mi do ręki kartkę — na niej tylko
            współrzędne. Powtarzał jedno zdanie: „Jeśli tam pójdziesz… nie
            wracaj z pustymi rękoma.”
          </p>

          <p>
            <span className="loreDate">20.04.1998 — 23:30</span>
            <br />
            Dotarłem na miejsce. To stara, opuszczona fabryka na obrzeżach
            miasta. W środku jest ciemno i wilgotno. Jedyne źródło bladego
            światła znajduję się za drzwiami do piwnicy. Schodzę w dół.
          </p>

          <p>
            <span className="loreDate">20.04.1998 — 23:48</span>
            <br />
            Korytarze – ciągnące się korytarze – już nie wiem, jak długo tak
            idę. Ściany pokryte są kurzem i pajęczynami. Co jakiś czas słyszę
            dziwne szmery… jakby coś się poruszało w ciemności. Muszę iść dalej.
          </p>
          <p>
            <span className="loreDate">21.04.1998 — 00:01</span>
            <br />W końcu korytarz się kończy. Mam masę pytań: gdzie tak
            właściwie jestem? Co to za miejsce? Czy był tu jakiś schron? Jedyną
            odpowiedź daje ciche skapywanie pojedynczych kropli z sufitu.
            Natrafiam na właz w podłodze. Prawdopodobnie już tędy nie wrócę.
            Muszę iść...
          </p>
        </div>
        <Link to="/game" className="loreButton">
          Wejdź do archiwum...
        </Link>
      </div>
    </div>
  );
}

export default Lore;
