import React from "react";
import style from "./style.module.scss";
export const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <div className={style.circles}>
          <div className={style.blueCircle}></div>
          <div className={style.whiteCircle}></div>
        </div>
        <span>testLab</span>
      </div>
      <div>
        <ul className={style.navigationList}>
          <li>Как это работает</li>
          <li>3-й блок</li>
          <li>Вопросы и ответы</li>
          <li>Форма</li>
        </ul>
      </div>
    </div>
  );
};
