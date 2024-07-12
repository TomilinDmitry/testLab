import React, { useState } from "react";
import style from "./style.module.scss";
import { TQuestion } from "../../app/types/types";
export const Questions = ({ title, response }: TQuestion) => {
  const [open, setOpen] = useState<boolean>(false);
  const isOpen = () => {
    setOpen((prevOpen) => !prevOpen);
    console.log(open);
  };
  return (
    <li className={style.questionElement}>
      <span className={style.line}></span>
      <button className={style.questionsAndResponse} onClick={isOpen}>
        <h2>{title}</h2>
        <button className={`${open ? style.close : style.plus}`}>
          +
        </button>
      </button>
      {open && (
        <div className={style.response}>
          <p>{response}</p>
        </div>
      )}
    </li>
  );
};
