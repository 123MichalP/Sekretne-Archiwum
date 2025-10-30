import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import Game from "./pages/Game";  
import Login from "./pages/Login";
import Lore from "./pages/Lore"; 
import End from "./pages/End";     
import Register from "./pages/Register";     

function App() {
  const [itemStatus, setItemStatus] = useState([false, false, false]);
  const [usedHints, setUsedHints] = useState<{ card: string; hint: string }[]>([]);

  return (
    <>
      <Header itemStatus={itemStatus} usedHints={usedHints} />
      <main className="main">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/lore" element={<Lore />} />
        <Route
          path="/game"
          element={
            <Game
              itemStatus={itemStatus}
              setItemStatus={setItemStatus}
              usedHints={usedHints}
              setUsedHints={setUsedHints}
            />
          }
        />
        <Route path="/end" element={<End />} />
      </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
