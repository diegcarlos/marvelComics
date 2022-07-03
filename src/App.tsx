import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import GlobalStyled from "./GlobalStyled";
import { ProviderComics } from "./context/useMarvelComics"

const App: React.FC = () => {
  return (
    <ProviderComics>
      <GlobalStyled />
      <Header />
      <Main />
    </ProviderComics>
  );
};

export default App;
