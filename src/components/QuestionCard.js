import React, { useState } from "react";

const QuestionBox = ({ question, options, selected, counter }) => {
  // suffle the answer
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = options[i]
    options[i] = options[j]
    options[j] = temp
  }

  const [answer, setAnswer] = useState(options);
  const [btnOnOff, setBtnOnOff] = useState(false);
  return (
    <div className="questionCard">
      <div className="question"><h2>{counter + 1}. {question}</h2></div>
      {answer.map((text, index) => (
        <button
          disabled={btnOnOff}
          key={index}
          className="answerBtn"
          onClick={() => {
            setBtnOnOff(true);
            setAnswer([text]);
            selected(text);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;
