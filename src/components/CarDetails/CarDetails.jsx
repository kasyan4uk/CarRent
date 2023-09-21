import {
  ModalBlock,
  CarImg,
  HeadInfo,
  CarInfo,
  CarName,
  CarNameBlue,
  ExtraInfo,
  ExtraInfoText,
  AccessoriesBlock,
  AccessoriesTitle,
  CarDescription,
  AccessoryList,
  AccessoryListItem,
  RentalTitle,
  RentalItem,
  RentalList,
  RentalBlock,
  RentButton,
} from './CarDetails.styled';

export default function CarDetails({ car, city, country }) {

  const rentalConditionsSplit  = car.rentalConditions.split('\n', 3);
  const firstConditionLine  = rentalConditionsSplit [0];
  const extractedNumber  = parseInt(firstConditionLine .match(/\d+/)[0], 10);

  const handlePhoneCall = () => {
    window.location.href = 'tel:+380730000000';
};

  return (
    <ModalBlock>
      <CarImg src={car.img} alt={car.make} />
      <>
        <HeadInfo>
          <CarInfo>
            <CarName>{car.make}</CarName>
            <CarNameBlue>
              {car.model}
              <span style={{ color: 'black' }}>,</span>
            </CarNameBlue>
            <CarName>{car.year}</CarName>
          </CarInfo>
        </HeadInfo>
        <ExtraInfo>
          <ExtraInfoText>{city}</ExtraInfoText>
          <ExtraInfoText>{country}</ExtraInfoText>
          <ExtraInfoText>id: {car.id}</ExtraInfoText>
          <ExtraInfoText>Year: {car.year}</ExtraInfoText>
          <ExtraInfoText>Type: {car.type}</ExtraInfoText>
          <ExtraInfoText>
            Fuel Consumption: {car.fuelConsumption}
          </ExtraInfoText>
          <ExtraInfoText>Engine Size: {car.engineSize}</ExtraInfoText>
        </ExtraInfo>
        <CarDescription>{car.description}</CarDescription>
        <AccessoriesBlock>
          <AccessoriesTitle>Accessories and functionalities:</AccessoriesTitle>
          <AccessoryList>
            {car.accessories.map((accessory, index) => (
              <AccessoryListItem key={index}>{accessory}</AccessoryListItem>
            ))}
            {car.functionalities.map((functionality, index) => (
              <AccessoryListItem key={index}>{functionality}</AccessoryListItem>
            ))}
          </AccessoryList>
        </AccessoriesBlock>
        <RentalBlock>
          <RentalTitle>Rental Conditions:</RentalTitle>
          <RentalList>
            <RentalItem>
              Minimum age: <span>{extractedNumber }</span>
            </RentalItem>
            <RentalItem>{rentalConditionsSplit[1]}</RentalItem>
            <RentalItem>{rentalConditionsSplit[2]}</RentalItem>
            <RentalItem>
              Mileage: <span>{car.mileage.toLocaleString('en-EN')}</span>
            </RentalItem>
            <RentalItem>
              Price: <span>{car.rentalPrice}</span>
            </RentalItem>
          </RentalList>
          <RentButton onClick={handlePhoneCall}>Rental car</RentButton>
        </RentalBlock>
      </>
    </ModalBlock>
  );
}