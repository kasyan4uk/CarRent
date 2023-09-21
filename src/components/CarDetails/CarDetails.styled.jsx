import styled from 'styled-components';

export const ModalBlock = styled.div`
  position: relative;
  background-color: #FFFFFF;
  border-radius: 24px;
`;

export const CarImg = styled.img`
  display: block;
  max-width: 100%;
  width: 461px;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
`;

export const HeadInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  margin-top: 14px;
  margin-bottom: 8px;
  line-height: 24px;
`;

export const CarInfo = styled.ul`
  display: flex;
  width: 100%;
  gap: 5px;
`;

export const CarName = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #121417;
  font-size: 16px;
  line-height: 24px;
`;

export const CarNameBlue = styled.div`
  color: #3470ff;
  font-size: 16px;
`;

export const ExtraInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 300px;
  color: rgba(18, 20, 23, 0.5);
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  gap: 6px;
  margin-bottom: 14px;
`;

export const ExtraInfoText = styled.div`
  color: rgba(18, 20, 23, 0.5);
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  border-right: 1px solid rgba(18, 20, 23, 0.2);
  padding-right: 3px;

  &:last-child {
    border-right: none;
  }
`;

export const CarDescription = styled.p`
  color: #121417;
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const AccessoriesBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
`;

export const AccessoriesTitle = styled.p`
  color: #121417;
  font-size: 14px;
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 8px;
`;

export const AccessoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: rgba(18, 20, 23, 0.5);

  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  gap: 6px;
`;

export const AccessoryListItem = styled.li`
  color: rgba(18, 20, 23, 0.5);
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  border-right: 1px solid rgba(18, 20, 23, 0.2);
  padding-right: 4px;

  &:last-child {
    border-right: none;
  }
`;

export const RentalBlock = styled.div`
  padding: 0;
  margin: 0;
`;

export const RentalTitle = styled.p`
  margin-bottom: 8px;
  font-family: 'Manrope', sans-serif;
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;

export const RentalList = styled.ul`
  width: 380px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const RentalItem = styled.li`
  padding: 7px 10px;
  border-radius: 35px;
  background: #f9f9f9;
  color: #363535;
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  & span {
    color: #3470ff;
    font-family: 'Manrope', sans-serif;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: -0.24px;
  }
`;

export const RentButton = styled.a`
    display: block;
    padding: 12px 50px;
    height: 44px;
    width: 168px;
    border: none;
    border-radius: 12px;
    background: #3470FF;
    color: #FFFFFF;
    justify-content: center;
    align-items: center;
    font-family: 'Manrope', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    cursor: pointer;
    &:hover {
        background: #0B44CD;
    }
`;