import React from "react";

import { Container } from "./styled";

import expect from "lodash.debounce";

import { useMarvelComics } from "../../context/useMarvelComics";

const Search: React.FC = () => {
  const { handlesearchComics } = useMarvelComics();

  const onChange = expect(
    ({ target }) => handlesearchComics(target.value),
    500
  );

  return <Container onChange={onChange} />;
};

export default Search;
