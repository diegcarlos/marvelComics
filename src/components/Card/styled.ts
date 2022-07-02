import styled from "styled-components";

export const Container = styled.div<{ favorite: boolean }>`
  position: relative;
  width: ${(props) => (props.favorite ? "190px" : "200px")};
  height: ${(props) => (props.favorite ? "290px" : "300px")};
  margin: 10px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  border: ${(props) => (props.favorite ? "5px solid var(--primary);" : null)};

  &:hover {
    img {
      filter: brightness(0.25) opacity(0.75);
    }
  }
`;

export const Heart = styled.div<{ hover: boolean }>`
  position: absolute;
  z-index: 19;
  display: ${(props) => (props.hover ? "flex" : "none")};
  margin-top: 15px;
  margin-right: 15px;
  top: 0;
  right: 0;
`;

export const TitleComic = styled.div<{ hover: boolean, favorite: boolean }>`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  display: ${(props) => (props.hover ? "flex" : "none")};
  align-items: center;
  padding: 10px;
  font-weight: bold;
  font-size: 14px;
  border-bottom: 5px solid var(--primary);
  width: ${(props) => (props.favorite ? "170px" : "180px")};
  background-color: #fff;
`;
