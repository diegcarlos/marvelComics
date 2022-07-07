import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import GlobalStyled from "./GlobalStyled";
import { ProviderComics } from "./context/useMarvelComics";
import ClickBtnRight from "./components/ClickBtnRight";

const App: React.FC = () => {

  return (
    <ProviderComics>
      <GlobalStyled />
      <ClickBtnRight
        options={[
          {
            label: "Teste1",
          },
          {
            label: "Teste2",
          },
          {
            label: "Teste3",
          },
          {
            label: "Teste4",
          },
        ]}
      />
      <Header />
      <Main />
    </ProviderComics>
  );
};

export default App;
