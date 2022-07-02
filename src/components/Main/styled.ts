import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 160px;
  margin-left: 100px;
  margin-right: 100px;
`;

export const Pagination = styled.div` 
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;

`;

export const Button = styled.button`
  color: var(--primary);
  font-weight: bold;
  height: 45px;
  font-size: 18px;
  padding: 5px 10px 5px 10px;
`;