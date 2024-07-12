import React from "react";
import style from "./style.module.scss";
import { useDispatch, useSelector } from "../../app/types/hooks";
import { setCurrentIndex } from "../../app/services/slices/sliderSlice";
export const Pagination = ({ totalPages }: any) => {
  const dispatch = useDispatch();
  const { currentIndex } = useSelector((store) => store.slider);
  const handlePageClick = (pageIndex: number) => {
    dispatch(setCurrentIndex(pageIndex));
  };
  return (
    <div className={style.pagination}>
      {Array.from({ length: totalPages }, (_, pageIndex) => (
        <span
          key={pageIndex}
          className={`${style.pageDot} ${
            pageIndex === currentIndex ? style.active : ""
          }`}
          onClick={() => handlePageClick(pageIndex)}
        />
      ))}
    </div>
  );
};
