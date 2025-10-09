import "../App.css";
import { useState, useEffect} from "react";
import Popup from "./Popup";
import ReactMarkdown from "react-markdown";

interface Props {
  heading: string;
  description: string;
  icon: string;
  initialCardStatus: string;
  popupContent: string;
  hasPopupInput: boolean;
  onStatusChange?: (newStatus: string) => void;
  password: string | number | null;
  onUnlockNext?: () => void;
}

function Card({
  heading,
  description,
  icon,
  initialCardStatus,
  onStatusChange,
  popupContent,
  hasPopupInput,
  password,
  onUnlockNext,
}: Props) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [cardStatus, setCardStatus] = useState(initialCardStatus);
  const [inputValue, setInputValue] = useState("");
  const [reactionText, setReactionText] = useState("");

  useEffect(() => {
    setCardStatus(initialCardStatus);
  }, [initialCardStatus]);

  const handleClick = () => {
    if (cardStatus !== "locked") {
      setCardStatus("viewed");
      setButtonPopup(true);
      onStatusChange?.("viewed"); // informacja dla rodzica
    }
  };

  const handleConfirm = () => {
    console.log(password)
    console.log(inputValue)

    if(inputValue == password){
      setReactionText("DOBRZEEEEEEEEEEE!")
      onUnlockNext?.();
    }
    else{
      setReactionText("ŹLEEEEEEEEEE!")
    }
  }

  return (
    <>
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
    </div>
    {cardStatus !== "locked" && (
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h2>{heading}</h2>
          <article className="popupContent">
            <ReactMarkdown>{popupContent}</ReactMarkdown>
          </article>
          {hasPopupInput && (
            <>
              <input
                className="popupInput"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Wpisz hasło"
              />
              <button
                type="button"
                className="popupButton"
                onClick={handleConfirm}
              >
                Zatwierdź
              </button>
              <p className="reactionParagraph">{reactionText}</p>
            </>
          )}
        </Popup>
      )}
    </>
  );
}

export default Card;
