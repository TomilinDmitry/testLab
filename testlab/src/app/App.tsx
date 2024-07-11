import React from "react";

import style from "./App.module.scss";
import { MainPage } from "../pages/MainPage";

function App() {
  return (
    <div className={style.app}>
      <MainPage />
    </div>
  );
}

export default App;
