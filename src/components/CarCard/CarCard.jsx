import { 
    CarBlock,
    CarImg, 
    CarName, 
    CarNameBlue, 
    CarPrice, CarYear, 
    MainInfoBlock, 
    CarNameBlock, 
    CarInfo, 
    CarInfoItem,
    CarButton
} from "./CarCard.styled";

function CarCard({ car }) {
    const address = car.address.split(",");
    const city = address[1];
    const country = address[2];

    const funcCut = () => {
        const func = car.functionalities[0];
        const maxLengtx = 10;
        if (func.length > maxLengtx) {
            return func.slice(0,10) + "..."
        } else {
            return func
        }
    }

    const rentCut = () => {
        const func = car.rentalCompany;
        const maxLengtx = 10;
        if (func.length > maxLengtx) {
            return func.slice(0,10) + "..."
        } else {
            return func
        }
    }


    return(
        <CarBlock>
            <CarImg src={car.img}/>
            <MainInfoBlock>
                <CarNameBlock>
                    <CarName>{car.make}</CarName>
                    <CarNameBlue>{car.model}<span style={{ color: '#121417' }}>,</span></CarNameBlue>
                    <CarYear>{car.year}</CarYear>
                </CarNameBlock>
                <CarPrice>{car.rentalPrice}</CarPrice>
            </MainInfoBlock>
            <CarInfo>
                <CarInfoItem>{city}</CarInfoItem>
                <CarInfoItem>{country}</CarInfoItem>
                <CarInfoItem>{rentCut()}</CarInfoItem>
                <CarInfoItem>{car.type}</CarInfoItem>
                <CarInfoItem>{car.make}</CarInfoItem>
                <CarInfoItem>{car.mileage}</CarInfoItem>
                <CarInfoItem>{funcCut()}</CarInfoItem>
            </CarInfo>
            <CarButton>Learn more</CarButton>
        </CarBlock>
        
    )
}

export default CarCard;