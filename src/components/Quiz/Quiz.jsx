import { useState } from "react";
import { Appcontainer, Results, Progress } from "./Quiz.styled";

const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
];
///////////////////////////////////////////////////////////////////////////////////

function Result({ correct }) {
  return (
    <Results>
      <img  src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='' />
      <h2 >
        Вы отгадали {correct} ответа из {questions.length}
      </h2>
      <a href="/">
        <button className="button">Попробовать снова</button>
      </a>
    </Results>
  );
}
///////////////////////////////////////////////////////////////////////////////////

function Game({ question, onClickVariant, step }) {
  const percentage = Math.round((step / questions.length) * 100);
  return (
    <>
      <Progress>
        <div
          style={{ width: `${percentage}%` }}
          className="inner"
        ></div>
      </Progress>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((item, index) => (
          <li onClick={() => onClickVariant(index)} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
///////////////////////////////////////////////////////////////////////////////////
function Quiz() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <Appcontainer>
      {step !== questions.length ? (
        <Game question={question} onClickVariant={onClickVariant} step={step} />
      ) : (
        <Result correct={correct} />
      )}
    </Appcontainer>
  );
}

export default Quiz;
