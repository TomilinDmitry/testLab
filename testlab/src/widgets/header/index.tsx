import React, { useState } from "react";
import style from "./style.module.scss";
import rightArrowSmall from "../../app/assets/icons/rightArrowSmall.svg";
import { TProps } from "../../app/types/types";
export const Header = ({ scrollToSection, refs }: TProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className={style.container}>
      <div className={`${open ? style.logoDropDown : style.logo}`}>
        <div className={style.circles}>
          <div className={style.blueCircle}></div>
          <div className={style.whiteCircle}></div>
        </div>
        <span>testLab</span>
      </div>
      <nav className={style.desktopNavigation}>
        <ul className={style.navigationList}>
          <li onClick={() => scrollToSection(refs.secondBlockRef)}>
            Как это работает
          </li>
          <li onClick={() => scrollToSection(refs.thirdBlockRef)}>
            3-й блок
          </li>
          <li onClick={() => scrollToSection(refs.questionsBlockRef)}>
            Вопросы и ответы
          </li>
          <li onClick={() => scrollToSection(refs.formBlockRef)}>
            Форма
          </li>
        </ul>
      </nav>
      <nav className={style.tabletNavigation}>
        <button className={style.dropdownButton} onClick={toggleOpen}>
          <div
            className={`${
              open ? style.crossTop : style.lineTop
            }`}></div>
          <div
            className={`${
              open ? style.crossBottom : style.lineBottom
            }`}></div>
        </button>
        {open && (
          <ul className={style.dropDownList}>
            <li onClick={() => scrollToSection(refs.secondBlockRef)}>
              Как это работает{" "}
              <img src={rightArrowSmall} alt='smallArrow' />
            </li>
            <li onClick={() => scrollToSection(refs.thirdBlockRef)}>
              3-й блок <img src={rightArrowSmall} alt='smallArrow' />
            </li>
            <li
              onClick={() => scrollToSection(refs.questionsBlockRef)}>
              Вопросы и ответы{" "}
              <img src={rightArrowSmall} alt='smallArrow' />
            </li>
            <li
              className={style.withoutBorder}
              onClick={() => scrollToSection(refs.formBlockRef)}>
              Форма <img src={rightArrowSmall} alt='smallArrow' />
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};
