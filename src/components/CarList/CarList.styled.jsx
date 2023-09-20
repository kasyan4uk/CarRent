import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  height: auto;
  margin: auto;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ContainerCard = styled.div`
  max-width: 1440px;
  height: auto;
  margin: auto;
  margin-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
  justify-content: center;
`;

export const LoadMore = styled.button`
   border: none;
   background-color: inherit;
   font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    text-decoration-line: underline;
    cursor: pointer;
    color: #3470FF;
    &:hover {
        color: #0B44CD;
    }

`;

