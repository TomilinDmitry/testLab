import { data } from "../../app/services/mocks/reviews";
import { TCard, TItems } from "../../app/types/types";
import { Card } from "../../shared/card";
import style from "./style.module.scss";
import leftArrow from "../../app/assets/icons/leftArrow.svg";
import rightArrow from "../../app/assets/icons/rightArrow.svg";
import rightArrowHovered from "../../app/assets/icons/rightArrowHovered.svg";
import leftArrowHovered from "../../app/assets/icons/leftArrowHovered.svg";
import { setCurrentIndex } from "../../app/services/slices/sliderSlice";
import { useDispatch, useSelector } from "../../app/types/hooks";
import { Pagination } from "../pagination";

export const Slider = ({ items }: TItems) => {
  const totalPages = Math.ceil(data.length / items);
  const dispatch = useDispatch();
  const { currentIndex } = useSelector((store) => store.slider);
  const handlePrev = () => {
    dispatch(
      setCurrentIndex(
        currentIndex === 0 ? totalPages - 1 : currentIndex - 1,
      ),
    );
  };

  const handleNext = () => {
    dispatch(
      setCurrentIndex(
        currentIndex === totalPages - 1 ? 0 : currentIndex + 1,
      ),
    );
  };

  const currentData = data.slice(
    currentIndex * items,
    currentIndex * items + items,
  );

  return (
    <div className={style.slider}>
      <div className={style.container}>
        <button onClick={handlePrev}>
          <img
            src={leftArrow}
            alt=''
            className={style.defaultArrowLeftt}
          />
          <img
            src={leftArrowHovered}
            alt='hoveredArrow'
            className={style.hoveredArrowLeft}
          />
        </button>
        <div className={style.sliderContent}>
          {currentData.map((el: TCard, index: number) => (
            <Card
              key={index}
              text={el.text}
              name={el.name}
              city={el.city}
              img={el.img}
            />
          ))}
        </div>
        <button onClick={handleNext}>
          <img
            src={rightArrow}
            alt=''
            className={style.defaultArrowRight}
          />
          <img
            src={rightArrowHovered}
            alt=''
            className={style.hoveredArrowRight}
          />
        </button>
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
};
