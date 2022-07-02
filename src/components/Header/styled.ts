import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 160px;
  top: 0;
  background-color: rgba(237, 35, 36, 0.7);
  color: var(--text-primary);
`;

export const ContainerLogo = styled.div`
  height: 100%;
`

export const ImageLogo = styled.img`
  margin-top: 1.5rem;
`;