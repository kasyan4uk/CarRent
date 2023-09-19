import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  padding-top: 45px;
  margin: auto;
  background-color: #F7F7F7;
  padding-bottom: 45px;
`;

export const CardContainer = styled.div`
    padding-top: 45px;
    display: flex;
    flex-wrap: wrap;
    gap: 65px;
    justify-content: space-between;
`

export const AdventureContainer = styled.div`
    width: 1080px;
    margin: auto;
`

export const AdventureTitle = styled.h2`
    color: #000;
    font-family: Montserrat;
    font-size: 38px;
    font-weight: 700;
`;

export const AdventureSubtitle = styled.p`
    color: #FF4D00;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
`;

export const AdventureCard = styled.div`
    width: 465px;
    height: 272px;
    padding-top: 30px;
    background-color: #F7F7F7;
    filter: drop-shadow(4px 4px 4px #FF4D00);

`;

export const CardTitle = styled.h2`
    color: #000;
    text-align: center;
    font-family: Merriweather;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const CardInfo = styled.div`
    margin-top: 35px;
    display: flex;
    justify-content: space-around;
`

export const CardList = styled.ul`
`;

export const CardItem = styled.li`
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    color: #333;
    font-family: Raleway;
    font-size: 12px;
    font-weight: 700;
    
`;

export const CardImg = styled.img`
    width: 220px;
`;

