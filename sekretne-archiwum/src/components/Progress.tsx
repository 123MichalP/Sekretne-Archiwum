interface Props {
  cards: {
    heading: string;
    status: string;
  }[];
}
function Progress({ cards }: Props) {
  return (
    <div className="card">
      <h3>Postępy</h3>
      <ul>
        <li className={cards[0].status}>{cards[0].heading}</li>
        <li className={cards[1].status}>{cards[1].heading}</li>
        <li className={cards[2].status}>{cards[2].heading}</li>
        <li className={cards[3].status}>{cards[3].heading}</li>
        <li className={cards[4].status}>{cards[4].heading}</li>
      </ul>
    </div>
  );
}

export default Progress;
