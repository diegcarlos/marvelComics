import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import GlobalStyled from "./GlobalStyled";
import { ProvaiderComics } from "./context/useMarvelComics"

const App: React.FC = () => {
  return (
    <ProvaiderComics>
      <GlobalStyled />
      <Header />
      <Main />
    </ProvaiderComics>
  );
};

export default App;
