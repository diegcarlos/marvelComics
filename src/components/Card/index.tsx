import React, { ReactNode, useState } from "react";

import { Container, Heart, TitleComic } from "./styled";

import { FaHeart, FaRegHeart } from "react-icons/fa";

interface TypesCard {
  img: string;
  title: string;
  favorite?: boolean;
  onFavorite: () => void;
}

const Card: React.FC<TypesCard> = (props) => {
  const { img, title, favorite = false, onFavorite } = props;

  const [hover, setHover] = useState(false);

  return (
    <Container
      favorite={favorite}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <Heart hover={hover || favorite} onClick={() => onFavorite()}>
        {favorite ? (
          <FaHeart color="var(--primary)" size={30} />
        ) : (
          <FaRegHeart color="#fff" size={30} />
        )}
      </Heart>
      <img src={img} alt={title} />
      <TitleComic favorite={favorite} hover={hover}>{title}</TitleComic>
    </Container>
  );
};

export default Card;
