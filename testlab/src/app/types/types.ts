import { RefObject } from "react";

export type TCard = {
  img: string;
  name: string;
  city: string;
  text: string;
};

export type TSilder = {
  currentIndex: number;
  itemsPage: number;
};
export type TQuestion = {
  title: string;
  response: string;
};

export type TNotification = {
  text: string;
};

export type TItems = {
  items: number;
};

export type TProps = {
  scrollToSection: (ref: RefObject<HTMLElement>) => void;
  refs: {
    secondBlockRef: RefObject<HTMLElement>;
    thirdBlockRef: RefObject<HTMLElement>;
    questionsBlockRef: RefObject<HTMLElement>;
    formBlockRef: RefObject<HTMLElement>;
  };
};
