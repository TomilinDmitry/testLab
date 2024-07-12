import React from "react";
import style from "./style.module.scss";
import waiting from "../../app/assets/icons/waiting.svg";
import delivery from "../../app/assets/icons/delivery-truck.svg";
import secure from "../../app/assets/icons/secure.svg";
import moneyBack from "../../app/assets/icons/money-bags.svg";
export const SecondBlock = () => {
  return (
    <div className={style.containerSecondBlock}>
      <h1 className={style.title}>Как это работает</h1>
      <ul className={style.secondBlockList}>
        <li>
          <img src={waiting} alt='waitingIcons' />
          <section>
            <h4>Почитай задание внимательно</h4>
            <p>Думаю у тебя не займет это больше двух-трех минут</p>
          </section>
        </li>
        <li>
          <img src={delivery} alt='deliveryIcons' />
          <section>
            <h4>Почитай задание внимательно</h4>
            <p>
              Подумай как это будет работать на разных разрешениях и
              при скролле
            </p>
          </section>
        </li>
        <li>
          <img src={secure} alt='secureIcons' />
          <section>
            <h4>Почитай задание внимательно</h4>
            <p>
              Чтобы мы могли тебе доверить подобные задачи в будущем
            </p>
          </section>
        </li>
        <li>
          <img src={moneyBack} alt='moneyBackIcons' />
          <section>
            <h4>Почитай задание внимательно</h4>
            <p>
              Ну тут все просто, не я придумал правила, но думаю так и
              будет)))
            </p>
          </section>
        </li>
      </ul>
    </div>
  );
};
