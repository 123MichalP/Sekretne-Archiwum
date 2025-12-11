import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import Game from "./pages/Game";
import Login from "./pages/Login";
import Lore from "./pages/Lore";
import End from "./pages/End";
import Register from "./pages/Register";
const initialCardsStatus = [
  "viewed",
  "notViewed",
  "locked",
  "locked",
  "locked",
];

function App() {
  const [itemStatus, setItemStatus] = useState<boolean[]>(() => {
    const saved = localStorage.getItem("itemStatus");
    return saved ? JSON.parse(saved) : [false, false, false];
  });

  const resetAppState = () => {
    setItemStatus([false, false, false]);
    setUsedHints([]);
    setCardsStatus(initialCardsStatus);
    localStorage.removeItem("gameStartTime");
    localStorage.removeItem("cardsStatus");
    localStorage.removeItem("usedHints");
    localStorage.removeItem("itemStatus");
    localStorage.removeItem("gameState");
  };

  const [usedHints, setUsedHints] = useState<{ card: string; hint: string }[]>(
    () => {
      const saved = localStorage.getItem("usedHints");
      return saved ? JSON.parse(saved) : [];
    }
  );

  const [cardsStatus, setCardsStatus] = useState<string[]>(() => {
    const saved = localStorage.getItem("cardsStatus");
    return saved ? JSON.parse(saved) : initialCardsStatus;
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    async function loadGame() {
      if (!token) {
        console.log("No token, skipping backend load.");
        return;
      }

      try {
        const response = await fetch("http://localhost:5002/api/game/state", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Loaded game data from backend:", data);

          let rawState = data.state || {};
          if (typeof rawState === "string") {
            try {
              rawState = JSON.parse(rawState);
            } catch (e) {
              console.error("Failed to parse gameState JSON string:", e);
              return;
            }
          }
          const savedState = rawState;

          const backItemStatus = savedState.itemStatus;
          const backUsedHints = savedState.usedHints;
          const backCardsStatus = savedState.cardsStatus;
          const loadedTime = savedState.timeElapsed || 0;

          if (backCardsStatus && backCardsStatus.length > 0) {
            setItemStatus(backItemStatus || [false, false, false]);
            setUsedHints(backUsedHints || []);
            setCardsStatus(backCardsStatus || initialCardsStatus);

            localStorage.setItem(
              "gameStartTime",
              (Date.now() - loadedTime * 1000).toString()
            );

            console.log(
              "Game state successfully loaded and applied from backend!"
            );
          } else {
            console.log(
              "Backend state empty. Retaining local storage/default values."
            );
          }
        } else {
          console.error(
            "Failed to load game from backend:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error while fetching game state:", error);
      }
    }

    loadGame();
  }, [token]);

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
                cardsStatus={cardsStatus}
                setCardsStatus={setCardsStatus}
              />
            }
          />
          <Route path="/end" element={<End onAppReset={resetAppState} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
