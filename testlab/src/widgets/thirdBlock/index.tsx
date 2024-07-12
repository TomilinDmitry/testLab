import React from "react";
import style from "./style.module.scss";
import ImageThirdBlock_1 from "../../app/assets/ImageThirdBlock_1.png";
import ImageThirdBlock_2 from "../../app/assets/ImageThirdBlock_2.png";
export const ThirdBlock = () => {
  return (
    <div className={style.thirdBlockContainer}>
      <section className={style.textThirdBlock}>
        <h1>Круто,ты дошел до третьего блока</h1>
        <p>
          <span>
            63% опрошенных пользовались кредитами из-за того, что не
            могли покрыть непредвиденные расходы свыше 15 000 ₽.
          </span>
          <br />
          <br />
          <span>
            Доступ к заработанным деньгам помогает отказаться от
            кредитов и экономить деньги на процентах и штрафах.
          </span>
        </p>
      </section>
      <div className={style.imageBlock}>
        <img
          src={ImageThirdBlock_1}
          alt='ImageThirdBlock_1'
          className={style.imageThirdBlock_1}
        />
        <img
          src={ImageThirdBlock_2}
          alt='ImageThirdBlock_2'
          className={style.imageThirdBlock_2}
        />
      </div>
    </div>
  );
};
