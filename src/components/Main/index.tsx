import React from "react";
import Card from "../Card";

import { ThreeDots } from "react-loading-icons";

import { Button, Container, Pagination } from "./styled";

import { useMarvelComics } from "../../context/useMarvelComics";

const Main: React.FC = () => {
  const {
    loading,
    comics,
    favoriteComics,
    offset,
    handleFavorite,
    handleNextPage,
    handlePreviousPage,
  } = useMarvelComics();
  return (
    <>
      <Container>
        {loading ? (
          <ThreeDots style={{ margin: "300px" }} x1={1} />
        ) : (
          comics?.map((data, index) => {
            const idFavorite = favoriteComics.find((id) => id === data.id);

            data.favorite = idFavorite ? true : false;
            return (
              
                <Card
                onFavorite={() => handleFavorite(data.id, index)}
                favorite={data.favorite}
                key={data.id}
                img={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                title={data.title}
              />
            );
          })
        )}

        <Pagination>
          <Button
            disabled={offset <= 0}
            onClick={() => handlePreviousPage(offset - 1)}
          >
            PREVIOUS PAGE
          </Button>
          <Button onClick={() => handleNextPage(offset + 1)}>NEXT PAGE</Button>
        </Pagination>
      </Container>
    </>
  );
};

export default Main;
