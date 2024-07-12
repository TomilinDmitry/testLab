import React from "react";
import { questions } from "../../app/services/mocks/question";
import { Questions } from "../../shared/question";
import style from "./index.module.scss";
export const QuestionsBlock = () => {
  return (
    <div className={style.questionsBlock}>
      <h1>Вопросы и ответы</h1>
      <ul className={style.questionsList}>
        {questions.map((question, index) => (
          <Questions
            key={index}
            response={question.response}
            title={question.question}
          />
        ))}
      </ul>
    </div>
  );
};
