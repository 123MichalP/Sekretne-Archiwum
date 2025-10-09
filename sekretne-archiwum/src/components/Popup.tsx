import React from "react";

type PopupProps = {
  trigger: boolean;
  children?: React.ReactNode;
  setTrigger: (value: boolean) => void;
};

const Popup: React.FC<PopupProps> = ({ trigger, children, setTrigger }) => {

    return (
      <article
      className={`popup ${trigger ? "show" : ""}`}
      onClick={() => setTrigger(false)}
    >
      <div className="innerPopup" onClick={(e) => e.stopPropagation()}>
        {children}
        {/* <button onClick={() => setTrigger(false)}>Zamknij</button> */}
      </div>
    </article>
  );
};

export default Popup;
