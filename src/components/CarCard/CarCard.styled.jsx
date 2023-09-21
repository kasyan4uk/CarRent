import styled from "styled-components";
import FavoriteDisable from "../../img/normal.svg";
import FavoriteActive from "../../img/active.svg";

export const CarBlock = styled.div`
    position: relative;
    width: 274px;
    height: 426px;
`;

export const CarImg = styled.img`
    object-fit: cover;
    height: 268px;
    border-radius: 14px;
`;

export const MainInfoBlock = styled.div`
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
`

export const CarNameBlock = styled.div`
    display: flex;
`

export const CarName = styled.p`
    padding-right: 5px;
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    color: #121417;
`;

export const CarNameBlue = styled.p`
    padding-right: 5px;
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    color: #3470FF;
`;

export const CarYear = styled.p`
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
`;

export const CarPrice = styled.p`
    padding-right: 9px;
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
`;

export const CarInfo = styled.ul`
    padding-top: 8px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 274px;
    gap: 6px;
`;

export const CarInfoItem = styled.li`
    padding-right: 4px;
    color: rgba(18, 20, 23, 0.5);
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    border-right: 1px solid rgba(18, 20, 23, 0.3);
    &:last-child {
    border-right: none;
  }
`;

export const CarButton = styled.button`
    margin-top: 28px;
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    width: 100%;
    height: 44px;
    border-radius: 12px;
    background-color: #3470FF;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
    &:hover {
        background: #0B44CD;
    }
`;

export const FavoriteButton = styled.button`
    position: absolute;
    top: 14px;
    right: 14px;
    height: 18px;
    width: 18px;
    border: none;
    background-color: inherit;
    cursor: pointer;
`;

export const DisableFavoriteButton = styled.div`
  background-image: url(${FavoriteDisable});
  width: 18px;
  height: 18px;
`;

export const ActiveFavoriteButton = styled.div`
  background-image: url(${FavoriteActive});
  width: 18px;
  height: 18px;
`;