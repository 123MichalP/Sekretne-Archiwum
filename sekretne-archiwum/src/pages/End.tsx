import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function End() {
  const [finalTime, setFinalTime] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const start = localStorage.getItem("gameStartTime");
    if (start) {
      const totalSeconds = Math.floor((Date.now() - Number(start)) / 1000);
      setFinalTime(totalSeconds);
    }
  }, []);

  const handleRestart = () => {
    localStorage.removeItem("gameStartTime");
    localStorage.removeItem("cardsStatus");
    localStorage.removeItem("usedHints");
    localStorage.removeItem("itemStatus");

    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:5002/api/game/state", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          gameState: {
            itemStatus: [],
            usedHints: [],
            cardsStatus: ["viewed", "notViewed", "locked", "locked", "locked"],
            timeElapsed: 0,
          },
        }),
      }).catch((error) =>
        console.error("Error resetting backend game state:", error)
      );
    }

    navigate("/game");
  };

  const minutes = finalTime ? Math.floor(finalTime / 60) : 0;
  const seconds = finalTime ? finalTime % 60 : 0;

  return (
    <div className="loginCard">
      <h1 className="endText">To be continued...</h1>
      {finalTime !== null && (
        <h2 className="scoreText">
          Twój czas: {minutes} min {seconds} sek
        </h2>
      )}
      <button onClick={handleRestart} className="loginButton">
        Zacznij grę od nowa
      </button>
    </div>
  );
}

export default End;
