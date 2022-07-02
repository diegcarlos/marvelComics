import styled from "styled-components";

export const Container = styled.input`
  width: 400px;
  padding: 10px;
  outline: none;
  position: fixed;
  top: 6rem;
  left: calc((100vw - 400px) / 2);
  z-index: 20;
  color: var(--text-secondary);
  font-size: 1rem;
  font-style: italic;
  border-radius: 6px;
  border: none;
  box-shadow: 2px 2px 2px var(--shadow);
`