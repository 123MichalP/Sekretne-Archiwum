import React from "react";

type PopupProps = {
  trigger: boolean;
  children?: React.ReactNode;
  setTrigger: (value: boolean) => void;
};

const Popup: React.FC<PopupProps> = ({ trigger, children, setTrigger }) => {
  if (!trigger) return null;

  return (
    <article className="popup active" onClick={() => setTrigger(false)}>
      <div className="innerPopup" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={() => setTrigger(false)}>Zamknij</button>
      </div>
    </article>
  );
};

export default Popup;
