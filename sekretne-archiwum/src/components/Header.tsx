import { useLocation } from "react-router-dom";
import Equipment from "./Equipment";
function Header({ itemStatus, usedHints }: { itemStatus: boolean[],  usedHints: { card: string; hint: string }[];  }){
  return (
    <>
      <header className="header">
        <div>
        <h1>Sekretne Archiwum</h1>
        <p className="subHeading">Rozwiąż zagadki i ucieknij z archiwum!</p>
        </div>
        {location.pathname === "/Game" && (
          <Equipment itemStatus={itemStatus} usedHints={usedHints} />
        )}
      </header>
    </>
  );
}

export default Header;
