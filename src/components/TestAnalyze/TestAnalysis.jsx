import React from "react";
import "./testAnalysis.css";

import CreateSpecialText from "../ToolButton/CreateSpecialText";
import RestartButton from "./../ToolButton/RestartButton";
import Keyboard from "../Keyboard/Keyboard";

const TestAnalysis = ({
  startTime,
  endTime,
  totalChars,
  totalErrors,
  incorrectChars,
  wordComplete,
  activeRestartButton,
  setActiveRestartButton,
  setStatus,
  languageTest,
  userId,
}) => {
  let accuracy = 0;

  if (totalChars > totalErrors)
    accuracy = ((totalChars - totalErrors) / totalChars) * 100;
  const totalTime = (endTime - startTime) / 1000;
  let WPM = ((wordComplete / totalTime) * 60).toFixed(2);

  console.log("Total chars: ", totalChars);
  console.log("Total error: ", totalErrors);
  console.log("Total time: ", totalTime);
  console.log("incorectChars: ", incorrectChars);

  return (
    <div className="section-analysis">
      <div className="container">
        <div className="analysis-wrapper">
          <h1 className="analysis-title">Анализ вашей печати</h1>
          <div className="itemValue">WPM(Слов в минуту) : {WPM}</div>
          <div className="itemValue">{`Accuracy(Точность): ${accuracy.toFixed(
            0
          )}%`}</div>
          <div className="itemValue">
            Ваши ошибки:
            {Object.entries(incorrectChars)
              .map(([key, value]) => ` ${key}: ${value}`)
              .join(", ")}
          </div>

          <h2 className="analysis-title">
            Вам следует обратить внимание на эти клавиши
          </h2>
          <div className="keyboard">
            <Keyboard
              incorrectKeys={incorrectChars}
              languageTest={languageTest}
            />
          </div>
          <div className="button">
            <CreateSpecialText
              activeRestartButton={activeRestartButton}
              setActiveRestartButton={setActiveRestartButton}
              setStatus={setStatus}
              incorrectChars={incorrectChars}
              userId={userId}
              languageTest={languageTest}
            />

            <div className="hint">Запросить текст с сервера</div>
          </div>
          <div className="button">
            {" "}
            <RestartButton
              activeRestartButton={activeRestartButton}
              setActiveRestartButton={setActiveRestartButton}
              setStatus={setStatus}
            />
            <div className="hint">Нажмите tab + Enter чтобы начать сначала</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestAnalysis;
