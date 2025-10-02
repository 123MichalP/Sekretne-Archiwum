import "../App.css";
import { useState } from "react";
import Popup from "./Popup";
interface Props {
  heading: string;
  description: string;
  icon: string;
  initialCardStatus: string;
  onStatusChange?: (newStatus: string) => void;
}

function Card({
  heading,
  description,
  icon,
  initialCardStatus,
  onStatusChange,
}: Props) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [cardStatus, setCardStatus] = useState(initialCardStatus);

  const handleClick = () => {
    if (cardStatus !== "locked") {
      setCardStatus("viewed");
      setButtonPopup(true);
      onStatusChange?.("viewed"); // informacja dla rodzica
    }
  };

  return (
    <div className="card" onClick={handleClick}>
      <div dangerouslySetInnerHTML={{ __html: icon }} />
      <h4>{heading}</h4>
      <p>{description}</p>
      <span className={`spanStatus ${cardStatus}`}>
        {cardStatus === "viewed"
          ? "Zobaczono"
          : cardStatus === "notViewed"
          ? "Nie zobaczono"
          : "Zablokowane"}
      </span>

      {cardStatus !== "locked" ? (
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>{heading}</h3>
        </Popup>
      ) : null}
    </div>
  );
}

export default Card;
