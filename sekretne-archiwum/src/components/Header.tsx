import Equipment from "./Equipment";
function Header({ itemStatus }: { itemStatus: boolean[] }) {
  return (
    <>
      <header className="header">
        <div>
        <h1>Sekretne Archiwum</h1>
        <p>Rozwiąż zagadki i ucieknij z archiwum!</p>
        </div>
        <Equipment itemStatus={itemStatus}></Equipment>
      </header>
    </>
  );
}

export default Header;
