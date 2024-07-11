import React from "react";
import style from "./style.module.scss";

import { TCard } from "../../app/types/types";
export const Card = ({ city, name, img, text }: TCard) => {
  return (
   
      <div className={style.card}>
        <div className={style.headerCard}>
          <img src={img} alt='avatar_1' />
          <p>
            <span className={style.name}>{name}</span>
            <br />
            <span className={style.city}>{city}</span>
          </p>
        </div>
        <p className={style.cardText}>{text}</p>
      
    </div>
  );
};
