import "../App.css";
interface Props {
    heading: string;
    description: string;
    icon: string;
    cardStatus: string;
}

function Card({heading, description, icon, cardStatus}: Props) {

    return(
        <div className="card">
            <div dangerouslySetInnerHTML={{ __html: icon }} />
            <h4>{heading}</h4>
            <p>{description}</p>

            <span className={`spanStatus ${cardStatus}`}> { cardStatus==="viewed" ? "Zobaczono" : cardStatus==="notViewed" ? "Nie zobaczono" : "Zablokowane"}</span>
        </div>
    )
}

export default Card;