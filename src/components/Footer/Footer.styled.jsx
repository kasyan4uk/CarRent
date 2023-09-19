import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  height: 150px;
  padding-top: 10px;
  margin: auto;
  background-color: #1C1C1C;
`;

export const Logo = styled.img`
    height: 50px;
`;

export  const Author = styled(Link)`
    color: #FFF;
    font-family: Raleway;
    font-size: 15px;
    font-weight: 500;
`