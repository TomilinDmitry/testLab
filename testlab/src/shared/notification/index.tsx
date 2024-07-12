import React from "react";
import style from "./style.module.scss";
import { TNotification } from "../../app/types/types";
export const Notification = ({ text }: TNotification) => {
  return <div className={style.container}> {text}</div>;
};
