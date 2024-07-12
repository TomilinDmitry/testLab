import React, { RefObject, useRef } from "react";
import { Header } from "../widgets/header";
import style from "./style.module.scss";
import background from "../app/assets/background.png";
import backgroundTablet from "../app/assets/backgroundTablet.png";

import { Slider } from "../features/slider";
import { QuestionsBlock } from "../widgets/questions";
import { TextBlock } from "../widgets/textBlock";
import { FormBlock } from "../widgets/formBlock";
import { Footer } from "../widgets/footer";
import { SecondBlock } from "../widgets/secondBlock";
import { ThirdBlock } from "../widgets/thirdBlock";

export const MainPage = () => {
  const secondBlockRef = useRef(null);
  const thirdBlockRef = useRef(null);
  const questionsBlockRef = useRef(null);
  const formBlockRef = useRef(null);

  const scrollToSection = (ref: RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={style.container}>
      <div className={style.mainBlock}>
        <img
          src={background}
          alt='background'
          className={style.background}
        />
        <img
          src={backgroundTablet}
          alt='background'
          className={style.backgroundTablet}
        />
        <header>
          <Header
            scrollToSection={scrollToSection}
            refs={{
              secondBlockRef,
              thirdBlockRef,
              questionsBlockRef,
              formBlockRef,
            }}
          />
        </header>
        <main>
          <div className={style.textMainBlock}>
            <div className={style.textMainBlockContainer}>
              <h1>Говорят, никогда не поздно сменить профессию</h1>
              <span>
                Сделай круто тестовое задание и у тебя получится
              </span>
            </div>
            <button className={style.mainBlockButton}>
              Проще простого!
            </button>
          </div>
        </main>
      </div>

      {/* Second */}
      <div ref={secondBlockRef} className={style.secondBlock}>
        <SecondBlock />
      </div>
      {/* /second */}

      {/* Third */}
      <div ref={thirdBlockRef} className={style.thirdBlock}>
        <ThirdBlock />
      </div>
      {/* /Third */}

      {/* Reviews */}
      <div className={style.reviews}>
        <div className={style.reviewsContainer}>
          <h1>Отзывы</h1>
          <div className={style.reviewsItem}>
            <div className={style.cardsBlockDesktop}>
              <Slider items={3} />
            </div>
            <div className={style.cardsBlockTablet}>
              <Slider items={2} />
            </div>
            <div className={style.cardsBlockMobile}>
              <Slider items={1} />
            </div>
          </div>
        </div>
      </div>
      {/* /Reviews */}

      {/* QuestionsBlock */}
      <div ref={questionsBlockRef} className={style.questionsBlock}>
        <QuestionsBlock />
      </div>
      {/* /QuestionsBlock */}
      <div className={style.textBlock}>
        <TextBlock />
      </div>
      <div ref={formBlockRef} className={style.form}>
        <FormBlock />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
