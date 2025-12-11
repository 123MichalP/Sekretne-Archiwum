import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface Props {
  onAppReset: () => void;
}

function End({ onAppReset }: Props) {
  const [finalTime, setFinalTime] = useState<number | null>(null);
  const [bestTime, setBestTime] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation()

  useEffect(() => {
      const passedFinalTime = location.state?.finalTime;
      
      let totalSeconds = null;
  
      if (typeof passedFinalTime === 'number') {
          totalSeconds = passedFinalTime;
      } else {
          const start = localStorage.getItem("gameStartTime");
          if (start) {
              totalSeconds = Math.floor((Date.now() - Number(start)) / 1000);
          }
      }
  
      if (totalSeconds !== null) {
          setFinalTime(totalSeconds);
  
          const token = localStorage.getItem("token");
          if (token) 
            
          {fetch("http://localhost:5002/api/game/end", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ time: totalSeconds }),})
          .then((res) => res.json())
            .then((data) => {
            const savedBestTime = data.bestTime;
            
            if (savedBestTime !== null) {
              setBestTime(savedBestTime);
              } else {

              setBestTime(totalSeconds);
            }
          })
          .catch((error) =>
            console.error("Error saving best time:", error)
        );
          }

      }
 }, [location.state]); 
  
  const handleRestart = () => {
    localStorage.removeItem("gameStartTime");
    localStorage.removeItem("cardsStatus");
    localStorage.removeItem("usedHints");
    localStorage.removeItem("itemStatus");

    localStorage.removeItem("gameState");

    onAppReset();
    navigate("/game");
  };

  const minutes = finalTime ? Math.floor(finalTime / 60) : 0;
  const seconds = finalTime ? finalTime % 60 : 0;

  const bestMinutes = bestTime ? Math.floor(bestTime / 60) : 0;
  const bestSeconds = bestTime ? bestTime % 60 : 0;

  return (
    <div className="loginCard">
      <h1 className="endText">To be continued...</h1>
      {finalTime !== null && (
        <h2 className="scoreText">
          Twój czas: {minutes} min {seconds} sek
        </h2>
      )}
      {bestTime !== null && (
        <h2 className="scoreText">
          Najlepszy czas: {bestMinutes} min {bestSeconds} sek
        </h2>
      )}
      <button onClick={handleRestart} className="loginButton">
        Zacznij grę od nowa
      </button>
    </div>
  );
}

export default End;
