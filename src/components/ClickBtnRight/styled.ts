import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  min-width: 100%;
  z-index:1;
  min-height: 100vh;
  flex-wrap: wrap;
  justify-content: center;
`

export const Menu = styled.div<{ position: { left: number, top: number, } }>`
  position: absolute;
  font-size: 15px;
  margin-left: ${(props) => (`${props.position.left}px`)};
  margin-top: ${(props) => (`${props.position.top}px`)};
  
  ul {
    padding: 0;
    li {
      background:#f8f8f8;
      list-style: none;
      padding: 10px;
      width: 100px;
      border-bottom: 1px solid #eee;
      cursor:pointer;

      a {
        text-decoration: none;
        color: #000000;
      }

      &:hover {
        background:#eee;
      }
    }
  }
`