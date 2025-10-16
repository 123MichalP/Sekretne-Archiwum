import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Progress from "./components/Progress";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const cardsData = [
    {
      heading: "Stary obraz",
      description:
        "Tajemniczy obraz wisi na ścinie. Wygląda jakby dało się go przesunąć",
      icon: '<svg class="cardIcon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2639 15.9375L12.5958 14.2834C11.7909 13.4851 11.3884 13.086 10.9266 12.9401C10.5204 12.8118 10.0838 12.8165 9.68048 12.9536C9.22188 13.1095 8.82814 13.5172 8.04068 14.3326L4.04409 18.2801M14.2639 15.9375L14.6053 15.599C15.4112 14.7998 15.8141 14.4002 16.2765 14.2543C16.6831 14.126 17.12 14.1311 17.5236 14.2687C17.9824 14.4251 18.3761 14.8339 19.1634 15.6514L20 16.4934M14.2639 15.9375L18.275 19.9565M18.275 19.9565C17.9176 20 17.4543 20 16.8 20H7.2C6.07989 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4.12796 18.7313 4.07512 18.5321 4.04409 18.2801M18.275 19.9565C18.5293 19.9256 18.7301 19.8727 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V16.4934M4.04409 18.2801C4 17.9221 4 17.4575 4 16.8V7.2C4 6.0799 4 5.51984 4.21799 5.09202C4.40973 4.71569 4.71569 4.40973 5.09202 4.21799C5.51984 4 6.07989 4 7.2 4H16.8C17.9201 4 18.4802 4 18.908 4.21799C19.2843 4.40973 19.5903 4.71569 19.782 5.09202C20 5.51984 20 6.0799 20 7.2V16.4934M17 8.99989C17 10.1045 16.1046 10.9999 15 10.9999C13.8954 10.9999 13 10.1045 13 8.99989C13 7.89532 13.8954 6.99989 15 6.99989C16.1046 6.99989 17 7.89532 17 8.99989Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>',
      initialCardStatus: "viewed",
      popupContent:`**Obraz przedstawia Juliusza Cezara. Obok niego widnieje wielka liczba 3**   
      Znajdujesz za nim kartkę z napisem:  
      **UGMTGW**  
      *...*
      *Co?*
      `,
      hasPopupInput:false,
      password:null,
      victoryText: null,
    },
    {
      heading: "Szafka z zamkiem",
      description: "Stara szafka z zamkiem. Może uda się ją otworzyć?",
      icon: '<svg class="cardIcon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#000000" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect x="14.5" y="7.45" width="34.52" height="46.03" rx="3.01"></rect><line x1="31.76" y1="52.24" x2="31.76" y2="7.45"></line><line x1="18.23" y1="58.24" x2="18.23" y2="52.62"></line><line x1="45.18" y1="58.24" x2="45.18" y2="52.15"></line><line x1="37.49" y1="33.25" x2="37.49" y2="28.13" stroke-linecap="round"></line></g></svg>',
      initialCardStatus: "notViewed",
      popupContent: `Zablokowana szafka. Wymaga kodu (6 cyfr).  
      `,
      hasPopupInput:true,
      password:"sekret",
      victoryText:`Kłódka spada z pustym dźwiękiem na podłogę... \n
      Otrzymano: Pendrive`
    },
    {
      heading: "Stary komputer",
      description: "To jest opis starego komputera.",
      icon: '<svg class="cardIcon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd"> <path d="m0 0h32v32h-32z"></path> <path d="m27 3c2.7614237 0 5 2.23857625 5 5v12c0 2.7614237-2.2385763 5-5 5h-7v3h3c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1h3v-3h-7c-2.6887547 0-4.88181811-2.1223067-4.99538049-4.7831104l-.00461951-.2168896v-12c0-2.76142375 2.23857625-5 5-5zm-9 25v-3h-4v3zm9-23h-22c-1.65685425 0-3 1.34314575-3 3v12c0 1.6568542 1.34314575 3 3 3h22c1.6568542 0 3-1.3431458 3-3v-12c0-1.65685425-1.3431458-3-3-3z" fill="#000000" fill-rule="nonzero"></path> </g> </g></svg>',
      initialCardStatus: "locked",
      popupContent: "AAAA",
      hasPopupInput:true,
      password:null,
      victoryText: null,
    },
    {
      heading: "Sejf biurowy",
      description: "To jest opis sejfu biurowego.",
      icon: '<svg class="cardIcon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#000000" stroke-width="1.5"></path> <path d="M6 7L6 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M11 12C11 10.3431 12.3431 9 14 9C15.6569 9 17 10.3431 17 12C17 13.6569 15.6569 15 14 15C12.3431 15 11 13.6569 11 12Z" stroke="#000000" stroke-width="1.5"></path> <path d="M16.5 9.5L18 8" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M10 16L11.5 14.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M11.5 9.5L10 8" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M18 16L16.5 14.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>',
      initialCardStatus: "locked",
      popupContent: "AAAA",
      hasPopupInput:true,
      password:null,
      victoryText: null,
    },
    {
      heading: "Drzwi wyjściowe",
      description: "To jest opis drzwi wyjściowych.",
      icon: '<svg class="cardIcon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd"> <path d="m0 0h32v32h-32z"></path> <path d="m0 32v-2h5v-30h22v30h5v2zm25-30h-18v28h18zm-3 11v8h-2v-8z" fill="#000000" fill-rule="nonzero"></path> </g> </g></svg>',
      initialCardStatus: "locked",
      popupContent: "AAAA",
      hasPopupInput:false,
      password:null,
      victoryText: null,
    },
  ];
  const [cardsStatus, setCardsStatus] = useState(
    cardsData.map((card) => card.initialCardStatus)
  );

  const [itemStatus, setItemStatus] = useState([false, false, false]);

  const handleStatusChange = (index: number, newStatus: string) => {
    const updatedStatus = [...cardsStatus];
    updatedStatus[index] = newStatus;
    setCardsStatus(updatedStatus);
  };

  const progressData = cardsData.map((card, index) => ({
    heading: card.heading,
    status: cardsStatus[index],
  }));

  const handleUnlockNext = (index: number) =>{
    const updatedStatus = [...cardsStatus];
    if ((index + 1) < updatedStatus.length){
      console.log(updatedStatus)
      updatedStatus[index + 1] = "notViewed";
      console.log(updatedStatus)
      setCardsStatus(updatedStatus)
      setItemStatus([true, false, false])
      console.log(index+1)
    }
  }

  return (
    <div>
    <Header itemStatus={itemStatus} />
      <section className="cards wrap">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            heading={card.heading}
            description={card.description}
            icon={card.icon}
            initialCardStatus={cardsStatus[index]}
            popupContent={card.popupContent}
            hasPopupInput={card.hasPopupInput}
            password = {card.password}
            victoryText = {card.victoryText}
            onStatusChange={(newStatus: string) =>
              handleStatusChange(index, newStatus)
            }
            onUnlockNext={() => handleUnlockNext(index)}
          />
        ))}
        <Progress cards={progressData} />
      </section>
      <Footer />
    </div>
  );
}

export default App;
