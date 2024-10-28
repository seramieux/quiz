import "../styles/game.css";

function Game({ step, question, questions, onClickVariant }) {
  const percentage = Math.round((step / questions.length) * 100);
  return (
    <div>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progressInner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Game;
